import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

// If you don't have "@/..." alias, change to "../../../lib/withTimeout" and "../../../lib/rateLimit"
import { withTimeout } from "@/lib/withTimeout";
import { rateLimit } from "@/lib/rateLimit";

import type {
  ChatCompletionMessageParam,
  ChatCompletionCreateParamsNonStreaming,
} from "openai/resources/chat/completions";

export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

const pretty = (file: string) =>
  file
    .replace(/\.md$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());

export async function POST(req: NextRequest) {
  try {
    // --- rate limit ---
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "local";
    if (!rateLimit(String(ip))) {
      return NextResponse.json(
        { reply: "Too many requests. Please try again in a moment." },
        { status: 429 }
      );
    }

    // --- input ---
    const { messages } = (await req.json()) as {
      messages: { role: "user" | "bot" | "loading"; text: string }[];
    };
    const last = messages?.[messages.length - 1]?.text ?? "";
    if (!last || last.trim().length < 3) {
      return NextResponse.json({
        reply: "Could you phrase that a bit more?",
        suggestions: [
          { label: "What projects have you built?", type: "action" },
          { label: "Show resume", type: "article", slug: "resume" },
        ],
      });
    }

    // --- embed & retrieve with timeouts ---
    const emb = await withTimeout(
      openai.embeddings.create({
        model: "text-embedding-3-small",
        input: last,
      }),
      8000
    );

    const results = await withTimeout(
      pc.index("portfolio").query({
        vector: emb.data[0].embedding,
        topK: 5,
        includeMetadata: true,
      }),
      8000
    );

    const matches = results.matches ?? [];
    const context = matches
      .map((m) => `From ${m.metadata?.file}:\n${m.metadata?.snippet}`)
      .join("\n\n");

    if (!matches.length) {
      return NextResponse.json({
        reply:
          "I didn’t find anything in my portfolio related to that. Try asking about my projects, resume, or blog posts.",
        suggestions: [
          { label: "Show resume", type: "article", slug: "resume" },
          { label: "Recommender System Deep Dive", type: "article", slug: "recommender-system" },
          { label: "What’s your current stack?", type: "action" },
        ],
      });
    }

    // --- history typed correctly ---
    const chatHistory: ChatCompletionMessageParam[] = messages.map((m) => ({
      role: m.role === "user" ? "user" : "assistant",
      content: m.text,
    }));

    // --- NON-STREAMING params typed explicitly ---
    const params: ChatCompletionCreateParamsNonStreaming = {
      model: "gpt-4o-mini",
      stream: false, // <-- forces non-stream overload
      messages: [
        {
          role: "system",
          content: `You are Ayham, the portfolio owner.
Speak in the first person ("I built...", "I researched...").
Only answer questions about my projects, résumé, or blog posts.
If the input is unclear or irrelevant, reply with:
"I'm not sure what you mean. Could you ask me about my work or projects?"`,
        },
        ...chatHistory,
        { role: "user", content: `${last}\n\nContext:\n${context}` },
      ],
    };

    const completion = await withTimeout(
      openai.chat.completions.create(params),
      12000
    );

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ?? "…";

    // suggestions from matches
    const fileChips = matches
      .map((m) => m.metadata?.file as string | undefined)
      .filter(Boolean)
      .slice(0, 3)
      .map((file) => ({
        label: pretty(file!),
        type: "article" as const,
        slug: file!.replace(/\.md$/i, ""),
      }));

    const suggestions = [
      ...fileChips,
      { label: "What projects have you built?", type: "action" as const },
    ].slice(0, 6);

    return NextResponse.json({ reply, suggestions });
  } catch (err) {
    console.error("chat route error:", err);
    return NextResponse.json(
      { reply: "⚠️ Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

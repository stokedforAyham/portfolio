import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
// If you don't use "@/..." aliases, change the next line to:
// import { withTimeout } from "../../../../lib/withTimeout";
import { withTimeout } from "@/lib/withTimeout";

export const runtime = "nodejs";

type Suggestion = { label: string; type: "action" | "article"; slug?: string };

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

const pretty = (file: string) =>
  file.replace(/\.md$/i, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as {
      messages: { role: "user" | "bot" | "loading"; text: string }[];
    };

    const last = messages?.[messages.length - 1]?.text ?? "";

    if (!last || last.trim().length < 3) {
      const suggestions: Suggestion[] = [
        { label: "What projects have you built?", type: "action" },
        { label: "Show resume", type: "article", slug: "resume" },
      ];
      return NextResponse.json({ suggestions });
    }

    const emb = await withTimeout(
      openai.embeddings.create({ model: "text-embedding-3-small", input: last }),
      8000
    );

    const results = await withTimeout(
      pc.index("portfolio").query({
        vector: emb.data[0].embedding,
        topK: 8,
        includeMetadata: true,
      }),
      8000
    );

    const matches = results.matches ?? [];

    // Unique article chips (dedupe multiple chunks from the same file)
    const slugsSeen = new Set<string>();
    const fileChips: Suggestion[] = [];
    for (const m of matches) {
      const file = (m.metadata?.file as string | undefined) || "";
      if (!file) continue;
      const slug = file.replace(/\.md$/i, "");
      if (slugsSeen.has(slug)) continue;
      slugsSeen.add(slug);
      fileChips.push({ label: pretty(file), type: "article", slug });
      if (fileChips.length >= 3) break;
    }

    // Merge + final dedupe + cap
    const raw: Suggestion[] = [
      ...fileChips,
      { label: "What projects have you built?", type: "action" },
    ];

    const seenKeys = new Set<string>();
    const suggestions = raw
      .filter((s) => {
        const key = `${s.type}:${s.slug ?? s.label}`;
        if (seenKeys.has(key)) return false;
        seenKeys.add(key);
        return true;
      })
      .slice(0, 6);

    return NextResponse.json({ suggestions });
  } catch {
    const suggestions: Suggestion[] = [
      { label: "What projects have you built?", type: "action" },
      { label: "Show resume", type: "article", slug: "resume" },
    ];
    return NextResponse.json({ suggestions });
  }
}

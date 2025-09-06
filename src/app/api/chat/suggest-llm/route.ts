import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
// If you don't use "@/..." alias, switch this import to: "../../../../lib/withTimeout"
import { withTimeout } from "@/lib/withTimeout";

import type {
  ChatCompletionCreateParamsNonStreaming,
} from "openai/resources/chat/completions";

export const runtime = "nodejs";

type Chip = { label: string; type: "action" | "article"; slug?: string };

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

const pretty = (file: string) =>
  file.replace(/\.md$/i, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

function clampLabel(s: string, n = 30) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";
}
function dedupeCapsCap(list: Chip[], cap = 6): Chip[] {
  const seen = new Set<string>();
  const out: Chip[] = [];
  for (const c of list) {
    const key = `${c.type}:${c.slug ?? c.label}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ ...c, label: clampLabel(c.label) });
    if (out.length >= cap) break;
  }
  return out;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as {
      messages: { role: "user" | "bot" | "loading"; text: string }[];
    };

    const last = messages?.[messages.length - 1]?.text ?? "";
    const safeDefault: Chip[] = [
      { label: "What Projects Have You Built?", type: "action" },
      { label: "Open Resume", type: "article", slug: "resume" },
    ];
    if (!last || last.trim().length < 3) {
      return NextResponse.json({ suggestions: safeDefault });
    }

    // Grounding: retrieve top docs (unique by slug)
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

    const seenSlugs = new Set<string>();
    const topDocs: Array<{ slug: string; title: string }> = [];
    for (const m of results.matches ?? []) {
      const file = (m.metadata?.file as string | undefined) || "";
      if (!file) continue;
      const slug = file.replace(/\.md$/i, "");
      if (seenSlugs.has(slug)) continue;
      seenSlugs.add(slug);
      topDocs.push({ slug, title: pretty(file) });
      if (topDocs.length >= 4) break;
    }

    const sys = `
You are a portfolio assistant for Ayham. Propose short, high-signal follow-up chips for the next turn.

RULES:
- Return strict JSON: {"suggestions":[{ "label": string, "type":"action"|"article", "slug"?: string }]}
- Produce 3–6 chips total.
- Prefer 1–2 "article" chips that map to provided topDocs (use their slug EXACTLY).
- The rest are "action" chips: concrete next questions about projects, résumé, blog posts, stack, evaluation, results.
- Label: Title Case, ≤ 30 chars, no trailing punctuation.
- Do not explain your reasoning. Do not include any text outside the JSON.
- Do not explain your reasoning. Do not include any text outside the JSON.
- No duplicates. No generic fluff ("Tell me more"). Stay on Ayham’s portfolio.`;

    const usr = {
      lastMessage: last,
      priorTurns: messages.slice(-2).map((m) => ({ role: m.role, text: m.text })),
      topDocs, // e.g. [{ slug:"resume", title:"Resume" }]
    };

    const params: ChatCompletionCreateParamsNonStreaming = {
      model: "gpt-4o-mini",
      stream: false,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: sys.trim() },
        { role: "user", content: JSON.stringify(usr) },
      ],
    };

    const completion = await withTimeout(
      openai.chat.completions.create(params),
      12000
    );

    let suggestions: Chip[] = [];
    try {
      const raw = completion.choices?.[0]?.message?.content ?? "{}";
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.suggestions)) {
        for (const s of parsed.suggestions) {
          if (!s || typeof s.label !== "string") continue;
          if (s.type !== "action" && s.type !== "article") continue;
          if (s.type === "article" && typeof s.slug !== "string") continue;
          suggestions.push({ label: s.label, type: s.type, slug: s.slug });
        }
      }
    } catch {
      // fall back to defaults
    }

    if (!suggestions.length) suggestions = safeDefault;
    suggestions = dedupeCapsCap(suggestions, 6);

    return NextResponse.json({ suggestions });
  } catch {
    return NextResponse.json({
      suggestions: [
        { label: "What Projects Have You Built?", type: "action" },
        { label: "Open Resume", type: "article", slug: "resume" },
      ],
    });
  }
}

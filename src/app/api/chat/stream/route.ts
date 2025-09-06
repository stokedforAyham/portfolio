import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
// If you don't use "@/..." aliases, change the import below to: "../../../../lib/withTimeout"
import { withTimeout } from "@/lib/withTimeout";

import type {
    ChatCompletionMessageParam,
    ChatCompletionCreateParamsStreaming,
} from "openai/resources/chat/completions";

export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

export async function POST(req: NextRequest) {
    try {
        const { messages } = (await req.json()) as {
            messages: { role: "user" | "bot" | "loading"; text: string }[];
        };

        const last = messages?.[messages.length - 1]?.text ?? "";
        if (!last || last.trim().length < 3) {
            return new NextResponse("Could you phrase that a bit more?", {
                headers: { "Content-Type": "text/plain; charset=utf-8" },
            });
        }

        // 1) Embed & retrieve context (with timeouts)
        const emb = await withTimeout(
            openai.embeddings.create({ model: "text-embedding-3-small", input: last }),
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

        // 2) Build correctly typed chat history
        const chatHistory: ChatCompletionMessageParam[] = messages.map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
        }));

        // 3) Explicit streaming params to force the streaming overload
        const params: ChatCompletionCreateParamsStreaming = {
            model: "gpt-4o-mini",
            stream: true,
            messages: [
                {
                    role: "system",
                    content:
                        `You are Ayham, the portfolio owner. 
Speak in the first person ("I built...", "I researched..."). 
Always consider short concise answers unless really necessary to answer at length.
Focus only on my projects, résumé, or blog posts. 
If the input is unclear or irrelevant, say:
"I'm not sure what you mean. Could you ask me about my work or projects?"
`,
                },
                ...chatHistory,
                { role: "user", content: `${last}\n\nContext:\n${context}` },
            ],
        };

        // 4) Stream tokens
        const stream = await openai.chat.completions.create(params);

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of stream) {
                        // chunk is ChatCompletionChunk; choices[0].delta.content is the token delta
                        const delta = chunk.choices?.[0]?.delta?.content;
                        if (delta) controller.enqueue(encoder.encode(delta));
                    }
                } catch {
                    controller.enqueue(encoder.encode("\n[stream error]"));
                } finally {
                    controller.close();
                }
            },
        });

        return new NextResponse(readable, {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    } catch {
        return new NextResponse("⚠️ Streaming failed.", {
            status: 500,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    }
}

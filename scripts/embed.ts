import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv/config";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");
const INDEX_NAME = "portfolio";
const CHUNK = 800;
const OVERLAP = 120;

function chunkText(t: string, size = CHUNK, overlap = OVERLAP) {
  const chunks: string[] = [];
  for (let i = 0; i < t.length; i += size - overlap) {
    chunks.push(t.slice(i, i + size));
  }
  return chunks;
}

const pretty = (file: string) =>
  file.replace(/\.md$/i, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

async function main() {
  const files = await fs.readdir(CONTENT_DIR);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const full = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
    const chunks = chunkText(full);

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      const emb = await openai.embeddings.create({
        model: "text-embedding-3-small", // 1536-d
        input: chunk,
      });

      await pc.index(INDEX_NAME).upsert([
        {
          id: `${file}-${i}`,
          values: emb.data[0].embedding,
          metadata: {
            file,
            slug: file.replace(/\.md$/i, ""),
            title: pretty(file),
            pos: i,
            snippet: chunk,
          },
        },
      ]);
    }
    console.log(`Indexed ${file} (${chunks.length} chunks)`);
  }

  console.log("✅ Done.");
}

main();

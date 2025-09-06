import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Look for content/articles/<slug>.md
    const filePath = path.join(process.cwd(), "content", "articles", `${params.slug}.md`);
    const content = await fs.readFile(filePath, "utf8");

    return new NextResponse(content, {
  headers: { "Content-Type": "text/markdown" },
});

  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

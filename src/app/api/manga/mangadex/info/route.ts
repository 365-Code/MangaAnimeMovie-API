import { MANGA, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const manga = new MANGA.MangaDex();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || "";
    const data = await manga.fetchMangaInfo(id);
    return NextResponse.json({
      data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

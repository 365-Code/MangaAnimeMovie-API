import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist.Manga();
    const {searchParams} = new URL(req.url)
    const chapterId = searchParams.get('id') || "";
    const results = await anilist.fetchChapterPages(chapterId)
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
  }
}
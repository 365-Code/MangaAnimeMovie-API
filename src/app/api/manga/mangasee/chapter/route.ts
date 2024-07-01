import { MANGA } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const manga = new MANGA.Mangasee123()
    const { searchParams } = new URL(req.url);
    const chapterId = searchParams.get("id") || "";
    const data = await manga.fetchChapterPages(chapterId)
    return NextResponse.json({
      data
    })
  } catch (error: any) {
      return NextResponse.json(
        {error: error.message },
        { status: 500 },
      );
  }
}
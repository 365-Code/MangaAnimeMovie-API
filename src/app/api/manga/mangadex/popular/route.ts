import { MANGA, META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const manga = new MANGA.MangaDex()
    const {results} = await manga.fetchPopular()
    return NextResponse.json({
      data: results
    })
  } catch (error: any) {
      return NextResponse.json(
        {error: error.message },
        { status: 500 },
      );
  }
}
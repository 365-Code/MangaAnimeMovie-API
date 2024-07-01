import { MANGA } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const manga = new MANGA.Mangasee123()
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";
    const data = await manga.search(query)
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
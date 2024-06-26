import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('query') || "";
    const results = await anilist.advancedSearch(query, "MANGA");

    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
  }
}
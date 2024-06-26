import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const movie = new META.TMDB();
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('query') || "";
    const results = await movie.fetchTrending("movie")

    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
  }
}
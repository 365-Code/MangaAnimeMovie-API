import { META, MOVIES } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const movie = new META.TMDB();
    const results = await movie.fetchTrending("all");
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ msg: error.message || error }, { status: 500 });
  }
}

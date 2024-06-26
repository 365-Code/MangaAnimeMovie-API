import { MOVIES } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const movie = new MOVIES.FlixHQ();
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id') || "";
    const results = await movie.fetchMediaInfo(id)
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
  }
}
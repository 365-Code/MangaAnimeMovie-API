import { MOVIES } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

async function getInfo(id: string, retries: number = 3) {
  try {
    const movie = new MOVIES.MovieHdWatch();
    const results = await movie.fetchMediaInfo(id);
    console.log(results);
    
    return NextResponse.json(
      { data: results },
      { status: 200 }
    );
  } catch (error: any) {
    if (retries === 0)
      return NextResponse.json({ error: error.message }, { status: 500 });
    return getInfo(id, retries - 1);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") || "";
  return getInfo(id);
}

import { MOVIES } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

async function getSearchResults(query: string, retries: number = 3) {
  try {
    const movie = new MOVIES.FlixHQ();
    const { results, hasNextPage, totalPages, totalResults } =
      await movie.search(query);
    return NextResponse.json(
      { data: results, hasNextPage, totalPages, totalResults },
      { status: 200 }
    );
  } catch (error: any) {
    if (retries === 0)
      return NextResponse.json({ error: error.message }, { status: 500 });
    return getSearchResults(query, retries - 1);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  return getSearchResults(query);
}

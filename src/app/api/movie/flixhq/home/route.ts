import { MOVIES } from "flixhq-core";
import { NextRequest, NextResponse } from "next/server";

async function getHome(retries: number = 3) {
  try {
    const movie = new MOVIES.FlixHQ();
    const results = await movie.home();
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
    if (retries === 0)
      return NextResponse.json({ error: error.message }, { status: 500 });
    return getHome(retries - 1);
  }
}

export async function GET(req: NextRequest) {
  return getHome();
}

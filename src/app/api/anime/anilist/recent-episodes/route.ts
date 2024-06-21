import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const {results} = await anilist.fetchRecentEpisodes();

    return NextResponse.json({  data: results }, { status: 200 });
  } catch (error: any) {
      return NextResponse.json(
        {  error: error.message },
        { status: 500 },
      );
  }
}
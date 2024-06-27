import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const perPage = Number(searchParams.get("perPage") || 20);

    const { results: latest } = await anilist.advancedSearch(
      undefined,
      "MANGA",
      page,
      perPage,
      undefined,
      ["UPDATED_AT_DESC"]
    );

    const { results: trending } = await anilist.advancedSearch(
      undefined,
      "MANGA",
      page,
      perPage,
      undefined,
      ["TRENDING_DESC"]
    );

    const { results: popular } = await anilist.advancedSearch(
      undefined,
      "MANGA",
      page,
      perPage,
      undefined,
      ["UPDATED_AT_DESC", "POPULARITY_DESC", "TRENDING_DESC"]
    );

    return NextResponse.json(
      { data: { latest, trending, popular } },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 20;
    const { data, currentPage, hasNextPage, totalPages } =
      await anilist.advancedSearch(
        undefined,
        "ANIME",
        Number(page),
        Number(perPage),
        "MOVIE",
        ["TRENDING_DESC"],
      );
    return NextResponse.json(
      { hasNextPage, currentPage, totalPages, data },
      { status: 200 },
    );
  } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
  }
}
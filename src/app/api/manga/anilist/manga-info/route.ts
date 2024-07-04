import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist.Manga();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || "";
    const results = await anilist.fetchMangaInfo(id, {
      "Access-Control-Allow-Origin": "*" ,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    })
    return NextResponse.json({ data: results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

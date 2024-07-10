import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";
    const type: "movie" | "tv" = searchParams.get("type") as "movie" | "tv";
    const response = await fetch(
      `${process.env.TMDB_API_URL}/search/${type}?query=${query}`,
      {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.TMDB_API_KEY || "",
        }
      }
    );
    const data = await response.json();
    console.log(data);
    return NextResponse.json({
      data,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      msg: error.msg,
      error: error
    });
  }
}

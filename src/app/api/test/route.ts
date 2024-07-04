import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || "";
    const response = await fetch(
      `${process.env.mangaURI}?id=${id}`
    );

    const { data } = await response.json();
    return NextResponse.json({
      data,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

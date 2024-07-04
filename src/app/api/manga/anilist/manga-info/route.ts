// import { META } from "@consumet/extensions";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const anilist = new META.Anilist.Manga();
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id") || "";
//     const results = await anilist.fetchMangaInfo(id)
//     return NextResponse.json({ data: results }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


// pages/api/example.js

import { META } from '@consumet/extensions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const anilist = new META.Anilist.Manga();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || "";
    const results = await anilist.fetchMangaInfo(id);
    req.headers.set('Access-Control-Allow-Origin', '*');
    req.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    req.headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    const response = NextResponse.json({ data: results }, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

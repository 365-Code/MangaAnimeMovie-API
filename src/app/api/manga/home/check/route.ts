import { META } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){
    try {
        const manga = new META.Anilist.Manga();
        const {searchParams} = new URL(req.url)
        const chapterId = searchParams.get("id") || "";
        const result = await manga.fetchChapterPages(chapterId);
        return NextResponse.json({
            data: result
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}
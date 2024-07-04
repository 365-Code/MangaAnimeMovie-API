import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Using the example id of "30013" and the query of "mangareader"
  const url = "https://api.consumet.org/meta/anilist-manga/info/152128";
  try {
    console.log(url + new URLSearchParams({provider: "mangareader"}));
    
    const response = await fetch(
      url + new URLSearchParams({ provider: "mangareader" })
    );
    const data = response;
    // const data = await response.json();
    console.log(data);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

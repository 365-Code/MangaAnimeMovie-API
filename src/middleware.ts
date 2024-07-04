import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin") ?? "*";

//   if (allowedOrigins.includes(origin)) {
//     return NextResponse.next().headers.set(
//       "Access-Control-Allow-Origin",
//       origin
//     );
//   }

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      headers: {
        "Access-Control-Allow-Origin": origin ,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  return NextResponse.next();
}

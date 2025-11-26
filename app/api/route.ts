import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // You can read query params if needed
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());

  return NextResponse.json({
    message: "Hello, from Backend!",
    data: params,
  });
}

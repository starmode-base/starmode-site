import { createTokenRequest } from "@/lib/ably-lib";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);

  const tokenRequest = await createTokenRequest();

  return NextResponse.json(tokenRequest);
}

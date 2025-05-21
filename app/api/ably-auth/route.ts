import { createTokenRequest } from "@/lib/ably-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);
  const clientId = "123";

  const tokenRequest = await createTokenRequest(clientId);

  return NextResponse.json(tokenRequest);
}

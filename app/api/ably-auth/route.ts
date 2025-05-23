import { createTokenRequest } from "@/lib/ably-lib";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);

  // TODO: make clientID dynamic
  const clientId = "123";

  const tokenRequest = await createTokenRequest(clientId);

  return NextResponse.json(tokenRequest);
}

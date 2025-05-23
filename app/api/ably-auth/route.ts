import { createTokenRequest } from "@/lib/ably-lib";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("body", body);

  // TODO: make clientID dynamic
  const clientId = "123";

  const tokenRequest = await createTokenRequest(clientId);

  return NextResponse.json(tokenRequest);
}

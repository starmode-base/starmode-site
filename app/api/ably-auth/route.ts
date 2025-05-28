import { createTokenRequest } from "@/lib/ably-lib";
import { getTabId } from "@/lib/tab-id";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("request", request);

  // TODO: make clientID dynamic
  const clientId = getTabId();

  const tokenRequest = await createTokenRequest(clientId);

  return NextResponse.json(tokenRequest);
}

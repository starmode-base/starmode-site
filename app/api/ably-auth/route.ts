import { createTokenRequest } from "@/lib/ably-lib";
import { NextResponse } from "next/server";

export async function POST() {
  const tokenRequest = await createTokenRequest();

  return NextResponse.json(tokenRequest);
}

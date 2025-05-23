import { NextResponse } from "next/server";
import { ensureEnv } from "@/lib/env-client";
import { z } from "zod"; // Assuming you're using Zod for validation
import { publishNotifyUI } from "@/lib/ably-lib";

// Define your Zod schema - adjust according to your actual schema
const VapiNavigateTransactionsBody = z.object({
  message: z.object({
    //     assistant: z.object({
    //       metadata: z.object({
    //         tabId: z.string(),
    //       }),
    //     }),
    toolCalls: z.array(
      z.object({
        id: z.string(),
        function: z.object({
          arguments: z.object({
            emailContent: z.string(),
          }),
        }),
      }),
    ),
  }),
});

export async function POST(request: Request) {
  // Verify the Vapi secret
  if (request.headers.get("x-vapi-secret") !== ensureEnv("VAPI_SECRET")) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Parse request body
  const body = await request.json();

  try {
    const parsed = VapiNavigateTransactionsBody.parse(body);
    // const tabId = parsed.message.assistant.metadata.tabId;
    const [toolCall] = parsed.message.toolCalls;

    console.log("toolCall", toolCall);

    // Publish to tab
    await publishNotifyUI("123", "navigate");

    // Return success response
    return NextResponse.json({
      results: [
        {
          toolCallId: toolCall?.id,
          result: "OK",
        },
      ],
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 },
    );
  }
}

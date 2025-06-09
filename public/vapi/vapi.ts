"use client";
import { ensureClientEnv } from "@/lib/env-client";
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";
import { createAssistantConfig } from "./assistant-config";

/**
 * Create a lazy singleton from a factory function
 */
export function lazySingleton<T>(factory: () => T): () => T {
  let instance: T | undefined;
  return () => {
    instance ??= factory();
    return instance;
  };
}

const getVapi = lazySingleton(() => {
  return new Vapi(ensureClientEnv("NEXT_PUBLIC_VAPI_PUBLIC_KEY"));
});

export const useVapi = (tabId: string) => {
  const vapi = getVapi();

  const [status, setStatus] = useState<
    "disconnected" | "connecting" | "connected"
  >("disconnected");

  useEffect(() => {
    // https://docs.vapi.ai/sdk/web
    vapi.on("call-start", () => {
      setStatus("connected");
    });

    vapi.on("call-end", () => {
      setStatus("disconnected");
    });
  }, [vapi]);

  const startCall = async () => {
    setStatus("connecting");
    await vapi.start(createAssistantConfig(tabId));
  };

  const endCall = () => {
    vapi.stop();
  };

  return { status, startCall, endCall };
};

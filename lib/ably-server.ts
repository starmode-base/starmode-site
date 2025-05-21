"use server";
import * as Ably from "ably";
import { ensureEnv } from "./env-client";
import { makeChannelName, publishNotifyUI } from "./ably-lib";

/**
 * Create a token request for the Ably client
 *
 * https://ably.com/docs/auth/token
 * https://ably.com/docs/auth/capabilities
 */
export const createTokenRequest = async (clientId: string) => {
  const ably = new Ably.Rest(ensureEnv("ABLY_API_KEY"));

  const tokenRequest = await ably.auth.createTokenRequest({
    clientId,
    capability: {
      [makeChannelName(clientId)]: ["subscribe"],
    },
  });

  return tokenRequest;
};

export const testPubSub = async (clientId: string, message: string) => {
  console.log("testPubSub", clientId, message);
  await publishNotifyUI(clientId, message);
};

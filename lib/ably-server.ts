"use server";
import * as Ably from "ably";
import { ensureEnv } from "./env-client";
import { makeChannelName } from "./ably-lib";

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

import * as Ably from "ably";
import { ensureEnv } from "./env-client";

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

/**
 * Generate a channel name for the viewer
 */
export const makeChannelName = (clientId: string) => {
  return `private.user.${clientId}`;
};

/**
 * Ably event name
 */
const eventName = `invalidate-cache`;

/**
 * Publish a message to the Ably 'notify-ui' channel for the 'invalidate-cache'
 * event
 *
 * https://ably.com/docs/api/rest-sdk/channels?lang=javascript#publish
 */
export function publishNotifyUI(
  clientId: string,
  data?: string,
): Promise<void> {
  const ably = new Ably.Rest(ensureEnv("ABLY_API_KEY"));

  const channel = ably.channels.get(makeChannelName(clientId));

  return channel.publish(eventName, data);
}

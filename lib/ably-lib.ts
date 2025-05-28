import * as Ably from "ably";
import { ensureEnv } from "./env-client";

/**
 * Create a token request for the Ably client
 *
 * https://ably.com/docs/auth/token
 * https://ably.com/docs/auth/capabilities
 */
export const createTokenRequest = async () => {
  const ably = new Ably.Rest(ensureEnv("ABLY_API_KEY"));

  const tokenRequest = await ably.auth.createTokenRequest({
    // TODO: Mikael, any tab can subscribe to this capability, is this correct?
    capability: {
      [makeChannelName("*")]: ["subscribe"],
    },
  });

  return tokenRequest;
};

/**
 * Generate a channel name for the viewer
 */
export const makeChannelName = (tabId: string) => {
  return `tab.${tabId}`;
};

/**
 * Ably event name
 */
// TODO: update event name
const eventName = `vapi-action`;

/**
 * Publish a message to the Ably 'notify-ui' channel for the 'vapi-action'
 * event
 *
 * https://ably.com/docs/api/rest-sdk/channels?lang=javascript#publish
 */
export function publishNotifyUI(tabId: string, data?: string): Promise<void> {
  const ably = new Ably.Rest(ensureEnv("ABLY_API_KEY"));

  const channel = ably.channels.get(makeChannelName(tabId));

  return channel.publish(eventName, data);
}

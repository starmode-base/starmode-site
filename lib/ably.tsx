"use client";
import * as Ably from "ably";
import {
  AblyMessageCallback,
  AblyProvider,
  ChannelProvider,
  useChannel,
} from "ably/react";
import { makeChannelName } from "./ably-lib";

/**
 * Ably client
 *
 * https://ably.com/docs/getting-started/react#AblyProvider
 */
const client = new Ably.Realtime({
  authUrl: "/api/ably-auth",
  authMethod: "POST",
});

/**
 * Ably React provider
 *
 * https://ably.com/docs/getting-started/react#AblyProvider
 */
export function PubSubProvider(
  props: React.PropsWithChildren<{ clientId: string }>,
) {
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={makeChannelName(props.clientId)}>
        {props.children}
      </ChannelProvider>
    </AblyProvider>
  );
}

/**
 * Subscribe to the Ably 'notify-ui' channel for the 'invalidate-cache' event
 *
 * https://ably.com/docs/getting-started/react#useChannel
 */
export function useNotifyUI(clientId: string, callback: AblyMessageCallback) {
  return useChannel(makeChannelName(clientId), callback);
}

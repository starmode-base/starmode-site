"use client";
import * as Ably from "ably";
import {
  AblyMessageCallback,
  AblyProvider,
  ChannelProvider,
  useChannel,
} from "ably/react";
import { makeChannelName } from "./ably-lib";
import { getTabId } from "./tab-id";

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
export function PubSubProvider({ children }: { children: React.ReactNode }) {
  const tabId = getTabId();
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName={makeChannelName(tabId)}>
        {children}
      </ChannelProvider>
    </AblyProvider>
  );
}

/**
 * Subscribe to the Ably 'notify-ui' channel for the 'invalidate-cache' event
 *
 * https://ably.com/docs/getting-started/react#useChannel
 */
export function useNotifyUI(tabId: string, callback: AblyMessageCallback) {
  console.log("useNotifyUI", tabId);
  return useChannel(makeChannelName(tabId), callback);
}

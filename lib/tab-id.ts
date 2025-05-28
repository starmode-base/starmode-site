"use client";
import { randomId } from "./random-id";

/**
 * Get the tab ID for the current tab
 *
 * sessionStorage is unique per browser tab, so it can be used to identify an
 * individual tab.
 *
 * The tab ID is available as long as the tab is open. It is removed when the
 * tab is closed.
 */
export function getTabId(): string {
  // Handle SSR
  if (typeof window === "undefined") return "";

  // Try to get the tab ID from sessionStorage
  let tabId = window.sessionStorage.getItem("tabId");

  if (!tabId) {
    tabId = randomId();
    window.sessionStorage.setItem("tabId", tabId);
  }

  return tabId;
}

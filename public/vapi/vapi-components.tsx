"use client";
import { Mic } from "lucide-react";
import { useVapi } from "./vapi";
import { getTabId } from "@/lib/tab-id";

export function VapiButton() {
  const { status, startCall, endCall } = useVapi(getTabId());

  const buttonStyles = {
    base: "flex items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white px-8 py-4 text-2xl font-medium shadow-md transition-all duration-300",
    connecting: "bg-gray-500",
    connected:
      "bg-emerald-600 hover:bg-emerald-700 animate-pulse border-2 border-emerald-400",
    inactive: "bg-gray-800 hover:bg-gray-700",
  };

  const getButtonClass = () => {
    if (status === "connecting")
      return `${buttonStyles.base} ${buttonStyles.connecting}`;
    if (status === "connected")
      return `${buttonStyles.base} ${buttonStyles.connected}`;
    return `${buttonStyles.base} ${buttonStyles.inactive}`;
  };

  return (
    <button
      className={getButtonClass()}
      disabled={status === "connecting"}
      onClick={() => {
        if (status === "connected") {
          endCall();
        } else {
          void startCall();
        }
      }}
    >
      {status === "connecting" ? (
        <div className="flex items-center gap-2">
          <span className="text-white">Connecting</span>
          <span className="flex space-x-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-white" />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-white"
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className="h-2 w-2 animate-bounce rounded-full bg-white"
              style={{ animationDelay: "0.4s" }}
            />
          </span>
        </div>
      ) : status === "connected" ? (
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-white" />
          <span className="text-white">AI Assistant Active</span>
          <Mic className="h-5 w-5 animate-pulse text-white" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Mic className="h-5 w-5 text-white" />
          <span className="text-white">Talk to our AI rep</span>
        </div>
      )}
    </button>
  );
}

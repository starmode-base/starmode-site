"use client";
import { Mic, Sparkles } from "lucide-react";
import { useVapi } from "./vapi";
import { getTabId } from "@/lib/tab-id";

export function VapiButton() {
  const { status, startCall, endCall } = useVapi(getTabId());

  const buttonStyles = {
    base: "flex items-center justify-center gap-3 rounded-xl border-2 border-white px-8 py-4 text-2xl font-medium shadow-md transition-all duration-300",
    connecting: "bg-gray-500",
    connected:
      "bg-emerald-600 hover:bg-emerald-700 animate-pulse border-2 border-emerald-400",
    disconnected: "bg-gray-800  hover:scale-105",
  };

  const getButtonClass = () => {
    if (status === "connecting")
      return `${buttonStyles.base} ${buttonStyles.connecting}`;
    if (status === "connected")
      return `${buttonStyles.base} ${buttonStyles.connected}`;
    return `${buttonStyles.base} ${buttonStyles.disconnected}`;
  };

  return (
    <div className="relative">
      {/* Purple glow animation wrapper */}
      {status === "disconnected" && (
        <div className="absolute -inset-2 animate-pulse rounded-xl bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 opacity-75 blur-md" />
      )}

      <button
        className={`${getButtonClass()} relative`}
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
            {/* <Mic className="h-5 w-5 text-white" /> */}
            <span className="text-white">Talk to Starmode</span>
            <Sparkles className="h-5 w-5 text-yellow-300" />
          </div>
        )}
      </button>
    </div>
  );
}

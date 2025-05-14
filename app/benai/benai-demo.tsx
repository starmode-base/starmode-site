"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const BenaiDemo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-video w-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7qGNruhM2nE"
          width="100%"
          height="100%"
          className="react-player"
          controls
          playing
        />
      </div>
    </div>
  );
};

"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const BenaiDemo = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=7qGNruhM2nE"
      width="100%"
      height="100%"
      controls
      playing
    />
  );
};

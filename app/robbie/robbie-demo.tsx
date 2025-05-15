"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const RobbieDemo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-video w-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=51SrWNq-jpE"
          width="100%"
          height="100%"
          className="react-player"
          playing={true}
        />
      </div>
    </div>
  );
};

export default RobbieDemo;

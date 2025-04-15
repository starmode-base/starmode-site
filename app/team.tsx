"use client";

import Image, { StaticImageData } from "next/image";
import { GitHubIcon, LinkedInIcon, SquareXTwitterIcon } from "./icons";

const extractUsername = (url: string) => {
  return new URL(url).pathname.toLowerCase().replace(/^\//, "");
};

export function Social(props: { url: string; icon: React.ElementType }) {
  return (
    <a href={props.url} target="_blank" className="flex items-center gap-2">
      <props.icon className="size-6" />
      <div>{extractUsername(props.url)}</div>
    </a>
  );
}

export default function Team(props: {
  name: string;
  title: string;
  description: string | React.ReactNode;
  image: StaticImageData;
  socialUrls: { x: string; linkedIn: string; gitHub: string };
}) {
  return (
    <div className="flex max-w-3xl flex-col items-center gap-10 rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 px-5 py-10 sm:mx-auto sm:flex-row sm:rounded-3xl sm:px-10">
      <Image
        src={props.image}
        alt={props.name}
        className="size-48 shrink-0 rounded-full object-cover"
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-lg font-medium">{props.name}</div>
            <div className="text-slate-800">{props.title}</div>
          </div>
          <div className="italic text-slate-800">{props.description}</div>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-4">
          <Social url={props.socialUrls.x} icon={SquareXTwitterIcon} />
          <Social url={props.socialUrls.linkedIn} icon={LinkedInIcon} />
          <Social url={props.socialUrls.gitHub} icon={GitHubIcon} />
        </div>
      </div>
    </div>
  );
}

export function TeamV2(props: {
  name: string;
  title: string;
  description: string | React.ReactNode;
  image: StaticImageData;
  socialUrls: { x: string; linkedIn: string; gitHub: string };
}) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl p-4 text-center sm:p-6">
      <Image
        src={props.image}
        alt={props.name}
        className="h-48 w-48 rounded-full object-cover shadow-md"
      />
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-900">{props.name}</div>
        <div className="text-lg text-gray-700">{props.title}</div>
      </div>
      <div className="max-w-xl text-sm text-gray-800">{props.description}</div>
      <div className="mt-4 flex flex-wrap gap-4 overflow-hidden">
        <Social url={props.socialUrls.x} icon={SquareXTwitterIcon} />
        <Social url={props.socialUrls.linkedIn} icon={LinkedInIcon} />
        <Social url={props.socialUrls.gitHub} icon={GitHubIcon} />
      </div>
    </div>
  );
}

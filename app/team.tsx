/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from "next/image";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Social(props: { url: string; icon: React.ElementType }) {
  return (
    <a href={props.url} target="_blank" className="flex items-center gap-2">
      <props.icon className="size-8" />
    </a>
  );
}

export function TeamV2(props: {
  name: string;
  title: string;
  description: string | React.ReactNode;
  image: StaticImageData;
  socialUrls: {
    bluesky?: string;
    x?: string;
    linkedIn: string;
    gitHub: string;
  };
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
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Social url={props.socialUrls.gitHub} icon={GitHubIcon} />
        <Social url={props.socialUrls.linkedIn} icon={LinkedInIcon} />
        {props.socialUrls.x ? (
          <a
            href={props.socialUrls.x}
            target="_blank"
            className="flex items-center gap-2"
          >
            <img src="/icons/x-twitter-brands.svg" alt="X" className="size-8" />
          </a>
        ) : null}
        {props.socialUrls.bluesky ? (
          <a
            href={props.socialUrls.bluesky}
            target="_blank"
            className="flex items-center gap-2"
          >
            <img
              src="/icons/bluesky-brands.svg"
              alt="Bluesky"
              className="size-8"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
}

import Image, { StaticImageData } from "next/image";
import {
  BlueskyIcon,
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
  RegularEnvelopeIcon,
  SquareEnvelopeIcon,
  XTwitterIcon,
} from "./icons";

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
    email: string;
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
          <Social url={props.socialUrls.x} icon={XTwitterIcon} />
        ) : null}
        {props.socialUrls.bluesky ? (
          <Social url={props.socialUrls.bluesky} icon={BlueskyIcon} />
        ) : null}
        <Social url={props.socialUrls.email} icon={RegularEnvelopeIcon} />
      </div>
    </div>
  );
}

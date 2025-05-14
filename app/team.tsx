import Image, { StaticImageData } from "next/image";
import {
  BlueskyIcon,
  GitHubIcon,
  LinkedInIcon,
  RegularEnvelopeIcon,
  XTwitterIcon,
} from "./icons";

export function Social(props: { url: string; icon: React.ElementType }) {
  return (
    <a href={props.url} target="_blank" className="flex items-center gap-2">
      <props.icon className="size-6 sm:size-8" />
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
    <div className="mx-auto flex flex-col items-center gap-4">
      <Image
        src={props.image}
        alt={props.name}
        className="h-48 w-48 rounded-full object-cover shadow-md"
      />
      <div className="flex flex-col items-center">
        <h4>{props.name}</h4>
        <h5>{props.title}</h5>
      </div>
      <div className="paragraph-2">{props.description}</div>
      <div className="flex gap-4">
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

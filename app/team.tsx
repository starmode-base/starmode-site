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

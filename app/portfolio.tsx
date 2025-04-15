import Image, { StaticImageData } from "next/image";
import { GitHubIcon } from "./icons";
import { Social } from "./team";

interface PortfolioItemProps {
  title: string;
  description: React.ReactNode;
  techStack?: string[];
  image: StaticImageData;
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export function PortfolioItem({
  title,
  description,
  techStack,
  image,
  imageAlt,
  repoUrl,
  liveUrl,
}: PortfolioItemProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white/5 p-6 shadow-md backdrop-blur-md">
      <div className="w-full overflow-hidden rounded-lg">
        <a
          href={liveUrl ?? repoUrl ?? "#"}
          target={liveUrl || repoUrl ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`cursor-pointer transition hover:opacity-90 ${!liveUrl && !repoUrl ? "pointer-events-none" : ""}`}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            className="h-64 w-full rounded-lg object-cover transition hover:opacity-90 sm:h-80"
          />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-sm text-white/90">{description}</div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-white/70">
          {techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-700/50 px-2 py-1 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 text-sm">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              className="rounded bg-white px-3 py-1 font-medium text-black"
            >
              View Live
            </a>
          ) : null}
          {repoUrl ? (
            <div className="rounded bg-white px-3 py-1 font-medium text-black">
              <Social url={repoUrl} icon={GitHubIcon} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

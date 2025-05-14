import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface PortfolioItemProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  techStack?: string[];
  image: StaticImageData;
  imageAlt?: string;
  url: string;
}

export function PortfolioItem({
  title,
  description,
  techStack,
  image,
  imageAlt,
  url,
}: PortfolioItemProps) {
  const isExternal = url.startsWith("http");

  return (
    <div className="flex h-full flex-col gap-6 rounded-xl bg-white/5 p-6 shadow-md backdrop-blur-md">
      <div className="w-full overflow-hidden rounded-lg">
        <Link href={url} target={isExternal ? "_blank" : undefined}>
          <Image
            src={image}
            alt={imageAlt ?? title}
            className="h-64 w-full rounded-lg object-cover transition hover:opacity-90 sm:h-80"
          />
        </Link>
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
          {url ? (
            <Link
              href={url}
              target={isExternal ? "_blank" : undefined}
              className="rounded bg-white px-3 py-1 font-medium text-black"
            >
              View Live
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

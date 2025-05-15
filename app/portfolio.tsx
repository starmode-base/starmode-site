import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function PortfolioItem({
  title,
  description,
  techStack,
  image,
  imageAlt,
  url,
}: {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  techStack?: string[];
  image: StaticImageData;
  imageAlt: string;
  url: string;
}) {
  const isExternal = url.startsWith("http");

  return (
    <div className="-mx-4 grid max-w-4xl overflow-hidden rounded sm:mx-auto sm:grid-cols-2 sm:bg-white/5 sm:shadow-md sm:backdrop-blur-md">
      <div className="flex flex-col gap-4 p-4 sm:p-10">
        <h4 className="text-left! text-white!">{title}</h4>
        <div className="text-white">{description}</div>
        <div className="flex flex-wrap gap-2 text-xs text-white">
          {techStack?.map((tech) => (
            <div
              key={tech}
              className="rounded bg-slate-600 px-3 py-1 font-mono"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-3 text-sm">
          <Link
            href={url}
            target={isExternal ? "_blank" : undefined}
            className="rounded bg-white px-3 py-1 font-medium text-slate-800 shadow"
          >
            View Live
          </Link>
        </div>
      </div>
      <div className="hidden bg-white py-20 pl-10 sm:flex">
        <Link href={url} target={isExternal ? "_blank" : undefined}>
          <Image
            src={image}
            alt={imageAlt}
            className="h-full w-auto rounded object-cover object-left shadow transition hover:opacity-90"
          />
        </Link>
      </div>
    </div>
  );
}

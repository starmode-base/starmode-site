import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

export function PortfolioItem({
  description,
  techStack,
  image,
  imageAlt,
  url,
}: {
  title: string;
  description: React.ReactNode;
  techStack?: string[];
  image: StaticImageData;
  imageAlt: string;
  url: string;
}) {
  const isExternal = url.startsWith("http");

  return (
    <div className="grid h-full overflow-hidden rounded px-6 py-4 sm:mx-auto md:grid-cols-2">
      <div className="flex h-full flex-col gap-6 sm:px-4">
        <div className="flex-grow overflow-auto pr-2 text-white sm:max-h-[300px]">
          <div className="flex-grow text-white">{description}</div>
          {techStack && techStack.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs text-white">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded bg-slate-600 px-3 py-1 font-mono"
                >
                  {tech}
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-4 flex gap-3 text-sm">
            <Link
              href={url}
              target={isExternal ? "_blank" : undefined}
              className="rounded bg-white px-3 py-1 font-medium text-slate-800 shadow"
            >
              View Live
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden p-4 sm:flex sm:items-center sm:justify-center">
        <Link href={url} target={isExternal ? "_blank" : undefined}>
          <Image
            src={image}
            alt={imageAlt}
            className="h-auto max-h-[300px] w-auto rounded object-contain shadow transition hover:opacity-90"
          />
        </Link>
      </div>
    </div>
  );
}

// ---- Collapsible list --------------------------------------------------

export interface PortfolioCard {
  title: string;
  description: React.ReactNode;
  techStack?: string[];
  image: StaticImageData;
  imageAlt: string;
  url: string;
}

/**
 * A vertically‑stacked list of collapsible portfolio cards.
 * Only one card can be open at a time. Collapsed cards keep the backdrop‑blur.
 */
export function CollapsiblePortfolioList({
  cards,
}: {
  cards: readonly PortfolioCard[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-6 flex flex-col gap-4 sm:mx-auto sm:max-w-5xl">
      {cards.map((card, idx) => (
        <div
          key={card.title}
          className="rounded-sm bg-white/10 backdrop-blur-md"
        >
          {/* Header – always visible */}
          <button
            type="button"
            onClick={() => {
              setOpenIndex(openIndex === idx ? null : idx);
            }}
            className="flex w-full items-center justify-between p-4"
          >
            <span className="text-xl font-semibold text-white">
              {card.title}
            </span>
            <span className="text-2xl text-white">
              {openIndex === idx ? "▾" : "▸"}
            </span>
          </button>

          {/* Expanded content */}
          {openIndex === idx && (
            <div>
              <PortfolioItem
                {...card}
                techStack={[...(card.techStack ?? [])]}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
// -----------------------------------------------------------------------

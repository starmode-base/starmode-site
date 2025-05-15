import Image, { StaticImageData } from "next/image";

export function Testimonial(props: {
  quote: string | React.ReactNode;
  project?: {
    name: string;
    description: string;
    url: string;
  };
  author: {
    name: string;
    title: string;
    avatar: StaticImageData | string;
    url: string;
  };
}) {
  return (
    <div className="flex flex-col gap-4 rounded p-4 text-slate-800 shadow shadow-slate-800/25">
      {props.project ? (
        <div>
          <div className="text-lg font-semibold">{props.project.name}</div>
          <div className="text-slate-600">
            {props.project.description}{" "}
            <a href={props.project.url} target="_blank" className="underline">
              {props.project.url}
            </a>
          </div>
        </div>
      ) : null}
      <blockquote className="border-l-4 border-slate-300 pl-4 italic">
        {props.quote}
      </blockquote>
      <div className="flex items-center gap-2">
        <a href={props.author.url} target="_blank" className="shrink-0">
          {typeof props.author.avatar !== "string" ? (
            <Image
              className="size-12 rounded-full object-cover shadow"
              src={props.author.avatar}
              alt={`${props.author.name}, ${props.author.title}`}
            />
          ) : (
            <div className="flex size-12 items-center justify-center rounded-full bg-slate-200 text-base font-bold tracking-wide text-slate-600">
              {props.author.avatar}
            </div>
          )}
        </a>
        <div className="flex flex-col">
          <strong className="text-lg">{props.author.name}</strong>
          <div className="text-slate-600">{props.author.title}</div>
        </div>
      </div>
    </div>
  );
}

export function Card(props: React.PropsWithChildren) {
  return (
    <div className="rounded-md bg-slate-50 p-4 shadow">{props.children}</div>
  );
}

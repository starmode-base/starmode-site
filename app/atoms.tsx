import { StarModeLogoSVG } from "./brand";

export function Header(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <header
      className={"my-8 px-4 sm:px-10" + (className ? ` ${className}` : "")}
      {...rest}
    />
  );
}

export function Section(
  props: React.HTMLProps<HTMLDivElement> & {
    tall?: boolean;
    short?: boolean;
  },
) {
  const { tall, short, className, ...rest } = props;
  const my = tall
    ? " my-20 sm:my-48"
    : short
      ? " my-10 sm:my-20"
      : " my-20 sm:my-32";

  return (
    <section
      className={"px-4 sm:px-10" + (className ? ` ${className}` : "") + my}
      {...rest}
    />
  );
}

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  const { className, ...rest } = props;

  return (
    <h1
      className={
        "mx-auto max-w-4xl text-center text-5xl font-semibold text-slate-800 sm:text-7xl" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function H2(
  props: React.HTMLProps<HTMLHeadingElement> & {
    light?: boolean;
  },
) {
  const { light, className, ...rest } = props;
  const textColor = light ? " text-slate-200" : " text-slate-800";

  return (
    <h2
      className={
        "mx-auto max-w-4xl text-4xl font-medium tracking-tight sm:text-center sm:text-5xl" +
        textColor +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function H3(
  props: React.HTMLProps<HTMLHeadingElement> & { centered?: boolean },
) {
  const { centered, className, ...rest } = props;

  // Text is always centered on desktop screens
  const textCenter = centered ? " text-center" : " sm:text-center";

  return (
    <h3
      className={
        "mx-auto text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl" +
        textCenter +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function H4(props: React.HTMLProps<HTMLHeadingElement>) {
  const { className, ...rest } = props;

  return (
    <h4
      className={
        "mt-4 text-lg font-medium tracking-tight text-slate-700" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function P1(
  props: React.HTMLProps<HTMLParagraphElement> & {
    centered?: boolean;
    light?: boolean;
    narrow?: boolean;
  },
) {
  const { centered, light, narrow, className, ...rest } = props;

  // Text is always centered on desktop screens
  const textCenter = centered ? " text-center" : " sm:text-center";

  const textColor = light ? " text-slate-200" : " text-slate-600";

  const maxW = narrow ? " max-w-lg" : " max-w-2xl";

  return (
    <p
      className={
        "mx-auto my-6 sm:text-center sm:text-lg sm:leading-relaxed" +
        textCenter +
        textColor +
        maxW +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function P2(
  props: React.HTMLProps<HTMLParagraphElement> & { centered?: boolean },
) {
  const { centered, className, ...rest } = props;

  return (
    <p
      className={
        "mx-auto my-2 max-w-2xl text-sm leading-7 text-slate-600 sm:leading-6" +
        (centered ? " sm:text-center" : "") +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function P3(props: React.HTMLProps<HTMLParagraphElement>) {
  const { className, ...rest } = props;

  return (
    <p
      className={
        "mx-auto my-8 text-center text-xs leading-relaxed text-slate-600 sm:text-sm" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function StudioLogo() {
  return (
    <div className="text-slate-800">
      <StarModeLogoSVG className="m-auto h-auto w-full max-w-[380px] px-10 sm:px-0" />
      <p className="mt-1 text-center text-xs font-medium tracking-[0.3em] uppercase">
        Studios
      </p>
    </div>
  );
}

export function GradientDark(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <div
      className={
        "w-screen overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function GradientLight(props: React.HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <div
      className={
        "w-screen overflow-hidden bg-gradient-to-br from-slate-300 to-slate-400" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

export function Button(props: React.ComponentProps<"button">) {
  const { className, ...rest } = props;

  return (
    <button
      className={
        "block w-max rounded-md bg-slate-600 px-5 py-3 text-center font-medium text-nowrap text-slate-50 hover:bg-slate-500" +
        (className ? ` ${className}` : "")
      }
      {...rest}
    />
  );
}

import { Footer, Logo, P3, Section } from "../atoms";
import Mdx from "./legal.mdx";

const h1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className="mx-auto mt-10 max-w-2xl text-3xl font-semibold text-slate-800"
    {...props}
  />
);

const h2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className="mx-auto mt-10 max-w-2xl text-2xl font-semibold text-slate-800"
    {...props}
  />
);

const h3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className="mx-auto mt-10 max-w-2xl text-xl font-semibold text-slate-800"
    {...props}
  />
);

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="mx-auto my-5 max-w-2xl text-slate-900" {...props} />
);

const ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className="mx-auto my-5 max-w-2xl list-disc pl-4 text-slate-900"
    {...props}
  />
);

const a = (props: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a className="text-hollywood-600 hover:underline" {...props} />
);

const hr = () => <hr className="my-10" />;

export default function MdxLayout() {
  return (
    <main className="overflow-hidden bg-white sm:leading-relaxed">
      <Section>
        <Mdx components={{ h1, h2, h3, p: P, ul, a, hr }} />
      </Section>
      <Footer>
        <Logo />
        <P3>© {new Date().getFullYear()} STΛR MODΞ. All rights reserved.</P3>
      </Footer>
    </main>
  );
}

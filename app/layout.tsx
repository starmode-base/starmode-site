import type { Metadata } from "next";
import { Inter, Jura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { StarModeLogoSVG } from "./brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jura = Jura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jura",
});

// Open Graph
// https://vercel.com/docs/functions/og-image-generation
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
// <link rel="icon" href="/starmode-icon.svg">
// <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any">

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#default-value
// const origin =
//   process.env.VERCEL_ENV === "production"
//     ? "https://www.starmode.app"
//     : process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}`
//       : "http://localhost:3020";

// Examples:
// https://reflect.app
// https://reflect.app/blog/tasks-beta
// https://ahrefs.com/
// https://ahrefs.com/blog/open-graph-meta-tags/
// https://simplified.com/blog/design/open-graph-image-everything-you-need-to-know

export const metadata = {
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  // metadataBase: new URL(origin),
  title: "STΛR MODΞ",
  description: "We help companies build better AI",
  icons: ["/starmode-icon.svg", "/starmode-icon.png"],
  openGraph: {
    // url: "https://starmode.app/",
    // siteName: "STΛR MODΞ",
    images: ["/starmode-og.png"],
    // title: "AI-Powered Applications. Built End to End.",
    // type: "website",
    // description: `STΛR MODΞ designs and develops modern web applications with AI at their core. Whether you're starting from scratch or leveling up an existing product, we help you build and ship faster—with confidence.`,
    // locale: "en_US",
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jura.variable} scroll-smooth bg-slate-50 antialiased`}
    >
      <body>
        <header className="flex flex-col items-center gap-8 px-10 py-8">
          <Link href="/">
            <StarModeLogoSVG className="w-[380px] max-w-full fill-slate-800" />
          </Link>
        </header>
        {children}
        <footer className="flex flex-col items-center gap-8 px-10 py-8">
          <StarModeLogoSVG className="w-[380px] max-w-full fill-slate-800" />
          <p className="text-center text-xs leading-relaxed text-slate-600 sm:text-sm">
            © {new Date().getFullYear()} STΛR MODΞ. All rights reserved.
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

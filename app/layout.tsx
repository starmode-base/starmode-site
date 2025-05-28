import type { Metadata } from "next";
import { Inter, Jura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { StarModeLogoSVG } from "./brand";
import "./globals.css";
import { PubSubProvider } from "@/lib/ably";

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

export const metadata = {
  title: "STΛR MODΞ",
  description: "We help companies build better AI",
  icons: ["/starmode-icon.svg", "/starmode-icon.png"],
  openGraph: {
    url: "https://starmode.dev/",
    siteName: "STΛR MODΞ",
    images: ["/starmode-og.png"],
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PubSubProvider>
      <html
        lang="en"
        className={`${inter.variable} ${jura.variable} scroll-smooth bg-slate-50 antialiased`}
      >
        <body>
          <header className="my-8 flex flex-col items-center gap-8 px-10">
            <Link href="/">
              <StarModeLogoSVG className="w-[380px] max-w-full fill-slate-800" />
            </Link>
          </header>
          {children}
          <footer className="my-8 flex flex-col items-center gap-8 px-10">
            <StarModeLogoSVG className="w-[380px] max-w-full fill-slate-800" />
            <p className="text-center text-xs leading-relaxed text-slate-600 sm:text-sm">
              © {new Date().getFullYear()} STΛR MODΞ. All rights reserved.
            </p>
          </footer>
          <Analytics />
        </body>
      </html>
    </PubSubProvider>
  );
}

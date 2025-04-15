"use client";

import {
  AnchorButton,
  Footer,
  GradientDark,
  GradientLight,
  H1,
  H2,
  H3,
  Header,
  Logo,
  P1,
  P2,
  P3,
  Section,
} from "./atoms";
import Image from "next/image";
import humanlessImage from "../public/humanless.webp";
import mikaelImage from "../public/mikael-lirbank.jpg";
import spencerImage from "../public/spencer-smith.jpg";
import { Pricing } from "./pricing";
import { useState } from "react";
import { ToggleGroup } from "./toggle-switch";
import Team from "./team";
import Link from "next/link";

export default function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="grow">
      <Header>
        <Logo />
      </Header>
      <main>
        <Section tall>
          <H1>The first humanless bookkeeper</H1>
          <P1 centered>
            We&apos;re building the first humanless accounting service, from the
            ground up.
            {/* The humanless bookkeeper that categorizes transactions, reconciles
            your accounts, provides you with reports and answers your questions
            (in plain english) any time of the day. */}
          </P1>
          <div className="flex justify-center">
            <AnchorButton href="#pricing">Get early access</AnchorButton>
          </div>
        </Section>

        <GradientDark>
          <Section>
            <H2 light>No Humans</H2>
            {/* <H2 light>AI-first Accounting Firm</H2> */}
            <P1 light>
              The humanless bookkeeper categorizes transactions, reconciles bank
              accounts, and compiles and sends out custom reports. It suggests
              improvements, takes feedback from you and uses it to improve, and
              learns your preferences over time—just like a human bookkeeper,
              but with much higher precision, consistency, and reliability.
            </P1>
            <div className="flex justify-center">
              <Image
                // https://github.com/vercel/next.js/discussions/18432
                // src="/screenshots/starmode-screenshot-20240217.png"
                src={humanlessImage}
                alt="Screenshot of the STΛR MODΞ user interface"
                className="h-auto w-auto rounded-xl border-slate-300 shadow-2xl sm:border-4"
              />
            </div>
            <div className="my-6 flex justify-center gap-3 text-slate-200">
              At STΛR MODΞ, there are no humans pretending to be AI behind the
              scenes.
              {/* Done with sloppy humans doing subpar work? Enter STΛR MODΞ, no
              humans pretending to be AI behind the scenes here. */}
            </div>
          </Section>
        </GradientDark>

        <Section>
          <H2>Get in touch</H2>
          <P1 narrow>
            Don&apos;t be a stranger—we may like AI, but we love people.
          </P1>
          <div className="flex flex-col gap-5 sm:gap-10">
            <Team
              name="Spencer Smith"
              title="CEO, Co-founder"
              description="DM's are open. Happy to chat! If you have any questions, please get in touch."
              image={spencerImage}
              socialUrls={{
                x: "https://x.com/Smith6G",
                linkedIn: "https://www.linkedin.com/in/spencergsmith6",
                gitHub: "https://github.com/spencer-g-smith",
              }}
            />

            <Team
              name="Mikael Lirbank"
              title="CTO, Co-founder"
              description="DM's are open. Happy to chat. If you have any questions, please reach out."
              image={mikaelImage}
              socialUrls={{
                x: "https://x.com/MikaelLirbank",
                linkedIn: "https://www.linkedin.com/in/mikaellirbank",
                gitHub: "https://github.com/lirbank",
              }}
            />
          </div>
        </Section>

        <Section id="pricing">
          <H2>Pricing</H2>
          <P1>
            Get your very own humanless bookkeeper. Pre-order now to get early
            access and be among the first to experience STΛR MODΞ.
          </P1>
          <P2 className="sm:text-center">
            When you pre-order, you&apos;ll secure a five-year plan at a heavily
            discounted one-time price, giving you full access without recurring
            payments and a front-row view into the future of bookkeeping. This
            offer is only available until we begin welcoming users.
          </P2>
          <div className="my-10 flex items-center justify-center">
            <ToggleGroup
              options={["Monthly", "Annual"]}
              selectedOption={isAnnual ? "Annual" : "Monthly"}
              onSelect={(option) => {
                setIsAnnual(option === "Annual");
              }}
            />
          </div>
          <div className="mx-auto my-10 flex max-w-6xl text-slate-800">
            <div className="grid grow gap-4 sm:grid-cols-3">
              <Pricing isAnnual={isAnnual} />
            </div>
          </div>
          <P1>
            Not ready to commit? Join the waitlist and we get you in as soon as
            STΛR MODΞ is ready.
          </P1>
          <AnchorButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSec8rf3WVHigchaOy4sXZF3KnVBhygwPLvlnh15V4JIYi0Jow/viewform"
            target="_blank"
            className="m-auto"
          >
            Join the waitlist
          </AnchorButton>
        </Section>

        <GradientLight>
          <Section>
            <H3 centered>Technologies we are excited about</H3>
            <div className="mx-auto my-8 flex max-w-2xl flex-wrap justify-center text-sm text-slate-600">
              {[
                "LLMs",
                "Local-first",
                "CRDTs",
                "WebRTC",
                "WebSockets",
                "Solid.js",
                "Tailwind CSS",
                "PostgreSQL",
                "PGlite",
                "Drizzle",
                "TypeScript",
                "Prettier",
                "ESLint",
                "Vitest",
                "Playwright",
                "ElectricSQL",
              ]
                .sort()
                .map((tech) => (
                  <div
                    key={tech}
                    className="mx-2 my-2 text-nowrap rounded-full border border-slate-200 bg-white px-6 py-1 shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </Section>
        </GradientLight>
      </main>

      <Footer>
        <Logo />
        <P3>
          © {new Date().getFullYear()} STΛR MODΞ. All rights reserved.{" "}
          <Link href="/legal" className="hover:underline">
            Privacy policy & Terms of service
          </Link>
        </P3>
      </Footer>
    </div>
  );
}

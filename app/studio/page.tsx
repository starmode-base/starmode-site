"use client";

import {
  AnchorButton,
  Footer,
  GradientDark,
  GradientLight,
  H1,
  H3,
  Header,
  Logo,
  P1,
  P3,
  Section,
  StudioLogo,
} from "../atoms";
import { TeamV2 } from "../team";
import { PortfolioItem } from "../portfolio";
import mikaelImage from "../../public/mikael-lirbank.jpg";
import spencerImage from "../../public/Spencer-headshot.jpg";
import starmode from "../../public/starmode-example.png";
import expertSystem from "../../public/expert-system-hero.png";
import Link from "next/link";

const portfolioItems = [
  {
    title: "AI Bookkeeping Copilot",
    subtitle: "Automated Accounting SaaS",
    description: (
      <>
        We built an end-to-end AI-powered bookkeeping solution for freelancers
        and small businesses. It connects directly to bank accounts via Plaid,
        uses LLMs to categorize transactions, and generates financial statements
        autonomously. The system supports human-in-the-loop feedback and was
        deployed in under 6 weeks.
      </>
    ),
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Plaid",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: starmode,
    imageAlt: "AI Bookkeeping Copilot UI",
    liveUrl: "https://bookkeeping-demo.starmode.ai",
    repoUrl: "https://github.com/starmode/starmode",
    badge: "Internal Product",
  },
  {
    title: "Expert System",
    subtitle:
      "Augmented reasoning, to generate world changing insights faster.",
    description: (
      <>
        Expert System processes large volumes of unstructured information—like
        earnings transcripts, scientific research, and technical
        documentation—and distills them into concise, structured takeaway cards.
        These takeaways serve as an intermediate layer of understanding,
        enabling our AI to reason over them and surface deeper insights,
        connections, and hypotheses. The result is a system that augments human
        reasoning over a vast amount of data, with clarity and context. Useful
        for investors and people who think for a living.
      </>
    ),
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Plaid",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: expertSystem,
    imageAlt: "AI Bookkeeping Copilot UI",
    liveUrl: "https://expert-system-rust.vercel.app/",
    repoUrl: undefined,
    badge: "Internal Product",
  },
  {
    title: "AI Bookkeeping Copilot2",
    subtitle: "Automated Accounting SaaS",
    description: (
      <>
        We built an end-to-end AI-powered bookkeeping solution for freelancers
        and small businesses. It connects directly to bank accounts via Plaid,
        uses LLMs to categorize transactions, and generates financial statements
        autonomously. The system supports human-in-the-loop feedback and was
        deployed in under 6 weeks.
      </>
    ),
    techStack: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Plaid",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: spencerImage,
    imageAlt: "AI Bookkeeping Copilot UI",
    badge: "Internal Product",
  },
];

export default function LandingPage() {
  return (
    <div className="grow">
      <Header>
        <StudioLogo />
      </Header>
      <main>
        <Section tall={false}>
          <H1>AI-Powered Applications. Built End to End.</H1>
          <P1 centered>
            Starmode Studios designs and develops modern web applications with
            AI at their core. From early-stage prototypes to fully deployed
            systems, we can build the entire stack—fast.
            <span className="flex justify-center">
              <b>
                Every industry is being reshaped by AI. We’ll help you lead, not
                lag.
              </b>
            </span>
          </P1>

          <div className="flex justify-center">
            <AnchorButton href="#pricing">Contact Us</AnchorButton>
          </div>
        </Section>

        <GradientDark>
          <Section short>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                <h3 className="text-xl font-semibold text-white">
                  Full-Stack Product Thinking
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  We don’t just build what’s specced—we help define it. From
                  early concept to launch, we think holistically about product,
                  tech, and user experience.
                </p>
              </div>

              <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                <h3 className="text-xl font-semibold text-white">
                  Experts in AI-Native Apps
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  We specialize in building with AI from the ground up—LLM
                  copilots, intelligent automations, and smart tools that
                  actually work in production. The AI field is evolving fast,
                  and we will keep your application on the frontier.
                </p>
              </div>

              <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                <h3 className="text-xl font-semibold text-white">
                  Lean Team and Fast Execution
                </h3>
                <p className="mt-2 text-sm text-gray-100">
                  We’re a small, veteran team with an optimized stack and years
                  of collaboration. No middle layers. No drag. Just high-trust,
                  high-velocity execution.
                </p>
              </div>
            </div>
          </Section>
        </GradientDark>

        <Section>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2">
            <TeamV2
              name="Spencer Smith"
              title="AI Engineer & Product Strategist"
              description={
                <>
                  Spencer is a full-stack AI engineer, data scientist, and
                  product-minded builder. Before co-founding the studio, he
                  spent a decade at Zillow as a Principal Data Scientist, where
                  he led the development of intelligent systems and AI agents.
                  He holds a master’s in machine learning, has worked as a
                  research scientist, and previously founded an AI startup
                  focused on automating customer service in healthcare. Spencer
                  brings a rare mix of deep ML expertise, product intuition, and
                  startup execution speed to every engagement.
                </>
              }
              image={spencerImage}
              socialUrls={{
                x: "https://x.com/Smith6G",
                linkedIn: "https://www.linkedin.com/in/spencergsmith6",
                gitHub: "https://github.com/spencer-g-smith",
              }}
            />

            <TeamV2
              name="Mikael Lirbank"
              title="Technical Architect & Lead Engineer"
              description={
                <>
                  Mikael is a veteran software engineer and technical architect
                  with over 20 years in the startup ecosystem. Most recently, he
                  served as Lead Engineer at BootstrapLabs, a VC firm focused on
                  AI, where he turned early-stage ideas into polished,
                  production-ready products. Mikael has a deep command of modern
                  web technologies and a builder’s instinct for clean
                  architecture and long-term maintainability. In an age of “vibe
                  coding,” Mikael brings structure, clarity, and craftsmanship.
                </>
              }
              image={mikaelImage}
              socialUrls={{
                x: "https://x.com/MikaelLirbank",
                linkedIn: "https://www.linkedin.com/in/mikaellirbank",
                gitHub: "https://github.com/lirbank",
              }}
            />
          </div>
        </Section>

        <GradientDark>
          <Section short id="portfolio">
            <H3 centered className="mb-4 text-white">
              Portfolio
            </H3>
            <div className="mx-auto flex max-w-4xl snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className="w-full shrink-0 snap-center sm:w-[500px]"
                >
                  <PortfolioItem {...item} />
                </div>
              ))}
            </div>
          </Section>
        </GradientDark>

        <GradientLight>
          <Section>
            <H3 centered>Technologies we are excited about</H3>
            <div className="mx-auto my-8 flex max-w-2xl flex-wrap justify-center text-sm text-slate-600">
              {[
                "LLMs",
                "TanStack",
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
                "Inngest",
                "Ably",
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

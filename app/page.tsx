import { GradientDark, GradientLight, H1, H3, P1, Section } from "./atoms";
import { TeamV2 } from "./team";
import { PortfolioItem } from "./portfolio";
import mikaelImage from "../public/mikael-lirbank.jpg";
import spencerImage from "../public/spencer-smith.jpg";
import expertSystem from "../public/expert-system-hero.png";
import benaiDemoImage from "../public/benai/benai-demo-image.png";
import { technologies } from "./technologies";

const portfolioItems = [
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
      "TanStack",
      "TypeScript",
      "OpenAI",
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
    title: "BenAi",
    subtitle:
      "Navigating healthcare, simplified. Boosting member literacy and plan utilization through AI.",
    description: (
      <>
        BenAi is a healthcare-focused customer service copilot. It streamlines
        insurance plan inquiries, enabling members to instantly access plan
        details and make smarter healthcare decisions. With a combination of an
        AI chat assistant and a centralized service portal, BenAi improves
        support for both members and third-party administrators. Features
        include a Member Chat-Bot for real-time plan Q&A, a Customer Service
        Co-Pilot for agents, and an Enrollment Scenario Planner to help members
        select the most cost-effective plans.
      </>
    ),
    techStack: ["Python", "Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    image: benaiDemoImage,
    imageAlt: "BenAi architecture diagram",
    liveUrl: "/benai",
    badge: "Client Project",
  },
];

export default function LandingPage() {
  return (
    <main>
      <Section tall={true}>
        <H1>We help companies build better AI</H1>
        <P1 centered>
          We design and deliver full-stack software with AI at the core—built
          for real-world use, not just demos.
        </P1>
        <a className="button mx-auto" href="#team">
          Get in touch
        </a>
      </Section>

      <GradientDark>
        <Section short>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Full-Stack Product Thinking
              </h3>
              <p className="mt-2 text-sm text-gray-100">
                We don’t just build what’s specced—we help define it. From early
                concept to launch, we think holistically about product, tech,
                and user experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Experts in AI-Native Apps
              </h3>
              <p className="mt-2 text-sm text-gray-100">
                We specialize in building with AI from the ground up—LLM
                copilots, intelligent automations, and smart tools that actually
                work in production. The AI field is evolving fast, and we will
                keep your application on the frontier.
              </p>
            </div>

            <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Lean Team and Fast Execution
              </h3>
              <p className="mt-2 text-sm text-gray-100">
                We’re a small, veteran team with an optimized stack and years of
                collaboration. No middle layers. No drag. Just high-trust,
                high-velocity execution.
              </p>
            </div>
          </div>
        </Section>
      </GradientDark>

      <div id="team" />
      <Section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 sm:px-6 lg:grid-cols-2">
          <TeamV2
            name="Spencer Smith"
            title="AI Engineer & Product Strategist"
            description={
              <>
                Spencer is a full-stack AI engineer, data scientist, and
                product-minded builder. Before co-founding the studio, he spent
                a decade at Zillow as a Principal Data Scientist, where he led
                the development of intelligent systems and AI agents. He holds a
                master’s in machine learning, has worked as a research
                scientist, and previously founded an AI startup focused on
                automating customer service in healthcare. Spencer brings a rare
                mix of deep ML expertise, product intuition, and startup
                execution speed to every engagement.
              </>
            }
            image={spencerImage}
            socialUrls={{
              x: "https://x.com/Smith6G",
              linkedIn: "https://www.linkedin.com/in/spencergsmith6",
              gitHub: "https://github.com/spencer-g-smith",
              email: "mailto:spencer@starmode.dev",
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
                web technologies and a builder’s instinct for clean architecture
                and long-term maintainability. In an age of “vibe coding,”
                Mikael brings structure, clarity, and craftsmanship.
              </>
            }
            image={mikaelImage}
            socialUrls={{
              bluesky: "https://bsky.app/profile/lirbank.com",
              linkedIn: "https://www.linkedin.com/in/mikaellirbank",
              gitHub: "https://github.com/lirbank",
              email: "mailto:mikael@starmode.dev",
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
            {technologies
              .toSorted((a, b) => a[0].localeCompare(b[0]))
              .map(([tech, url]) => (
                <a
                  href={url}
                  target="_blank"
                  key={tech}
                  className="mx-2 my-2 rounded-full border border-slate-200 bg-white px-6 py-1 text-nowrap shadow-sm"
                >
                  {tech}
                </a>
              ))}
          </div>
        </Section>
      </GradientLight>
    </main>
  );
}

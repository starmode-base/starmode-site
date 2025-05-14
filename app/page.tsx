import { TeamV2 } from "./team";
import { PortfolioItem, PortfolioItemProps } from "./portfolio";
import mikaelImage from "../public/mikael-lirbank.jpg";
import spencerImage from "../public/spencer-smith.jpg";
import expertSystem from "../public/expert-system-hero.png";
import benaiDemoImage from "../public/benai/benai-demo-image.png";
import { technologies } from "./technologies";

const portfolioItems = [
  {
    title: "Expert System",
    // subtitle:
    //   "Augmented reasoning, to generate world changing insights faster.",
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
    url: "https://expert-system-rust.vercel.app/",
    // badge: "Internal Product",
  },
  {
    title: "BenAi",
    // subtitle:
    //   "Navigating healthcare, simplified. Boosting member literacy and plan utilization through AI.",
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
    url: "/benai",
    // badge: "Client Project",
  },
] satisfies PortfolioItemProps[];

export default function LandingPage() {
  return (
    <main>
      <section className="section-tall">
        <h1>We help companies build better AI</h1>
        <p className="paragraph-1">
          We design and deliver full-stack software with AI at the core—built
          for real-world use, not just demos.
        </p>
        <a className="button mx-auto" href="#team">
          Get in touch
        </a>
      </section>
      <section className="section-short gradient-dark">
        <h2 className="heading-light">How we can help</h2>
        <p className="paragraph-1 paragraph-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Full-Stack Product Thinking
            </div>
            <p className="mt-2 text-sm text-gray-100">
              We don’t just build what’s specced—we help define it. From early
              concept to launch, we think holistically about product, tech, and
              user experience.
            </p>
          </div>
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Experts in AI-Native Apps
            </div>
            <p className="mt-2 text-sm text-gray-100">
              We specialize in building with AI from the ground up—LLM copilots,
              intelligent automations, and smart tools that actually work in
              production. The AI field is evolving fast, and we will keep your
              application on the frontier.
            </p>
          </div>
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Lean Team and Fast Execution
            </div>
            <p className="mt-2 text-sm text-gray-100">
              We’re a small, veteran team with an optimized stack and years of
              collaboration. No middle layers. No drag. Just high-trust,
              high-velocity execution.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-medium" id="team">
        <h2>Meet the team</h2>
        <p className="paragraph-1">
          Don't be a stranger—we may like AI, but we love people.
        </p>
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
      </section>

      {/* Portfolio */}
      <section className="section-short gradient-dark">
        <h2 className="heading-light">Portfolio</h2>
        <p className="paragraph-1 paragraph-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>

        <div className="grid grid-cols-1 gap-4 overflow-x-auto sm:gap-10 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <div key={item.title}>
              <PortfolioItem {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="section-medium gradient-light flex flex-col items-center gap-8">
        <h3 className="text-center">Technologies we are excited about</h3>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center text-sm text-slate-600">
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
      </section>
    </main>
  );
}

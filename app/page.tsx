import { TeamMember } from "./team";
import { PortfolioItem } from "./portfolio";
import mikaelImage from "../public/mikael-lirbank.jpg";
import spencerImage from "../public/spencer-smith.jpg";
import expertSystem from "../public/expert-system-hero.png";
import scoutbeeIss from "../public/scoutbee-iss.png";
import benaiAgentFramework from "../public/benai/benai-agent-framework.png";
import robbieLogo from "@/public/robbie/robbie-logo.png";
import mattiasImage from "../public/mattias-karlsson.jpg";
import justinImage from "../public/justin-muncaster.jpg";
import { technologies } from "./technologies";
import { Testimonial } from "./testimonial";
import { metadata } from "./layout";

export default function LandingPage() {
  return (
    <main>
      <section className="section-tall">
        <h1>{metadata.description}</h1>
        <p className="paragraph-1">
          STΛR MODΞ designs and develops modern web applications with AI at
          their core. Whether you're starting from scratch or leveling up an
          existing product, we help you build and ship faster—with confidence.
        </p>
        <a className="button mx-auto" href="#team">
          Get in touch
        </a>
      </section>

      {/* How we can help */}
      <section className="section-short gradient-dark">
        <h2 className="heading-light mb-16">How we can help</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Full-stack product thinking
            </div>
            <p className="mt-2 text-sm text-slate-100">
              We don't just build what's specced—we help define it. From early
              concept to launch, we think holistically about product, tech, and
              user experience.
            </p>
          </div>
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Experts in AI-native apps
            </div>
            <p className="mt-2 text-sm text-slate-100">
              We specialize in building with AI from the ground up—LLM copilots,
              intelligent automations, and smart tools that actually work in
              production. The AI field is evolving fast, and we will keep your
              application on the frontier.
            </p>
          </div>
          <div className="rounded-2xl bg-white/20 p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
            <div className="text-xl font-semibold text-white">
              Lean team and fast execution
            </div>
            <p className="mt-2 text-sm text-slate-100">
              We're a small, veteran team with an optimized stack and years of
              collaboration. No middle layers. No drag. Just high-velocity
              execution.
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
        <div className="mx-auto grid max-w-5xl gap-20 py-4 sm:grid-cols-2 sm:gap-10">
          <TeamMember
            name="Spencer Smith"
            title="AI Engineer & Product Strategist"
            description={
              <>
                Spencer is a full-stack AI engineer, data scientist, and
                product-minded builder. Before co-founding the studio, he spent
                a decade at Zillow as a Principal Data Scientist, where he led
                the development of intelligent systems and AI agents. He holds a
                master's in machine learning, has worked as a research
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
          <TeamMember
            name="Mikael Lirbank"
            title="Technical Architect & Lead Engineer"
            description={
              <>
                Mikael is a veteran software engineer and technical architect
                with over 20 years in the startup ecosystem. Most recently, he
                served as Lead Engineer at BootstrapLabs, a VC firm focused on
                AI, where he turned early-stage ideas into polished,
                production-ready products. Mikael has a deep command of modern
                web technologies and a builder's instinct for clean architecture
                and long-term maintainability. In an age of "vibe coding,"
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
      <section className="section-short bg-[url(/bg-pattern.png)] px-4 sm:px-10">
        <h2 className="text-white!">Portfolio</h2>
        <p className="paragraph-1 text-white!">
          A few examples of the AI-powered tools and platforms we've helped
          bring to life—ranging from healthcare copilots to knowledge systems
          for expert users.
        </p>
        <PortfolioItem
          title="Scoutbee ISS"
          subtitle="Augmented reasoning, to generate world changing insights faster."
          description={
            <>
              An AI-powered supplier search engine built for Fortune 50
              procurement teams. Instant Supplier Search (ISS) enables buyers to
              find and evaluate suppliers across any category with
              natural-language queries and rich filtering. Designed for speed,
              precision, and scale in high-stakes sourcing workflows.
            </>
          }
          techStack={[
            "OpenAI",
            "Evals",
            "Jupyter",
            "Inngest",
            "Helicone",
            "PostgreSQL",
          ]}
          image={scoutbeeIss}
          imageAlt="Scoutbee ISS"
          url="https://scoutbee-iss.vercel.app/"
        />
      </section>
      <div className="py-10" />
      <section className="section-short bg-[url(/bg-pattern.png)] px-4 sm:px-10">
        <PortfolioItem
          title="Expert System"
          subtitle="Augmented reasoning, to generate world changing insights faster."
          description={
            <>
              Expert System processes large volumes of unstructured
              information—like earnings transcripts, scientific research, and
              technical documentation—and distills them into concise, structured
              takeaway cards. These takeaways serve as an intermediate layer of
              understanding, enabling our AI to reason over them and surface
              deeper insights, connections, and hypotheses. The result is a
              system that augments human reasoning over a vast amount of data,
              with clarity and context. Useful for investors and people who
              think for a living.
            </>
          }
          techStack={[
            "TanStack",
            "TypeScript",
            "OpenAI",
            "Drizzle ORM",
            "PostgreSQL",
            "Tailwind CSS",
          ]}
          image={expertSystem}
          imageAlt="Expert System screenshot"
          url="https://expert-system.starmode.dev/"
        />
      </section>
      <div className="py-10" />
      <section className="section-short bg-[url(/bg-pattern.png)]">
        <PortfolioItem
          title="BenAi"
          subtitle="Navigating healthcare, simplified. Boosting member literacy and plan utilization through AI."
          description={
            <>
              BenAi is a healthcare-focused customer service copilot. It
              streamlines insurance plan inquiries, enabling members to
              instantly access plan details and make smarter healthcare
              decisions. With a combination of an AI chat assistant and a
              centralized service portal, BenAi improves support for both
              members and third-party administrators. Features include a Member
              Chat-Bot for real-time plan Q&A, a Customer Service Co-Pilot for
              agents, and an Enrollment Scenario Planner to help members select
              the most cost-effective plans.
            </>
          }
          techStack={[
            "Python",
            "Next.js",
            "TypeScript",
            "OpenAI",
            "Tailwind CSS",
          ]}
          image={benaiAgentFramework}
          imageAlt="BenAi architecture diagram"
          url="/benai"
        />
      </section>
      <div className="py-10" />
      <section className="section-short bg-[url(/bg-pattern.png)]">
        <PortfolioItem
          title="Robbie"
          subtitle="Conversational BI for faster, trusted decision-making across teams."
          description={
            <>
              Robbie is a conversational analytics copilot built for Zillow. It
              empowers anyone—from product managers to executives—to ask
              plain-English business questions and get governed, SQL-backed
              answers with charts in seconds. Robbie integrates tightly with
              Zillow's semantic layer and Databricks to generate verifiable
              insights through chat, without requiring data science support. It
              includes live data querying, Slack and web integrations, and a
              feedback system for improving model output quality.
            </>
          }
          techStack={[
            "Next.js",
            "TypeScript",
            "OpenAI",
            "Databricks",
            "Tailwind CSS",
          ]}
          image={robbieLogo}
          imageAlt="Robbie architecture diagram"
          url="/robbie"
        />
      </section>

      {/* Testimonials */}
      <section className="section-short">
        <h2>What is it like to work with us?</h2>
        <p className="paragraph-1">
          We partner with innovative teams to solve hard problems with clarity,
          speed, and deep technical expertise. Here's what a few of them had to
          say.
        </p>
        <div className="mx-auto flex max-w-2xl flex-col gap-10">
          <Testimonial
            project={{
              name: "FLIR Conservator",
              url: "https://www.flir.com/products/conservator/",
              description:
                "Conservator™ is a powerful cloud-based data lifecycle management (DLM) application that enables data scientists to quickly build image datasets and accelerate AI development.",
            }}
            quote="Mikael was a pleasure to work with. Very knowledgable, very competent, very productive."
            author={{
              name: "Justin Muncaster",
              title: "Teledyne FLIR/Muncaster Consulting",
              avatar: justinImage,
              url: "https://www.linkedin.com/in/jmuncaster/",
            }}
          />
          <Testimonial
            project={{
              name: "SpikeGadgets",
              url: "https://spikegadgets.com/",
              description:
                "SpikeGadgets develops advanced neuroscience tools that combine high-performance, lab-grade hardware with an open-source software platform for science-driven customization.",
            }}
            quote={
              <p>
                Mikael came to our company and gave a well-organized and highly
                informative talk to our developers about how to use AI to speed
                up software development in a practical way. Mikael has a knack
                for explaining complex ideas in a way that is very accessible,
                and our entire group was immediately inspired and empowered to
                use the emerging methodologies he showcased. I was super
                impressed!
              </p>
            }
            author={{
              name: "Mattias Karlsson",
              title: "SpikeGadgets CEO",
              avatar: mattiasImage,
              url: "https://www.linkedin.com/in/mattias-karlsson-32100b119/",
            }}
          />
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

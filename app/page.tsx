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

        {/* Slider container */}
        <div className="relative mt-6">
          <div className="scrollbar-hide flex snap-x snap-mandatory space-x-6 overflow-x-auto scroll-smooth pb-4">
            {/* Each slide */}
            <div className="h-full w-full flex-shrink-0 snap-center sm:w-3/4 lg:w-1/2">
              <PortfolioItem
                title="Scoutbee ISS"
                description={
                  <>
                    An AI-powered supplier search engine built for Fortune 50
                    procurement teams. Instant Supplier Search (ISS) enables
                    buyers to find and evaluate suppliers across any category
                    with natural-language queries and rich filtering. Designed
                    for speed, precision, and scale in high-stakes sourcing
                    workflows.
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
            </div>

            <div className="h-full w-full flex-shrink-0 snap-center sm:w-3/4 lg:w-1/2">
              <PortfolioItem
                title="Expert System"
                description={
                  <>
                    Expert System processes unstructured information and
                    transforms it into structured, actionable insights. It
                    creates an intermediate layer of understanding through
                    concise takeaway cards, enabling AI to surface connections
                    and hypotheses that would be difficult to discover manually.
                    A powerful tool for investors and researchers needing to
                    analyze large volumes of data.
                  </>
                }
                techStack={["OpenAI", "Inngest", "PostgreSQL", "TanStack"]}
                image={expertSystem}
                imageAlt="Expert System screenshot"
                url="https://expert-system.starmode.dev/"
              />
            </div>

            <div className="h-full w-full flex-shrink-0 snap-center sm:w-3/4 lg:w-1/2">
              <div className="flex h-full flex-col">
                <PortfolioItem
                  title="BenAi"
                  description={
                    <>
                      BenAi streamlines healthcare plan navigation with an AI
                      assistant that instantly answers member questions and
                      helps them make informed decisions. It combines a chat
                      interface with a service portal to improve support
                      efficiency for both members and administrators, making
                      complex healthcare information accessible and actionable.
                    </>
                  }
                  techStack={["OpenAI", "Python", "Next.JS", "Tailwind"]}
                  image={benaiAgentFramework}
                  imageAlt="BenAi architecture diagram"
                  url="/benai"
                />
              </div>
            </div>

            <div className="h-full w-full flex-shrink-0 snap-center sm:w-3/4 lg:w-1/2">
              <div className="flex h-full flex-col">
                <PortfolioItem
                  title="Robbie"
                  description={
                    <>
                      Robbie transforms business intelligence through
                      conversation, allowing anyone to ask plain-English
                      questions and receive data-backed answers with
                      visualizations in seconds. Built for Zillow, it integrates
                      with their semantic layer and Databricks to deliver
                      verified insights without requiring data science
                      expertise.
                    </>
                  }
                  techStack={["OpenAI", "Python", "Vue", "Pinecone"]}
                  image={robbieLogo}
                  imageAlt="Robbie architecture diagram"
                  url="/robbie"
                />
              </div>
            </div>
          </div>
        </div>
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

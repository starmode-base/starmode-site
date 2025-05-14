import Image from "next/image";
import benai from "@/public/benai/Ben_Ai Logo .png";
import agentFramework from "@/public/benai/benai-agent-framework.png";
import { BenaiDemo } from "./benai-demo";
import Link from "next/link";

export default function Benai() {
  return (
    <main>
      <section className="section-medium">
        <div className="mb-4 flex justify-center">
          <Image src={benai} alt="BenAi Logo" width={500} height={500} />
        </div>
        <h2 className="">Navigating Healthcare, Simplified</h2>
        <p className="paragraph-1">
          BenAI is a next-generation customer service platform we developed to
          transform how members understand and interact with their healthcare
          plans. By combining cutting edge AI with clean UX, BenAI helps members
          maximize their benefits, reduces administrative load, and enhances
          support quality for healthcare administrators.
        </p>
        <div className="mx-auto aspect-video w-3xl max-w-full">
          <BenaiDemo />
        </div>
      </section>

      {/* What We Built & Outcomes */}
      <section className="section-short gradient-dark">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="mb-4 text-left!">🔍 What We Built</h4>
            <ul className="list-inside list-disc space-y-2 font-medium">
              <li>AI chatbot for plan-specific Q&A</li>
              <li>Centralized hub for docs & benefits</li>
              <li>Admin tools for TPA workflows</li>
              <li>Plan comparison & scenario planning</li>
              <li>Scalable, secure, and compliant</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="mb-4 text-left!">📈 Outcomes</h4>
            <ul className="list-inside list-disc space-y-2 font-medium">
              <li>Instant answers to member questions</li>
              <li>Less load on customer service teams</li>
              <li>Smarter plan usage by members</li>
              <li>Faster onboarding for new groups</li>
              <li>Happier members, fewer escalations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-medium">
        <div className="mb-6 flex justify-center">
          <Image
            src={agentFramework}
            alt="BenAI System Diagram"
            width={1000}
            height={600}
          />
        </div>
        <div className="text-grey-800 text-center">
          <h2 className="mt-16 mb-4">Agentic Architecture</h2>
          <p className="paragraph-1 max-w-3xl text-base">
            We created a modular agent framework for BenAI to enable intelligent
            data retrieval and workflow execution. A central Routing Agent
            dynamically selects specialized sub-agents—such as Plan Context,
            Claim Status, and Doctor Network Agents—based on the user's
            question. These agents fetch information from relevant data sources
            (e.g. Group Data, Claims API, Doctor Network) and return structured
            context to a Summarizer, which formulates a precise, user-facing
            response. The system is designed for scalability, supporting easy
            integration of future agents and APIs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-medium gradient-dark">
        <div className="text-center">
          <h2 className="heading-light">Let's Build Together</h2>
          <p className="paragraph-1 paragraph-light">
            BenAI is just one example of how our team helps clients harness AI
            to solve real business problems. Whether you're streamlining
            internal operations or launching AI-first products, we can help you
            design, build, and scale.
          </p>
          <Link href="/#team" className="button inline-block">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}

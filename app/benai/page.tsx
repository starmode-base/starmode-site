import Image from "next/image";
import benai from "@/public/benai/Ben_Ai Logo .png";
import agentFramework from "@/public/benai/benai-agent-framework.png";
import { BenaiDemo } from "./benai-demo";
import { Button, GradientDark, H1, H2, P1, Section } from "../atoms";

export default function Benai() {
  return (
    <main>
      <Section tall={false}>
        <div className="mb-4 flex justify-center">
          <Image src={benai} alt="BenAi Logo" width={500} height={500} />
        </div>

        <H2 className="text-grey-800 text-center">
          Navigating Healthcare, Simplified.
        </H2>
        <P1 centered className="mt-2 text-lg">
          BenAI is a next-generation customer service platform we developed to
          transform how members understand and interact with their healthcare
          plans. By combining cutting edge AI with clean UX, BenAI helps members
          maximize their benefits, reduces administrative load, and enhances
          support quality for healthcare administrators.
        </P1>
        <div className="my-6 flex h-full items-center justify-center">
          <BenaiDemo className="w-full lg:w-3/5" />
        </div>
      </Section>
      {/* What We Built & Outcomes */}

      <GradientDark>
        <Section short={true}>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">🔍 What We Built</h2>
              <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
                <li>AI chatbot for plan-specific Q&A</li>
                <li>Centralized hub for docs & benefits</li>
                <li>Admin tools for TPA workflows</li>
                <li>Plan comparison & scenario planning</li>
                <li>Scalable, secure, and compliant</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">📈 Outcomes</h2>
              <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
                <li>Instant answers to member questions</li>
                <li>Less load on customer service teams</li>
                <li>Smarter plan usage by members</li>
                <li>Faster onboarding for new groups</li>
                <li>Happier members, fewer escalations</li>
              </ul>
            </div>
          </div>
        </Section>
      </GradientDark>

      {/* Architecture */}
      <Section tall={false}>
        <div className="mb-6 flex justify-center">
          <Image
            src={agentFramework}
            alt="BenAI System Diagram"
            width={1000}
            height={600}
          />
        </div>
        <div className="text-grey-800 text-center">
          <H2 className="mt-16 mb-4">Agentic Architecture</H2>
          <p className="mx-auto max-w-3xl text-base">
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
      </Section>

      {/* Call to Action */}
      <GradientDark>
        <Section tall={false}>
          <div className="text-center">
            <H1 className="text-white">Let's Build Together</H1>
            <P1 centered className="mx-auto mt-2 max-w-2xl text-white">
              BenAI is just one example of how our team helps clients harness AI
              to solve real business problems. Whether you're streamlining
              internal operations or launching AI-first products, we can help
              you design, build, and scale.
            </P1>
            <Button className="inline-block">Start a Project</Button>
          </div>
        </Section>
      </GradientDark>
    </main>
  );
}

import Image from "next/image";
import robbieLogo from "@/public/robbie/robbie-logo.png";
import robbieDiagram from "@/public/robbie/robbie-diagram.png";
import RobbieDemo from "./robbie-demo";
import Link from "next/link";

export default function Robbie() {
  return (
    <main>
      <section className="section-medium">
        <div className="mb-4 flex justify-center">
          <Image
            className="rounded-lg"
            src={robbieLogo}
            alt="Robbie Logo"
            width={300}
            height={300}
          />
        </div>
        <p className="paragraph-1">
          Robbie is an enterprise-grade BI assistant we built for Zillow. It
          allows anyone—marketers, product managers, execs—to ask plain English
          questions about the business and get SQL-generated,
          governance-compliant answers backed by live data and charts.
          Integrated with Zillow's semantic layer and Databricks stack, Robbie
          returns answers in seconds—no tickets, no delays.
        </p>
        <div className="mx-auto aspect-video w-3xl max-w-full">
          <RobbieDemo />
        </div>
      </section>

      {/* What We Built & Outcomes */}
      <section className="section-short gradient-dark">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="mb-4 text-left!">🔍 What We Built</h4>
            <ul className="list-inside list-disc space-y-2 font-medium">
              <li>Chat-based analytics interface (NL → SQL → charts)</li>
              <li>Semantic-layer aware query generation</li>
              <li>Slack & web portal integrations</li>
              <li>Insight composer with narrative summaries</li>
              <li>Verified-insight trust loop + ACL enforcement</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h4 className="mb-4 text-left!">📈 Outcomes</h4>
            <ul className="list-inside list-disc space-y-2 font-medium">
              <li>70% reduction in time-to-insight*</li>
              <li>Hundreds of queries run weekly, no DS needed</li>
              <li>Adopted by SEO, Rentals, New Construction teams</li>
              <li>Faster decisions in DS-capacity constrained areas</li>
              <li>Enterprise-grade governance, no data movement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-medium">
        <div className="mb-6 flex justify-center">
          <Image
            className="rounded-lg"
            src={robbieDiagram}
            alt="Robbie System Diagram"
            width={1000}
            height={600}
          />
        </div>
        <p className="text-center text-sm italic">
          Figure 1 — End-to-end Robbie workflow: semantic match → context
          retrieval → SQL generation → governed execution → analytics &
          visualization → AI-authored insight.
        </p>
        <div className="text-grey-800 text-center">
          <h2 className="mt-16 mb-4">Semantic-Layer-Aware Architecture</h2>
          <p className="paragraph-1 max-w-3xl text-base">
            Robbie’s modular architecture translates natural-language questions
            into SQL using metadata from Zillow’s semantic layer. Queries are
            validated for governance and executed on Databricks. Results are
            piped into a composer that generates chart-ready visuals and written
            summaries. A feedback loop captures user input to flag
            low-confidence responses and continuously improve reliability. All
            without moving data outside your secure cloud perimeter.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-medium gradient-dark">
        <div className="text-center">
          <h2 className="heading-light">Let’s Build Together</h2>
          <p className="paragraph-1 paragraph-light">
            Robbie is one example of how we help clients operationalize AI to
            solve real business problems. Whether you're modernizing internal
            analytics or launching AI-first tools, we help you design, build,
            and deploy with confidence.
          </p>
          <Link href="/#team" className="button inline-block">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}

/*
 *Figures marked * are internal pilot metrics gathered during Q2 rollout.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import robbieDiagram from "@/public/robbie/robbie-diagram.png";
import robbieLogo from "@/public/robbie/robbie-logo.png";
import RobbieDemo from "./robbie-demo";
import {
  Button,
  GradientDark,
  H1,
  H2,
  Header,
  P1,
  Section,
  StudioLogo,
} from "../atoms";

export default function Robbie() {
  return (
    <div className="grow">
      <Header>
        <Link className="cursor-pointer" href="/">
          <StudioLogo />
        </Link>
      </Header>

      <main>
        {/* Hero */}
        <Section tall={false}>
          <div className="mb-4 flex justify-center">
            <Image
              src={robbieLogo}
              alt="Robbie Logo"
              width={300}
              className="rounded-lg"
            />
          </div>
          <P1 centered className="mt-2 text-lg">
            Robbie is an enterprise-grade conversational BI assistant we built
            for Zillow. Powered by large language models and a robust semantic
            layer, Robbie lets anyone ask questions about business performance
            in plain English — then automatically generates SQL, validates the
            query against governance rules, executes on Databricks, and returns
            chart-ready insights in seconds. No tabs, no waiting on analysts:
            just answers.
          </P1>
          <div className="my-6 flex h-full items-center justify-center">
            <RobbieDemo className="w-full lg:w-3/5" />
          </div>
        </Section>

        {/* What We Built & Outcomes */}

        <GradientDark>
          <Section short={true}>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">🔍 What We Built</h2>
                <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
                  <li>
                    Conversational analytics interface (chat → SQL → charts)
                  </li>
                  <li>Deep integration with Zillow’s semantic layer</li>
                  <li>Verified-insight loop for trust & feedback</li>
                  <li>Slack, web portal & API distribution</li>
                  <li>Built on Databricks with zero data egress</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white/40 p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h2 className="mb-4 text-2xl font-bold">📈 Outcomes</h2>
                <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
                  <li>70% reduction in time-to-insight for product teams</li>
                  <li>Hundreds of weekly queries without DS intervention</li>
                  <li>Adoption across SEO, New Construction, Rentals & more</li>
                  <li>Enterprise-grade security — honours existing ACLs</li>
                  <li>Accelerated decision-making in DS-capacity gaps</li>
                </ul>
              </div>
            </div>
          </Section>
        </GradientDark>

        {/* Architecture */}
        <Section tall={false}>
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
            <H2 className="mt-16 mb-4">Semantic-Layer-Aware Architecture</H2>
            <p className="mx-auto max-w-3xl text-base">
              The left lane shows how Robbie pinpoints only the data it actually
              needs—leveraging the semantic layer to fetch context, engineer a
              prompt, and produce governance-compliant SQL. The right lane
              highlights the analysis loop, where LLM function calls trigger
              in-warehouse analytics and automatic charting before distilling a
              plain-English takeaway. Every hop is auditable, permission-aware,
              and instrumented for feedback, so teams can move from question to
              board-ready insight in under a minute.
            </p>
          </div>
        </Section>

        {/* Call to Action */}
        <GradientDark>
          <Section tall={false}>
            <div className="text-center">
              <H1 className="text-white">Uncover Insights Faster</H1>
              <P1 centered className="mx-auto mt-2 max-w-2xl text-white">
                Need a conversational analytics layer on top of your data
                warehouse? Our team designs and delivers secure, LLM-powered BI
                solutions like Robbie — tailored to your domain and governed by
                your rules.
              </P1>
              <Button className="inline-block">Start a Project</Button>
            </div>
          </Section>
        </GradientDark>
      </main>
    </div>
  );
}

/*
 *Figures marked * are internal pilot metrics gathered during Q2 rollout.
 */

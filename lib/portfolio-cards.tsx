import expertSystem from "../public/expert-system-hero.png";
import scoutbeeIss from "../public/scoutbee-iss.png";
import benaiAgentFramework from "../public/benai/benai-agent-framework.png";
import robbieLogo from "@/public/robbie/robbie-logo.png";

export const portfolioCards = [
  {
    title: "Scoutbee ISS",
    description: (
      <>
        An AI‑powered supplier search engine built for Fortune 50 procurement
        teams. Instant Supplier Search (ISS) enables buyers to find and evaluate
        suppliers across any category with natural‑language queries and rich
        filtering. Designed for speed, precision, and scale in high‑stakes
        sourcing workflows.
      </>
    ),
    techStack: [
      "OpenAI",
      "Evals",
      "Jupyter",
      "Inngest",
      "Helicone",
      "PostgreSQL",
    ],
    image: scoutbeeIss,
    imageAlt: "Scoutbee ISS",
    url: "https://scoutbee-iss.vercel.app/",
  },
  {
    title: "Expert System",
    description: (
      <>
        Expert System processes unstructured information and transforms it into
        structured, actionable insights. It creates an intermediate layer of
        understanding through concise takeaway cards, enabling AI to surface
        connections and hypotheses that would be difficult to discover manually.
        A powerful tool for investors and researchers needing to analyze large
        volumes of data.
      </>
    ),
    techStack: ["OpenAI", "Inngest", "PostgreSQL", "TanStack"],
    image: expertSystem,
    imageAlt: "Expert System screenshot",
    url: "https://expert-system.starmode.dev/",
  },
  {
    title: "BenAi",
    description: (
      <>
        BenAi streamlines healthcare plan navigation with an AI assistant that
        instantly answers member questions and helps them make informed
        decisions. It combines a chat interface with a service portal to improve
        support efficiency for both members and administrators, making complex
        healthcare information accessible and actionable.
      </>
    ),
    techStack: ["OpenAI", "Python", "Next.JS", "Tailwind"],
    image: benaiAgentFramework,
    imageAlt: "BenAi architecture diagram",
    url: "/benai",
  },
  {
    title: "Robbie",
    description: (
      <>
        Robbie transforms business intelligence through conversation, allowing
        anyone to ask plain‑English questions and receive data‑backed answers
        with visualizations in seconds. Built for Zillow, it integrates with
        their semantic layer to deliver instant analytics without requiring
        data‑science expertise.
      </>
    ),
    techStack: ["OpenAI", "Python", "Vue", "Pinecone"],
    image: robbieLogo,
    imageAlt: "Robbie architecture diagram",
    url: "/robbie",
  },
];

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import {
  AgentTeams,
  ApprovalCheckpoints,
  WORKFLOW_PILLARS,
} from "@/components/multi-agent/sections";
import { PillarCards } from "@/components/ui/PillarCards";
import { PageCta } from "@/components/ui/PageCta";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";

const PATH = "/ai-infrastructure/multi-agent-workflows";
const title = "Multi-Agent Workflow Systems for Business Automation";
const description =
  "Teams of AI agents that run a whole process — reading, extracting, checking, and filing — with a human signing off where it matters. Built on LangGraph and Temporal.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "multi-agent workflow systems",
    "AI business process automation",
    "LangGraph orchestration",
    "Temporal workflows",
    "human-in-the-loop automation",
    "document processing agents",
    "resume screening automation",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function MultiAgentWorkflowsPage() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="AI Infrastructure · multi-agent workflow systems"
        title="Multi-agent workflow systems for human-led automation"
        subtitle="One agent can answer a question. A workflow of agents can run a process: one reads the document, one extracts the data, one checks it, one files it — and a human signs off where it matters. That's the difference between a chatbot and infrastructure."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <ApprovalCheckpoints />
      <AgentTeams />
      <PillarCards ariaLabel="How the workflows are built" pillars={WORKFLOW_PILLARS} />

      <PageCta
        id="multi-agent-cta"
        heading="Automate your first process"
        subheading="Bring the workflow that eats the most hours. We'll map it."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Infrastructure", path: "/solutions/ai-intelligence-systems" },
            { name: "Multi-Agent Workflows", path: PATH },
          ]),
        )}
      />
    </>
  );
}

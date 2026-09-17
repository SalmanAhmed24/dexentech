import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import {
  MONITORING_PILLARS,
  MonitorConsole,
  WhatGetsWatched,
} from "@/components/monitoring/sections";
import { PageCta } from "@/components/ui/PageCta";
import { PillarCards } from "@/components/ui/PillarCards";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";

const PATH = "/ai-infrastructure/monitoring-cost-optimization";
const title = "AI Monitoring and Cost Optimization Services";
const description =
  "Every agent action traced end to end, token spend tracked per workflow with caps, and model routing tested against outcomes. Built on LangSmith, Prometheus, and Grafana.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI monitoring services",
    "AI cost optimization",
    "token cost tracking",
    "LLM observability",
    "model routing optimization",
    "LangSmith tracing",
    "context window audit",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function MonitoringPage() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="AI Infrastructure · monitoring & optimization"
        title="AI monitoring and optimization for business systems"
        subtitle="Every agent action traced end to end: what ran, what it decided, how long it took, and whether it succeeded. When something breaks, you see where — not just that it did."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
        panel={<MonitorConsole />}
      />

      <WhatGetsWatched />

      <PillarCards
        ariaLabel="The monitoring stack"
        pillars={MONITORING_PILLARS}
      />

      <PageCta
        id="monitoring-cta"
        heading="Find out what your AI costs"
        subheading="One audit. Your workflows, traced and priced, with the fixes listed."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Infrastructure", path: "/solutions/ai-intelligence-systems" },
            { name: "Monitoring & Cost Optimization", path: PATH },
          ]),
        )}
      />
    </>
  );
}

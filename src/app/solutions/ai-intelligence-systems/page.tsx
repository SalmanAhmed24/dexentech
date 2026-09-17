import type { Metadata } from "next";
import { AiHero } from "@/components/ai-intelligence/AiHero";
import {
  AI_FAQ,
  AiFaq,
  ServiceCards,
  WhatTeamsBuild,
} from "@/components/ai-intelligence/sections";
import { CtaBand } from "@/components/ui/CtaBand";
import { PillGroup } from "@/components/ui/PillGroup";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = "/solutions/ai-intelligence-systems";
const title = "AI Intelligence Systems";
const description =
  "MCP integrations, multi-agent workflows, monitoring, and human-in-the-loop approval — AI wired into the tools you already run, with humans in control.";

const SYSTEMS_WE_CONNECT = [
  "WhatsApp Business API",
  "Gmail / Outlook",
  "Slack",
  "LinkedIn Sales Navigator",
  "Notion",
  "Xero",
  "QuickBooks",
  "Sage",
  "SAP",
  "ERPNext",
  "Odoo",
  "Stripe",
];

const BUILT_ON = [
  "LangGraph",
  "Temporal",
  "n8n",
  "PostgreSQL",
  "Redis",
  "Next.js",
  "Supabase",
];

export const metadata: Metadata = {
  // Longer, keyword-bearing title for search; the short name is used in nav.
  title: {
    absolute: "AI Intelligence Systems for Business Automation — DexenTech",
  },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI infrastructure services",
    "MCP integration services",
    "Model Context Protocol",
    "multi-agent workflow systems",
    "AI monitoring and cost optimization",
    "human-in-the-loop automation",
    "business process automation",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function AiIntelligenceSystemsPage() {
  return (
    <>
      <AiHero />
      <ServiceCards />

      {/* Mono pills on this page, unlike the Geist pills on the solution pages */}
      <PillGroup
        id="systems-we-connect"
        heading="Systems we connect"
        items={SYSTEMS_WE_CONNECT}
        mono
      />
      <PillGroup
        id="built-on"
        heading="What it's built on"
        items={BUILT_ON}
        mono
      />

      <WhatTeamsBuild />

      <CtaBand
        id="ai-pricing"
        heading="Scoped and priced per workflow"
        subheading="Tell us the process. Get a fixed number this week."
        cta={{ label: "Get a Quote", href: "/pricing" }}
      />

      <AiFaq />

      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            name: "AI Intelligence Systems for Business Automation",
            description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "AI Intelligence Systems", path: PATH },
          ]),
          faqSchema(PATH, AI_FAQ),
        )}
      />
    </>
  );
}

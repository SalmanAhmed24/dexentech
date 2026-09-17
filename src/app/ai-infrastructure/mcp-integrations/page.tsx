import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ScopedAccess, WorkflowsWeWire } from "@/components/mcp/sections";
import { LabelledStrip } from "@/components/ui/LabelledStrip";
import { PageCta } from "@/components/ui/PageCta";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = "/ai-infrastructure/mcp-integrations";
const title = "MCP Integration Services for AI Business Systems";
const description =
  "Model Context Protocol is the open standard for connecting AI models to business tools. One way for agents to read your systems and act in them — with permissions you control.";

const SYSTEMS = [
  "WhatsApp Business",
  "CRM platforms",
  "LinkedIn Sales Navigator",
  "Slack",
  "Gmail / Outlook",
  "Notion",
  "Xero / QuickBooks / Sage",
  "SAP / ERPNext / Odoo",
];

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "MCP integration services",
    "Model Context Protocol",
    "WhatsApp CRM integration",
    "AI workflow integration",
    "Slack ticketing automation",
    "ERP AI integration",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function McpIntegrationsPage() {
  return (
    <>
      <PageHero
        align="left"
        eyebrow="AI Infrastructure · MCP integration services"
        title="MCP integration services for connected AI workflows"
        subtitle="Model Context Protocol is the open standard for connecting AI models to business tools. Instead of one-off scripts per app, MCP gives agents a single way to read your systems and act in them — with permissions you control. When a tool updates, the connection holds."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <LabelledStrip
        ariaLabel="Systems we connect"
        label="Systems we connect"
        items={SYSTEMS}
      />

      <WorkflowsWeWire />
      <ScopedAccess />

      <PageCta
        id="mcp-cta"
        heading="Connect your first two systems"
        subheading="Tell us the workflow. We'll scope it in one call."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Infrastructure", path: "/solutions/ai-intelligence-systems" },
            { name: "MCP Integrations", path: PATH },
          ]),
        )}
      />
    </>
  );
}

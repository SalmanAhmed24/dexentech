import type { Metadata } from "next";
import { FeatureBlock } from "@/components/hospitality/FeatureBlock";
import { SupplyHero } from "@/components/supplyflow/SupplyHero";
import {
  SUPPLY_DISTRIBUTORS,
  SUPPLY_PLUGS,
  SupplyModules,
  WhatStopsSupply,
} from "@/components/supplyflow/sections";
import { LabelledStrip } from "@/components/ui/LabelledStrip";
import { PageCta } from "@/components/ui/PageCta";
import { CtaBand } from "@/components/ui/CtaBand";
import { PillGroup } from "@/components/ui/PillGroup";
import { SupplyFaq, supplyFaqForSchema } from "@/components/supplyflow/SupplyFaq";
import {
  AccountWatchlistMock,
  CatalogMock,
  SupplyAgentsMock,
  WarehouseMock,
  WorkforceMock,
} from "@/components/supplyflow/mockups";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  supplyFlowOsSchema,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = "/solutions/supplyflow-os";
const title = "SupplyFlowOS — B2B commerce and distribution infrastructure";
const description =
  "SupplyFlowOS puts your distribution business online: a B2B ordering portal, CRM that knows your stock, multi-warehouse inventory, workforce tools, and AI demand forecasting in one system.";

export const metadata: Metadata = {
  title: { absolute: `${title} | DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "B2B ordering portal",
    "distributor CRM",
    "inventory management software for distributors",
    "wholesale distribution software",
    "AI demand forecasting software",
    "multi-warehouse inventory management",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function SupplyFlowOsPage() {
  return (
    <>
      <SupplyHero />
      <LabelledStrip
        ariaLabel="Who SupplyFlowOS is built for"
        label="Built for distributors like you"
        items={SUPPLY_DISTRIBUTORS}
      />
      <WhatStopsSupply />
      <SupplyModules />

      {/*
        Section 01 has its full copy. Sections 02–05 carry labels only: Figma's
        metadata truncates text at ~50 characters and the MCP quota ran out
        before the descriptions could be fetched. The `detail` field on each
        Capability is optional, so filling them in is a one-line edit each.
      */}
      <FeatureBlock
        index="01"
        eyebrow="01 · B2B commerce portal"
        title="A B2B ordering portal your customers use themselves"
        lead="Customers log in, see their prices, and order — day or night, no phone call."
        capabilities={[
          {
            label: "Customer ordering portal",
            detail: "your full catalog, live stock, customer-specific pricing.",
          },
          {
            label: "Account tiers",
            detail: "each customer sees their terms, their history, their rates.",
          },
          {
            label: "Volume pricing",
            detail: "break pricing applied automatically at checkout.",
          },
          {
            label: "Quote request workflows",
            detail: "RFQs submitted, priced, and converted in one thread.",
          },
          {
            label: "Bulk order management",
            detail: "hundred-line orders uploaded from a spreadsheet in one step.",
          },
          {
            label: "Purchase approval chains",
            detail: "buyer orders route to their manager before they hit you.",
          },
        ]}
        mockup={<CatalogMock />}
      />

      <FeatureBlock
        index="02"
        eyebrow="02 · CRM & sales intelligence"
        title="A CRM for distributors that knows your inventory"
        lead="Every account, every order, every conversation — connected to live stock."
        capabilities={[
          { label: "Account management" },
          { label: "Pipeline tracking" },
          { label: "Contact history" },
          { label: "Purchasing pattern analytics" },
          { label: "AI sales assistant" },
          { label: "LinkedIn MCP integration" },
        ]}
        mockup={<AccountWatchlistMock />}
        mediaFirst
      />

      <FeatureBlock
        index="03"
        eyebrow="03 · Inventory & supply chain"
        title="Inventory management software for distributors with more than one warehouse"
        lead="Stock levels update with every order, transfer, and delivery."
        capabilities={[
          { label: "Multi-warehouse management" },
          { label: "Stock level alerts" },
          { label: "Supplier management" },
          { label: "Purchase order automation" },
          { label: "Logistics tracking" },
          { label: "Forecasting" },
        ]}
        mockup={<WarehouseMock />}
      />

      <FeatureBlock
        index="04"
        eyebrow="04 · HRM & workforce"
        title="HR software for warehouse operations, not office jobs"
        lead="Shifts, attendance, and payroll for teams on the floor."
        capabilities={[
          { label: "Payroll processing" },
          { label: "Attendance tracking" },
          { label: "AI resume screening" },
          { label: "Performance management" },
          { label: "Shift scheduling" },
        ]}
        mockup={<WorkforceMock />}
        mediaFirst
      />

      <FeatureBlock
        index="05"
        eyebrow="05 · AI intelligence layer"
        title="AI demand forecasting software wired into your operation"
        lead="The system reads your orders, stock, and invoices — then acts on them."
        capabilities={[
          { label: "Demand forecasting" },
          { label: "Procurement suggestions" },
          { label: "AI invoice extraction" },
          { label: "Sales email drafting" },
          { label: "Customer segmentation" },
          { label: "Churn prediction" },
        ]}
        mockup={<SupplyAgentsMock />}
      />

      <PillGroup
        id="supply-plugs"
        heading="Plugs into what you already run"
        items={SUPPLY_PLUGS}
      />
      <CtaBand
        id="supply-pricing"
        heading="Priced to your order volume"
        subheading="Tell us your SKUs and warehouses. Get a number this week."
        cta={{ label: "Get a Quote", href: "/pricing" }}
      />
      <SupplyFaq />
      <PageCta
        id="supply-cta"
        heading="See it running on your catalog"
        subheading="30 minutes. Your SKUs, your pricing tiers, a live walkthrough."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "SupplyFlowOS", path: PATH },
          ]),
          supplyFlowOsSchema(),
          // Empty until the FAQ answers are transcribed — see SupplyFaq.tsx.
          ...(supplyFaqForSchema.length ? [faqSchema(PATH, supplyFaqForSchema)] : []),
        )}
      />
    </>
  );
}

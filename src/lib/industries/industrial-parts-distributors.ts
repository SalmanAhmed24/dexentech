import type { IndustryPageData } from "./types";
import {
  HUMAN_APPROVAL_NOTE,
  SUPPLYFLOW_AGENT_LOG,
  SUPPLYFLOW_COMMON_FAQ,
  SUPPLYFLOW_CASE_STUDIES,
  SUPPLYFLOW_MODULES,
  SUPPLYFLOW_PLUGS,
  SUPPLYFLOW_RECOMMENDED,
} from "./shared";

export const industrialPartsDistributors: IndustryPageData = {
  slug: "industrial-parts-distributors",
  name: "Industrial Parts Distributors",

  hero: {
    title: "Stop taking orders by phone",
    subtitle:
      "A portal where customers order your catalog themselves — at their prices.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/industrial-parts-distributors.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore SupplyFlowOS",
      href: "/solutions/supplyflow-os",
    },
  },

  problem: {
    body: "Your customers order the same part numbers every month — by phone, by email, by fax. Every order re-keyed is an error waiting, and every hour on order entry is an hour not selling. Meanwhile the distributors winning your accounts have portals that take orders at midnight.",
  },

  whoItsFor: [
    "Industrial parts distributors",
    "MRO suppliers",
    "Fastener and component wholesalers",
    "Distributors with 500+ SKUs",
  ],

  issues: [
    "Orders arriving by phone, email, and PDF — re-keyed into the system",
    "Each account's pricing living in a rep's spreadsheet",
    "Stock counts trusted only after a walk to the shelf",
    "Quotes taking days while customers wait",
    "No warning when a steady account starts ordering less",
  ],

  recommended: SUPPLYFLOW_RECOMMENDED,

  modules: SUPPLYFLOW_MODULES,

  automation: {
    items: [
      "Reorder prompts drafted when an account's cycle comes due",
      "Supplier invoices extracted and entered without typing",
      "SKU-level demand forecast from order history",
      "At-risk accounts flagged while there's time to act",
      "POs proposed from reorder points — approved in one click",
    ],
    log: SUPPLYFLOW_AGENT_LOG,
    // Verbatim from the design, which reuses the hospitality wording — see
    // the note in the handover about "guest-facing" on a B2B page.
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: SUPPLYFLOW_PLUGS,

  caseStudies: SUPPLYFLOW_CASE_STUDIES,

  faq: [
    {
      question:
        "Our pricing is complicated — contract rates, volume breaks, per-customer overrides. Can the portal handle it?",
      answer:
        "That's the core of the portal, not an add-on. Each account logs in and sees exactly their terms.",
    },
    ...SUPPLYFLOW_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your catalog",
    subheading: "30 minutes. Your SKUs, your pricing tiers, a live walkthrough.",
  },

  meta: {
    title: "B2B Ordering Portal for Industrial Parts Distributors",
    description:
      "Stop taking orders by phone: a B2B portal where customers order your catalog at their own contract prices, with live stock, SKU-level demand forecasting, and at-risk accounts flagged early.",
    keywords: [
      "industrial parts distributor software",
      "B2B ordering portal",
      "MRO distributor ecommerce",
      "customer-specific pricing portal",
      "fastener distributor software",
      "distributor order management",
    ],
  },
};

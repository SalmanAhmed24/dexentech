import type { IndustryPageData } from "./types";
import {
  HUMAN_APPROVAL_NOTE,
  SUPPLYFLOW_AGENT_LOG,
  SUPPLYFLOW_CASE_STUDIES,
  SUPPLYFLOW_COMMON_FAQ,
  SUPPLYFLOW_MODULES,
  SUPPLYFLOW_PLUGS,
  SUPPLYFLOW_RECOMMENDED,
} from "./shared";

export const chemicalIndustrialWholesalers: IndustryPageData = {
  slug: "chemical-industrial-wholesalers",
  name: "Chemical & Industrial Wholesalers",

  hero: {
    title: "Compliant by default",
    subtitle:
      "Hazmat documentation, safety data, and regulated ordering — systematized.",
    image: {
      // Stored opaque; alpha 51/255, so the default 20% applies.
      src: "/images/industries/chemical-industrial-wholesalers.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore SupplyFlowOS",
      href: "/solutions/supplyflow-os",
    },
  },

  problem: {
    body: "Every chemical order carries paperwork: SDS sheets, hazmat classes, storage rules, licensed buyers. Handled manually, compliance is a bottleneck; missed, it's a liability.",
  },

  whoItsFor: [
    "Chemical wholesalers",
    "Industrial fluid and gas distributors",
    "Regulated materials suppliers",
  ],

  issues: [
    "SDS sheets sent by request, sometimes outdated",
    "License checks done from memory",
    "Hazmat shipping docs assembled per order",
    "Segregated storage tracked informally",
    "Price volatility updated late across accounts",
  ],

  recommended: SUPPLYFLOW_RECOMMENDED,

  modules: SUPPLYFLOW_MODULES,

  automation: {
    items: [
      "Current SDS attached to every order automatically",
      "Buyer license verification before checkout",
      "Hazmat documentation generated per shipment",
      "Cost changes propagated to account pricing for approval",
    ],
    log: SUPPLYFLOW_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: SUPPLYFLOW_PLUGS,

  caseStudies: SUPPLYFLOW_CASE_STUDIES,

  faq: [
    {
      question:
        "Does it block sales of restricted products to unverified buyers?",
      answer:
        "Yes — license and verification rules gate checkout per product class.",
    },
    ...SUPPLYFLOW_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your product classes",
    subheading:
      "30 minutes. Your compliance rules, your accounts, a live walkthrough.",
  },

  meta: {
    title: "Compliance and Ordering Software for Chemical & Industrial Wholesalers",
    description:
      "Compliant by default: current SDS attached to every order, buyer licences verified before checkout, hazmat shipping documentation generated per shipment, and cost changes propagated to account pricing.",
    keywords: [
      "chemical distributor software",
      "SDS management software",
      "hazmat documentation software",
      "regulated product ordering system",
      "chemical wholesaler ERP",
      "buyer license verification",
    ],
  },
};

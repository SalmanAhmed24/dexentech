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

export const constructionMaterialsSuppliers: IndustryPageData = {
  slug: "construction-materials-suppliers",
  name: "Construction Materials Suppliers",

  hero: {
    title: "Quotes out before lunch",
    subtitle: "Project pricing, site delivery, and credit accounts — one system.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/construction-materials-suppliers.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore SupplyFlowOS",
      href: "/solutions/supplyflow-os",
    },
  },

  problem: {
    body: "Construction sales run on quotes and credit — big, project-priced, and time-sensitive. A quote that takes three days loses to the yard across town, and credit exposure hides in spreadsheets.",
  },

  whoItsFor: [
    "Builders' merchants",
    "Construction materials suppliers",
    "Timber, steel, and aggregates yards",
  ],

  issues: [
    "Quotes assembled from supplier price lists by hand",
    "Project pricing per job, tracked nowhere central",
    "Site deliveries coordinated by phone",
    "Credit limits checked after the order",
    "Returns and restocks eating margin invisibly",
  ],

  recommended: SUPPLYFLOW_RECOMMENDED,

  modules: SUPPLYFLOW_MODULES,

  automation: {
    items: [
      "Quotes drafted from take-off lists",
      "Credit exposure flagged before release",
      "Delivery slots planned per site and vehicle",
      "Project reorder prompts as build stages progress",
    ],
    log: SUPPLYFLOW_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: SUPPLYFLOW_PLUGS,

  caseStudies: SUPPLYFLOW_CASE_STUDIES,

  faq: [
    {
      question: "Can it quote per project, not just per SKU?",
      answer:
        "Yes — project pricing lives on the job, and every order against it tracks to that margin.",
    },
    ...SUPPLYFLOW_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your projects",
    subheading: "30 minutes. Your quotes, your credit terms, a live walkthrough.",
  },

  meta: {
    title: "Quoting and Ordering Software for Construction Materials Suppliers",
    description:
      "Quotes out before lunch: project pricing tracked per job, quotes drafted from take-off lists, credit exposure flagged before release, and site deliveries planned per vehicle.",
    keywords: [
      "construction materials supplier software",
      "builders merchant software",
      "construction quoting software",
      "timber yard management system",
      "trade credit management",
      "site delivery scheduling software",
    ],
  },
};

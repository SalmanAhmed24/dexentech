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

export const medicalLaboratorySuppliers: IndustryPageData = {
  slug: "medical-laboratory-suppliers",
  name: "Medical & Laboratory Suppliers",

  hero: {
    title: "Traceable from shelf to lab",
    subtitle:
      "Lot tracking, expiry control, and compliance built into ordering.",
    image: {
      // Stored opaque. This export's alpha is 92/255, not the usual 51, so it
      // shows through at 36% rather than 20%. Contrast still clears 10.4:1.
      src: "/images/industries/medical-laboratory-suppliers.webp",
      alt: "",
      opacity: 0.36,
    },
    secondaryCta: {
      label: "Explore SupplyFlowOS",
      href: "/solutions/supplyflow-os",
    },
  },

  problem: {
    body: "Medical supply isn't just distribution — it's documentation. Lot numbers, expiry dates, and chain-of-custody have to survive an audit, and spreadsheets don't.",
  },

  whoItsFor: [
    "Medical suppliers",
    "Laboratory supply companies",
    "Dental and clinical distributors",
  ],

  issues: [
    "Lot and expiry tracked in spreadsheets",
    "Recalls traced by hand across customers",
    "Compliance documents chased per order",
    "Restricted products sold without systematic checks",
    "Back-orders communicated late",
  ],

  recommended: SUPPLYFLOW_RECOMMENDED,

  modules: SUPPLYFLOW_MODULES,

  automation: {
    items: [
      "Expiring lots flagged and prioritized",
      "Recall traces generated in minutes, not days",
      "Compliance docs attached to orders automatically",
      "Demand forecast per clinic ordering cycle",
    ],
    log: SUPPLYFLOW_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: SUPPLYFLOW_PLUGS,

  caseStudies: SUPPLYFLOW_CASE_STUDIES,

  faq: [
    {
      question:
        "Can it trace a lot number across every customer who received it?",
      answer:
        "Yes — lot-level tracking is native; a recall trace is a query, not a project.",
    },
    ...SUPPLYFLOW_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your lot numbers",
    subheading:
      "30 minutes. Your compliance rules, your catalog, a live walkthrough.",
  },

  meta: {
    title: "Lot Tracking and Ordering Software for Medical & Laboratory Suppliers",
    description:
      "Traceable from shelf to lab: lot and expiry tracking built into ordering, recall traces in minutes, compliance documents attached to every order, and restricted products checked systematically.",
    keywords: [
      "medical supply distributor software",
      "lot tracking software",
      "laboratory supply ordering system",
      "recall traceability software",
      "expiry date management",
      "dental supply distributor software",
    ],
  },
};

import type { IndustryPageData } from "./types";
import {
  HOSPITALITY_AGENT_LOG,
  HOSPITALITY_CASE_STUDIES,
  HOSPITALITY_COMMON_FAQ,
  HOSPITALITY_MODULES,
  HOSPITALITY_PLUGS,
  HOSPITALITY_RECOMMENDED,
  HUMAN_APPROVAL_NOTE,
} from "./shared";

export const servicedApartments: IndustryPageData = {
  slug: "serviced-apartments",
  name: "Serviced Apartments",

  hero: {
    title: "Built for 30-night stays",
    subtitle:
      "Long stays, corporate accounts, and monthly billing — handled as designed, not workarounds.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/serviced-apartments.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore HospitalityOS",
      href: "/solutions/hospitality-os",
    },
  },

  problem: {
    body: "Hotel software assumes 2-night stays; serviced apartments live on monthly invoices, corporate accounts, and mid-stay housekeeping cycles that PMS tools treat as edge cases.",
  },

  whoItsFor: [
    "Serviced apartment operators",
    "Corporate housing providers",
    "Aparthotel groups",
  ],

  issues: [
    "Monthly invoicing done manually",
    "Corporate rate agreements in spreadsheets",
    "Mid-stay cleaning scheduled ad hoc",
    "Deposits and utilities reconciled by hand",
    "Extension requests lost in email",
  ],

  recommended: HOSPITALITY_RECOMMENDED,

  modules: HOSPITALITY_MODULES,

  automation: {
    items: [
      "Corporate account billing generated monthly",
      "Extension offers before checkout dates",
      "Housekeeping cycles per stay length",
      "Occupancy forecast by corporate season",
    ],
    log: HOSPITALITY_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: HOSPITALITY_PLUGS,

  caseStudies: HOSPITALITY_CASE_STUDIES,

  faq: [
    {
      question:
        "Can it invoice corporate accounts monthly with their negotiated rates?",
      answer:
        "Yes — rate agreements live on the account; invoices generate from them.",
    },
    ...HOSPITALITY_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your units",
    subheading:
      "30 minutes. Your accounts, your billing cycles, a live walkthrough.",
  },

  meta: {
    title: "Serviced Apartment Management Software for Long Stays",
    description:
      "Built for 30-night stays: corporate account billing generated monthly, negotiated rate agreements held on the account, housekeeping cycles by stay length, and extension offers before checkout.",
    keywords: [
      "serviced apartment software",
      "corporate housing management software",
      "aparthotel management system",
      "long stay booking software",
      "monthly invoicing hospitality",
      "extended stay property management",
    ],
  },
};

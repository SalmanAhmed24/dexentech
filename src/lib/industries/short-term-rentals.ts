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

export const shortTermRentals: IndustryPageData = {
  slug: "short-term-rentals",
  name: "Short-Term Rental Management",

  hero: {
    title: "Every unit. One dashboard.",
    subtitle:
      "Pricing, cleaning, and guest messaging across your whole portfolio.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/short-term-rentals.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore HospitalityOS",
      href: "/solutions/hospitality-os",
    },
  },

  problem: {
    body: "5–100 units means 5–100 calendars, cleaner handoffs, and guest threads; one missed turnover is a refund and a review.",
  },

  whoItsFor: [
    "STR managers with 5–100 units",
    "Airbnb/VRBO portfolio operators",
    "Co-hosts scaling past spreadsheets",
  ],

  issues: [
    "Calendars per listing per platform",
    "Cleaner scheduling by group chat",
    "Same-day turnovers missed",
    "Owner statements built by hand monthly",
    "Pricing tools disconnected from operations",
  ],

  recommended: HOSPITALITY_RECOMMENDED,

  modules: HOSPITALITY_MODULES,

  automation: {
    items: [
      "Per-unit dynamic pricing",
      "Cleaner routes planned around checkouts",
      "Guest messaging from booking to review",
      "Owner reports generated monthly",
    ],
    log: HOSPITALITY_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: HOSPITALITY_PLUGS,

  caseStudies: HOSPITALITY_CASE_STUDIES,

  faq: [
    {
      question: "Do owners get their own view?",
      answer:
        "Yes — owner statements and dashboards per unit, generated from live data.",
    },
    ...HOSPITALITY_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your portfolio",
    subheading: "30 minutes. Your units, your platforms, a live walkthrough.",
  },

  meta: {
    title: "Short-Term Rental Management Software for Portfolios",
    description:
      "Run 5 to 100 units from one dashboard: per-unit dynamic pricing, cleaner routing around checkouts, guest messaging from booking to review, and owner statements generated from live data.",
    keywords: [
      "short-term rental management software",
      "Airbnb property management software",
      "vacation rental software",
      "STR channel manager",
      "cleaner scheduling software",
      "owner statement automation",
    ],
  },
};

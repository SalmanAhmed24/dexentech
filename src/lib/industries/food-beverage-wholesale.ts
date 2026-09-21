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

export const foodBeverageWholesale: IndustryPageData = {
  slug: "food-beverage-wholesale",
  name: "Food & Beverage Wholesale",

  hero: {
    title: "Orders in by 6am",
    subtitle:
      "Cut-off ordering, route delivery, and rotating stock — built for perishables.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/food-beverage-wholesale.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore SupplyFlowOS",
      href: "/solutions/supplyflow-os",
    },
  },

  problem: {
    body: "Perishables punish slow systems twice: stockouts lose the order, overstock goes in the bin. Daily cut-offs, delivery routes, and catch-weight items break generic ordering tools.",
  },

  whoItsFor: [
    "Food and beverage wholesalers",
    "Produce and dairy distributors",
    "HORECA suppliers",
  ],

  issues: [
    "Order cut-offs enforced by phone staff",
    "Standing orders tracked on paper",
    "Expiry and rotation managed by eye",
    "Catch-weight pricing corrected after delivery",
    "Route sheets built manually each morning",
  ],

  recommended: SUPPLYFLOW_RECOMMENDED,

  modules: SUPPLYFLOW_MODULES,

  automation: {
    items: [
      "Demand forecast by weekday and season",
      "Standing orders confirmed by WhatsApp automatically",
      "Short-dated stock flagged for promotion",
      "Pick lists sequenced by route",
    ],
    log: SUPPLYFLOW_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: SUPPLYFLOW_PLUGS,

  caseStudies: SUPPLYFLOW_CASE_STUDIES,

  faq: [
    {
      question: "Can it handle catch-weight and daily price changes?",
      answer:
        "Yes — weight-based pricing settles on actuals, and price lists update daily per account.",
    },
    ...SUPPLYFLOW_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your routes",
    subheading: "30 minutes. Your cut-offs, your routes, a live walkthrough.",
  },

  meta: {
    title: "Ordering and Inventory Software for Food & Beverage Wholesalers",
    description:
      "Orders in by 6am: cut-off ordering, standing orders confirmed on WhatsApp, catch-weight pricing settled on actuals, short-dated stock flagged, and pick lists sequenced by delivery route.",
    keywords: [
      "food wholesale software",
      "food distributor ordering system",
      "catch weight pricing software",
      "HORECA supplier platform",
      "produce distributor software",
      "route delivery planning wholesale",
    ],
  },
};

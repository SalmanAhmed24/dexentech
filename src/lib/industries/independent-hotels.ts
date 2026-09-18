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

export const independentHotels: IndustryPageData = {
  slug: "independent-hotels",
  name: "Independent Hotels",

  hero: {
    title: "Run your hotel like a group",
    subtitle: "The systems chains have — priced for 10 to 200 rooms.",
    image: {
      // Figma node 135:1356, stored opaque; the hero applies the 20% dimming.
      src: "/images/industries/independent-hotels.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore HospitalityOS",
      href: "/solutions/hospitality-os",
    },
  },

  problem: {
    body: "Chains have revenue managers, channel teams, and IT departments. You have a front desk and a full inbox. Independent hotels lose to chains not on service — on systems: rooms priced flat while demand moves, OTA commissions unexamined, and a manager doing three software jobs by hand.",
  },

  whoItsFor: [
    "Independent hotels with 10–200 rooms",
    "Owner-operated properties",
    "Hotels leaving legacy PMS contracts",
    "Properties adding direct booking",
  ],

  issues: [
    "Rates set once a season and left there",
    "Booking.com, Airbnb, and Expedia managed in separate tabs",
    "Housekeeping run from a printed sheet",
    "Guest emails answered between check-ins",
    "Month-end closed from OTA statements by hand",
  ],

  recommended: HOSPITALITY_RECOMMENDED,

  modules: HOSPITALITY_MODULES,

  automation: {
    items: [
      "Nightly rate suggestions from occupancy forecasts — applied on your approval",
      "Guest questions answered on WhatsApp in seconds, in their language",
      "Housekeeping assigned the moment a checkout lands",
      "Review requests timed to happy stays",
      "OTA payouts reconciled to reservations automatically",
    ],
    log: HOSPITALITY_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: HOSPITALITY_PLUGS,

  caseStudies: HOSPITALITY_CASE_STUDIES,

  faq: [
    {
      question: "We're mid-contract with our PMS. Can we still start?",
      answer:
        "Yes. We integrate alongside it and migrate when the contract allows — channel sync and guest messaging can go live first.",
    },
    ...HOSPITALITY_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your room count",
    subheading: "30 minutes. Your channels, your rates, a live walkthrough.",
  },

  meta: {
    title: "AI Hotel Management Software for Independent Hotels",
    description:
      "Run your independent hotel like a group: channel sync across Booking.com, Airbnb, Expedia and VRBO, dynamic pricing, WhatsApp guest messaging, and reconciled finance — priced for 10 to 200 rooms.",
    keywords: [
      "independent hotel software",
      "hotel management software small hotels",
      "channel manager for independent hotels",
      "hotel PMS replacement",
      "direct booking system",
      "hotel dynamic pricing software",
    ],
  },
};

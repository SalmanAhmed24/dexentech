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

export const hostelGroups: IndustryPageData = {
  slug: "hostel-groups",
  name: "Hostel Groups",

  hero: {
    title: "Beds, not just rooms",
    subtitle:
      "Dorm-level inventory, group bookings, and events — one system across properties.",
    image: {
      // Figma node 135:4496, stored opaque; the hero applies the 20% dimming.
      src: "/images/industries/hostel-groups.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore HospitalityOS",
      href: "/solutions/hospitality-os",
    },
  },

  problem: {
    body: "Bed-level inventory breaks normal PMS logic: OTAs sell dorm beds while walk-ins take them, group bookings block dorms by hand, and volunteers and staff rotate faster than training can keep up.",
  },

  whoItsFor: [
    "Hostel groups with 1–5 properties",
    "Party and social hostels",
    "Hostels with bars and events",
  ],

  issues: [
    "Bed allocation by whiteboard",
    "Group bookings blocking dorms manually",
    "Check-in queues at 3pm",
    "Events promoted per-property with no shared guest list",
    "Cash and card takings reconciled by hand",
  ],

  recommended: HOSPITALITY_RECOMMENDED,

  modules: HOSPITALITY_MODULES,

  automation: {
    items: [
      "Dorm/private mix priced by demand",
      "WhatsApp answers for check-in and directions in any language",
      "Turnover routes across dorm blocks",
      "Event upsells to arriving guests",
    ],
    log: HOSPITALITY_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: HOSPITALITY_PLUGS,

  caseStudies: HOSPITALITY_CASE_STUDIES,

  faq: [
    {
      question: "Does it handle bed-level inventory, not just rooms?",
      answer:
        "Yes — beds, dorms, and privates are first-class inventory, synced to OTAs that sell them.",
    },
    ...HOSPITALITY_COMMON_FAQ,
  ],

  cta: {
    heading: "See it on your bed count",
    subheading: "30 minutes. Your dorms, your channels, a live walkthrough.",
  },

  meta: {
    title: "Hostel Management Software for Hostel Groups",
    description:
      "Bed-level inventory, group bookings, and events across every property. Dorm and private mix priced by demand, OTA channels synced, and takings reconciled automatically.",
    keywords: [
      "hostel management software",
      "bed level inventory system",
      "hostel channel manager",
      "dorm booking software",
      "hostel group management",
      "hostel PMS",
    ],
  },
};

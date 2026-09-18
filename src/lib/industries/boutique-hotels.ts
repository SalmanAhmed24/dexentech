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

export const boutiqueHotels: IndustryPageData = {
  slug: "boutique-hotels",
  name: "Boutique Hotels",

  hero: {
    title: "Systems as considered as your property",
    subtitle: "Automation behind the scenes. Your voice in front of guests.",
    image: {
      // Stored opaque; the hero applies the 20% dimming Figma bakes in.
      src: "/images/industries/boutique-hotels.webp",
      alt: "",
    },
    secondaryCta: {
      label: "Explore HospitalityOS",
      href: "/solutions/hospitality-os",
    },
  },

  problem: {
    body: "Boutique properties sell personal service — but personal can't mean manual. The risk of automation is sounding like a chain; the cost of not automating is the owner answering WhatsApp at midnight.",
  },

  whoItsFor: [
    "Boutique hotel groups",
    "Design-led independents",
    "Properties trading on guest experience",
  ],

  // Four here, not the five the other hospitality pages carry.
  issues: [
    "Every guest message handled personally, at all hours",
    "Upsells offered only when someone remembers",
    "Rates held flat to avoid channel fiddling",
    "Guest preferences living in staff memory",
  ],

  recommended: HOSPITALITY_RECOMMENDED,

  modules: HOSPITALITY_MODULES,

  automation: {
    items: [
      "Replies drafted in your property's voice, approved before send",
      "Returning guests recognized with preferences attached",
      "Upsell timing per guest, not per blast",
      "Sentiment flagged before it becomes a review",
    ],
    log: HOSPITALITY_AGENT_LOG,
    note: HUMAN_APPROVAL_NOTE,
  },

  plugs: HOSPITALITY_PLUGS,

  caseStudies: HOSPITALITY_CASE_STUDIES,

  faq: [
    {
      question: "Will automated messages sound like a chain hotel?",
      answer:
        "They're drafted in your voice and can wait for approval — guests get your words, faster.",
    },
    ...HOSPITALITY_COMMON_FAQ,
  ],

  cta: {
    heading: "See it in your voice",
    subheading: "30 minutes. Your property, your tone, a live walkthrough.",
  },

  meta: {
    title: "Boutique Hotel Management Software That Keeps Your Voice",
    description:
      "Automation behind the scenes, your voice in front of guests: replies drafted in your property's tone and approved before send, returning guests recognised, and upsells timed per guest.",
    keywords: [
      "boutique hotel software",
      "boutique hotel management system",
      "guest experience automation",
      "hotel guest messaging in brand voice",
      "design-led hotel PMS",
      "independent hotel guest CRM",
    ],
  },
};

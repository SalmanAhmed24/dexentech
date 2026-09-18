import type { IndustryPageData } from "./types";

/**
 * Blocks the hospitality industry pages share word for word.
 *
 * Independent Hotels and Hostel Groups both recommend HospitalityOS with the
 * same module list, integrations, case studies and agent log — only the
 * industry-specific copy differs. Keeping them here means a change to the
 * module list lands on every page at once instead of five files later.
 */

export const HOSPITALITY_RECOMMENDED: IndustryPageData["recommended"] = {
  product: "HospitalityOS",
  body: "One system for bookings, housekeeping, guests, and finance. Channels sync to one calendar, prices move with demand, and the front desk answers from one screen.",
  href: "/solutions/hospitality-os",
  ctaLabel: "Explore HospitalityOS",
};

export const HOSPITALITY_MODULES = [
  "Booking Infrastructure",
  "Property Management",
  "Guest Experience",
  "Financial Operations",
  "AI Intelligence Layer",
  "MCP Integrations",
] as const;

export const HOSPITALITY_PLUGS = [
  "Booking.com",
  "Airbnb",
  "Expedia",
  "VRBO",
  "WhatsApp Business API",
  "Gmail / Outlook",
  "Xero",
  "QuickBooks",
  "Stripe",
  "Key management systems",
] as const;

export const HOSPITALITY_AGENT_LOG = [
  { agent: "agent/pricing", result: "nightly rates proposed · awaiting approval" },
  { agent: "agent/guest-comms", result: "replied on WhatsApp in 8s" },
  { agent: "agent/housekeeping", result: "turnovers assigned on checkout" },
  { agent: "agent/finance", result: "OTA payouts reconciled" },
] as const;

export const HUMAN_APPROVAL_NOTE =
  "Human approval required for money + guest-facing actions";

export const HOSPITALITY_CASE_STUDIES = [
  {
    title: "Hotel Booking System",
    blurb: "Channel sync across four OTAs. Read the case study.",
    href: "/case-studies",
  },
  {
    title: "WhatsApp Hotel Concierge",
    blurb: "Guest questions answered around the clock. Read the case study.",
    href: "/case-studies",
  },
] as const;

/**
 * The three closing questions every hospitality page repeats. Each page puts
 * its own industry-specific question first, then spreads these.
 */
export const HOSPITALITY_COMMON_FAQ = [
  {
    question: "Is this overkill for a small property?",
    answer:
      "Pricing scales with room count. Small properties typically start with booking sync and messaging, and add modules as they pay for themselves.",
  },
  {
    question: "Will my staff manage without training?",
    answer:
      "The system runs on phones and looks like the apps they already use. Setup includes staff training; most teams run independently within a week.",
  },
  {
    question: "What does it cost against what we pay now?",
    answer:
      "Most operators replace 3–4 subscriptions (channel manager, PMS, messaging, pricing tool) with one. The quote shows the line-by-line comparison.",
  },
] as const;

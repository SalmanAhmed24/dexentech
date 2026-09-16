import type { Metadata } from "next";
import { HospitalityHero } from "@/components/hospitality/HospitalityHero";
import { FeatureBlock } from "@/components/hospitality/FeatureBlock";
import {
  CoreModules,
  HOSPITALITY_FAQ,
  HospitalityCta,
  HospitalityFaq,
  OperatorStrip,
  PlugsInto,
  PricingBand,
  WhatStops,
} from "@/components/hospitality/sections";
import {
  AgentsMock,
  ChannelSyncMock,
  FinanceMock,
  RoomStatusMock,
  WhatsAppMock,
} from "@/components/hospitality/mockups";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  hospitalityOsSchema,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = "/solutions/hospitality-os";
const title = "HospitalityOS — AI hotel management software";
const description =
  "HospitalityOS runs bookings, housekeeping, guests, and finance from one system. Channel sync across Booking.com, Airbnb, Expedia, and VRBO ends double-bookings for good.";

export const metadata: Metadata = {
  title: { absolute: `${title} | DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI hotel management software",
    "hotel booking software",
    "channel manager",
    "property management software",
    "hotel guest messaging software",
    "hotel financial management software",
  ],
  openGraph: {
    type: "website",
    url: PATH,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function HospitalityOsPage() {
  return (
    <>
      <HospitalityHero />
      <OperatorStrip />
      <WhatStops />
      <CoreModules />

      {/* Mockups alternate sides, matching the Figma layout */}
      <FeatureBlock
        index="01"
        eyebrow="01 · Booking infrastructure"
        title="Hotel booking software that ends double-bookings"
        lead="Every channel writes to one calendar. When a room sells, it sells everywhere at once."
        capabilities={[
          {
            label: "OTA channel sync",
            detail:
              "Booking.com, Airbnb, Expedia, and VRBO integrations update in real time.",
          },
          {
            label: "Availability management",
            detail: "one source of truth for every room, every date.",
          },
          {
            label: "Dynamic pricing engine",
            detail: "rates move with demand instead of sitting still.",
          },
          {
            label: "Direct booking website",
            detail: "take commission-free reservations on your own domain.",
          },
        ]}
        mockup={<ChannelSyncMock />}
      />

      <FeatureBlock
        index="02"
        eyebrow="02 · Property management"
        title="Property management software for hotels that run lean"
        lead="Your team sees room status, tasks, and tickets from their phones — not a whiteboard."
        capabilities={[
          { label: "Room status boards" },
          { label: "Housekeeping assignment" },
          { label: "Maintenance ticketing" },
          { label: "Check-in/out workflows" },
          { label: "Digital key support" },
          { label: "Staff mobile access" },
        ]}
        mockup={<RoomStatusMock />}
        mediaFirst
      />

      <FeatureBlock
        index="03"
        eyebrow="03 · Guest experience"
        title="Hotel guest messaging software guests actually answer"
        lead="Guests message you on WhatsApp. HospitalityOS replies in seconds, in their language."
        capabilities={[
          { label: "Pre-arrival messaging" },
          { label: "WhatsApp concierge" },
          { label: "Multilingual communication" },
          { label: "Upsell automation" },
          { label: "Review collection" },
          { label: "Guest loyalty tracking" },
        ]}
        mockup={<WhatsAppMock />}
      />

      <FeatureBlock
        index="04"
        eyebrow="04 · Financial operations"
        title="Hotel financial management software in one dashboard"
        lead="Every booking, payout, and commission reconciled in one place — closed in hours, not weeks."
        capabilities={[
          {
            label: "Unified invoicing",
            detail: "one invoice trail across direct and OTA bookings.",
          },
          {
            label: "Payment reconciliation",
            detail: "payouts matched to reservations automatically.",
          },
          {
            label: "OTA commission tracking",
            detail: "see what each channel actually costs you.",
          },
          {
            label: "Occupancy reporting",
            detail: "nights sold, by property, by channel, by date.",
          },
          {
            label: "ADR reporting",
            detail: "rate performance tracked against your market.",
          },
          {
            label: "VAT/tax dashboard",
            detail: "filings prepared from data you already have.",
          },
        ]}
        mockup={<FinanceMock />}
        mediaFirst
      />

      <FeatureBlock
        index="05"
        eyebrow="05 · AI intelligence layer"
        title="AI hotel automation software that earns its keep"
        lead="The system watches your numbers and acts — you approve, it executes."
        capabilities={[
          { label: "Occupancy forecasting" },
          { label: "Dynamic pricing suggestions" },
          { label: "Guest sentiment analysis" },
          { label: "Cleaner scheduling optimization" },
          { label: "Front desk support copilot" },
        ]}
        mockup={<AgentsMock />}
      />

      <PlugsInto />
      <PricingBand />
      <HospitalityFaq />
      <HospitalityCta />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: "HospitalityOS", path: PATH },
          ]),
          faqSchema(PATH, HOSPITALITY_FAQ),
          // This is the canonical page for the HospitalityOS entity, so the
          // full SoftwareApplication node lives here. It shares an @id with
          // the shorter reference on /solutions, so they resolve to one thing.
          hospitalityOsSchema(),
        )}
      />
    </>
  );
}

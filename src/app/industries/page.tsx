import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IndustryColumns } from "@/components/industries/IndustryColumns";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  industriesItemList,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = "/industries";
const title = "AI Operational Systems by Industry";
const description =
  "The same problems repeat inside an industry — and so do the fixes. AI operational systems for hotels, hostels, short-term rentals, distributors, and wholesalers.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI systems by industry",
    "hotel management software",
    "hostel management software",
    "short-term rental software",
    "distributor software",
    "wholesale commerce platform",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries · AI operational systems by industry"
        title="Your industry. Your system."
        subtitle="The same problems repeat inside an industry. So do the fixes."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <IndustryColumns />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: PATH },
          ]),
          // Gives crawlers and answer engines the full list of industries
          // served, in the order the page shows them.
          industriesItemList(),
        )}
      />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  graph,
  productSchemas,
  webPageSchema,
} from "@/lib/structured-data";

const title = "Systems built for your industry";
const description =
  "Three AI operational systems for operators: HospitalityOS for properties, SupplyFlowOS for distributors, and AI Intelligence Systems for teams whose software should think.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    url: "/solutions",
    title: `${title} — DexenTech`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — DexenTech`,
    description,
  },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · industry-specific AI operational systems"
        title={title}
        subtitle="Not one tool for everyone — an operating system for your operation."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <SolutionCards />

      {/*
        productSchemas() is reused from the home page on purpose. Both pages
        describe the same two SoftwareApplication entities, and they share an
        @id, so search engines resolve them to one thing rather than two.
      */}
      <JsonLd
        data={graph(
          webPageSchema({ path: "/solutions", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
          productSchemas(),
        )}
      />
    </>
  );
}

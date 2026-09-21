import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TechGrid } from "@/components/technologies/TechGrid";
import { JsonLd } from "@/components/JsonLd";
import { TECHNOLOGIES } from "@/lib/technologies";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";

const PATH = "/technology-stack";
const title = "Technology Stack for AI Automation and Software Systems";
const description =
  "The production tools DexenTech builds on — n8n, LangGraph, Temporal, WhatsApp Business API, Next.js, Supabase, PostgreSQL, Stripe, Redis, React Native, Vercel, and Railway. No lock-in.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI automation technology stack",
    "n8n automation agency",
    "LangGraph development",
    "Temporal workflows development",
    "WhatsApp Business API integration",
    "Next.js Supabase development",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

/**
 * The stack as an ItemList, so answer engines fielding "what does DexenTech
 * build with" get an explicit list rather than inferring it from cards.
 */
function stackSchema() {
  return {
    "@type": "ItemList",
    "@id": new URL(`${PATH}#stack`, site.url).toString(),
    name: "Technologies DexenTech builds on",
    numberOfItems: TECHNOLOGIES.length,
    itemListElement: TECHNOLOGIES.map((tech, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tech.name,
      description: tech.description,
    })),
  };
}

export default function TechnologyStackPage() {
  return (
    <>
      {/*
        The design's hero background is a violet bloom under a hairline —
        exactly what PageHero already paints in CSS. Reusing it keeps this hero
        identical to the other centred ones instead of layering the effect
        twice.
      */}
      <PageHero
        eyebrow="Technologies · what our systems are built on"
        title="Built on infrastructure that survives"
        subtitle="Production tools used by companies far bigger than us. No lock-in."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />

      <TechGrid />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Technology Stack", path: PATH },
          ]),
          stackSchema(),
        )}
      />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/JsonLd";
import { PRICING } from "@/lib/pricing";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";

const PATH = "/pricing";
const title = "AI Automation and Software Development Pricing";
const description =
  "Scoped per project and priced in writing — no hourly surprises. How DexenTech prices HospitalityOS, SupplyFlowOS, AI infrastructure, MCP integrations, workflow automation, and custom software.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI automation pricing",
    "software development pricing",
    "fixed price software development",
    "hotel management software pricing",
    "B2B ordering portal pricing",
    "MCP integration pricing",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

/*
  An ItemList of offerings with their pricing basis. Deliberately no Offer or
  PriceSpecification: there are no published figures, and inventing a price
  field for rich results would misrepresent a quote-based model.
*/
function pricingSchema() {
  return {
    "@type": "ItemList",
    "@id": new URL(`${PATH}#pricing`, site.url).toString(),
    name: "How DexenTech prices its work",
    numberOfItems: PRICING.length,
    itemListElement: PRICING.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      description: item.basis,
      url: new URL(item.href, site.url).toString(),
    })),
  };
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing · scoped per project, in writing"
        title="A number before we start"
        subtitle="Scoped per project. Priced in writing. No hourly surprises."
        cta={{ label: "Get a Quote", href: "/contact" }}
      />

      <CardGrid
        ariaLabel="How each offering is priced"
        cards={PRICING.map((item, i) => ({
          tag: `Pricing ${String(i + 1).padStart(2, "0")}`,
          title: item.title,
          body: item.basis,
          href: item.href,
        }))}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: PATH },
          ]),
          pricingSchema(),
        )}
      />
    </>
  );
}

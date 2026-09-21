import type { Metadata } from "next";
import { IndustryUseCases } from "@/components/services/IndustryUseCases";
import { ServicesHero } from "@/components/services/ServicesHero";
import { StackSection } from "@/components/services/StackSection";
import { AutomationPillars, FivePhases } from "@/components/services/sections";
import { PageCta } from "@/components/ui/PageCta";
import { JsonLd } from "@/components/JsonLd";
import { PHASES, PILLARS } from "@/lib/services";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";

const PATH = "/services";
const title = "AI Workflow Automation Services";
const description =
  "Turn manual processes into reliable automated pipelines — data entry, customer support, document parsing, and reporting — built on infrastructure you own. Live in production in four weeks.";

export const metadata: Metadata = {
  title: { absolute: `${title} — DexenTech` },
  description,
  alternates: { canonical: PATH },
  keywords: [
    "AI workflow automation services",
    "business process automation",
    "document parsing automation",
    "AI customer support agents",
    "data entry automation",
    "automated reporting",
    "n8n LangGraph Temporal development",
  ],
  openGraph: { type: "website", url: PATH, title, description },
  twitter: { card: "summary_large_image", title, description },
};

/**
 * Service entity with its four offerings and the delivery process as a
 * HowTo-style ItemList. Every value is read from the same data the page
 * renders, so the schema can't drift from what visitors see.
 */
function servicesSchema() {
  const url = new URL(PATH, site.url).toString();
  return [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: title,
      serviceType: "AI workflow automation",
      description,
      provider: { "@id": new URL("/#organization", site.url).toString() },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automation pillars",
        itemListElement: PILLARS.map((pillar) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${pillar.title} automation`,
            description: pillar.body,
          },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#process`,
      name: "How we work — five phases",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: PHASES.length,
      itemListElement: PHASES.map((phase, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: phase.title,
        description: `${phase.body} Deliverable: ${phase.deliverable}`,
      })),
    },
  ];
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AutomationPillars />
      <IndustryUseCases />
      <StackSection />
      <FivePhases />

      <PageCta
        id="services-cta"
        eyebrow="Ready to start"
        heading="Find out what your operation costs you."
        subheading="One call. We'll map where automation applies, what it saves, and what it costs to build."
        cta={{ label: "Book a Strategy Call", href: "/contact", arrow: true }}
        secondaryCta={{ label: "Get a Quote", href: "/pricing" }}
      />

      <JsonLd
        data={graph(
          webPageSchema({ path: PATH, name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: PATH },
          ]),
          servicesSchema(),
        )}
      />
    </>
  );
}

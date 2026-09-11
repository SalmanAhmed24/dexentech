import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { IntegrationsMarquee } from "@/components/sections/IntegrationsMarquee";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { BuiltForOperators } from "@/components/sections/BuiltForOperators";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";
import { AiInfrastructure } from "@/components/sections/AiInfrastructure";
import { TechStack } from "@/components/sections/TechStack";
import { FairQuestions, FAIR_QUESTIONS } from "@/components/sections/FairQuestions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  productSchemas,
  webPageSchema,
} from "@/lib/structured-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  // `absolute` opts out of the "%s — DexenTech" template, because the brand is
  // already carried by the Organization schema and the title is at its limit.
  title: {
    absolute: "AI Operational Systems for Hospitality and B2B Commerce — DexenTech",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Figma Home frame 53:2195, in scroll order */}
      <Hero />
      <IntegrationsMarquee />
      <ValuePillars />
      <WhatWeBuild />
      <BuiltForOperators />
      <FeaturedSolutions />
      <ProblemsSolved />
      <AiInfrastructure />
      <TechStack />
      <FairQuestions />
      <CaseStudies />
      <ClosingCta />

      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: "AI Operational Systems for Hospitality and B2B Commerce",
            description: site.description,
            primaryImage: "/images/hero-figure.png",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          productSchemas(),
          faqSchema("/", FAIR_QUESTIONS),
        )}
      />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { IntegrationsMarquee } from "@/components/sections/IntegrationsMarquee";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { BuiltForOperators } from "@/components/sections/BuiltForOperators";
import { FeaturedSolutions } from "@/components/sections/FeaturedSolutions";
import { ProblemsSolved } from "@/components/sections/ProblemsSolved";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
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

      {/*
        Still to come — see README "Remaining Home sections":
        53:2358, 53:3718, 53:2455, 53:3744, 63:5230
      */}

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
        )}
      />
    </>
  );
}

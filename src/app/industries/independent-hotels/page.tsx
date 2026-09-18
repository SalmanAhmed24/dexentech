import type { Metadata } from "next";
import { IndustryTemplate } from "@/components/industry/IndustryTemplate";
import { JsonLd } from "@/components/JsonLd";
import { independentHotels as data } from "@/lib/industries/independent-hotels";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  hospitalityOsSchema,
  webPageSchema,
} from "@/lib/structured-data";

const PATH = `/industries/${data.slug}`;

export const metadata: Metadata = {
  title: { absolute: `${data.meta.title} — DexenTech` },
  description: data.meta.description,
  alternates: { canonical: PATH },
  keywords: data.meta.keywords,
  openGraph: {
    type: "website",
    url: PATH,
    title: data.meta.title,
    description: data.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: data.meta.title,
    description: data.meta.description,
  },
};

export default function IndependentHotelsPage() {
  return (
    <>
      <IndustryTemplate data={data} />

      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            name: data.meta.title,
            description: data.meta.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: data.name, path: PATH },
          ]),
          faqSchema(PATH, data.faq),
          // The page recommends this product, so reference the same entity the
          // HospitalityOS page defines rather than describing it again.
          hospitalityOsSchema(),
        )}
      />
    </>
  );
}

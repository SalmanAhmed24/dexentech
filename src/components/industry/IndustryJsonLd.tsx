import { JsonLd } from "@/components/JsonLd";
import type { IndustryPageData } from "@/lib/industries/types";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  hospitalityOsSchema,
  supplyFlowOsSchema,
  webPageSchema,
} from "@/lib/structured-data";

/**
 * Structured data for an industry page.
 *
 * The product entity is chosen from what the page actually recommends. The
 * routes used to hard-code hospitalityOsSchema(), which was right for the five
 * hospitality pages and would have silently told search engines a distributor
 * page recommends a hotel system.
 */
const PRODUCT_SCHEMA: Record<string, () => object> = {
  "/solutions/hospitality-os": hospitalityOsSchema,
  "/solutions/supplyflow-os": supplyFlowOsSchema,
};

export function IndustryJsonLd({ data }: { data: IndustryPageData }) {
  const path = `/industries/${data.slug}`;
  const product = PRODUCT_SCHEMA[data.recommended.href];

  return (
    <JsonLd
      data={graph(
        webPageSchema({
          path,
          name: data.meta.title,
          description: data.meta.description,
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: data.name, path },
        ]),
        faqSchema(path, data.faq),
        ...(product ? [product()] : []),
      )}
    />
  );
}

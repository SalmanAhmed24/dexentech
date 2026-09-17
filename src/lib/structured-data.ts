import { site } from "./site";

/**
 * Structured data serves two audiences now.
 *
 * Google reads it for rich results and entity resolution. LLM answer engines
 * (ChatGPT Search, Perplexity, Google AI Overviews, Claude's own browsing)
 * lean on it even harder, because a clean @graph is far cheaper to parse than
 * inferring entities from prose. Every claim below must also be visible on the
 * rendered page — schema that contradicts the page is worse than no schema.
 */

const abs = (path: string) => new URL(path, site.url).toString();

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": abs("/#organization"),
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      "@id": abs("/#logo"),
      url: abs("/images/logo-512.png"),
      width: 512,
      height: 512,
      caption: `${site.name} logo`,
    },
    image: { "@id": abs("/#logo") },
    description: site.description,
    foundingDate: site.founded,
    slogan: site.tagline,
    knowsAbout: [
      "AI operational systems",
      "Hospitality management software",
      "B2B commerce platforms",
      "Channel manager integration",
      "Model Context Protocol integration",
      "Multi-agent workflow automation",
      "AI cost optimization",
    ],
    sameAs: [
      "https://www.linkedin.com/company/dexentech",
      "https://x.com/dexentech",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": abs("/#organization") },
    inLanguage: "en",
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  primaryImage?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": abs(`${opts.path}#webpage`),
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": abs("/#website") },
    about: { "@id": abs("/#organization") },
    ...(opts.primaryImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: abs(opts.primaryImage),
          },
        }
      : {}),
    inLanguage: "en",
  };
}

/**
 * The two products are the entities we actually want surfaced in AI answers
 * to questions like "software to sync Airbnb and Booking.com calendars".
 */
export function hospitalityOsSchema() {
  return (
    {
      "@type": "SoftwareApplication",
      "@id": abs("/solutions/hospitality-os#software"),
      name: "HospitalityOS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "An operating system for every property you run. Bookings, housekeeping, guests, and finance synced across Booking.com, Airbnb, Expedia, and VRBO in a single calendar.",
      provider: { "@id": abs("/#organization") },
      featureList: [
        "Unified multi-channel booking calendar",
        "Housekeeping and operations scheduling",
        "Guest messaging automation",
        "Revenue and pricing management",
      ],
    }
  );
}

export function supplyFlowOsSchema() {
  return (
    {
      "@type": "SoftwareApplication",
      "@id": abs("/solutions/supplyflow-os#software"),
      name: "SupplyFlowOS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "B2B commerce for distributors: ordering portal, CRM, inventory, and workforce wired together end to end.",
      provider: { "@id": abs("/#organization") },
      featureList: [
        "B2B ordering portal",
        "Distributor CRM",
        "Inventory synchronisation",
        "Workforce coordination",
      ],
    }
  );
}

/** Both products, for pages that reference them together. */
export function productSchemas() {
  return [hospitalityOsSchema(), supplyFlowOsSchema()];
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(`${trail.at(-1)?.path ?? "/"}#breadcrumb`),
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/** Wrap any set of nodes into a single @graph — one script tag, no duplication. */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.flat(),
  };
}

/**
 * FAQPage built from the questions actually rendered on the page.
 *
 * This is one of the highest-leverage schemas for AI answer engines: it gives
 * them a clean question→answer pair to quote instead of inferring one from
 * prose. The caller must pass the same array the section renders.
 */
export function faqSchema(
  path: string,
  items: readonly { question: string; answer: string }[],
) {
  /*
    Guard with a message that names the actual cause.

    If `items` arrives as anything other than an array, it is almost always
    because the constant is exported from a module carrying "use client". A
    server component importing from such a module receives a client-reference
    proxy rather than the value, and the failure surfaces here as the very
    unhelpful "items.map is not a function". Keep FAQ data in server modules.
  */
  if (!Array.isArray(items)) {
    throw new TypeError(
      `faqSchema(${path}): expected an array of questions but received ` +
        `${typeof items}. If this data is exported from a "use client" module, ` +
        `move it into a server module — client exports reach the server as ` +
        `references, not values.`,
    );
  }

  return {
    "@type": "FAQPage",
    "@id": abs(`${path}#faq`),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

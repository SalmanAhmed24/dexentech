import type { Metadata } from "next";
import type { IndustryPageData } from "./types";

/**
 * Metadata for an industry route, built from its data file.
 *
 * Every industry page wants the same shape of <head>; generating it here means
 * each route is three lines and cannot drift from the others.
 */
export function industryMetadata(data: IndustryPageData): Metadata {
  const path = `/industries/${data.slug}`;
  return {
    title: { absolute: `${data.meta.title} — DexenTech` },
    description: data.meta.description,
    alternates: { canonical: path },
    keywords: data.meta.keywords,
    openGraph: {
      type: "website",
      url: path,
      title: data.meta.title,
      description: data.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta.title,
      description: data.meta.description,
    },
  };
}

import type { MetadataRoute } from "next";
import { primaryNav, site } from "@/lib/site";

/**
 * Generated from the same nav config that renders the header, so a new page
 * cannot appear in navigation while silently missing from the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set<string>(["/"]);

  for (const item of primaryNav) {
    routes.add(item.href);
    item.children?.forEach((child) => routes.add(child.href));
  }

  const now = new Date();

  return [...routes].map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

/**
 * One source of truth for anything that appears in both the UI and the
 * structured data. Keeping them together is what stops the JSON-LD from
 * drifting away from the visible page — which is the single most common
 * reason rich results get rejected.
 */

export const site = {
  name: "DexenTech",
  legalName: "DexenTech",
  // Set NEXT_PUBLIC_SITE_URL in production. Everything canonical derives from it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dexentech.com",
  tagline: "Innovate. Integrate. Elevate.",
  description:
    "DexenTech builds AI operational systems for hospitality and B2B commerce — software that runs your bookings, orders, and operations from one place.",
  locale: "en_US",
  twitter: "@dexentech",
  founded: "2024",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "HospitalityOS",
        href: "/solutions/hospitality-os",
        description: "One operating system for every property you run.",
      },
      {
        label: "SupplyFlowOS",
        href: "/solutions/supplyflow-os",
        description: "Your distribution business, online end to end.",
      },
      {
        label: "AI Intelligence Systems",
        href: "/solutions/ai-intelligence-systems",
        description: "MCP integrations, multi-agent workflows, cost control.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Independent Hotels", href: "/industries/independent-hotels" },
      { label: "Hostel Groups", href: "/industries/hostel-groups" },
      { label: "Short-Term Rentals", href: "/industries/short-term-rentals" },
      { label: "Serviced Apartments", href: "/industries/serviced-apartments" },
      { label: "Boutique Hotels", href: "/industries/boutique-hotels" },
      {
        label: "Industrial Parts Distributors",
        href: "/industries/industrial-parts-distributors",
      },
      {
        label: "Food & Beverage Wholesale",
        href: "/industries/food-beverage-wholesale",
      },
      {
        label: "Construction Materials",
        href: "/industries/construction-materials-suppliers",
      },
    ],
  },
  {
    label: "AI Infrastructure",
    href: "/solutions/ai-intelligence-systems",
    children: [
      { label: "MCP Integrations", href: "/ai-infrastructure/mcp-integrations" },
      {
        label: "Multi-Agent Workflows",
        href: "/ai-infrastructure/multi-agent-workflows",
      },
      {
        label: "Monitoring & Cost Optimization",
        href: "/ai-infrastructure/monitoring-cost-optimization",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Book a Systems Call",
  href: "/contact",
} as const;

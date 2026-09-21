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

/**
 * The two industry families, in the order the Industries page lists them.
 *
 * Single source of truth: the nav dropdown, the /industries page and the
 * sitemap all derive from this, so an industry cannot appear in one place and
 * be missing from another.
 */
export const industryGroups = [
  {
    name: "Hospitality",
    items: [
      { label: "Independent Hotels", href: "/industries/independent-hotels" },
      { label: "Hostel Groups", href: "/industries/hostel-groups" },
      {
        label: "Short-Term Rental Management",
        href: "/industries/short-term-rentals",
      },
      { label: "Serviced Apartments", href: "/industries/serviced-apartments" },
      { label: "Boutique Hotels", href: "/industries/boutique-hotels" },
    ],
  },
  {
    name: "B2B Commerce",
    items: [
      {
        label: "Industrial Parts Distributors",
        href: "/industries/industrial-parts-distributors",
      },
      {
        label: "Food & Beverage Wholesale",
        href: "/industries/food-beverage-wholesale",
      },
      {
        label: "Construction Materials Suppliers",
        href: "/industries/construction-materials-suppliers",
      },
      {
        label: "Medical & Laboratory Suppliers",
        href: "/industries/medical-laboratory-suppliers",
      },
      {
        label: "Chemical & Industrial Wholesalers",
        href: "/industries/chemical-industrial-wholesalers",
      },
    ],
  },
] as const;

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
    // Derived, so the dropdown can never fall behind the Industries page.
    children: industryGroups.flatMap((group) =>
      group.items.map((item) => ({ label: item.label, href: item.href })),
    ),
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
  { label: "Technology Stack", href: "/technology-stack" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

/**
 * Routes currently served by the coming-soon holding page. They are noindexed,
 * so the sitemap leaves them out — listing a noindexed URL there sends search
 * engines contradictory signals. Remove an entry when its real page ships.
 */
export const comingSoonPaths = new Set(["/case-studies", "/contact"]);

export const primaryCta = {
  label: "Book a Systems Call",
  href: "/contact",
} as const;

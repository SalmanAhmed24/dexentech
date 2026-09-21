/**
 * The technology stack, in the order the design lays it out: four priority
 * tools, six in the core stack, two deployment targets.
 *
 * Plain module, read by both the page and its structured data.
 */

export type TechCategory = "priority" | "stack" | "deploy";

export type Technology = {
  name: string;
  description: string;
  category: TechCategory;
  /**
   * Where the card leads. The design draws an arrow on every card, which
   * implies per-technology pages that don't exist yet. Only cards with a
   * genuinely relevant page today link anywhere; the rest render without an
   * arrow rather than pointing at a 404.
   */
  href?: string;
};

export const TECHNOLOGIES: Technology[] = [
  {
    name: "n8n Automation",
    description: "Workflows connecting your tools, visual and auditable.",
    category: "priority",
    href: "/services",
  },
  {
    name: "WhatsApp Business API",
    description:
      "Customer conversations at scale, with automation and human handoff.",
    category: "priority",
    href: "/ai-infrastructure/mcp-integrations",
  },
  {
    name: "LangGraph Development",
    description: "Agent orchestration for workflows that decide, not just respond.",
    category: "priority",
    href: "/ai-infrastructure/multi-agent-workflows",
  },
  {
    name: "Temporal Workflows",
    description: "Processes that survive failures — retried, resumed, auditable.",
    category: "priority",
    href: "/ai-infrastructure/multi-agent-workflows",
  },
  {
    name: "Next.js Development",
    description: "Web applications that load fast and rank.",
    category: "stack",
  },
  {
    name: "Supabase Development",
    description: "Auth, database, and realtime on PostgreSQL.",
    category: "stack",
  },
  {
    name: "PostgreSQL Development",
    description: "The database your data stays portable in.",
    category: "stack",
  },
  {
    name: "Stripe Integration",
    description: "Payments, invoicing, and billing wired to your system.",
    category: "stack",
  },
  {
    name: "Redis",
    description: "Caching and queues for systems that stay fast under load.",
    category: "stack",
  },
  {
    name: "React Native Development",
    description: "One codebase, staff apps on every phone.",
    category: "stack",
  },
  {
    name: "Vercel Deployment",
    description: "Shipping with previews, rollbacks, and zero server upkeep.",
    category: "deploy",
  },
  {
    name: "Railway Deployment",
    description: "Backend services deployed without a DevOps hire.",
    category: "deploy",
  },
];

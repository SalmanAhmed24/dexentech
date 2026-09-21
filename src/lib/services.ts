/**
 * Content for /services.
 *
 * A plain module on purpose: the interactive tab panel and the stack diagram
 * are client components, and they import from here. Keeping the data out of
 * any "use client" file means the server page can read it too without being
 * handed a client-reference proxy — the bug that once broke faqSchema.
 */

/* ---------- Four pillars ---------- */

export type Pillar = {
  key: "entry" | "support" | "parsing" | "reporting";
  title: string;
  body: string;
  metric: string;
  caption: string;
  /** Accent from the design: violet, blue, green, pink. */
  color: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "entry",
    title: "Data Entry",
    body: "Capture, validate, and route structured data across your systems without human intervention.",
    metric: "3,200 records/hr",
    caption: "avg. throughput",
    color: "#A78BFA",
  },
  {
    key: "support",
    title: "Customer Support",
    body: "AI agents handle first-line queries, escalate edge cases, and log every interaction automatically.",
    metric: "90% resolved",
    caption: "without escalation",
    color: "#60A5FA",
  },
  {
    key: "parsing",
    title: "Document Parsing",
    body: "Extract, classify, and act on information from invoices, contracts, and incoming forms.",
    metric: "98% accuracy",
    caption: "extraction rate",
    color: "#34D399",
  },
  {
    key: "reporting",
    title: "Reporting",
    body: "Generate and distribute operational reports on a schedule — no analyst time required.",
    metric: "Zero analyst time",
    caption: "post-deployment",
    color: "#F472B6",
  },
];

/* ---------- Industry use-case tabs ---------- */

export type UseCase = {
  id: string;
  label: string;
  headline: [string, string];
  body: string;
  link: { label: string; href: string };
  agents: { name: string; description: string }[];
  /**
   * The design only defines the Hospitality panel. The other two are drafted
   * from claims already made elsewhere on the site — every agent line traces
   * to existing copy — but the headlines are new. Replace when design lands.
   */
  draft?: boolean;
};

const SHARED_BODY =
  "Wherever your team does the same thing more than three times a week, we can take it off the list.";

export const USE_CASES: UseCase[] = [
  {
    id: "hospitality",
    label: "Hospitality",
    headline: ["Run the property.", "Not the inbox."],
    body: SHARED_BODY,
    link: { label: "See all hospitality agents", href: "/solutions/hospitality-os" },
    agents: [
      {
        name: "Guest Messaging Agent",
        description:
          "Handles check-in, check-out, and mid-stay queries 24/7 across all booking channels.",
      },
      {
        name: "Pricing Sync Agent",
        description:
          "Pushes rate updates to Booking.com, Airbnb, and VRBO in real time — no manual overrides.",
      },
      {
        name: "Cleaner Dispatch Agent",
        description:
          "Assigns housekeeping tasks on checkout, tracks completion, and flags exceptions.",
      },
      {
        name: "Finance Summary Agent",
        description:
          "Produces daily reconciliation reports across payment providers automatically.",
      },
    ],
  },
  {
    id: "b2b",
    label: "B2B Commerce",
    headline: ["Run the catalog.", "Not the phone."],
    body: SHARED_BODY,
    link: { label: "See all B2B commerce agents", href: "/solutions/supplyflow-os" },
    draft: true,
    agents: [
      {
        // Industrial Parts Distributors — the re-keying problem.
        name: "Order Intake Agent",
        description:
          "Turns phoned, emailed, and PDF orders into portal orders — entered once, at the right price.",
      },
      {
        // Industrial Parts — "POs proposed from reorder points".
        name: "Procurement Agent",
        description:
          "Proposes purchase orders from reorder points — approved in one click.",
      },
      {
        // Industrial Parts — "Supplier invoices extracted and entered".
        name: "Invoice Extraction Agent",
        description: "Extracts supplier invoices and enters them without typing.",
      },
      {
        // Industrial Parts — "At-risk accounts flagged while there's time".
        name: "Account Health Agent",
        description: "Flags at-risk accounts while there's still time to act.",
      },
    ],
  },
  {
    id: "recruiting",
    label: "Recruiting",
    headline: ["Read the shortlist.", "Not the pile."],
    body: SHARED_BODY,
    link: {
      label: "See the multi-agent pipeline",
      href: "/ai-infrastructure/multi-agent-workflows",
    },
    draft: true,
    // Each step of the resume-screening pipeline described on the
    // Multi-Agent Workflows page, split into the agents that run it.
    agents: [
      {
        name: "Application Intake Agent",
        description: "Parses incoming applications into structured candidate records.",
      },
      {
        name: "Scoring Agent",
        description: "Scores every application against the role's requirements.",
      },
      {
        name: "Ranking Agent",
        description: "Ranks candidates with the reasons for each position attached.",
      },
      {
        name: "Shortlist Handoff",
        description:
          "Your team interviews the top of the list instead of reading two hundred CVs.",
      },
    ],
  },
];

/* ---------- Stack diagram ---------- */

/**
 * Coordinates are the exact spoke endpoints from the exported
 * HubSpokeDiagram.svg (viewBox 1280 × 636), and each colour is that spoke's
 * gradient stop. The layout is the design's, not an approximation.
 */
export const STACK_VIEWBOX = { w: 1280, h: 636 } as const;
export const STACK_HUB = { x: 680, y: 310 } as const;

export type StackNode = {
  id: string;
  name: string;
  role: string;
  x: number;
  y: number;
  color: string;
};

export const STACK_NODES: StackNode[] = [
  { id: "n8n", name: "n8n", role: "Orchestration", x: 812, y: 95.5, color: "#A78BFA" },
  { id: "langgraph", name: "LangGraph", role: "State machines", x: 907, y: 202.75, color: "#60A5FA" },
  { id: "temporal", name: "Temporal", role: "Durable exec", x: 1040, y: 340, color: "#34D399" },
  { id: "make", name: "Make", role: "No-code", x: 840, y: 452.75, color: "#F472B6" },
  { id: "zapier", name: "Zapier", role: "Integrations", x: 708, y: 564.5, color: "#FB923C" },
  { id: "supabase", name: "Supabase", role: "Postgres", x: 518, y: 463.5, color: "#38BDF8" },
  { id: "nextjs", name: "Next.js", role: "App layer", x: 443, y: 332.75, color: "#A3E635" },
  { id: "postgresql", name: "PostgreSQL", role: "Persistence", x: 377, y: 189.75, color: "#FBBF24" },
  { id: "anthropic", name: "Anthropic", role: "AI models", x: 591, y: 123.5, color: "#C084FC" },
];

/* ---------- Five phases ---------- */

export const PHASES = [
  {
    title: "Process Audit & Discovery",
    body: "We map your workflows, rank automation opportunities by ROI, and define success metrics before writing a single line of code.",
    deliverable:
      "A prioritised automation plan — yours to keep regardless of what comes next.",
  },
  {
    title: "Architecture Design",
    body: "We design the agent topology, integration points, and data flows — picking the right execution model for your reliability needs.",
    deliverable: "A blueprint your engineering team can read, challenge, and extend.",
  },
  {
    title: "Implementation & Integration",
    body: "We build directly on your infrastructure accounts. Your Supabase. Your cloud. Your data. Nothing is hosted on our side by default.",
    deliverable: "Working agents in staging by end of week two.",
  },
  {
    title: "Testing & Refinement",
    body: "We run parallel tests against real edge cases, validate with your ops team, and tune agent behaviour until accuracy meets the target.",
    deliverable: "98% accuracy threshold before anything touches production.",
  },
  {
    title: "Deployment & Monitoring",
    body: "Every agent ships with observability baked in. You see every decision, every failure, and why — without needing us on the call.",
    deliverable: "Live in production by week four. Your team runs it from day one.",
  },
];

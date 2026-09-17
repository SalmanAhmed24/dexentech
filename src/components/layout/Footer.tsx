import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { site } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "HospitalityOS", href: "/solutions/hospitality-os" },
      { label: "SupplyFlowOS", href: "/solutions/supplyflow-os" },
      {
        label: "AI Intelligence Systems",
        href: "/solutions/ai-intelligence-systems",
      },
    ],
  },
  {
    heading: "Infrastructure",
    links: [
      { label: "Overview", href: "/solutions/ai-intelligence-systems" },
      { label: "MCP Integrations", href: "/ai-infrastructure/mcp-integrations" },
      {
        label: "Multi-Agent Systems",
        href: "/ai-infrastructure/multi-agent-workflows",
      },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "AI Workflow Automation", href: "/services#workflow-automation" },
      { label: "Data Entry", href: "/services#data-entry" },
      { label: "Document Parsing", href: "/services#document-parsing" },
      { label: "Reporting", href: "/services#reporting" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  // Rendered on the server, so this stays correct without a client hydration.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-subtle bg-[#08090d]">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-9 pt-16 md:px-20">
        <div className="grid gap-10 border-b border-line-subtle pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-3.5 lg:max-w-[222px]">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-[31px] w-[30px]" />
              <span className="font-display text-[11.9px] leading-[1.07] tracking-[0.357px] text-white">
                {site.name}
              </span>
            </Link>
            <p className="text-[12.9px] leading-[21px] text-ink-500">
              AI operational systems for hospitality and B2B commerce.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-labelledby={`footer-${column.heading}`}>
              <h2
                id={`footer-${column.heading}`}
                className="text-[12.9px] font-semibold leading-[19.3px] text-ink-100"
              >
                {column.heading}
              </h2>
              <ul className="mt-3.5 flex flex-col gap-[9px]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12.9px] leading-[19.3px] text-ink-500 transition-colors duration-200 hover:text-ink-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10.4px] tracking-[0.495px] text-[#44474f]">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10.4px] tracking-[0.495px] text-[#44474f]">
            AI systems for operators, not enterprises.
          </p>
        </div>
      </div>
    </footer>
  );
}

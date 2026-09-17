/*
  Server module on purpose — SUPPLY_PLUGS is read by the route. See the note in
  ai-intelligence/sections.tsx: exporting plain data from a "use client" module
  hands the server a client reference, not the value. The hero lives in
  SupplyHero.tsx.
*/
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

/* ---------- Built for distributors like you (135:2343) ---------- */

const DISTRIBUTORS = [
  "Industrial parts distributors",
  "Wholesale food & beverage",
  "Construction materials",
  "Medical & laboratory supply",
  "Manufacturing components",
  "Chemical & industrial wholesalers",
];

export function DistributorStrip() {
  return (
    <section
      aria-label="Who SupplyFlowOS is built for"
      className="border-y border-line-subtle py-[22px]"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 md:flex-row md:items-center md:gap-10 md:px-10">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
          Built for distributors like you
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {DISTRIBUTORS.map((item) => (
            <li key={item} className="text-[13.5px] text-ink-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- What stops the day you switch (135:2474) ---------- */

const STOPPED = [
  "Customers still ordering by email and phone",
  "No portal where they can order themselves",
  "CRM that doesn't know what's in stock",
  "Stock counted by hand",
  "Overstock in one warehouse, stockouts in another",
  "Customer pricing held together in spreadsheets",
  "No view of what sales is doing",
];

export function WhatStopsSupply() {
  return (
    <section aria-labelledby="supply-stops" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="supply-stops">
          What stops the day you switch
        </SectionHeading>
      </Reveal>

      <ul className="mt-10 border-t border-[rgb(255_255_255/0.08)]">
        {STOPPED.map((item, i) => (
          <Reveal
            as="li"
            key={item}
            delay={i * 0.04}
            y={12}
            className="border-b border-[rgb(255_255_255/0.08)]"
          >
            <div className="flex items-center justify-between gap-4 py-[18px]">
              <span className="text-[clamp(0.95rem,1.6vw,1.0625rem)] leading-snug text-pretty text-ink-200">
                {item}
              </span>
              <span className="shrink-0 rounded-[4px] border border-[rgb(168_85_247/0.35)] bg-[rgb(168_85_247/0.08)] px-[9px] py-1 font-mono text-[10px] tracking-[0.8px] text-violet-soft">
                STOPPED
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Six modules. One system. (135:2562) ---------- */

const MODULES = [
  { name: "B2B Commerce Portal", tag: "01 · Orders", href: "#feature-01" },
  { name: "CRM & Sales Intelligence", tag: "02 · Sales", href: "#feature-02" },
  { name: "Inventory & Supply Chain", tag: "03 · Stock", href: "#feature-03" },
  { name: "HRM & Workforce", tag: "04 · People", href: "#feature-04" },
  { name: "AI Intelligence Layer", tag: "05 · AI", href: "#feature-05" },
  {
    name: "MCP Integrations",
    tag: "06 · Connect",
    href: "/ai-infrastructure/mcp-integrations",
  },
];

export function SupplyModules() {
  return (
    <section aria-labelledby="supply-modules" className="shell py-16 md:py-24">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Core modules</Eyebrow>
        <SectionHeading id="supply-modules">Six modules. One system.</SectionHeading>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {MODULES.map((module, i) => (
          <Reveal as="li" key={module.name} delay={i * 0.05} className="h-full">
            <Link
              href={module.href}
              className="group flex h-full flex-col gap-[14px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.3)]"
            >
              <span
                aria-hidden="true"
                className="flex size-[42px] items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] font-mono text-[13px] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-semibold leading-snug text-pretty text-ink-100">
                {module.name}
              </h3>
              <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.9px] text-ink-600">
                {module.tag}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Plugs into / pricing (135:3048, 135:3049) ---------- */

export const SUPPLY_PLUGS = [
  "LinkedIn Sales Navigator",
  "WhatsApp Business",
  "Slack",
  "Xero",
  "Sage",
  "SAP",
  "ERPNext",
  "Odoo",
];

/* ---------- See it running on your catalog (135:3111) ---------- */

export function SupplyCta() {
  return (
    <section
      aria-labelledby="supply-cta"
      className="relative isolate overflow-hidden border-t border-line-subtle py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[min(1000px,96vw)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.2),rgb(109_40_217/0.08)_45%,transparent_72%)] blur-[70px]"
      />
      <div className="shell flex flex-col items-center text-center">
        <Reveal>
          <h2
            id="supply-cta"
            className="max-w-[720px] font-sans text-[clamp(1.875rem,4.2vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.025em] text-pretty text-ink-100"
          >
            See it running on your catalog
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          {/* TODO(copy): Figma truncates this line. */}
          <p className="mt-5 max-w-[520px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-300">
            30 minutes. Your SKUs, your pricing tiers, a live walkthrough.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-8">
            <Button href="/contact" className="px-[28px]">
              Book a Strategy Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

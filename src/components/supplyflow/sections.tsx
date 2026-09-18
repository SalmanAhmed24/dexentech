/*
  Server module on purpose — SUPPLY_PLUGS is read by the route. See the note in
  ai-intelligence/sections.tsx: exporting plain data from a "use client" module
  hands the server a client reference, not the value. The hero lives in
  SupplyHero.tsx.
*/
import Link from "next/link";
import { BadgedList } from "@/components/ui/BadgedList";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

/* ---------- Strip data (135:2343) ---------- */

export const SUPPLY_DISTRIBUTORS = [
  "Industrial parts distributors",
  "Wholesale food & beverage",
  "Construction materials",
  "Medical & laboratory supply",
  "Manufacturing components",
  "Chemical & industrial wholesalers",
];

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

      <BadgedList className="mt-10 border-t border-[rgb(255_255_255/0.08)]" items={STOPPED} badge="STOPPED" />
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

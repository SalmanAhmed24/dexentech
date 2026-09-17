import type { ReactNode } from "react";
import Image from "next/image";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { cn } from "@/lib/utils";

/**
 * SupplyFlowOS panels. Only section 01 is a real screenshot in the design
 * (Figma node 135:2630) — every other panel is built from text and frames, so
 * they are rebuilt as markup here.
 *
 * All values are fixed rather than randomised: random output would differ
 * between the server and client render and trip a hydration mismatch.
 */

function PanelHeading({
  left,
  right,
}: {
  left: string;
  /* Rendered raw, so callers can pass <LiveDot /> as well as plain text. */
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-[21px] pb-3 pt-4">
      <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-ink-500">
        {left}
      </span>
      {right}
    </div>
  );
}

function LiveDot({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
      />
      <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-violet-soft">
        {label}
      </span>
    </span>
  );
}

function Tag({ children, tone = "muted" }: { children: string; tone?: "muted" | "violet" }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-[4px] border px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.8px]",
        tone === "violet"
          ? "border-[rgb(168_85_247/0.35)] bg-[rgb(168_85_247/0.08)] text-violet-soft"
          : "border-[rgb(255_255_255/0.08)] bg-[rgb(255_255_255/0.03)] text-ink-500",
      )}
    >
      {children}
    </span>
  );
}

/* ---------- Hero: incoming order feed ---------- */

const INCOMING = [
  { ref: "ORD-2214 · 46 SKUs · 02:14", tag: "Tier 2 pricing", tone: "muted" as const },
  { ref: "ORD-2215 · 12 SKUs · 05:37", tag: "In stock", tone: "muted" as const },
  { ref: "ORD-2216 · 89 SKUs · 06:02", tag: "Synced to CRM", tone: "muted" as const },
  { ref: "RFQ-0341 · quote requested", tag: "Priced · awaiting approval", tone: "violet" as const },
];

export function OrderFeedMock() {
  return (
    <BrowserFrame url="portal.dexentech.com/orders" className="bg-cinder">
      <PanelHeading left="Incoming orders · overnight" right={<LiveDot label="Live" />} />

      <ul className="px-[21px]">
        {INCOMING.map((order) => (
          <li
            key={order.ref}
            className="flex items-center justify-between gap-3 border-b border-[rgb(255_255_255/0.06)] py-[11px] last:border-b-0"
          >
            <span className="font-mono text-[11.5px] text-ink-300">{order.ref}</span>
            <Tag tone={order.tone}>{order.tag}</Tag>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-3 px-[21px] pb-[18px] pt-4">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.9px] text-ink-600">
          0 orders re-keyed
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.9px] text-violet-soft">
          4 orders while you slept
        </span>
      </div>
    </BrowserFrame>
  );
}

/* ---------- 01 · B2B commerce portal (real screenshot) ---------- */

export function CatalogMock() {
  return (
    <BrowserFrame url="portal.dexentech.com/catalog" className="bg-slate-850">
      {/*
        Figma node 135:2630. The export wraps a 900 × 1200 photograph in a
        626 × 340 rect, so the raster is cropped to exactly the band that rect
        exposes (y 356–844, aspect 1.844 against the rect's 1.841).
      */}
      <Image
        src="/images/mock-catalog.webp"
        alt="Order analytics from the SupplyFlowOS portal: start render times, bounce rate, and session volume charted across the catalog."
        width={900}
        height={488}
        sizes="(max-width: 1024px) 92vw, 46vw"
        className="h-auto w-full"
      />
    </BrowserFrame>
  );
}

/* ---------- 02 · CRM & sales intelligence ---------- */

const ACCOUNTS = [
  { name: "Meridian Fasteners Ltd", state: "Ordering −34% · flagged", tone: "violet" as const },
  { name: "Northgate Engineering", state: "Reorder due · email drafted", tone: "muted" as const },
  { name: "Apex Industrial Supply", state: "Quote → PO · stage 3", tone: "muted" as const },
];

export function AccountWatchlistMock() {
  return (
    <BrowserFrame url="app.dexentech.com/crm/accounts" className="bg-cinder">
      <PanelHeading left="Account watchlist" />

      <ul className="px-[21px]">
        {ACCOUNTS.map((account) => (
          <li
            key={account.name}
            className="flex items-center justify-between gap-3 border-b border-[rgb(255_255_255/0.06)] py-[13px] last:border-b-0"
          >
            <span className="text-[12.5px] text-ink-200">{account.name}</span>
            <Tag tone={account.tone}>{account.state}</Tag>
          </li>
        ))}
      </ul>

      <p className="px-[21px] pb-[18px] pt-4 font-mono text-[9.5px] uppercase tracking-[0.9px] text-ink-600">
        Pipeline synced to stock ledger · LinkedIn MCP enriched
      </p>
    </BrowserFrame>
  );
}

/* ---------- 03 · Inventory & supply chain ---------- */

const WAREHOUSES = [
  { id: "WH1 · North", count: "4,218", state: "2 below reorder", tone: "violet" as const },
  { id: "WH2 · Central", count: "6,882", state: "Balanced", tone: "muted" as const },
  { id: "WH3 · South", count: "3,940", state: "Transfer inbound", tone: "muted" as const },
];

const STOCK_EVENTS = [
  { agent: "reorder/SKU-4471", result: "PO drafted · 400 units · awaiting approval" },
  { agent: "transfer/WH2→WH1", result: "120 units in transit · ETA Thu" },
];

export function WarehouseMock() {
  return (
    <BrowserFrame url="app.dexentech.com/inventory" className="bg-cinder">
      <div className="grid grid-cols-3 gap-2 px-[21px] pt-4">
        {WAREHOUSES.map((warehouse) => (
          <div
            key={warehouse.id}
            className="rounded-[8px] border border-[rgb(255_255_255/0.08)] bg-[rgb(255_255_255/0.02)] p-3"
          >
            <span className="block font-mono text-[9px] uppercase tracking-[0.8px] text-ink-600">
              {warehouse.id}
            </span>
            <span className="mt-1.5 block font-mono text-[18px] tabular-nums text-ink-100">
              {warehouse.count}
            </span>
            <span
              className={cn(
                "mt-1.5 block font-mono text-[8.5px] uppercase tracking-[0.7px]",
                warehouse.tone === "violet" ? "text-violet-soft" : "text-ink-500",
              )}
            >
              {warehouse.state}
            </span>
          </div>
        ))}
      </div>

      <ul className="px-[21px] pb-[18px] pt-4 font-mono text-[11px] leading-[22px]">
        {STOCK_EVENTS.map((event) => (
          <li key={event.agent}>
            <span className="text-ink-600">{event.agent}</span>
            <span className="text-ink-300"> → {event.result}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}

/* ---------- 04 · HRM & workforce ---------- */

const WORKFORCE_EVENTS = [
  { agent: "shift/thu", result: "+2 pickers proposed · order volume forecast" },
  { agent: "hiring/warehouse-op", result: "47 applicants ranked · top 5 shortlisted" },
  { agent: "payroll/week-28", result: "hours posted · exceptions: 1 flagged" },
];

export function WorkforceMock() {
  return (
    <BrowserFrame url="app.dexentech.com/workforce" className="bg-cinder">
      <PanelHeading left="Floor shift · today" />

      <div className="grid grid-cols-2 gap-2 px-[21px]">
        <div className="rounded-[8px] border border-[rgb(255_255_255/0.08)] bg-[rgb(255_255_255/0.02)] p-3.5">
          <span className="block font-mono text-[9px] uppercase tracking-[0.8px] text-ink-600">
            Clocked in
          </span>
          <span className="mt-1.5 block font-mono text-[20px] tabular-nums text-ink-100">
            14/15
          </span>
        </div>
        <div className="rounded-[8px] border border-[rgb(168_85_247/0.25)] bg-[rgb(168_85_247/0.07)] p-3.5">
          <span className="block font-mono text-[9px] uppercase tracking-[0.8px] text-ink-600">
            Pick rate / target
          </span>
          <span className="mt-1.5 block font-mono text-[20px] tabular-nums text-violet-pale">
            103%
          </span>
        </div>
      </div>

      <ul className="px-[21px] pb-[18px] pt-4 font-mono text-[11px] leading-[22px]">
        {WORKFORCE_EVENTS.map((event) => (
          <li key={event.agent}>
            <span className="text-ink-600">{event.agent}</span>
            <span className="text-ink-300"> → {event.result}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}

/* ---------- 05 · AI intelligence layer ---------- */

const SUPPLY_AGENTS = [
  { agent: "forecast/SKU-demand", result: "Q3 modeled · 1,204 SKUs" },
  { agent: "agent/procurement", result: "6 POs proposed · awaiting approval" },
  { agent: "agent/invoices", result: "34 supplier invoices extracted" },
  { agent: "agent/churn", result: "3 at-risk accounts flagged" },
  { agent: "agent/sales-drafts", result: "12 reorder emails queued" },
];

export function SupplyAgentsMock() {
  return (
    <BrowserFrame url="app.dexentech.com/supply/agents" className="bg-cinder">
      <div className="flex justify-end px-[21px] pt-4">
        <LiveDot label="Live" />
      </div>

      <ul className="px-[21px] pb-[21px] pt-3 font-mono text-[11.5px] leading-[23px]">
        {SUPPLY_AGENTS.map((line) => (
          <li key={line.agent}>
            <span className="text-ink-600">{line.agent}</span>
            <span className="text-ink-300"> → {line.result}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}

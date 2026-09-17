import Link from "next/link";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

/* ---------- Strip data (53:6547) ---------- */

export const HOSPITALITY_OPERATORS = [
  "Independent hotels · 10–200 rooms",
  "Hostel groups · 1–5 properties",
  "Short-term rental managers · 5–100 units",
  "Serviced apartment operators",
];

/* ---------- What stops the moment you switch (53:7686) ---------- */

const STOPPED = [
  "Double-bookings across OTA channels",
  "Cleaner schedules chased by hand",
  "Revenue lost to prices that never move",
  "Guests waiting hours for a reply",
  "Finance split across five platforms",
];

export function WhatStops() {
  return (
    <section aria-labelledby="what-stops" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="what-stops">
          What stops the moment you switch
        </SectionHeading>
      </Reveal>

      <ul className="mt-10 border-t border-[rgb(255_255_255/0.08)]">
        {STOPPED.map((item, i) => (
          <Reveal
            as="li"
            key={item}
            delay={i * 0.05}
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

/* ---------- Six modules. One system. (53:7736) ---------- */

const MODULES = [
  { name: "Booking Infrastructure", tag: "01 · Sync", href: "#feature-01" },
  { name: "Property Management", tag: "02 · Ops", href: "#feature-02" },
  { name: "Guest Experience", tag: "03 · Comms", href: "#feature-03" },
  { name: "Financial Operations", tag: "04 · Finance", href: "#feature-04" },
  { name: "AI Intelligence Layer", tag: "05 · AI", href: "#feature-05" },
  { name: "MCP Integrations", tag: "06 · Connect", href: "/ai-infrastructure/mcp-integrations" },
];

export function CoreModules() {
  return (
    <section aria-labelledby="core-modules" className="shell py-16 md:py-24">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Core modules</Eyebrow>
        <SectionHeading id="core-modules">Six modules. One system.</SectionHeading>
      </Reveal>

      {/*
        Figma lays these out as a fixed 6-across row of 207px cards. That would
        crush below about 1,400px, so the grid steps down to three and then two
        rather than shrinking the cards.
      */}
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

/* ---------- Plugs into / pricing (53:8138, 53:8154) ---------- */

export const HOSPITALITY_PLUGS = [
  "WhatsApp Business API",
  "Gmail / Outlook",
  "Xero",
  "QuickBooks",
  "Stripe",
  "Key management systems",
];

/* ---------- Fair questions (53:8162) ---------- */

/** Exported so the route can emit FAQPage schema from the same source. */
export const HOSPITALITY_FAQ = [
  {
    question:
      "Does HospitalityOS replace my current PMS or work alongside it?",
    answer:
      "Either. Most operators replace their PMS and channel manager with HospitalityOS. If you're contracted to existing tools, we integrate first and migrate when you're ready.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most properties go live in 2–4 weeks: channel connections first, then housekeeping and messaging, then finance. You keep taking bookings throughout.",
  },
  {
    question: "Will my OTA listings be affected during migration?",
    answer:
      "No. Channels stay live while we sync. Availability and rates are mirrored before HospitalityOS takes over as the source of truth.",
  },
  {
    question: "Do I need technical staff to run it?",
    answer:
      "No. If your team can use WhatsApp, they can run HospitalityOS. We handle setup, training, and ongoing support.",
  },
  {
    question: "What does the AI actually do — and what does it not do?",
    answer:
      "It forecasts occupancy, proposes prices, drafts guest replies, and plans cleaning routes. It doesn't act on money or guests without your approval rules.",
  },
  {
    question: "What happens to my data if I leave?",
    answer:
      "It's yours. Bookings, guests, and financial records export in standard formats. Built on PostgreSQL — no proprietary lock-in.",
  },
] as const;

export function HospitalityFaq() {
  return (
    <section aria-labelledby="hospitality-faq" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="hospitality-faq">Fair questions</SectionHeading>
      </Reveal>

      {/*
        Native <details> rather than a JS accordion: it is keyboard accessible
        and expandable for free, and — importantly for SEO — the answer text is
        in the DOM whether or not it is open, so crawlers and AI fetchers read
        all six without running any script.
      */}
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {HOSPITALITY_FAQ.map((item, i) => (
          <Reveal key={item.question} delay={(i % 2) * 0.06}>
            <details className="group rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 transition-colors duration-300 hover:border-[rgb(168_85_247/0.22)]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-[27px] text-[16px] font-semibold leading-snug text-pretty text-ink-100 [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-mono text-[15px] leading-none text-violet-soft transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-[27px] pb-[27px] text-[14.5px] leading-[24px] text-pretty text-ink-300">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

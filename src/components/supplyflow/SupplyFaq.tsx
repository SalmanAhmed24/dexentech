import { Reveal, SectionHeading } from "@/components/ui/Reveal";

/**
 * Figma's metadata truncates text node names at roughly 50 characters, and the
 * MCP quota ran out before the full answers could be fetched. Each entry
 * therefore carries a `complete` flag.
 *
 * Incomplete answers still render — so the gap is obvious in the browser and
 * easy to fix — but they are filtered out of the FAQPage structured data.
 * Publishing a half-sentence as an accepted answer would be worse than
 * publishing no schema at all: Google penalises FAQ markup that doesn't match
 * usable page content, and AI answer engines would quote the fragment.
 */
export const SUPPLY_FAQ = [
  {
    question:
      "We run on SAP / Sage / Odoo. Does SupplyFlowOS replace it?",
    answer: "Either. It integrates with SAP, Sage, ERPNext, and Odoo",
    complete: false,
  },
  {
    question: "Will my customers actually use an ordering portal?",
    answer: "They already order from Amazon at home. Portals fa",
    complete: false,
  },
  {
    question: "How long until we're live?",
    answer: "Typically 4–8 weeks: catalog and pricing tiers fir",
    complete: false,
  },
  {
    question:
      "Can it handle our pricing? Every customer has different terms.",
    answer: "Yes. Account tiers, volume breaks, contract pricin",
    complete: false,
  },
  {
    question:
      "What does the AI do without asking, and what needs approval?",
    answer: "It drafts, flags, and forecasts on its own. Purcha",
    complete: false,
  },
  {
    question: "What happens to our data if we leave?",
    answer: "It's yours. Customers, orders, and stock records e",
    complete: false,
  },
] as const;

/** Only fully transcribed answers are eligible for structured data. */
export const supplyFaqForSchema = SUPPLY_FAQ.filter((item) => item.complete);

export function SupplyFaq() {
  return (
    <section aria-labelledby="supply-faq" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="supply-faq">Fair questions</SectionHeading>
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {SUPPLY_FAQ.map((item, i) => (
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

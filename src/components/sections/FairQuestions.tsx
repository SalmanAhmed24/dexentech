import { Reveal, SectionHeading } from "@/components/ui/Reveal";

/**
 * Exported because `page.tsx` builds FAQPage structured data from this exact
 * array. Google rejects FAQ rich results whose answers don't appear on the
 * page, and AI answer engines quote them directly — so one source, two uses.
 */
export const FAIR_QUESTIONS = [
  {
    question: "We already have a PMS / channel manager / CRM.",
    answer:
      "Most do. The problem isn't missing tools — it's tools that don't talk. We either connect what you have or replace it with one system. The audit call tells you which is cheaper.",
  },
  {
    question: "AI projects stall and never ship.",
    answer:
      "Ours ship in phases. You get a working system in weeks, not a roadmap. Each phase runs in production before the next starts — you can stop at any point and keep what's built.",
  },
  {
    question: "What happens when it breaks at 2am?",
    answer:
      "Every system ships with monitoring, error alerts, and human-escalation paths. Agents that fail hand off to your team — nothing silently drops a booking or an order.",
  },
] as const;

export function FairQuestions() {
  return (
    <section aria-labelledby="fair-questions" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="fair-questions">Fair questions</SectionHeading>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FAIR_QUESTIONS.map((item, i) => (
          <Reveal as="li" key={item.question} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[33px]">
              {/*
                Figma wraps these in curly quotes because they are objections
                spoken by a prospect, not headings. Kept as written.
              */}
              <h3 className="text-[17px] font-semibold leading-snug text-pretty text-ink-100">
                &ldquo;{item.question}&rdquo;
              </h3>
              <p className="mt-4 text-[15px] leading-[25px] text-pretty text-ink-300">
                {item.answer}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

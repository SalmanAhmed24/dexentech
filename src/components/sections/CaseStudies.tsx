import Link from "next/link";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

/**
 * These are placeholders in the Figma file — literally "SLOT · CASE STUDY 01"
 * with bracketed [Client type] and [Metric result] fields. They are reproduced
 * as placeholders rather than filled with invented clients or numbers, because
 * fabricated proof is worse than visible blanks. Replace the entries below
 * with real case studies and the `slot` styling falls away on its own.
 */
type CaseStudy = {
  slot: string;
  headline: string;
  result: string;
  href: string;
  /** Flip to false once real content lands. */
  placeholder: boolean;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slot: "Slot · Case study 01",
    headline: "[Client type] — [problem in one line]",
    result: "[Metric result]. Read the case study.",
    href: "/case-studies",
    placeholder: true,
  },
  {
    slot: "Slot · Case study 02",
    headline: "[Client type] — [problem in one line]",
    result: "[Metric result]. Read the case study.",
    href: "/case-studies",
    placeholder: true,
  },
  {
    slot: "Slot · Case study 03",
    headline: "[Client type] — [problem in one line]",
    result: "[Metric result]. Read the case study.",
    href: "/case-studies",
    placeholder: true,
  },
];

export function CaseStudies() {
  return (
    <section aria-labelledby="case-studies" className="shell py-16 md:py-24">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Case studies</Eyebrow>
        <SectionHeading id="case-studies">Proof, not promises</SectionHeading>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((study, i) => (
          <Reveal as="li" key={study.slot} delay={i * 0.08} className="h-full">
            <article
              className={
                // Dashed while empty, so an unfilled slot reads as deliberate
                // rather than broken. Solid once real content replaces it.
                study.placeholder
                  ? "h-full rounded-[14px] border border-dashed border-[rgb(255_255_255/0.12)] p-[33px]"
                  : "h-full rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[33px]"
              }
            >
              <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
                {study.slot}
              </p>

              <h3 className="mt-4 text-[17px] font-semibold leading-snug text-pretty text-ink-200">
                {study.headline}
              </h3>

              <Link
                href={study.href}
                className="group mt-4 inline-flex items-center gap-1.5 text-[14px] text-violet-soft"
              >
                <span aria-hidden="true">→</span>
                <span className="underline-offset-4 group-hover:underline">
                  {study.result}
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

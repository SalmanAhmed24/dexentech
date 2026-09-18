import { Reveal, SectionHeading } from "@/components/ui/Reveal";

export type FaqItem = { question: string; answer: string };

/**
 * Questions and answers as open cards — every answer visible at once, which is
 * how the AI Intelligence and industry pages present them.
 *
 * Plain markup rather than <details>: nothing is collapsed, so there is no
 * disclosure to expose, and crawlers read all of it without script.
 */
export function FaqGrid({
  id,
  heading = "Fair questions",
  items,
  columns = 3,
}: {
  id: string;
  heading?: string;
  items: readonly FaqItem[];
  columns?: 2 | 3;
}) {
  return (
    <section aria-labelledby={id} className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id={id}>{heading}</SectionHeading>
      </Reveal>

      <ul
        className={
          "mt-10 grid gap-5 md:grid-cols-2" +
          (columns === 3 ? " xl:grid-cols-3" : "")
        }
      >
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.question}
            delay={(i % columns) * 0.06}
            className="h-full"
          >
            <article className="h-full rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px]">
              <h3 className="text-[15.5px] font-semibold leading-snug text-pretty text-ink-100">
                {item.question}
              </h3>
              <p className="mt-3.5 text-[14px] leading-[23px] text-pretty text-ink-400">
                {item.answer}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

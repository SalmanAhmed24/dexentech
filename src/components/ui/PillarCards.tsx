import Link from "next/link";
import { Eyebrow, Reveal } from "@/components/ui/Reveal";

/**
 * A row of three supporting cards, each led by a mono eyebrow naming the
 * technology or practice, then a headline and a short body. Used to close the
 * Multi-Agent Workflows and Monitoring pages.
 */
export type Pillar = {
  eyebrow: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

export function PillarCards({
  pillars,
  ariaLabel,
}: {
  pillars: Pillar[];
  ariaLabel: string;
}) {
  return (
    <section aria-label={ariaLabel} className="shell pb-8">
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal as="li" key={pillar.title} delay={i * 0.07} className="h-full">
            <article className="group flex h-full flex-col gap-[13px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]">
              <Eyebrow className="text-[11px]">{pillar.eyebrow}</Eyebrow>

              <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-pretty text-ink-100">
                {pillar.title}
              </h3>

              <p className="text-[13.5px] leading-[22px] text-pretty text-ink-400">
                {pillar.body}
              </p>

              {pillar.link && (
                <Link
                  href={pillar.link.href}
                  className="mt-auto flex items-center gap-2 pt-2 text-[13.5px] font-medium text-violet-soft"
                >
                  {pillar.link.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

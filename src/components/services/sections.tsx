import type { ComponentType, ReactNode } from "react";
import { IconBarChart } from "@/components/icons/section-icons";
import {
  IconDocPage,
  IconHeadset,
  IconTable,
} from "@/components/icons/mcp-icons";
import { Eyebrow, Reveal } from "@/components/ui/Reveal";
import { PHASES, PILLARS, type Pillar } from "@/lib/services";

/**
 * Section opener used three times on this page: eyebrow and headline on the
 * left, a short positioning note on the right, aligned to the headline's base.
 */
export function SplitHeading({
  id,
  eyebrow,
  title,
  note,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  note: string;
}) {
  return (
    <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="mt-4 max-w-[520px] font-sans text-[clamp(1.875rem,3.8vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.025em] text-pretty text-ink-100"
        >
          {title}
        </h2>
      </div>
      <p className="max-w-[360px] text-[14.5px] leading-[23px] text-pretty text-ink-400 lg:text-right">
        {note}
      </p>
    </Reveal>
  );
}

/* ---------- Four pillars of automation ---------- */

/** In-page anchors the footer's Services column links to. */
const PILLAR_ANCHORS: Record<Pillar["key"], string> = {
  entry: "data-entry",
  support: "customer-support",
  parsing: "document-parsing",
  reporting: "reporting",
};

const PILLAR_ICONS: Record<Pillar["key"], ComponentType<{ className?: string }>> = {
  entry: IconTable,
  support: IconHeadset,
  parsing: IconDocPage,
  reporting: IconBarChart,
};

export function AutomationPillars() {
  return (
    <section aria-labelledby="pillars" className="shell py-16 md:py-24">
      <SplitHeading
        id="pillars"
        eyebrow="What we automate"
        title="Four pillars of automation"
        note="We eliminate the manual layer across the four categories that consume the most operator time."
      />

      <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PILLARS.map((pillar, i) => {
          const Icon = PILLAR_ICONS[pillar.key];
          return (
            <Reveal as="li" key={pillar.key} delay={i * 0.07} className="h-full">
              <article
                id={PILLAR_ANCHORS[pillar.key]}
                className="group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(255_255_255/0.14)]">
                {/* Coloured hairline along the top edge, one accent per pillar */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                  }}
                />

                <span
                  className="flex size-10 items-center justify-center rounded-[11px]"
                  style={{
                    backgroundColor: `${pillar.color}1a`,
                    color: pillar.color,
                    boxShadow: `inset 0 0 0 1px ${pillar.color}38`,
                  }}
                >
                  <Icon className="size-[18px]" />
                </span>

                <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.01em] text-ink-100">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[22px] text-pretty text-ink-400">
                  {pillar.body}
                </p>

                <div className="mt-auto pt-7">
                  <p
                    className="text-[20px] font-bold tracking-[-0.01em]"
                    style={{ color: pillar.color }}
                  >
                    {pillar.metric}
                  </p>
                  <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[1px] text-ink-600">
                    {pillar.caption}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------- Five phases ---------- */

export function FivePhases() {
  return (
    <section aria-labelledby="phases" className="shell py-16 md:py-24">
      <SplitHeading
        id="phases"
        eyebrow="How we work"
        title={
          <>
            Five phases.
            <br />
            Live in four weeks.
          </>
        }
        note="No retainer until your agents are running in production. Every phase has a concrete deliverable."
      />

      {/*
        An ordered list: the phases are a sequence, and the numbering is the
        meaning, so screen readers announce "1 of 5" rather than loose rows.
      */}
      <ol className="mt-12 overflow-hidden rounded-[14px] border border-[rgb(255_255_255/0.08)]">
        {PHASES.map((phase, i) => (
          <Reveal
            as="li"
            key={phase.title}
            delay={i * 0.05}
            y={12}
            className="border-b border-[rgb(255_255_255/0.06)] last:border-b-0"
          >
            <div className="grid gap-4 bg-slate-900/60 p-6 transition-colors duration-300 hover:bg-slate-900 md:grid-cols-[56px_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 md:p-8">
              <span className="font-mono text-[12px] text-violet-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-ink-100">
                  {phase.title}
                </h3>
                <p className="mt-2 max-w-[400px] text-[13.5px] leading-[22px] text-pretty text-ink-400">
                  {phase.body}
                </p>
              </div>
              <p className="flex items-start gap-2.5 text-[13.5px] leading-[22px] text-pretty text-ink-200">
                <span aria-hidden="true" className="text-violet-soft">
                  →
                </span>
                {phase.deliverable}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

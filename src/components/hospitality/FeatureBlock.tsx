import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * The five numbered feature sections (01–05): eyebrow, h2, lead paragraph, a
 * bordered capability list, and a mockup that alternates sides.
 *
 * Each capability is a bold label followed by an em-dash description. Figma
 * names these text nodes after the <strong> label only, which is why the
 * descriptions could not be recovered from metadata alone.
 */
export type Capability = {
  label: string;
  /** Optional until the remaining sections are transcribed from the design. */
  detail?: string;
};

function CheckMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="mt-[3px] shrink-0 text-violet-soft"
    >
      <path
        d="M3 8.5L6.2 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeatureBlock({
  index,
  eyebrow,
  title,
  lead,
  capabilities,
  mockup,
  mediaFirst = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  capabilities: Capability[];
  mockup: ReactNode;
  mediaFirst?: boolean;
}) {
  const headingId = `feature-${index}`;

  return (
    <section aria-labelledby={headingId} className="shell py-14 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-[64px]">
        {/*
          Copy stays first in source order regardless of which side the mockup
          sits on, so the heading is read before its illustration on mobile and
          by screen readers.
        */}
        <div className={cn(mediaFirst && "lg:order-2")}>
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft">
              {eyebrow}
            </p>

            <h2
              id={headingId}
              className="mt-4 max-w-[628px] font-sans text-[clamp(1.75rem,3.4vw,2.375rem)] font-bold leading-[1.16] tracking-[-0.02em] text-pretty text-ink-100"
            >
              {title}
            </h2>

            <p className="mt-[18px] max-w-[628px] text-[17px] leading-[27.2px] text-pretty text-ink-300">
              {lead}
            </p>
          </Reveal>

          <ul className="mt-7">
            {capabilities.map((capability, i) => (
              <Reveal
                as="li"
                key={capability.label}
                delay={i * 0.05}
                y={10}
                className="border-b border-[rgb(255_255_255/0.06)]"
              >
                <div className="flex items-start gap-[14px] py-[12px]">
                  <CheckMark />
                  <p className="text-[15px] leading-[24px] text-pretty text-ink-200">
                    <strong className="font-semibold text-ink-100">
                      {capability.label}
                    </strong>
                    {capability.detail && <> — {capability.detail}</>}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className={cn(mediaFirst && "lg:order-1")}>
          {mockup}
        </Reveal>
      </div>
    </section>
  );
}

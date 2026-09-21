"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";
import { USE_CASES } from "@/lib/services";
import { cn } from "@/lib/utils";

/**
 * Industry use cases as an ARIA tablist.
 *
 * Follows the WAI-ARIA tabs pattern: one tab in the tab order at a time
 * (roving tabindex), arrow keys move between tabs, Home and End jump to the
 * ends, and activation follows focus. Panels crossfade rather than slide —
 * sliding implies spatial order the three industries don't have.
 */
export function IndustryUseCases() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = usePrefersReducedMotion();
  const current = USE_CASES[index];

  const select = (next: number) => {
    const wrapped = (next + USE_CASES.length) % USE_CASES.length;
    setIndex(wrapped);
    tabs.current[wrapped]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: USE_CASES.length - 1,
    };
    if (event.key in moves) {
      event.preventDefault();
      select(moves[event.key]);
    }
  };

  return (
    <section aria-labelledby="use-cases" className="shell py-16 md:py-24">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft">
            Industry use cases
          </p>
          <h2
            id="use-cases"
            className="mt-4 max-w-[560px] font-sans text-[clamp(1.875rem,3.8vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.025em] text-pretty text-ink-100"
          >
            Built for the industries that run on repetition
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Industries"
          onKeyDown={onKeyDown}
          className="flex w-fit gap-1 rounded-[11px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-1"
        >
          {USE_CASES.map((useCase, i) => {
            const selected = i === index;
            return (
              <button
                key={useCase.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${useCase.id}`}
                aria-selected={selected}
                // Only the selected panel is mounted, so only its tab may
                // reference it — a dangling IDREF fails Lighthouse's axe audit.
                aria-controls={selected ? `panel-${useCase.id}` : undefined}
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative rounded-[8px] px-3.5 py-2 text-[13px] font-medium transition-colors duration-200",
                  selected ? "text-ink-100" : "text-ink-500 hover:text-ink-200",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="use-case-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[8px] bg-[rgb(255_255_255/0.07)]"
                    transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
                  />
                )}
                <span className="relative">{useCase.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 border-t border-[rgb(255_255_255/0.08)] pt-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            // Keeps the panel reachable by keyboard even though its content
            // starts with a heading rather than a focusable element.
            tabIndex={0}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduced ? 0 : 0.28, ease: EASE }}
            className="grid gap-10 outline-none lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16"
          >
            <div>
              <h3 className="font-sans text-[clamp(1.5rem,2.6vw,1.875rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink-100">
                {current.headline[0]}
                <br />
                {current.headline[1]}
              </h3>
              <p className="mt-4 max-w-[340px] text-[14.5px] leading-[23px] text-pretty text-ink-400">
                {current.body}
              </p>
              <Link
                href={current.link.href}
                className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-violet-soft"
              >
                {current.link.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <ol>
              {current.agents.map((agent, i) => (
                <li
                  key={agent.name}
                  className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 border-b border-[rgb(255_255_255/0.06)] py-[18px] first:pt-0 last:border-b-0"
                >
                  <span className="pt-[3px] font-mono text-[11px] text-ink-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[15.5px] font-semibold text-ink-100">
                      {agent.name}
                    </h4>
                    <p className="mt-1 text-[13.5px] leading-[22px] text-pretty text-ink-400">
                      {agent.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

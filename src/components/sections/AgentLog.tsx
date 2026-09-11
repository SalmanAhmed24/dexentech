"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";

const LOG_LINES = [
  { agent: "agent/guest-comms", result: "replied in 42s", escalated: false },
  { agent: "agent/housekeeping", result: "6 cleans scheduled", escalated: false },
  { agent: "agent/pricing", result: "rates updated ×14", escalated: false },
  { agent: "agent/escalation", result: "handed off to human", escalated: true },
];

/**
 * Figma renders this as four static lines. Staggering them in on scroll sells
 * what the panel is actually depicting — agents reporting in one after another
 * — without inventing anything that is not in the design.
 */
export function AgentLog() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      gsap.from("[data-log-line]", {
        opacity: 0,
        x: -8,
        duration: 0.5,
        stagger: 0.14,
        ease: GSAP_EASE,
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <div ref={root} className="px-[21px] pb-[21px] pt-2.5">
      <ul className="font-mono text-[11.5px] leading-[23px]">
        {LOG_LINES.map((line) => (
          <li key={line.agent} data-log-line>
            <span className={line.escalated ? "text-violet-soft" : "text-ink-600"}>
              {line.agent}
            </span>
            <span className="text-ink-300"> → {line.result}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/*
  Deliberately not exported. This module is "use client", and plain data
  exported from a client module reaches a server component as a client
  reference rather than the value itself.
*/
const ARCHITECTURE_LAYERS = [
  "Your operation — bookings · orders · customers",
  "Multi-agent layer — route · decide · execute",
  "MCP integrations — your tools, open protocol",
  "Monitoring · model routing · cost caps",
];

/**
 * The system architecture panel.
 *
 * Layers cascade downward on scroll, which is the diagram explaining itself:
 * requests enter at the top and fall through each tier. `activeIndex`
 * highlights one tier — the AI Infrastructure hero picks out the multi-agent
 * layer; the home page shows none.
 */
export function ArchitectureStack({
  activeIndex,
  className,
}: {
  activeIndex?: number;
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap.from("[data-layer]", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.1,
        ease: GSAP_EASE,
        scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <div
      ref={root}
      className={cn(
        "rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[33px]",
        className,
      )}
    >
      <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
        System architecture
      </p>

      <div className="mt-5">
        {ARCHITECTURE_LAYERS.map((layer, i) => (
          <div key={layer}>
            <div
              data-layer
              className={cn(
                "rounded-[10px] border px-5 py-3.5 transition-colors duration-500",
                i === activeIndex
                  ? "border-[rgb(168_85_247/0.45)] bg-[rgb(168_85_247/0.1)]"
                  : "border-line bg-[rgb(168_85_247/0.05)]",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[12.5px] leading-snug text-pretty",
                  i === activeIndex ? "text-violet-pale" : "text-ink-200",
                )}
              >
                {layer}
              </span>
            </div>

            {/* Bidirectional connector between tiers */}
            {i < ARCHITECTURE_LAYERS.length - 1 && (
              <p
                aria-hidden="true"
                className="py-1.5 text-center font-mono text-[12px] tracking-[2px] text-ink-600"
              >
                ↓ ↑
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.8px] text-ink-600">
          Escalates to humans
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.8px] text-violet-soft">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
          />
          Live
        </span>
      </div>
    </div>
  );
}

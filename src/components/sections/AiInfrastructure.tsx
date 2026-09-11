"use client";

import { useRef, type ComponentType } from "react";
import { useGSAP } from "@gsap/react";
import {
  IconAgentGraph,
  IconBarChart,
  IconBlocks,
  IconFlowArrow,
  IconLock,
} from "@/components/icons/section-icons";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";

type Capability = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  summary: string;
};

const CAPABILITIES: Capability[] = [
  {
    Icon: IconBlocks,
    title: "MCP integrations",
    summary:
      "Connect AI models to your tools through open protocol, not brittle scripts.",
  },
  {
    Icon: IconAgentGraph,
    title: "Multi-agent workflows",
    summary:
      "Agents that hand off tasks to each other and escalate to humans when needed.",
  },
  {
    Icon: IconBarChart,
    title: "AI monitoring",
    summary: "See what every agent did, when, and why.",
  },
  {
    Icon: IconFlowArrow,
    title: "Model routing",
    summary: "The right model for each task, not the priciest one for everything.",
  },
  {
    Icon: IconLock,
    title: "Cost optimization",
    summary: "Token spend tracked and capped per workflow.",
  },
];

/** The four tiers of the architecture panel, top to bottom. */
const LAYERS = [
  "Your operation — bookings · orders · guests",
  "Multi-agent layer — route · decide · execute",
  "MCP integrations — your tools, open protocol",
  "Monitoring · model routing · cost caps",
];

export function AiInfrastructure() {
  const stack = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  /**
   * The layers cascade downward on scroll, which is the diagram explaining
   * itself: requests enter at the top and fall through each tier.
   */
  useGSAP(
    () => {
      if (reduced) return;

      gsap.from("[data-layer]", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        stagger: 0.1,
        ease: GSAP_EASE,
        scrollTrigger: { trigger: stack.current, start: "top 80%", once: true },
      });
    },
    { scope: stack, dependencies: [reduced] },
  );

  return (
    <section aria-labelledby="ai-infrastructure" className="shell py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Capability list */}
        <div>
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>AI infrastructure</Eyebrow>
            <SectionHeading id="ai-infrastructure">
              The layer under the automation
            </SectionHeading>
          </Reveal>

          <ul className="mt-10">
            {CAPABILITIES.map((capability, i) => (
              <Reveal
                as="li"
                key={capability.title}
                delay={i * 0.06}
                y={12}
                className="border-b border-[rgb(255_255_255/0.08)]"
              >
                <div className="flex gap-4 py-5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgb(168_85_247/0.2)] bg-[rgb(168_85_247/0.08)] text-violet-soft">
                    <capability.Icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink-100">
                      {capability.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-6 text-pretty text-ink-400">
                      {capability.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Architecture panel */}
        <Reveal delay={0.1} className="lg:pt-4">
          <div
            ref={stack}
            className="rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[33px]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
              System architecture
            </p>

            <div className="mt-5">
              {LAYERS.map((layer, i) => (
                <div key={layer}>
                  <div
                    data-layer
                    className="rounded-[10px] border border-line bg-[rgb(168_85_247/0.05)] px-5 py-3.5"
                  >
                    <span className="text-[13px] leading-snug text-pretty text-ink-200">
                      {layer}
                    </span>
                  </div>

                  {/* Bidirectional connector between tiers */}
                  {i < LAYERS.length - 1 && (
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
        </Reveal>
      </div>
    </section>
  );
}

import type { ComponentType } from "react";
import {
  IconAgentGraph,
  IconBarChart,
  IconBlocks,
  IconCalendar,
  IconFlowArrow,
} from "@/components/icons/section-icons";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

type Service = {
  index: string;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  summary: string;
};

/**
 * These genuinely are a numbered sequence in the design — a service ledger read
 * top to bottom — so the 01–05 markers carry information rather than decorate.
 */
const SERVICES: Service[] = [
  {
    index: "01",
    Icon: IconCalendar,
    title: "Hospitality operating systems",
    summary:
      "Bookings, housekeeping, pricing, guest comms, and finance in one platform.",
  },
  {
    index: "02",
    Icon: IconBlocks,
    title: "B2B commerce infrastructure",
    summary:
      "Ordering portals, CRM, inventory, and tiered pricing that talk to each other.",
  },
  {
    index: "03",
    Icon: IconFlowArrow,
    title: "AI workflow automation",
    summary: "The manual steps between your tools, removed.",
  },
  {
    index: "04",
    Icon: IconAgentGraph,
    title: "Multi-agent orchestration",
    summary:
      "Teams of AI agents that route, decide, and execute across your operation.",
  },
  {
    index: "05",
    Icon: IconBarChart,
    title: "Industry intelligence systems",
    summary: "Pricing, demand, and stock signals specific to your market.",
  },
];

export function WhatWeBuild() {
  return (
    <section
      aria-labelledby="what-we-build"
      className="shell py-16 md:py-24"
    >
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Core services</Eyebrow>
        <SectionHeading id="what-we-build">What we build</SectionHeading>
      </Reveal>

      <ul className="mt-10 border-t border-[rgb(255_255_255/0.08)]">
        {SERVICES.map((service, i) => (
          <Reveal
            as="li"
            key={service.index}
            delay={i * 0.06}
            y={14}
            className="border-b border-[rgb(255_255_255/0.08)]"
          >
            <div
              className="group grid items-center gap-x-6 gap-y-3 px-2 py-[26px] transition-colors duration-500 hover:bg-[rgb(255_255_255/0.02)] md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.2fr)]"
            >
              <span className="font-mono text-[13px] text-ink-600">
                {service.index}
              </span>

              <div className="flex items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-[rgb(168_85_247/0.2)] bg-[rgb(168_85_247/0.08)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.14)]">
                  <service.Icon className="size-[18px]" />
                </span>
                <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold tracking-[-0.01em] text-ink-100">
                  {service.title}
                </h3>
              </div>

              {/* Balanced wrapping keeps this readable when it does wrap on
                  narrow viewports, where Figma's nowrap would overflow. */}
              <p className="text-[15px] leading-6 text-pretty text-ink-400">
                {service.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

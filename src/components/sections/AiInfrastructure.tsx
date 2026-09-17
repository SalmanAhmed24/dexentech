import type { ComponentType } from "react";
import {
  IconAgentGraph,
  IconBarChart,
  IconBlocks,
  IconFlowArrow,
  IconLock,
} from "@/components/icons/section-icons";
import { ArchitectureStack } from "@/components/ui/ArchitectureStack";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

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

export function AiInfrastructure() {

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
          <ArchitectureStack />
        </Reveal>
      </div>
    </section>
  );
}

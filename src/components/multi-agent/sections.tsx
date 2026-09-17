import type { ComponentType } from "react";
import { IconHuman } from "@/components/icons/ai-icons";
import {
  IconDocPage,
  IconMessage,
  IconTable,
} from "@/components/icons/mcp-icons";
import type { Pillar } from "@/components/ui/PillarCards";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/* ---------- The process stops where you say it stops ---------- */

type Step = {
  scope: string;
  detail: string;
  status: string;
  /** The one step that parks for a person — highlighted in the design. */
  awaiting?: boolean;
};

const STEPS: Step[] = [
  { scope: "agent/extract", detail: "invoice INV-2291 parsed", status: "Auto" },
  { scope: "agent/validate", detail: "matched to PO-0042", status: "Auto" },
  {
    scope: "payment/€4,120",
    detail: "queued with context",
    status: "Awaits human",
    awaiting: true,
  },
  {
    scope: "audit/log",
    detail: "4 steps · approver attached",
    status: "Logged",
  },
];

export function ApprovalCheckpoints() {
  return (
    <section aria-labelledby="checkpoints" className="shell py-10 md:py-14">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-8 md:p-[44px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.18),transparent_70%)] blur-[60px]"
          />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>Human approval checkpoints</Eyebrow>

              <h2
                id="checkpoints"
                className="mt-4 max-w-[420px] font-sans text-[clamp(1.625rem,3.2vw,2.125rem)] font-bold leading-[1.15] tracking-[-0.02em] text-pretty text-ink-100"
              >
                The process stops where you say it stops
              </h2>

              <p className="mt-5 max-w-[520px] text-[15px] leading-[25px] text-pretty text-ink-300">
                You define where the process stops for a person: before money
                moves, before a customer hears anything, before data changes.
                Agents queue the decision with full context; you approve in one
                click.
              </p>
            </div>

            {/*
              An ordered run, so <ol> rather than a <pre> block — the sequence
              is the meaning. The arrow between scope and detail is decorative.
            */}
            <ol className="flex flex-col gap-2">
              {STEPS.map((step) => (
                <li
                  key={step.scope}
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 rounded-[9px] border px-3.5 py-2.5",
                    step.awaiting
                      ? "border-[rgb(168_85_247/0.45)] bg-[rgb(168_85_247/0.1)]"
                      : "border-[rgb(255_255_255/0.07)] bg-[rgb(10_11_14/0.6)]",
                  )}
                >
                  <span className="font-mono text-[11.5px] leading-[19px]">
                    <span
                      className={
                        step.awaiting ? "text-violet-pale" : "text-ink-400"
                      }
                    >
                      {step.scope}
                    </span>
                    <span aria-hidden="true" className="text-ink-600">
                      {" → "}
                    </span>
                    <span className="text-ink-300">{step.detail}</span>
                  </span>

                  <span
                    className={cn(
                      "flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.9px]",
                      step.awaiting ? "text-violet-soft" : "text-ink-600",
                    )}
                  >
                    {step.awaiting && (
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
                      />
                    )}
                    {step.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- What agent teams run ---------- */

type AgentTeam = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const TEAMS: AgentTeam[] = [
  {
    Icon: IconHuman,
    title: "Resume screening pipelines",
    body: "Applications parsed, scored against the role, and ranked — with reasons attached. Your team interviews the top of the list instead of reading two hundred CVs.",
  },
  {
    Icon: IconDocPage,
    title: "Document processing agents",
    body: "Invoices, POs, and contracts read, extracted, and validated against your records. Mismatches flagged; clean documents filed straight through.",
  },
  {
    Icon: IconMessage,
    title: "Customer support copilots",
    body: "Answers drafted from your docs and order history in your tone. Agents resolve the routine and hand the rest to your team with the context attached.",
  },
  {
    Icon: IconTable,
    title: "Data extraction systems",
    body: "Data pulled from PDFs, emails, and spreadsheets into structured records — validated, deduplicated, and written to your database.",
  },
];

export function AgentTeams() {
  return (
    <section aria-labelledby="agent-teams" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="agent-teams">What agent teams run</SectionHeading>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {TEAMS.map((team, i) => (
          <Reveal as="li" key={team.title} delay={(i % 3) * 0.07} className="h-full">
            <article className="group flex h-full flex-col gap-[14px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]">
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]">
                  <team.Icon className="size-[19px]" />
                </span>
                <span className="font-mono text-[10.5px] tracking-[1px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-pretty text-ink-100">
                {team.title}
              </h3>

              <p className="text-[13.5px] leading-[22px] text-pretty text-ink-400">
                {team.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Architecture / ranking / monitoring ---------- */

export const WORKFLOW_PILLARS: Pillar[] = [
  {
    eyebrow: "LangGraph + Temporal",
    title: "Architecture that survives 2am",
    body: "LangGraph orchestrates agent decisions; Temporal guarantees workflows survive failures — every step retried, resumed, and auditable. If a step fails at 2am, it resumes at 2:01 instead of silently dropping.",
  },
  {
    eyebrow: "PPO-based ranking",
    title: "Agents ranked by results",
    body: "Agent outputs are scored against outcomes, and reinforcement (PPO) ranking routes work to the configurations that perform. The workflow gets better with volume — measurably.",
  },
  {
    eyebrow: "Monitoring",
    title: "Every run traced",
    body: "Steps, latency, cost, and outcome. Dashboards show throughput and failure points; monthly reports show what we tuned and what it saved.",
    link: {
      label: "Explore Monitoring",
      href: "/ai-infrastructure/monitoring-cost-optimization",
    },
  },
];

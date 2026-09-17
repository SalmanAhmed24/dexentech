import type { ComponentType } from "react";
import { IconEye } from "@/components/icons/ai-icons";
import {
  IconBarChart,
  IconShareNodes,
} from "@/components/icons/section-icons";
import {
  IconBell,
  IconCoin,
  IconScissors,
} from "@/components/icons/mcp-icons";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import type { Pillar } from "@/components/ui/PillarCards";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/* ---------- Hero console ---------- */

const STATS = [
  { label: "Runs today", value: "1,204" },
  { label: "Success", value: "99.2%" },
  // The spend tile is the one the design lights up — it is the page's argument.
  { label: "Spend / cap", value: "$41/120", lit: true },
];

const ROUTES = [
  { scope: "route/reasoning", detail: "capable model · 12% of calls" },
  { scope: "route/routine", detail: "cheap model · 88% of calls" },
  { scope: "context/audit", detail: "prompt trimmed −38% tokens" },
];

export function MonitorConsole() {
  return (
    <BrowserFrame url="monitor.dexentech.com" className="bg-cinder">
      <div className="flex justify-end px-[21px] pt-4">
        <span className="flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
          />
          <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-violet-soft">
            Live
          </span>
        </span>
      </div>

      {/*
        Figures, so a description list: the label is the term and the number is
        its value. Screen readers announce the pairing instead of four loose
        strings.
      */}
      <dl className="grid grid-cols-3 gap-2 px-[21px] pt-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-[9px] border p-3",
              stat.lit
                ? "border-[rgb(168_85_247/0.45)] bg-[rgb(168_85_247/0.1)]"
                : "border-[rgb(255_255_255/0.08)] bg-[rgb(255_255_255/0.02)]",
            )}
          >
            <dt className="font-mono text-[8.5px] uppercase tracking-[0.8px] text-ink-600">
              {stat.label}
            </dt>
            <dd
              className={cn(
                "mt-1.5 font-mono text-[17px] tabular-nums",
                stat.lit ? "text-violet-pale" : "text-ink-100",
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="px-[21px] pb-[21px] pt-4 font-mono text-[11px] leading-[22px]">
        {ROUTES.map((route) => (
          <li key={route.scope}>
            <span className="text-ink-600">{route.scope}</span>
            <span className="text-ink-300"> → {route.detail}</span>
          </li>
        ))}
      </ul>
    </BrowserFrame>
  );
}

/* ---------- What gets watched, and what it saves ---------- */

type Watch = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const WATCHED: Watch[] = [
  {
    Icon: IconEye,
    title: "AI performance monitoring",
    body: "Every agent action traced end to end: what ran, what it decided, how long it took, and whether it succeeded.",
  },
  {
    Icon: IconCoin,
    title: "Token cost tracking",
    body: "Spend tracked per workflow, per agent, per day — with caps that stop runaway costs before they hit your invoice.",
  },
  {
    // Genuine export from this Figma file.
    Icon: IconShareNodes,
    title: "Model routing optimization",
    body: "Heavy reasoning goes to capable models; routine steps go to cheaper ones. Routing rules are tested against outcomes.",
  },
  {
    Icon: IconScissors,
    title: "Context window audits",
    body: "Bloated prompts cost money and degrade output. We audit what each agent actually needs in context, cut the rest, and measure the difference.",
  },
  {
    Icon: IconBarChart,
    title: "Agent performance ranking",
    body: "Agent configurations scored against real outcomes and ranked. Work routes to what performs; what doesn't gets retired.",
  },
  {
    Icon: IconBell,
    title: "Alerting and caps",
    body: "Error spikes, latency drift, and budget thresholds page a human before your customers notice.",
  },
];

export function WhatGetsWatched() {
  return (
    <section aria-labelledby="watched" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="watched">
          What gets watched, and what it saves
        </SectionHeading>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {WATCHED.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 0.07} className="h-full">
            <article className="group flex h-full flex-col gap-[14px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]">
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]">
                  <item.Icon className="size-[19px]" />
                </span>
                <span className="font-mono text-[10.5px] tracking-[1px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-pretty text-ink-100">
                {item.title}
              </h3>

              <p className="text-[13.5px] leading-[22px] text-pretty text-ink-400">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Tooling pillars ---------- */

export const MONITORING_PILLARS: Pillar[] = [
  {
    eyebrow: "LangSmith",
    title: '"Why did it do that?" — answerable',
    body: "Full traces of every agent run in LangSmith: inputs, decisions, tool calls, and outputs — searchable when you need to answer for an action.",
  },
  {
    eyebrow: "Prometheus + Grafana",
    title: "The dashboards your infra team trusts",
    body: "Live operational dashboards: throughput, latency, error rates, and spend — the same monitoring stack your infrastructure team already runs.",
  },
  {
    eyebrow: "Monthly reports",
    title: "Optimization as a practice",
    body: "Each month: what ran, what it cost, what we changed, and what that saved. Optimization as a practice, not a one-time setup.",
  },
];

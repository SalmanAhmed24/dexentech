/*
  Server module on purpose.

  AI_FAQ is read by the route to build FAQPage structured data. If this file
  carried "use client", Next would hand the server a client-reference proxy
  instead of the array — which is exactly what caused `items.map is not a
  function` in faqSchema. Anything holding hooks lives in AiHero.tsx.
*/
import Link from "next/link";
import type { ComponentType } from "react";
import {
  IconEye,
  IconHuman,
  IconPyramid,
  IconSparkle,
} from "@/components/icons/ai-icons";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

/* ---------- Four service cards ---------- */

type Service = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
  link?: { label: string; href: string };
  /** The fourth card carries a mono tag instead of a link. */
  tag?: string;
};

const SERVICES: Service[] = [
  {
    Icon: IconSparkle,
    title: "MCP integration services",
    body: "AI agents connected to WhatsApp, CRM, Slack, Gmail, Notion, and your ERP through Model Context Protocol — open standard, not brittle scripts.",
    link: {
      label: "Explore MCP Integrations",
      href: "/ai-infrastructure/mcp-integrations",
    },
  },
  {
    Icon: IconPyramid,
    title: "Multi-agent workflow systems",
    body: "Teams of agents that screen resumes, process documents, and support customers — handing off to each other and escalating to your team.",
    link: {
      label: "Explore Multi-Agent Systems",
      href: "/ai-infrastructure/multi-agent-workflows",
    },
  },
  {
    Icon: IconEye,
    title: "AI monitoring and optimization",
    body: "Every agent action logged, every token costed, every model choice audited. You see what the AI did and what it cost.",
    link: {
      label: "Explore Monitoring",
      href: "/ai-infrastructure/monitoring-cost-optimization",
    },
  },
  {
    Icon: IconHuman,
    title: "Human-in-the-loop automation",
    body: "Agents draft, propose, and prepare. Money, messages, and decisions ship only after a human approves — checkpoints you define.",
    tag: "Built into every system",
  },
];

export function ServiceCards() {
  return (
    <section aria-label="AI intelligence services" className="shell pb-8">
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i * 0.07} className="h-full">
            <article className="group flex h-full flex-col gap-[15px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]">
              <span className="flex size-10 items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]">
                <service.Icon className="size-5" />
              </span>

              <h2 className="text-[19px] font-semibold leading-snug tracking-[-0.01em] text-pretty text-ink-100">
                {service.title}
              </h2>

              <p className="text-[14px] leading-[22px] text-pretty text-ink-300">
                {service.body}
              </p>

              {/* Pushed to the foot so the four cards align across the row. */}
              {service.link ? (
                <Link
                  href={service.link.href}
                  className="mt-auto flex items-center gap-2 pt-2 text-[14px] font-medium text-ink-100"
                >
                  {service.link.label}
                  <span
                    aria-hidden="true"
                    className="text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <span className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-[1px] text-violet-soft">
                  {service.tag}
                </span>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- What teams build on it ---------- */

const BUILDS = [
  "WhatsApp messages that create CRM records and draft replies",
  "Resume pipelines that rank applicants before a human reads one",
  "Supplier invoices extracted and entered without typing",
  "Support copilots that answer from your docs and escalate the rest",
  "LinkedIn outreach researched, drafted, and queued for approval",
];

const AGENT_LOG = [
  { agent: "mcp/whatsapp→crm", result: "record created · reply drafted", lit: false },
  { agent: "agent/resume-screen", result: "47 ranked · top 5 queued", lit: false },
  { agent: "agent/invoices", result: "34 extracted · 0 typed", lit: false },
  { agent: "copilot/support", result: "answered from docs · 2 escalated", lit: false },
  { agent: "mcp/linkedin", result: "outreach queued for approval", lit: true },
];

export function WhatTeamsBuild() {
  return (
    <section aria-labelledby="teams-build" className="shell py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading id="teams-build">What teams build on it</SectionHeading>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 block">
            <CheckList items={BUILDS} />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <BrowserFrame url="app.dexentech.com/agents" className="bg-cinder">
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

            <ul className="px-[21px] pb-[21px] pt-3 font-mono text-[11.5px] leading-[23px]">
              {AGENT_LOG.map((line) => (
                <li key={line.agent}>
                  <span className={line.lit ? "text-violet-soft" : "text-ink-600"}>
                    {line.agent}
                  </span>
                  <span className="text-ink-300"> → {line.result}</span>
                </li>
              ))}
            </ul>
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Fair questions ---------- */

export const AI_FAQ = [
  {
    question: "Do we need to replace our current tools?",
    answer:
      "No. MCP connects AI to the tools you already run — that's the point of the protocol.",
  },
  {
    question: "What stops an agent from doing something wrong?",
    answer:
      "Approval checkpoints. Agents prepare actions; anything touching money, customers, or data changes waits for a human. Every action is logged.",
  },
  {
    question: "Which AI models do you use?",
    answer:
      "The right one per task. Model routing sends heavy reasoning to capable models and routine steps to cheaper ones — that's how costs stay controlled.",
  },
  {
    question: "How do we know what this costs to run monthly?",
    answer:
      "Token spend is tracked per workflow with caps you set. You get the number, not a surprise.",
  },
  {
    question: "How long does a first workflow take to ship?",
    answer:
      "Most single workflows ship in 2–4 weeks, running in production with monitoring from day one.",
  },
  {
    question: "Who maintains it after launch?",
    answer:
      "We do — monitoring, model updates, and optimization reports monthly. Or we hand it to your team with documentation. Your call.",
  },
] as const;

export function AiFaq() {
  return (
    <section aria-labelledby="ai-faq" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="ai-faq">Fair questions</SectionHeading>
      </Reveal>

      {/*
        Open cards rather than the <details> accordion used on the solution
        pages — this design shows every answer at once.
      */}
      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {AI_FAQ.map((item, i) => (
          <Reveal as="li" key={item.question} delay={(i % 3) * 0.06} className="h-full">
            <article className="h-full rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px]">
              <h3 className="text-[15.5px] font-semibold leading-snug text-pretty text-ink-100">
                {item.question}
              </h3>
              <p className="mt-3.5 text-[14px] leading-[23px] text-pretty text-ink-400">
                {item.answer}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

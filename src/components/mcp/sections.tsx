import type { ComponentType } from "react";
import {
  IconBarChart,
  IconShareNodes,
} from "@/components/icons/section-icons";
import {
  IconDocPage,
  IconEnvelope,
  IconMessage,
  IconTicket,
} from "@/components/icons/mcp-icons";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";

/* ---------- Workflows we wire ---------- */

type Workflow = {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const WORKFLOWS: Workflow[] = [
  {
    Icon: IconMessage,
    title: "WhatsApp to CRM workflows",
    body: "A customer messages on WhatsApp. The agent identifies the account, logs the conversation, updates the record, and drafts the reply — your rep hits send.",
  },
  {
    // Exact export from this Figma file, already in the project.
    Icon: IconShareNodes,
    title: "LinkedIn outreach workflows",
    body: "Prospects researched from Sales Navigator, enriched into your CRM, and messaged with drafts written per account — queued for your approval, not blasted.",
  },
  {
    Icon: IconTicket,
    title: "Slack internal ticketing",
    body: "Requests posted in Slack become tickets: categorized, assigned, and tracked. Status updates flow back to the thread where people already are.",
  },
  {
    Icon: IconEnvelope,
    title: "Gmail support pipelines",
    body: "Inbound support email triaged by intent, matched to the customer record, and answered with drafts from your docs. Edge cases route to a human, labeled.",
  },
  {
    Icon: IconDocPage,
    title: "Notion knowledge systems",
    body: "Your Notion workspace becomes the brain: agents answer from your SOPs and docs, cite the page, and flag when documentation is missing or stale.",
  },
  {
    Icon: IconBarChart,
    title: "Accounting and ERP integrations",
    body: "Invoices extracted into Xero, QuickBooks, or Sage. Orders and stock synced with SAP, ERPNext, or Odoo. Finance data flows without re-keying.",
  },
];

export function WorkflowsWeWire() {
  return (
    <section aria-labelledby="workflows" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="workflows">Workflows we wire</SectionHeading>
      </Reveal>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {WORKFLOWS.map((workflow, i) => (
          <Reveal
            as="li"
            key={workflow.title}
            delay={(i % 3) * 0.07}
            className="h-full"
          >
            <article className="group flex h-full flex-col gap-[14px] rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]">
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]">
                  <workflow.Icon className="size-[19px]" />
                </span>
                <span className="font-mono text-[10.5px] tracking-[1px] text-ink-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-pretty text-ink-100">
                {workflow.title}
              </h3>

              <p className="text-[13.5px] leading-[22px] text-pretty text-ink-400">
                {workflow.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Scoped access. Human checkpoints. ---------- */

const SCOPE_RULES = [
  { scope: "scope/whatsapp", rule: "read + draft · send: human" },
  { scope: "scope/xero", rule: "read · write: human" },
  { scope: "scope/crm", rule: "read + write records" },
  { scope: "audit/log", rule: "100% of actions · approver attached" },
];

export function ScopedAccess() {
  return (
    <section aria-labelledby="scoped-access" className="shell py-10 md:py-14">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-8 md:p-[44px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.18),transparent_70%)] blur-[60px]"
          />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>Security and human review</Eyebrow>

              <h2
                id="scoped-access"
                className="mt-4 max-w-[420px] font-sans text-[clamp(1.625rem,3.2vw,2.125rem)] font-bold leading-[1.15] tracking-[-0.02em] text-pretty text-ink-100"
              >
                Scoped access. Human checkpoints.
              </h2>

              <p className="mt-5 max-w-[520px] text-[15px] leading-[25px] text-pretty text-ink-300">
                Every connection is scoped: agents get read or write access per
                system, per action. Anything irreversible — payments, sends,
                deletions — waits at a human checkpoint. Every action is logged
                with who approved it.
              </p>
            </div>

            {/*
              A permissions manifest, not runnable code — so it is a list of
              scope/rule pairs rather than a <pre>, and the arrow is decorative.
            */}
            <dl className="rounded-[12px] border border-[rgb(255_255_255/0.08)] bg-[rgb(10_11_14/0.6)] p-[21px]">
              {SCOPE_RULES.map((entry) => (
                <div
                  key={entry.scope}
                  className="flex flex-wrap items-baseline gap-x-2 py-[5px] font-mono text-[11.5px] leading-[20px]"
                >
                  <dt className="text-violet-soft">{entry.scope}</dt>
                  <span aria-hidden="true" className="text-ink-600">
                    →
                  </span>
                  <dd className="text-ink-300">{entry.rule}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

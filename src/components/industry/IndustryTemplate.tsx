import Link from "next/link";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { BadgedList } from "@/components/ui/BadgedList";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { CheckList, CheckMark } from "@/components/ui/CheckList";
import { FaqGrid } from "@/components/ui/FaqGrid";
import { PageCta } from "@/components/ui/PageCta";
import { PillGroup } from "@/components/ui/PillGroup";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";
import type { IndustryPageData } from "@/lib/industries/types";

export function IndustryTemplate({ data }: { data: IndustryPageData }) {
  return (
    <>
      <IndustryHero name={data.name} hero={data.hero} />

      {/* ---------- Problem + who it's for ---------- */}
      <section aria-labelledby="industry-problem" className="shell py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal>
            <Eyebrow>The problem in your industry</Eyebrow>
            <h2 id="industry-problem" className="sr-only">
              The problem in your industry
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[27px] text-pretty text-ink-200">
              {data.problem.body}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px]">
              <h3 className="font-mono text-[11px] uppercase tracking-[1.1px] text-violet-soft">
                Who it&rsquo;s for
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {data.whoItsFor.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-[15px] py-[8px] text-[13.5px] text-ink-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Weekly workflow issues ---------- */}
      <section aria-labelledby="industry-issues" className="shell py-16 md:py-20">
        <Reveal>
          <SectionHeading id="industry-issues">
            The workflow issues we see every week
          </SectionHeading>
        </Reveal>
        <BadgedList
          className="mt-10 border-t border-[rgb(255_255_255/0.08)]"
          items={data.issues}
          badge="FIXED BY SYSTEM"
        />
      </section>

      {/* ---------- Recommended system ---------- */}
      <section aria-labelledby="industry-recommended" className="shell py-10 md:py-14">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-8 md:p-[44px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 -z-10 h-[300px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.18),transparent_70%)] blur-[60px]"
            />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div>
                <Eyebrow>Recommended system</Eyebrow>
                <h2
                  id="industry-recommended"
                  className="mt-4 text-[clamp(1.625rem,3.2vw,2.125rem)] font-bold tracking-[-0.02em] text-ink-100"
                >
                  {data.recommended.product}
                </h2>
                <p className="mt-4 max-w-[560px] text-[15px] leading-[25px] text-pretty text-ink-300">
                  {data.recommended.body}
                </p>
              </div>

              <Button href={data.recommended.href} className="shrink-0">
                {data.recommended.ctaLabel}
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Modules included ---------- */}
      <section aria-labelledby="industry-modules" className="shell py-16 md:py-20">
        <Reveal>
          <SectionHeading id="industry-modules">Modules included</SectionHeading>
        </Reveal>
        <ul className="mt-8 flex flex-wrap gap-3">
          {data.modules.map((module, i) => (
            <Reveal as="li" key={module} delay={i * 0.03} y={10}>
              <span className="flex items-center gap-2 rounded-[10px] border border-[rgb(255_255_255/0.08)] bg-slate-900 px-[17px] py-[11px] text-[14px] text-ink-200">
                <CheckMark className="size-[14px]" />
                {module}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------- What the AI runs for you ---------- */}
      <section aria-labelledby="industry-automation" className="shell py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>AI automation</Eyebrow>
              <SectionHeading id="industry-automation" className="mt-4">
                What the AI runs for you
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 block">
              <CheckList items={[...data.automation.items]} />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <BrowserFrame
              url="app.dexentech.com/agents"
              className="bg-cinder"
              chromeRight={<StatusDot label="Live" />}
            >
              <ul className="px-[21px] pt-4 font-mono text-[11.5px] leading-[23px]">
                {data.automation.log.map((line) => (
                  <li key={line.agent}>
                    <span className="text-ink-600">{line.agent}</span>
                    <span className="text-ink-300"> → {line.result}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-[rgb(255_255_255/0.06)] px-[21px] py-3 font-mono text-[9.5px] uppercase tracking-[0.9px] text-ink-600">
                {data.automation.note}
              </p>
            </BrowserFrame>
          </Reveal>
        </div>
      </section>

      <PillGroup
        id="industry-plugs"
        heading="Plugs into what you already use"
        items={[...data.plugs]}
      />

      {/* ---------- Related case studies ---------- */}
      <section aria-labelledby="industry-cases" className="shell py-16 md:py-20">
        <Reveal>
          <SectionHeading id="industry-cases">Related case studies</SectionHeading>
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {data.caseStudies.map((study, i) => (
            <Reveal as="li" key={study.title} delay={i * 0.08} className="h-full">
              <Link
                href={study.href}
                className="group flex h-full flex-col gap-3 rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[27px] transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-ink-600">
                  Case study
                </span>
                <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-ink-100">
                  {study.title}
                </h3>
                <span className="flex items-start gap-2 text-[13.5px] leading-[22px] text-pretty text-ink-400">
                  <span
                    aria-hidden="true"
                    className="mt-[3px] shrink-0 text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                  {study.blurb}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <FaqGrid id="industry-faq" items={data.faq} />

      <PageCta
        id="industry-cta"
        heading={data.cta.heading}
        subheading={data.cta.subheading}
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />
    </>
  );
}

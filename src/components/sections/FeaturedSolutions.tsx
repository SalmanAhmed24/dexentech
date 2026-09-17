import Image from "next/image";
import Link from "next/link";
import { AgentLog } from "@/components/sections/AgentLog";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Eyebrow, Reveal, SectionHeading } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Solution = {
  name: string;
  body: string;
  metric: string;
  href: string;
  cta: string;
  url: string;
  /** Figma alternates which side the mockup sits on. */
  mediaFirst: boolean;
  image?: { src: string; alt: string; width: number; height: number };
};

const SOLUTIONS: Solution[] = [
  {
    name: "HospitalityOS",
    body: "One system for every property you run. Channel sync, dynamic pricing, automated housekeeping, guest messaging, and finance — replacing the tool stack you're paying for now.",
    metric: "0 overbookings in 6 months",
    href: "/solutions/hospitality-os",
    cta: "Explore HospitalityOS",
    url: "app.dexentech.com/hospitality",
    mediaFirst: false,
    image: {
      src: "/images/solution-1.webp",
      alt: "The HospitalityOS dashboard: total portfolio value, a performance trend chart, and live property metrics.",
      width: 527,
      height: 300,
    },
  },
  {
    name: "SupplyFlowOS",
    body: "Your distribution business, online. A modern ordering portal wired to your CRM, inventory, and pricing tiers — so sales stop happening over phone calls and PDFs.",
    metric: "Orders processed without staff input",
    href: "/solutions/supplyflow-os",
    cta: "Explore SupplyFlowOS",
    url: "app.dexentech.com/supply",
    mediaFirst: true,
    image: {
      src: "/images/solution-2.webp",
      alt: "The SupplyFlowOS workspace: active task count, client reviews, and a revenue forecast chart.",
      width: 527,
      height: 320,
    },
  },
  {
    name: "AI Infrastructure Services",
    body: "For teams that already have systems and want them to think. MCP integrations, multi-agent workflows, monitoring, model routing, and cost control.",
    metric: "Reply time reduction, measured per agent",
    href: "/solutions/ai-intelligence-systems",
    cta: "Explore AI Infrastructure",
    url: "app.dexentech.com/agents",
    mediaFirst: false,
    // No screenshot — this one renders a live agent log instead.
  },
];

export function FeaturedSolutions() {
  return (
    <section aria-labelledby="featured-solutions" className="shell py-16 md:py-24">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Featured solutions</Eyebrow>
        <SectionHeading id="featured-solutions">
          Three systems. One operator focus.
        </SectionHeading>
      </Reveal>

      <div className="mt-10 flex flex-col gap-5">
        {SOLUTIONS.map((solution, i) => (
          <Reveal key={solution.name} delay={i * 0.05}>
            <article className="grid items-center gap-8 overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.09)] bg-slate-900 p-6 md:p-[49px] lg:grid-cols-2 lg:gap-12">
              {/* Copy */}
              <div
                className={cn(
                  "flex flex-col gap-[15px]",
                  // Source order stays copy-first so screen readers and mobile
                  // read the product name before its screenshot.
                  solution.mediaFirst && "lg:order-2",
                )}
              >
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-ink-100">
                  {solution.name}
                </h3>

                <p className="max-w-[480px] text-[16px] leading-[26.4px] text-pretty text-ink-300">
                  {solution.body}
                </p>

                <p className="pt-2 font-mono text-[13px] text-violet-soft">
                  {solution.metric}
                </p>

                <Link
                  href={solution.href}
                  className="group mt-3 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-ink-100"
                >
                  {solution.cta}
                  <span
                    aria-hidden="true"
                    className="text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Mockup */}
              <div className={cn(solution.mediaFirst && "lg:order-1")}>
                <BrowserFrame url={solution.url}>
                  {solution.image ? (
                    /*
                      The artwork already carries its own violet bloom, so the
                      CSS gradient that previously stood in for it is gone —
                      layering both would double the glow.
                    */
                    (
                      <Image
                        src={solution.image.src}
                        alt={solution.image.alt}
                        width={solution.image.width}
                        height={solution.image.height}
                        sizes="(max-width: 1024px) 92vw, 42vw"
                        className="h-auto w-full"
                      />
                    )
                  ) : (
                    <AgentLog />
                  )}
                </BrowserFrame>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

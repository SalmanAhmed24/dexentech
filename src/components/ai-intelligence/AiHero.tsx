"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ArchitectureStack } from "@/components/ui/ArchitectureStack";
import { Button } from "@/components/ui/Button";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";

const LINES = [
  { text: "Make your systems", tone: "bright" },
  { text: "talk and think.", tone: "muted" },
] as const;

export function AiHero() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      gsap
        .timeline({ defaults: { ease: GSAP_EASE, duration: 0.85 } })
        .from("[data-h='rule']", { scaleX: 0, opacity: 0, duration: 1.1 }, 0)
        .from("[data-h='glow']", { opacity: 0, duration: 1.4 }, 0)
        .from("[data-h='eyebrow']", { opacity: 0, y: 12, duration: 0.6 }, 0.12)
        .from("[data-h='line']", { yPercent: 112, opacity: 0, stagger: 0.09 }, 0.2)
        .from("[data-h='sub']", { opacity: 0, y: 16, duration: 0.7 }, 0.55)
        .from("[data-h='cta']", { opacity: 0, y: 14, stagger: 0.08, duration: 0.6 }, 0.66)
        .from("[data-h='panel']", { opacity: 0, y: 26, duration: 1.1 }, 0.3);
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="ai-hero"
      className="relative isolate overflow-hidden pb-16 pt-[120px] md:pb-24"
    >
      <div
        data-h="rule"
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[min(900px,92vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgb(168_85_247/0.55),transparent)]"
      />
      <div
        data-h="glow"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[min(900px,96vw)] -translate-x-1/2 -translate-y-[190px] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.26),rgb(109_40_217/0.12)_45%,transparent_72%)] blur-[65px]"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-x-0 top-[19px] -z-10 h-[400px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_55%,transparent)]"
      />

      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:pt-6">
            <p
              data-h="eyebrow"
              className="font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft"
            >
              AI infrastructure for connected business systems
            </p>

            <h1
              id="ai-hero"
              className="mt-5 font-sans text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-pretty"
            >
              {LINES.map((line) => (
                <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                  <span
                    data-h="line"
                    className={
                      line.tone === "bright"
                        ? "block text-ink-100"
                        : "block text-ink-300"
                    }
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-h="sub"
              className="mt-5 max-w-[420px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-200"
            >
              AI wired into the tools you already run — with humans in control.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <span data-h="cta" className="inline-flex">
                <Button href="/contact">Book a Strategy Call</Button>
              </span>
              <span data-h="cta" className="inline-flex">
                <Button href="/pricing" variant="secondary">
                  Get a Quote
                </Button>
              </span>
            </div>
          </div>

          {/* The multi-agent tier is the one this page is about, so it is lit. */}
          <div data-h="panel">
            <ArchitectureStack activeIndex={1} />
          </div>
        </div>
      </div>
    </section>
  );
}


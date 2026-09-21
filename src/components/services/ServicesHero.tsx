"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";

export function ServicesHero() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap
        .timeline({ defaults: { ease: GSAP_EASE, duration: 0.85 } })
        .from("[data-sh='grid']", { opacity: 0, y: -20, duration: 1.6 }, 0)
        .from("[data-sh='eyebrow']", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-sh='line']", { yPercent: 110, opacity: 0, stagger: 0.09 }, 0.22)
        .from("[data-sh='sub']", { opacity: 0, y: 16, duration: 0.7 }, 0.55)
        .from("[data-sh='cta']", { opacity: 0, y: 14, stagger: 0.08, duration: 0.6 }, 0.66)
        .from("[data-sh='note']", { opacity: 0, duration: 0.8 }, 0.9);
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="services-hero"
      className="relative isolate overflow-hidden pb-20 pt-[150px] md:pb-28"
    >
      {/* Perspective grid, flattened onto the page colour so it composites for free */}
      <div data-sh="grid" aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[589px]">
        <Image
          src="/images/services-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="shell flex flex-col items-center text-center">
        <p
          data-sh="eyebrow"
          className="font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft"
        >
          AI workflow automation services
        </p>

        <h1
          id="services-hero"
          className="mt-6 font-sans text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.03em]"
        >
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-sh="line" className="block text-ink-100">
              Transform how your
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-sh="line" className="block text-ink-300">
              operation runs
            </span>
          </span>
        </h1>

        <p
          data-sh="sub"
          className="mt-6 max-w-[520px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-200"
        >
          Turn manual processes into reliable, intelligent automated pipelines —
          built on infrastructure you own and keep.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5">
          <span data-sh="cta" className="inline-flex">
            <Button href="/contact">
              Book a Strategy Call <span aria-hidden="true">→</span>
            </Button>
          </span>
          <span data-sh="cta" className="inline-flex">
            <Link
              href="/pricing"
              className="text-[15px] font-medium text-ink-200 transition-colors duration-200 hover:text-ink-100"
            >
              Get a Quote
            </Link>
          </span>
        </div>

        <p
          data-sh="note"
          className="mt-10 font-mono text-[10.5px] uppercase tracking-[1.6px] text-ink-600"
        >
          Processing 50,000+ tasks / week across active operator clients
        </p>
      </div>
    </section>
  );
}

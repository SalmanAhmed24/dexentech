"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";
import type { IndustryPageData } from "@/lib/industries/types";

/**
 * Unlike the other page heroes this one sits over a photograph, so the copy
 * needs its own scrim to stay legible. The scrim is painted in CSS rather than
 * baked into the image — the same photo then works at any crop, and the text
 * keeps its contrast ratio when the image is missing.
 */
export function IndustryHero({
  name,
  hero,
}: {
  name: string;
  hero: IndustryPageData["hero"];
}) {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      gsap
        .timeline({ defaults: { ease: GSAP_EASE, duration: 0.85 } })
        .from("[data-ih='photo']", { opacity: 0, scale: 1.06, duration: 1.4 }, 0)
        .from("[data-ih='eyebrow']", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from("[data-ih='title']", { yPercent: 110, opacity: 0 }, 0.22)
        .from("[data-ih='sub']", { opacity: 0, y: 16, duration: 0.7 }, 0.5)
        .from("[data-ih='cta']", { opacity: 0, y: 14, stagger: 0.08, duration: 0.6 }, 0.62);
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="industry-hero"
      className="relative isolate overflow-hidden"
    >
      {/*
        Photograph at the opacity Figma bakes into the export's alpha channel —
        20% on most pages, but not all (Medical & Laboratory runs at 36%). Kept
        in CSS so the committed file stays a normal opaque image: it compresses
        far better, and the dimming can be tuned without re-exporting.
      */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {hero.image && (
          <div
            data-ih="photo"
            className="absolute inset-0"
            style={{ opacity: hero.image.opacity ?? 0.2 }}
          >
            <Image
              src={hero.image.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}
      </div>

      {/*
        No directional scrim: at 20% the brightest point behind the copy gives
        ink-100 a 9.9:1 contrast ratio, well past the 4.5:1 body-text
        threshold, so darkening further would only flatten the photograph.
        The bottom fade stays — it stops the image ending on a hard edge.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,transparent,var(--color-void))]"
      />

      <div className="shell pb-16 pt-[136px] md:pb-24 lg:min-h-[460px]">
        <div className="max-w-[760px]">
          <p
            data-ih="eyebrow"
            className="flex flex-wrap items-center gap-2 font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft"
          >
            <span className="text-ink-500">Industries</span>
            <span aria-hidden="true" className="text-ink-600">
              ·
            </span>
            {/* The design boxes the industry name to mark where you are. */}
            <span className="rounded-[4px] border border-[rgb(168_85_247/0.35)] bg-[rgb(168_85_247/0.08)] px-2 py-[3px]">
              {name}
            </span>
          </p>

          <h1
            id="industry-hero"
            className="mt-5 overflow-hidden pb-[0.06em] font-sans text-[clamp(2.25rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-pretty text-ink-100"
          >
            <span data-ih="title" className="block">
              {hero.title}
            </span>
          </h1>

          <p
            data-ih="sub"
            className="mt-5 max-w-[540px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-200"
          >
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <span data-ih="cta" className="inline-flex">
              <Button href="/contact">Book a Strategy Call</Button>
            </span>

            {hero.secondaryCta && (
              <span data-ih="cta" className="inline-flex">
                <Link
                  href={hero.secondaryCta.href}
                  className="group flex items-center gap-2 text-[15px] font-medium text-ink-100"
                >
                  {hero.secondaryCta.label}
                  <span
                    aria-hidden="true"
                    className="text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

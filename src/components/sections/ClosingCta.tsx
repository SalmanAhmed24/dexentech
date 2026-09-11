"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import {
  IconAgentGraph,
  IconBarChart,
  IconCalendar,
  IconDiamondCore,
  IconShareNodes,
} from "@/components/icons/section-icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { gsap, GSAP_EASE, ScrollTrigger, usePrefersReducedMotion } from "@/lib/motion";

/**
 * The chip row is decorative — five module glyphs with one highlighted. It
 * carries no information the copy doesn't already state, so the whole row is
 * hidden from assistive tech rather than read out as five unlabelled buttons.
 */
const CHIPS = [
  IconCalendar,
  IconShareNodes,
  IconDiamondCore,
  IconAgentGraph,
  IconBarChart,
];

export function ClosingCta() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  /**
   * The highlight steps along the chip row, echoing the "live system" language
   * from the hero telemetry tags. It is bound to a ScrollTrigger so the loop
   * only runs while the section is on screen — an infinite timeline ticking
   * away off-screen is wasted battery and wasted main-thread time.
   */
  useGSAP(
    () => {
      if (reduced) return;

      const chips = gsap.utils.toArray<HTMLElement>("[data-chip]");
      if (chips.length === 0) return;

      const tl = gsap.timeline({ repeat: -1, paused: true });

      chips.forEach((chip, i) => {
        tl.to(
          chip,
          {
            borderColor: "rgba(168,85,247,0.55)",
            backgroundColor: "rgba(168,85,247,0.10)",
            color: "#c4b5fd",
            boxShadow: "0 0 22px -4px rgba(168,85,247,0.45)",
            duration: 0.45,
            ease: GSAP_EASE,
          },
          i * 1.1,
        ).to(
          chip,
          {
            borderColor: "rgba(255,255,255,0.10)",
            backgroundColor: "rgba(255,255,255,0.03)",
            color: "#8a8d98",
            boxShadow: "0 0 0 0 rgba(168,85,247,0)",
            duration: 0.45,
            ease: GSAP_EASE,
          },
          i * 1.1 + 0.75,
        );
      });

      // Loop only while the section is on screen. An infinite timeline ticking
      // away off-screen is wasted battery and wasted main-thread time.
      const trigger = ScrollTrigger.create({
        trigger: root.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });

      return () => trigger.kill();
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="closing-cta"
      className="relative isolate overflow-hidden"
    >
      {/*
        Backdrop. The CSS bloom paints first and always renders, so if the
        artwork ever fails to load the section degrades to a gradient rather
        than a black void. The mesh itself goes through next/image to pick up
        AVIF conversion and a responsive srcset — it is the heaviest asset on
        the page, and it is below the fold, so it lazy-loads by default.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full lg:w-[64%]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_70%_40%,rgb(217_120_255/0.30),rgb(109_40_217/0.20)_35%,rgb(30_64_175/0.18)_58%,transparent_78%)]" />

        <div
          className="absolute inset-0 opacity-60 lg:opacity-100"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 26%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 26%, black 100%)",
          }}
        >
          <Image
            src="/images/cta-mesh.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="shell py-20 md:py-28 lg:min-h-[688px] lg:py-32">
        <div className="max-w-[560px]">
          {/* Module chips */}
          <Reveal y={12}>
            <div aria-hidden="true" className="flex gap-2.5">
              {CHIPS.map((Icon, i) => (
                <span
                  key={i}
                  data-chip
                  className="flex size-10 items-center justify-center rounded-[11px] border border-line bg-[rgb(255_255_255/0.03)] text-ink-400"
                >
                  <Icon className="size-[18px]" />
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              id="closing-cta"
              className="mt-9 font-sans text-[clamp(2rem,4.2vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.025em] text-pretty text-ink-100"
            >
              Find out what your operation costs you.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[430px] text-[15px] leading-[22px] text-pretty text-ink-300">
              30 minutes. We map where your hours and revenue leak, and tell you
              what a system to fix it looks like — with a number attached. If
              we&rsquo;re not the right fit, you leave with the map anyway.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/contact">Book a Systems Call</Button>
              <Button
                href="/pricing"
                variant="secondary"
                // Figma fills this one rather than leaving it transparent, so
                // it holds its shape against the bright mesh behind it.
                className="bg-[rgb(13_14_19/0.9)] backdrop-blur-sm"
              >
                Get A Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

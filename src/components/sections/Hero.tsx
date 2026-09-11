"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * The headline is split into four visual lines so each can wipe up from behind
 * its own mask. It still renders inside a single <h1>, so assistive tech and
 * crawlers read one continuous heading:
 * "AI Operational Systems for Hospitality and B2B Commerce".
 */
const HEADLINE_LINES = [
  { text: "AI Operational", tone: "bright" },
  { text: "Systems", tone: "bright" },
  { text: "for Hospitality and", tone: "muted" },
  { text: "B2B Commerce", tone: "muted" },
] as const;

/**
 * Callouts pinned to the figure. Positions are percentages of the image box so
 * they track the artwork as it scales, rather than drifting at other viewports.
 */
type Annotation = {
  label: string;
  top: string;
  left?: string;
  right?: string;
};

const ANNOTATIONS: Annotation[] = [
  { label: "agent/guest-comms · LIVE", top: "13%", right: "0%" },
  { label: "model routing · active", top: "61%", left: "-2%" },
  { label: "0 overbookings · 6 mo", top: "75%", right: "1%" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const figureWrap = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  /* -------------------------------------------------------------------------
     Mouse parallax. Springs rather than raw values, so the figure settles
     instead of snapping — and it only ever writes to transform, which the
     compositor handles off the main thread.
     ------------------------------------------------------------------------- */
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.6 });
  const translateX = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const translateY = useTransform(springY, [-0.5, 0.5], [12, -12]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  /* -------------------------------------------------------------------------
     The page-load sequence. One timeline for the whole hero — the alternative,
     a separate fade on every element, is what makes pages feel assembled by a
     machine rather than designed.
     ------------------------------------------------------------------------- */
  useGSAP(
    () => {
      if (reduced) {
        gsap.set("[data-animate]", { opacity: 1, y: 0, scaleX: 1, clearProps: "all" });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: GSAP_EASE, duration: 0.9 },
      });

      tl.from("[data-animate='glow']", { opacity: 0, duration: 1.4 }, 0)
        .from("[data-animate='rule']", { scaleX: 0, opacity: 0, duration: 1.1 }, 0.05)
        .from("[data-animate='eyebrow']", { opacity: 0, y: 12, duration: 0.6 }, 0.15)
        .from(
          "[data-animate='line']",
          { yPercent: 112, opacity: 0, stagger: 0.075 },
          0.25,
        )
        .from("[data-animate='sub']", { opacity: 0, y: 16, duration: 0.7 }, 0.7)
        .from("[data-animate='cta']", { opacity: 0, y: 14, stagger: 0.08, duration: 0.6 }, 0.82)
        .from("[data-animate='note']", { opacity: 0, y: 10, duration: 0.6 }, 0.95)
        .from(
          "[data-animate='figure']",
          { opacity: 0, scale: 1.06, duration: 1.3 },
          0.2,
        )
        .from(
          "[data-animate='tag-line']",
          { scaleX: 0, opacity: 0, stagger: 0.12, duration: 0.55 },
          1.0,
        )
        .from(
          "[data-animate='tag']",
          { opacity: 0, x: 10, stagger: 0.12, duration: 0.5 },
          1.12,
        );
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate overflow-hidden pt-[104px] lg:pt-[110px]"
      aria-labelledby="hero-heading"
    >
      {/* ---------- Background ---------- */}

      {/* Hairline that anchors the top of the composition (Figma 53:2478) */}
      <div
        data-animate="rule"
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[min(900px,90vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.22),transparent)]"
      />

      {/* Violet bloom spilling in from above (Figma 53:2479) */}
      <div
        data-animate="glow"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[min(900px,95vw)] -translate-x-1/2 -translate-y-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.30),rgb(109_40_217/0.10)_45%,transparent_70%)] blur-[60px]"
      />

      {/*
        Dot grid. The Figma file draws ~1,000 <ellipse> nodes here; this is one
        painted layer at the same 27px pitch, faded out by a mask so it never
        collides with the copy.
      */}
      <div
        aria-hidden="true"
        className={cn(
          "dot-grid pointer-events-none absolute inset-x-0 top-[19px] -z-10 h-[500px]",
          "[mask-image:linear-gradient(to_bottom,transparent,black_18%,black_55%,transparent)]",
        )}
      />

      {/* ---------- Content ---------- */}
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
          {/* Copy column */}
          <div className="max-w-[672px] pb-6 lg:pb-[130px]">
            <p
              data-animate="eyebrow"
              className="font-mono text-[12px] uppercase tracking-[1.44px] text-ink-400"
            >
              Innovate. Integrate. Elevate.
            </p>

            <h1
              id="hero-heading"
              className="mt-5 font-sans font-bold tracking-[-0.03em] text-[clamp(2.4rem,5.4vw,3.9625rem)] leading-[1.049]"
            >
              {HEADLINE_LINES.map((line) => (
                <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                  <span
                    data-animate="line"
                    className={cn(
                      "block",
                      line.tone === "bright" ? "text-ink-100" : "text-ink-300",
                    )}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-animate="sub"
              className="mt-5 max-w-[520px] text-[clamp(1rem,1.5vw,1.1875rem)] leading-[1.6] text-ink-200"
            >
              We build the software that runs your bookings, orders, and
              operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <span data-animate="cta" className="inline-flex">
                <Button href="/contact">Book a Systems Call</Button>
              </span>
              <span data-animate="cta" className="inline-flex">
                <Button href="/solutions" variant="secondary">
                  See What We Build
                </Button>
              </span>
            </div>

            <p
              data-animate="note"
              className="mt-7 font-mono text-[12.5px] leading-relaxed text-ink-500"
            >
              No pitch deck. A 30-minute audit of where your operation leaks time.
            </p>
          </div>

          {/* Figure column */}
          <div
            ref={figureWrap}
            className="relative mx-auto aspect-square w-full max-w-[690px] lg:mx-0"
          >
            {/* Soft violet backing behind the figure (Figma 53:2482) */}
            <div
              aria-hidden="true"
              className="absolute left-[8%] top-[6%] -z-10 h-[64%] w-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(109_40_217/0.34),transparent_68%)] blur-[70px]"
            />

            <motion.div
              data-animate="figure"
              style={reduced ? undefined : { x: translateX, y: translateY }}
              className="relative size-full"
            >
              <Image
                src="/images/hero-figure.png"
                alt="A cybernetic figure in a hooded jacket, representing DexenTech's AI operational systems running live behind hospitality and B2B commerce businesses."
                width={1382}
                height={1382}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="size-full object-contain"
              />
            </motion.div>

            {/* Live-telemetry callouts */}
            {ANNOTATIONS.map((note) => (
              <div
                key={note.label}
                className="absolute z-10 flex items-center"
                style={{ top: note.top, left: note.left, right: note.right }}
              >
                <span
                  data-animate="tag-line"
                  aria-hidden="true"
                  className="mr-2 hidden h-px w-[59px] origin-left bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.28))] sm:block"
                />
                <span
                  data-animate="tag"
                  className="flex items-center gap-2 rounded-full border border-line bg-[rgb(10_11_14/0.72)] px-3 py-1.5 backdrop-blur-md"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
                  />
                  <span className="whitespace-nowrap font-mono text-[11px] text-ink-200 sm:text-[12px]">
                    {note.label}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

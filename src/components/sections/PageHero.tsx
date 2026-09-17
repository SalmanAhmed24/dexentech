"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { gsap, GSAP_EASE, usePrefersReducedMotion } from "@/lib/motion";

/**
 * The hero shared by every interior page, in three shapes:
 *   - centred (default) — Solutions, Industries, Services
 *   - align="left"      — MCP Integrations, Multi-Agent Workflows
 *   - with a `panel`    — Monitoring, where a live console sits alongside
 *
 * Passing a panel forces the left-aligned two-column layout, since a centred
 * column beside a panel reads as neither.
 *
 * Figma pins the section to 573.53px. That height is a floor rather than a
 * fixed value, because the headline wraps to three lines on narrow viewports
 * and a hard height would clip it.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  align = "center",
  panel,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  cta?: { label: string; href: string };
  /** The MCP page runs its hero left-aligned with a wider body paragraph. */
  align?: "center" | "left";
  /** Optional console or mockup shown beside the copy. */
  panel?: ReactNode;
}) {
  const centered = align === "center" && !panel;
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      gsap
        .timeline({ defaults: { ease: GSAP_EASE, duration: 0.8 } })
        .from("[data-hero='rule']", { scaleX: 0, opacity: 0, duration: 1.1 }, 0)
        .from("[data-hero='glow']", { opacity: 0, duration: 1.3 }, 0)
        .from("[data-hero='eyebrow']", { opacity: 0, y: 12, duration: 0.6 }, 0.12)
        // The headline wipes up from behind its own mask, matching the home hero.
        .from("[data-hero='title']", { yPercent: 108, opacity: 0, duration: 0.95 }, 0.2)
        .from("[data-hero='sub']", { opacity: 0, y: 16 }, 0.5)
        .from("[data-hero='cta']", { opacity: 0, y: 14, duration: 0.6 }, 0.62)
        // No-op when the page passes no panel — GSAP ignores an empty target.
        .from("[data-hero='panel']", { opacity: 0, y: 26, duration: 1.1 }, 0.3);
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section
      ref={root}
      aria-labelledby="page-hero-heading"
      className="relative isolate overflow-hidden pt-[136px] pb-16 md:pb-24 lg:min-h-[573px]"
    >
      {/* Violet hairline across the top (Figma 135:2168) */}
      <div
        data-hero="rule"
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[min(900px,92vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgb(168_85_247/0.6),transparent)]"
      />

      {/* Bloom spilling in from above (Figma 135:2169) */}
      <div
        data-hero="glow"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[min(900px,96vw)] -translate-x-1/2 -translate-y-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(109_40_217/0.42),transparent_70%)] blur-[70px]"
      />

      <div
        className={cn(
          "shell",
          panel
            ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14"
            : "flex flex-col",
          !panel && (centered ? "items-center text-center" : "items-start text-left"),
        )}
      >
        <div className={cn("flex flex-col", centered ? "items-center text-center" : "items-start text-left")}>
        <p
          data-hero="eyebrow"
          className="font-mono text-[12px] uppercase tracking-[1.44px] text-violet-soft"
        >
          {eyebrow}
        </p>

        <h1
          id="page-hero-heading"
          className={cn(
            "mt-[26px] overflow-hidden pb-[0.08em] font-sans font-bold",
            "leading-[1.04] tracking-[-0.03em] text-pretty text-ink-100",
            centered
              ? "max-w-[800px] text-[clamp(2.5rem,6.2vw,4.5rem)]"
              : "max-w-[900px] text-[clamp(2.25rem,5vw,3.25rem)]",
          )}
        >
          <span data-hero="title" className="block">
            {title}
          </span>
        </h1>

        <p
          data-hero="sub"
          className={cn("mt-[26px] text-[clamp(1rem,1.5vw,1.1875rem)] leading-[1.6] text-pretty text-ink-200", centered ? "max-w-[520px]" : "max-w-[640px]")}
        >
          {subtitle}
        </p>

        {cta && (
          <div data-hero="cta" className="mt-[38px]">
            <Button href={cta.href} className="px-[28px]">
              {cta.label}
            </Button>
          </div>
        )}
        </div>

        {panel && <div data-hero="panel">{panel}</div>}
      </div>
    </section>
  );
}

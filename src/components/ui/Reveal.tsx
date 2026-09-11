"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * The single scroll-entrance primitive for everything below the fold.
 *
 * `once: true` matters: re-animating on every scroll-back is the tell of a
 * template. `amount: 0.25` fires when a quarter of the element is visible,
 * which reads as "arriving" rather than "already there".
 */
const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof MOTION_TAGS;
}) {
  const reduced = usePrefersReducedMotion();
  const Component = MOTION_TAGS[as];

  return (
    <Component
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduced ? 0 : 0.7, ease: EASE, delay: reduced ? 0 : delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

/** Mono, tracked, violet — the section label used throughout the design. */
export function Eyebrow({
  children,
  className,
  tone = "violet",
}: {
  children: ReactNode;
  className?: string;
  tone?: "violet" | "muted";
}) {
  return (
    <p
      className={cn(
        "font-mono text-[12px] uppercase tracking-[1.44px]",
        tone === "violet" ? "text-violet-soft" : "text-ink-400",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Section heading: Geist Bold 52 / -1.3px tracking, fluid down to mobile. */
export function SectionHeading({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "font-sans font-bold tracking-[-0.025em] text-ink-100",
        "text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.08]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

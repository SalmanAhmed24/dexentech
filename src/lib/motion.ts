"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register GSAP plugins exactly once, on the client only. Importing
 * ScrollTrigger at module scope in a server component would break the build,
 * so every consumer of this file must be a client component.
 */
if (typeof window !== "undefined") {
  // registerPlugin is idempotent, so a module-level guard is enough.
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * The single easing curve the whole site shares. One curve is what makes
 * scattered animations read as one designed system rather than a pile of
 * separate effects.
 */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const GSAP_EASE = "expo.out";

/**
 * Live-updating reduced-motion preference. Note the `change` listener: users
 * can toggle this mid-session at the OS level and the page should respond
 * without a reload.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Parent that staggers its children. Pass `reduced` to collapse it to nothing. */
export const stagger = (reduced: boolean, gap = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: reduced ? {} : { staggerChildren: gap, delayChildren: 0.05 },
  },
});

/** The workhorse child variant: rise and fade. */
export const riseIn = (reduced: boolean, distance = 18): Variants => ({
  hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduced ? { duration: 0 } : { duration: 0.7, ease: EASE },
  },
});

/**
 * A headline line wiped upward from behind its own mask. The parent element
 * needs `overflow: hidden` for this to read correctly.
 */
export const lineWipe = (reduced: boolean): Variants => ({
  hidden: reduced ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: reduced ? { duration: 0 } : { duration: 0.9, ease: EASE },
  },
});

/** A hairline connector drawing itself out from its origin. */
export const drawLine = (reduced: boolean): Variants => ({
  hidden: reduced ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: reduced ? { duration: 0 } : { duration: 0.6, ease: EASE },
  },
});

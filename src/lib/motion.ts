"use client";

import { useEffect, useState } from "react";
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
 *
 * Typed as a mutable tuple on purpose: `as const` yields a readonly tuple, and
 * Framer Motion's bezier type is `[number, number, number, number]`.
 * TypeScript refuses readonly-to-mutable tuple assignment, so every
 * `transition={{ ease: EASE }}` would fail to compile.
 */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
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

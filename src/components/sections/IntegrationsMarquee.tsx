"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, usePrefersReducedMotion } from "@/lib/motion";

/**
 * Figma builds this as a fixed 1,897px row clipped by an alpha mask, with the
 * first two entries repeated at the end to imply motion. Here it is a real
 * marquee: the list is rendered twice and the track is translated by exactly
 * -50%, so the seam is invisible and the loop never drifts.
 */
const INTEGRATIONS = [
  "Booking.com",
  "Airbnb",
  "VRBO",
  "Stripe",
  "WhatsApp Business",
  "Supabase",
  "PostgreSQL",
  "Expedia",
  "Xero",
  "Twilio",
];

export function IntegrationsMarquee() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced || !track.current) return;

      const tween = gsap.to(track.current, {
        xPercent: -50,
        duration: 38,
        ease: "none",
        repeat: -1,
      });

      // Courtesy pause on hover — the strip is read as content, not decoration.
      const node = track.current;
      const slow = () => gsap.to(tween, { timeScale: 0.25, duration: 0.4 });
      const restore = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });

      node.addEventListener("pointerenter", slow);
      node.addEventListener("pointerleave", restore);

      return () => {
        node.removeEventListener("pointerenter", slow);
        node.removeEventListener("pointerleave", restore);
      };
    },
    { dependencies: [reduced] },
  );

  return (
    <section
      aria-label="Integrations"
      className="border-y border-line-subtle py-[23px]"
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 px-5 md:gap-10 md:px-10">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
          Integrates with
        </p>

        <div
          className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
          // The visible list is duplicated purely for the loop, so expose one
          // clean copy to assistive tech instead of a stuttering double read.
          aria-hidden="true"
        >
          <div ref={track} className="flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center">
                {INTEGRATIONS.map((name) => (
                  <li
                    key={`${copy}-${name}`}
                    className="whitespace-nowrap px-[26px] text-[15px] font-semibold text-ink-500"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* The accessible, non-duplicated version of the same list. */}
        <ul className="sr-only">
          {INTEGRATIONS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

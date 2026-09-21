import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Reveal } from "@/components/ui/Reveal";

/**
 * The full-bleed closing call to action that ends every interior page:
 * a hairline top border, a violet bloom overhead, centred copy and one button.
 *
 * Distinct from CtaBand, which is the bordered quote *card* mid-page.
 */
export function PageCta({
  id,
  heading,
  subheading,
  cta,
  eyebrow,
  secondaryCta,
}: {
  id: string;
  heading: string;
  subheading: string;
  /** `arrow` appends a decorative → that screen readers skip. */
  cta: { label: string; href: string; arrow?: boolean };
  /** Small label above the heading — "Ready to start" on /services. */
  eyebrow?: string;
  /** A quieter text link beside the button. */
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-line-subtle py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[min(1000px,96vw)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.2),rgb(109_40_217/0.08)_45%,transparent_72%)] blur-[70px]"
      />
      <div className="shell flex flex-col items-center text-center">
        {eyebrow && (
          <Reveal>
            <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal>
          <h2
            id={id}
            className="max-w-[720px] font-sans text-[clamp(1.875rem,4.6vw,3rem)] font-bold leading-[1.12] tracking-[-0.025em] text-pretty text-ink-100"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[520px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-300">
            {subheading}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5">
            <Button href={cta.href} className="px-[28px]">
              {cta.label}
              {cta.arrow && <span aria-hidden="true">→</span>}
            </Button>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-[15px] font-medium text-ink-200 transition-colors duration-200 hover:text-ink-100"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

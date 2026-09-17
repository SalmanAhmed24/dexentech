import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The centred quote band that closes the pricing conversation on every
 * solution page. One dark card, a violet bloom bleeding down from the top
 * edge, everything stacked on the axis.
 */
export function CtaBand({
  id,
  heading,
  subheading,
  cta,
}: {
  id: string;
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
}) {
  return (
    <section aria-labelledby={id} className="shell py-10 md:py-14">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.07)] bg-cinder px-6 py-16 text-center md:px-10 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[260px] w-[min(720px,90%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(168_85_247/0.22),rgb(109_40_217/0.08)_45%,transparent_72%)] blur-[60px]"
          />
          <h2
            id={id}
            className="mx-auto max-w-[640px] font-sans text-[clamp(1.75rem,4vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.025em] text-pretty text-ink-100"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-6 text-pretty text-ink-400">
            {subheading}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

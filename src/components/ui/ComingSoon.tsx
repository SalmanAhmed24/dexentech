import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { StatusDot } from "@/components/ui/StatusDot";

type Cta = { label: string; href: string };

/**
 * A holding page for routes that are linked across the site but not built yet.
 *
 * It is mounted at the real URL (/case-studies, /contact) rather than at a
 * shared /coming-soon path, so every link on the site already points at its
 * permanent address — shipping the real page means replacing one route file,
 * not rewriting links.
 *
 * It is never a dead end: two calls to action plus a row of useful links, so a
 * visitor who arrives here always has somewhere worthwhile to go next.
 *
 * All motion is CSS transforms on the compositor — no JavaScript, nothing to
 * hydrate — and the global prefers-reduced-motion rule stills it.
 */
export function ComingSoon({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  meanwhile,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: Cta;
  secondary?: Cta;
  meanwhile: Cta[];
}) {
  return (
    <section
      aria-labelledby="coming-soon-title"
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden pb-24 pt-[128px]"
    >
      {/* ---------- Backdrop ---------- */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[min(900px,92vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgb(168_85_247/0.55),transparent)]"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_42%,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[38%] -z-10 size-[min(760px,110vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(109_40_217/0.28),rgb(168_85_247/0.08)_40%,transparent_68%)] blur-[40px]"
      />

      <div className="shell flex flex-col items-center text-center">
        {/* ---------- Orbiting mark ---------- */}
        <Reveal y={0}>
          <div aria-hidden="true" className="relative size-[220px] sm:size-[260px]">
            {/* Pulse radiating from the core */}
            <span className="absolute inset-[28%] rounded-full border border-[rgb(168_85_247/0.5)] motion-safe:animate-[soft-ping_3.6s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            <span className="absolute inset-[28%] rounded-full border border-[rgb(168_85_247/0.4)] motion-safe:animate-[soft-ping_3.6s_cubic-bezier(0.16,1,0.3,1)_1.8s_infinite]" />

            {/*
              Three rings, each rotating at its own pace and direction, each
              carrying one glowing point. The point sits on the ring's top edge;
              rotating the ring carries it round.
            */}
            {[
              { inset: "0%", dur: "28s", dir: "orbit", dot: "#A855F7", size: 7 },
              { inset: "14%", dur: "19s", dir: "orbit-reverse", dot: "#C4B5FD", size: 5 },
              { inset: "27%", dur: "12s", dir: "orbit", dot: "#A78BFA", size: 4 },
            ].map((ring) => (
              <span
                key={ring.inset}
                className="absolute rounded-full border border-[rgb(255_255_255/0.08)]"
                style={{
                  inset: ring.inset,
                  animation: `${ring.dir} ${ring.dur} linear infinite`,
                }}
              >
                <span
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    backgroundColor: ring.dot,
                    boxShadow: `0 0 12px 3px ${ring.dot}99`,
                  }}
                />
              </span>
            ))}

            {/* The core */}
            <span className="absolute left-1/2 top-1/2 flex size-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[20px] border border-[rgb(168_85_247/0.45)] bg-[rgb(20_21_28/0.92)] shadow-[0_0_48px_-6px_rgb(168_85_247/0.6)] backdrop-blur-md">
              <Logo className="h-[32px] w-[30px]" />
            </span>
          </div>
        </Reveal>

        {/* ---------- Copy ---------- */}
        <Reveal delay={0.08} className="mt-10 flex flex-col items-center">
          <span className="rounded-full border border-[rgb(168_85_247/0.3)] bg-[rgb(168_85_247/0.08)] px-3.5 py-1.5">
            <StatusDot label="In progress" />
          </span>

          <p className="mt-6 font-mono text-[12px] uppercase tracking-[1.44px] text-ink-400">
            {eyebrow}
          </p>

          <h1
            id="coming-soon-title"
            className="mt-4 max-w-[720px] font-sans text-[clamp(2.25rem,5.4vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em] text-pretty text-ink-100"
          >
            {title}
          </h1>

          <p className="mt-5 max-w-[520px] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-pretty text-ink-300">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-9 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5">
            <Button href={primary.href}>
              {primary.label}
              <span aria-hidden="true">→</span>
            </Button>
            {secondary && (
              <Link
                href={secondary.href}
                className="text-[15px] font-medium text-ink-200 transition-colors duration-200 hover:text-ink-100"
              >
                {secondary.label}
              </Link>
            )}
          </div>

          {/* ---------- Meanwhile ---------- */}
          <nav
            aria-label="Meanwhile"
            className="mt-14 flex flex-col items-center gap-3 border-t border-line-subtle pt-8 sm:flex-row sm:gap-6"
          >
            <span className="font-mono text-[10.5px] uppercase tracking-[1.2px] text-ink-600">
              Meanwhile
            </span>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {meanwhile.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-full border border-[rgb(255_255_255/0.09)] px-3.5 py-1.5 text-[13px] text-ink-300 transition-colors duration-300 hover:border-[rgb(168_85_247/0.35)] hover:text-ink-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

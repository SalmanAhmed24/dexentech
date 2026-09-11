import type { ComponentType } from "react";
import {
  IconDiamondCore,
  IconLock,
  IconShareNodes,
} from "@/components/icons/section-icons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Pillar = {
  index: string;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  lead: string;
  detail: string;
};

const PILLARS: Pillar[] = [
  {
    index: "01",
    Icon: IconShareNodes,
    title: "One system, not ten tools.",
    lead: "Your calendar, pricing, messaging, and finance run in one place.",
    detail:
      "HospitalityOS syncs Booking.com, Airbnb, and VRBO into a single calendar — overbookings drop to zero.",
  },
  {
    index: "02",
    Icon: IconDiamondCore,
    title: "AI does the work your team repeats.",
    lead: "Agents handle the tasks that eat your staff's day.",
    detail:
      "Guest replies, cleaner scheduling, order entry, and stock updates run without a human in the loop.",
  },
  {
    index: "03",
    Icon: IconLock,
    title: "You own the infrastructure.",
    lead: "We build on your accounts, your data, your stack.",
    detail:
      "Next.js, Supabase, PostgreSQL — code and data stay with you when the engagement ends.",
  },
];

export function ValuePillars() {
  return (
    <section aria-label="Why DexenTech" className="shell py-16 md:py-24">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <Reveal as="li" key={pillar.index} delay={i * 0.08} className="h-full">
            <article
              className={cn(
                "group flex h-full flex-col gap-3 rounded-[14px] border border-[rgb(255_255_255/0.08)] p-[33px]",
                // Figma gives card 01 a solid fill and the other two a 41%
                // wash of the same colour, so the first reads as the anchor.
                i === 0 ? "bg-slate-900" : "bg-[rgb(16_17_22/0.41)]",
                "transition-colors duration-500 hover:border-[rgb(168_85_247/0.28)]",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-[11px]",
                    "border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.10)]",
                    "text-violet-soft transition-colors duration-500",
                    "group-hover:bg-[rgb(168_85_247/0.16)]",
                  )}
                >
                  <pillar.Icon className="size-5" />
                </span>
                <span className="font-mono text-[11px] tracking-[1.1px] text-violet-soft">
                  {pillar.index}
                </span>
              </div>

              <h3 className="pt-2 text-[21px] font-semibold tracking-[-0.01em] text-ink-100">
                {pillar.title}
              </h3>

              <p className="text-[15px] leading-6 text-ink-300">{pillar.lead}</p>

              <p className="pt-1 font-mono text-[12.5px] leading-[21.25px] text-ink-500">
                {pillar.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

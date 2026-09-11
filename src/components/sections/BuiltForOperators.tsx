import type { ComponentType } from "react";
import { IconHotel, IconWarehouse } from "@/components/icons/section-icons";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";

type Audience = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  segments: string[];
};

const AUDIENCES: Audience[] = [
  {
    label: "Hospitality",
    Icon: IconHotel,
    segments: [
      "Hotels",
      "Hostels",
      "Short-term rental operators",
      "Serviced apartments",
    ],
  },
  {
    label: "B2B Commerce",
    Icon: IconWarehouse,
    segments: ["Distributors", "Wholesalers", "Industrial suppliers"],
  },
];

export function BuiltForOperators() {
  return (
    <section aria-labelledby="built-for" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="built-for">
          Built for operators, not enterprises
        </SectionHeading>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {AUDIENCES.map((audience, i) => (
          <Reveal key={audience.label} delay={i * 0.1}>
            <div className="h-full rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[33px]">
              <div className="flex items-center gap-2.5">
                <audience.Icon className="size-[17px] text-violet-soft" />
                <h3 className="font-mono text-[11px] uppercase tracking-[1.1px] text-violet-soft">
                  {audience.label}
                </h3>
              </div>

              {/*
                Figma pins this row to 36px and lets it overflow. Wrapping is
                the right behaviour on real viewports, so the height is left to
                the content and the pills reflow instead of clipping.
              */}
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {audience.segments.map((segment) => (
                  <li
                    key={segment}
                    className="rounded-full border border-line px-[17px] py-[9px] text-[14px] text-ink-200 transition-colors duration-300 hover:border-[rgb(168_85_247/0.35)] hover:text-ink-100"
                  >
                    {segment}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <p className="mt-10 max-w-[640px] text-[clamp(1rem,1.5vw,1.1875rem)] leading-[1.6] text-pretty text-ink-200">
          If your operation runs on spreadsheets, WhatsApp threads, and five
          logins — you&rsquo;re who we build for.
        </p>
      </Reveal>
    </section>
  );
}

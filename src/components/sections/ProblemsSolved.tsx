import { Reveal, SectionHeading } from "@/components/ui/Reveal";

const COLUMNS = [
  {
    label: "Hospitality",
    problems: [
      "Overbooking across Booking.com, Airbnb, and VRBO",
      "Cleaner schedules managed by hand",
      "Prices that never move with demand",
      "Guests waiting hours for a reply",
      "Finance scattered across platforms",
    ],
  },
  {
    label: "B2B Commerce",
    problems: [
      "No ordering portal — customers order by phone and email",
      "CRM that doesn't know what's in stock",
      "Inventory tracked manually",
      "Tiered pricing held together in spreadsheets",
      "No view of what sales is actually doing",
    ],
  },
];

export function ProblemsSolved() {
  return (
    <section aria-labelledby="problems-solved" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="problems-solved">
          The problems we get hired for
        </SectionHeading>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {COLUMNS.map((column, columnIndex) => (
          <div key={column.label}>
            <Reveal delay={columnIndex * 0.08}>
              <h3 className="border-b border-[rgb(255_255_255/0.08)] pb-[15px] font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
                {column.label}
              </h3>
            </Reveal>

            <ul>
              {column.problems.map((problem, i) => (
                <Reveal
                  as="li"
                  key={problem}
                  delay={columnIndex * 0.08 + i * 0.05}
                  y={12}
                  className="border-b border-[rgb(255_255_255/0.06)]"
                >
                  {/*
                    Figma pins each row to a fixed gap and nowrap. Here the
                    label takes the available space and the badge stays put, so
                    long problems wrap instead of colliding on narrow screens.
                  */}
                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-[15px] leading-snug text-pretty text-ink-200">
                      {problem}
                    </span>
                    <span className="shrink-0 rounded-[4px] border border-[rgb(168_85_247/0.35)] bg-[rgb(168_85_247/0.08)] px-[9px] py-1 font-mono text-[10px] tracking-[0.8px] text-violet-soft">
                      SOLVED
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-12 text-[clamp(1rem,1.5vw,1.1875rem)] font-medium text-pretty text-ink-100">
          Every item on this list is a system we&rsquo;ve already built. Pick
          yours.
        </p>
      </Reveal>
    </section>
  );
}

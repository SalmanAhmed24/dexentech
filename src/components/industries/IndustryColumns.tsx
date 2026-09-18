import Link from "next/link";
import { IconHotel, IconWarehouse } from "@/components/icons/section-icons";
import { Reveal } from "@/components/ui/Reveal";
import { industryGroups } from "@/lib/site";

/*
  Icons are genuine exports from this Figma file, already in the project from
  the Solutions page. Rendered at 19px here; the geometry scales exactly.
*/
const GROUP_ICONS = [IconHotel, IconWarehouse];

export function IndustryColumns() {
  return (
    <section aria-label="Industries we build for" className="shell pb-24 md:pb-32">
      <div className="grid gap-5 lg:grid-cols-2">
        {industryGroups.map((group, g) => {
          const Icon = GROUP_ICONS[g];
          const headingId = `industry-group-${g}`;

          return (
            <Reveal key={group.name} delay={g * 0.08}>
              <div className="relative isolate h-full overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-8 md:p-10">
                {/* Bloom bleeding down from above the card edge */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[14%] top-[-70px] -z-10 h-[140px] w-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(109_40_217/0.3),transparent_70%)] blur-[45px]"
                />

                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-[11px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft">
                    <Icon className="size-[19px]" />
                  </span>
                  <h2
                    id={headingId}
                    className="text-[21px] font-bold tracking-[-0.02em] text-ink-100"
                  >
                    {group.name}
                  </h2>
                </div>

                {/*
                  The whole row is the link, so the hairline sits on the <li>
                  and the anchor fills it — the tap target is the full width
                  rather than just the label.
                */}
                <ul className="mt-7" aria-labelledby={headingId}>
                  {group.items.map((item) => (
                    <li
                      key={item.href}
                      className="border-b border-[rgb(255_255_255/0.08)] last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-4 py-[15px] transition-colors duration-300"
                      >
                        <span className="text-[15px] text-pretty text-ink-200 transition-colors duration-300 group-hover:text-ink-100">
                          {item.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-[14px] text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

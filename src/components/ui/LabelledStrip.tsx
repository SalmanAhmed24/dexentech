/**
 * A thin bordered band: one mono label, then a wrapped row of plain items.
 *
 * Used for "Built for operators like you", "Built for distributors like you"
 * and "Systems we connect". Unlike PillGroup these items carry no chrome —
 * they are a sentence-level list, not tappable chips.
 */
export function LabelledStrip({
  label,
  items,
  ariaLabel,
}: {
  label: string;
  items: string[];
  ariaLabel: string;
}) {
  return (
    <section aria-label={ariaLabel} className="border-y border-line-subtle py-[22px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 md:flex-row md:items-center md:gap-10 md:px-10">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[1.1px] text-ink-600">
          {label}
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {items.map((item) => (
            <li key={item} className="text-[13.5px] text-ink-400">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";

/**
 * A ledger of statements, each closed by a small violet badge — "SOLVED",
 * "STOPPED", "FIXED BY SYSTEM". Four sections across the site draw this shape.
 *
 * The badge is deliberately outside the text flow: it is a verdict on the row,
 * not part of the sentence, and it stays put while long rows wrap.
 */
export function BadgedList({
  items,
  badge,
  className,
}: {
  items: readonly string[];
  badge: string;
  className?: string;
}) {
  return (
    <ul className={className ?? "border-t border-[rgb(255_255_255/0.08)]"}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item}
          delay={i * 0.05}
          y={12}
          className="border-b border-[rgb(255_255_255/0.08)]"
        >
          <div className="flex items-center justify-between gap-4 py-[18px]">
            <span className="text-[clamp(0.95rem,1.6vw,1.0625rem)] leading-snug text-pretty text-ink-200">
              {item}
            </span>
            <span className="shrink-0 rounded-[4px] border border-[rgb(168_85_247/0.35)] bg-[rgb(168_85_247/0.08)] px-[9px] py-1 font-mono text-[10px] tracking-[0.8px] text-violet-soft">
              {badge}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export type GridCard = {
  /** Mono label top-left — "PRICING 01", "STACK". */
  tag: string;
  title: string;
  body: string;
  /** Marks the card with a ★ beside its tag. */
  starred?: boolean;
  /**
   * Where the card leads. Linked cards get the arrow and hover state;
   * unlinked ones render as plain articles rather than pointing at a 404.
   */
  href?: string;
};

function CardBody({ card }: { card: GridCard }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1px] text-violet-soft">
          {card.starred && <span aria-hidden="true">★</span>}
          {card.tag}
        </span>
        {card.href && (
          <span
            aria-hidden="true"
            className="text-[14px] text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        )}
      </div>
      <h2 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-pretty text-ink-100">
        {card.title}
      </h2>
      <p className="mt-2.5 text-[13.5px] leading-[22px] text-pretty text-ink-400">
        {card.body}
      </p>
    </>
  );
}

/**
 * Four-up grid of tagged cards. Used by Technology Stack and Pricing, whose
 * designs share the same card: mono tag, arrow, title, one-line body.
 */
export function CardGrid({
  cards,
  ariaLabel,
}: {
  cards: GridCard[];
  ariaLabel: string;
}) {
  return (
    <section aria-label={ariaLabel} className="shell pb-24 md:pb-32">
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, i) => {
          const className = cn(
            "group flex h-full flex-col rounded-[14px] border border-[rgb(255_255_255/0.08)] bg-slate-900 p-[22px]",
            "transition-colors duration-500",
            card.href && "hover:border-[rgb(168_85_247/0.3)]",
          );
          return (
            <Reveal as="li" key={card.title} delay={(i % 4) * 0.05} className="h-full">
              {card.href ? (
                <Link href={card.href} className={className}>
                  <CardBody card={card} />
                </Link>
              ) : (
                <article className={className}>
                  <CardBody card={card} />
                </article>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

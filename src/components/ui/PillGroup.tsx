import { Reveal } from "@/components/ui/Reveal";

/**
 * Heading plus a wrapped row of pills. Four sections across the site use this
 * shape — "Plugs into what you already use", "What it's built on", "Systems we
 * connect", "Plugs into what you already run".
 *
 * `mono` matches the AI Infrastructure page, which sets its pills in JetBrains
 * Mono rather than Geist.
 */
export function PillGroup({
  id,
  heading,
  items,
  note,
  mono = false,
}: {
  id: string;
  heading: string;
  items: string[];
  note?: string;
  mono?: boolean;
}) {
  return (
    <section aria-labelledby={id} className="shell py-16 md:py-20">
      <Reveal>
        <h2
          id={id}
          className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-ink-100"
        >
          {heading}
        </h2>
      </Reveal>

      <ul className="mt-7 flex flex-wrap gap-3">
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 0.03} y={10}>
            <span
              className={
                "block rounded-[10px] border border-[rgb(255_255_255/0.08)] bg-slate-900 px-[19px] py-[12px] text-ink-200 transition-colors duration-300 hover:border-[rgb(168_85_247/0.3)] hover:text-ink-100 " +
                (mono ? "font-mono text-[12.5px]" : "text-[14px]")
              }
            >
              {item}
            </span>
          </Reveal>
        ))}
      </ul>

      {note && (
        <Reveal delay={0.1}>
          <p className="mt-7 text-[15px] text-pretty text-ink-400">{note}</p>
        </Reveal>
      )}
    </section>
  );
}

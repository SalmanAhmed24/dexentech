import { Reveal, SectionHeading } from "@/components/ui/Reveal";

const STACK = [
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "n8n",
  "WhatsApp Business API",
  "Stripe",
  "LangGraph",
  "Temporal",
  "Redis",
  "React Native",
];

export function TechStack() {
  return (
    <section aria-labelledby="tech-stack" className="shell py-16 md:py-24">
      <Reveal>
        <SectionHeading id="tech-stack">What it&rsquo;s built on</SectionHeading>
      </Reveal>

      <ul className="mt-8 flex flex-wrap gap-3">
        {STACK.map((tool, i) => (
          <Reveal
            as="li"
            key={tool}
            // Tighter stagger than elsewhere: ten items at the usual 0.06s
            // would drag the row out long after the reader has moved on.
            delay={i * 0.035}
            y={10}
          >
            <span className="block rounded-[10px] border border-[rgb(255_255_255/0.08)] bg-slate-900 px-[21px] py-[13px] text-[15px] text-ink-200 transition-colors duration-300 hover:border-[rgb(168_85_247/0.3)] hover:text-ink-100">
              {tool}
            </span>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <p className="mt-8 text-[15px] text-pretty text-ink-400">
          Production infrastructure used by companies far bigger than us. No
          proprietary lock-in.
        </p>
      </Reveal>
    </section>
  );
}

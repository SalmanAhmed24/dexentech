import { cn } from "@/lib/utils";

/**
 * The violet checkmark used for every capability and benefit list on the site.
 *
 * Authored rather than exported: the Figma MCP quota was exhausted when this
 * was needed. It is a generic check glyph drawn to match the surrounding icon
 * set (16px box, 1.6 stroke, round caps). Swap it for the real export when
 * quota allows — Figma node 135:593 on the AI Infrastructure frame.
 */
export function CheckMark({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0 text-violet-soft", className)}
    >
      <path
        d="M3 8.5L6.2 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A bordered list of checked statements. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-[rgb(255_255_255/0.06)]">
      {items.map((item) => (
        <li key={item} className="border-b border-[rgb(255_255_255/0.06)]">
          <div className="flex items-start gap-[14px] py-[14px]">
            <CheckMark className="mt-[3px]" />
            <span className="text-[15px] leading-[24px] text-pretty text-ink-200">
              {item}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

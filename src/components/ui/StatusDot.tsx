import { cn } from "@/lib/utils";

/**
 * The small violet pulse plus label used in panel chrome — "LIVE", "SYNCED",
 * "AUTO". Pulled out because four panels draw the same mark.
 */
export function StatusDot({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-1.5", className)}>
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-violet-core shadow-[0_0_8px_2px_rgb(168_85_247/0.5)]"
      />
      <span className="font-mono text-[10.5px] uppercase tracking-[1px] text-violet-soft">
        {label}
      </span>
    </span>
  );
}

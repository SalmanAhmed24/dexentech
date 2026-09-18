import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The Figma design repeats this window chrome three times with only the URL
 * changing, so it lives here once. The dots are decorative and hidden from
 * assistive tech; the URL is real text because it tells the reader which
 * product they are looking at.
 */
export function BrowserFrame({
  url,
  children,
  className,
  bodyClassName,
  chromeRight,
}: {
  url: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /**
   * Status shown at the right edge of the chrome bar — "LIVE", "SYNCED".
   * The designs place it on the same row as the URL, not below it.
   */
  chromeRight?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[12px] border border-[rgb(255_255_255/0.09)] bg-slate-850",
        "shadow-[0_24px_60px_-30px_rgb(0_0_0/0.7)]",
        className,
      )}
    >
      <div className="flex items-center gap-[7px] border-b border-line-subtle px-4 py-3">
        <span aria-hidden="true" className="flex gap-[7px]">
          <span className="size-[9px] rounded-[4.5px] bg-line-strong" />
          <span className="size-[9px] rounded-[4.5px] bg-line-strong" />
          <span className="size-[9px] rounded-[4.5px] bg-line-strong" />
        </span>
        <span className="pl-2.5 font-mono text-[10.5px] text-ink-600">{url}</span>
        {chromeRight && <span className="ml-auto">{chromeRight}</span>}
      </div>

      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}

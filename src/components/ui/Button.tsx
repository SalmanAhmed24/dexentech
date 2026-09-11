import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Two variants, matching the Figma source exactly:
 *
 *   primary   — 134.5° gradient from color/violet/50 to color/violet/65,
 *               9px radius, 26/14 padding, white SemiBold label
 *   secondary — 1px white-14% hairline, transparent fill, 25/15 padding
 *
 * Sizes are separated out because the header CTA sets 13px while the hero
 * pair sets 15px, and everything else about them is identical.
 */

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[9px] font-sans " +
  "whitespace-nowrap transition-[transform,box-shadow,background-color,border-color] " +
  "duration-300 ease-[var(--ease-out-quart)] " +
  "motion-safe:hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: cn(
    "font-semibold text-white",
    "bg-[linear-gradient(134.53deg,var(--color-violet-deep)_0%,var(--color-violet-core)_100%)]",
    // The glow is the hover affordance — the gradient itself never shifts.
    "shadow-[0_0_0_0_rgb(168_85_247/0)]",
    "hover:shadow-[0_10px_36px_-8px_rgb(168_85_247/0.55)]",
  ),
  secondary: cn(
    "font-medium text-ink-100",
    "border border-line-strong bg-transparent",
    "hover:border-[rgb(255_255_255/0.28)] hover:bg-[rgb(255_255_255/0.04)]",
  ),
};

const sizes: Record<Size, string> = {
  sm: "px-[26px] py-[14px] text-[13px] leading-none",
  md: "px-[26px] py-[14px] text-[15px] leading-none",
};

// The outlined variant carries a 1px border, so it needs 1px less padding to
// land on the same optical box as the filled one.
const secondaryInset = "px-[25px] py-[15px]";

export type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        sizes[size],
        variants[variant],
        variant === "secondary" && secondaryInset,
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

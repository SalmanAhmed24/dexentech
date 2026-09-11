import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional classes without letting duplicate Tailwind utilities fight. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

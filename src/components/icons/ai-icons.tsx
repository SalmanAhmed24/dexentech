import type { ReactNode } from "react";
/**
 * Service-card icons for the AI Infrastructure page.
 *
 * AUTHORED, NOT EXPORTED. The Figma MCP quota was exhausted before nodes
 * 135:438, 135:459, 135:481 and 135:499 could be pulled, so these are drawn to
 * match the glyphs visible in the design (sparkle, layered pyramid, eye,
 * person) using the same 20px box and 1.41667 stroke as the exported set.
 * Replace them with the real exports when quota allows.
 */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.41667,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Box({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** MCP integration services */
export function IconSparkle({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M10 2.5L11.7 7.3a1.5 1.5 0 0 0 1 1L17.5 10l-4.8 1.7a1.5 1.5 0 0 0-1 1L10 17.5l-1.7-4.8a1.5 1.5 0 0 0-1-1L2.5 10l4.8-1.7a1.5 1.5 0 0 0 1-1L10 2.5Z"
        {...stroke}
      />
    </Box>
  );
}

/** Multi-agent workflow systems */
export function IconPyramid({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path d="M10 3L17 16H3L10 3Z" {...stroke} />
      <path d="M6.6 10.5H13.4" {...stroke} opacity={0.6} />
    </Box>
  );
}

/** AI monitoring and optimization */
export function IconEye({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M1.9 10S5 4.6 10 4.6 18.1 10 18.1 10 15 15.4 10 15.4 1.9 10 1.9 10Z"
        {...stroke}
      />
      <path
        d="M10 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
        {...stroke}
      />
    </Box>
  );
}

/** Human-in-the-loop automation */
export function IconHuman({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M10 9.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        {...stroke}
      />
      <path d="M4.4 16.4a5.9 5.9 0 0 1 11.2 0" {...stroke} />
    </Box>
  );
}

import type { ReactNode } from "react";

/**
 * Authored card icons shared by the AI Infrastructure sub-pages.
 *
 * AUTHORED, NOT EXPORTED. Figma nodes 135:1810, 135:1844, 135:1859 and
 * 135:1874 could not be pulled — the MCP quota was exhausted — so these are
 * drawn from the design at the same 19px box and 1.41667 stroke as the
 * exported set. The other two cards reuse IconShareNodes and IconBarChart,
 * which are real exports from this same Figma file.
 */

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.41667,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Box({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
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

/** WhatsApp to CRM workflows */
export function IconMessage({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M16.2 9.2a5.9 5.9 0 0 1-6.3 5.9 6.7 6.7 0 0 1-2.8-.6l-4 1.3 1.3-4a6.7 6.7 0 0 1-.6-2.8A5.9 5.9 0 0 1 9.7 2.8h.4a5.9 5.9 0 0 1 6.1 6.4Z"
        {...stroke}
      />
    </Box>
  );
}

/** Slack internal ticketing */
export function IconTicket({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M15.4 3.6H3.6a.8.8 0 0 0-.8.8v9.2c0 .4.4.8.8.8h11.8c.4 0 .8-.4.8-.8V4.4a.8.8 0 0 0-.8-.8Z"
        {...stroke}
      />
      <path d="M2.8 7.1h13.4" {...stroke} />
      <path d="M6.3 10.6h4.2" {...stroke} opacity={0.6} />
    </Box>
  );
}

/** Gmail support pipelines */
export function IconEnvelope({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M15.8 4.4H3.2a.8.8 0 0 0-.8.8v8.6c0 .4.4.8.8.8h12.6c.4 0 .8-.4.8-.8V5.2a.8.8 0 0 0-.8-.8Z"
        {...stroke}
      />
      <path d="M2.7 5.2 9.5 10l6.8-4.8" {...stroke} />
    </Box>
  );
}

/** Notion knowledge systems */
export function IconDocPage({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M11.1 2.4H5.2a1.2 1.2 0 0 0-1.2 1.2v11.8a1.2 1.2 0 0 0 1.2 1.2h8.6a1.2 1.2 0 0 0 1.2-1.2V6.3l-3.9-3.9Z"
        {...stroke}
      />
      <path d="M11.1 2.4v3.9h3.9" {...stroke} />
      <path d="M6.7 10.2h5.6" {...stroke} opacity={0.6} />
      <path d="M6.7 12.9h3.9" {...stroke} opacity={0.6} />
    </Box>
  );
}

/** Data extraction systems (multi-agent workflows, card 04) */
export function IconTable({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M15.4 3.2H3.6a.8.8 0 0 0-.8.8v11a.8.8 0 0 0 .8.8h11.8a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8Z"
        {...stroke}
      />
      <path d="M2.8 7.3h13.4" {...stroke} />
      <path d="M7.3 7.3v8.5" {...stroke} opacity={0.6} />
      <path d="M2.8 11.5h13.4" {...stroke} opacity={0.6} />
    </Box>
  );
}

/** Token cost tracking (monitoring, card 02) */
export function IconCoin({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M9.5 16.2a6.7 6.7 0 1 0 0-13.4 6.7 6.7 0 0 0 0 13.4Z"
        {...stroke}
      />
      <path d="M9.5 5.9v7.2" {...stroke} />
      <path
        d="M11.4 7.7H8.6a1.4 1.4 0 0 0 0 2.8h1.8a1.4 1.4 0 0 1 0 2.8H7.6"
        {...stroke}
      />
    </Box>
  );
}

/** Context window audits (monitoring, card 04) */
export function IconScissors({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path d="M5.2 6.6a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z" {...stroke} />
      <path d="M5.2 16.2a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z" {...stroke} />
      <path d="M6.6 5.7 15.4 15" {...stroke} />
      <path d="M15.4 4 6.6 13.3" {...stroke} />
    </Box>
  );
}

/** Alerting and caps (monitoring, card 06) */
export function IconBell({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path
        d="M14.3 12.4a1 1 0 0 0-.3-.7l-.7-.8V8.1a4.1 4.1 0 1 0-8.2 0v2.8l-.7.8a1 1 0 0 0-.3.7c0 .4.3.7.7.7h8.8c.4 0 .7-.3.7-.7Z"
        {...stroke}
      />
      <path d="M8.1 15.4a1.6 1.6 0 0 0 2.8 0" {...stroke} />
    </Box>
  );
}

/** Customer support (services, pillar 02) */
export function IconHeadset({ className }: { className?: string }) {
  return (
    <Box className={className}>
      <path d="M3.2 11.2V9.5a6.3 6.3 0 0 1 12.6 0v1.7" {...stroke} />
      <path
        d="M15.8 11.2v2.3a1.2 1.2 0 0 1-1.2 1.2h-.8a.8.8 0 0 1-.8-.8v-3a.8.8 0 0 1 .8-.8h2Zm-12.6 0v2.3a1.2 1.2 0 0 0 1.2 1.2h.8a.8.8 0 0 0 .8-.8v-3a.8.8 0 0 0-.8-.8h-2Z"
        {...stroke}
      />
    </Box>
  );
}

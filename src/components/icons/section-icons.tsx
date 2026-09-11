/**
 * Icons exported verbatim from the Figma Home frame.
 *
 * The only edit made to the source geometry: `stroke="#A78BFA"` became
 * `stroke="currentColor"` so hover states and future theming work. Every path,
 * stroke-width and viewBox is unchanged, and each icon keeps the exact box it
 * was drawn at — 20px for the value cards, 18px for the service rows.
 */

type IconProps = { className?: string };

const strokeProps = {
  strokeWidth: 1.41667,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  stroke: "currentColor",
};

const thinStroke = { ...strokeProps, strokeWidth: 1.275 };

function Svg20({ className, children }: IconProps & { children: React.ReactNode }) {
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

function Svg18({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
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

/* ---------- Value card icons (Figma 53:2201 / 53:2218 / 53:2232) ---------- */

export function IconShareNodes({ className }: IconProps) {
  return (
    <Svg20 className={className}>
      <path
        d="M4.58333 11.8333C5.59586 11.8333 6.41667 11.0125 6.41667 9.99996C6.41667 8.98744 5.59586 8.16663 4.58333 8.16663C3.57081 8.16663 2.75 8.98744 2.75 9.99996C2.75 11.0125 3.57081 11.8333 4.58333 11.8333Z"
        {...strokeProps}
      />
      <path
        d="M15.4167 6.41667C16.4292 6.41667 17.25 5.59586 17.25 4.58333C17.25 3.57081 16.4292 2.75 15.4167 2.75C14.4041 2.75 13.5833 3.57081 13.5833 4.58333C13.5833 5.59586 14.4041 6.41667 15.4167 6.41667Z"
        {...strokeProps}
      />
      <path
        d="M15.4167 17.25C16.4292 17.25 17.25 16.4292 17.25 15.4167C17.25 14.4042 16.4292 13.5834 15.4167 13.5834C14.4041 13.5834 13.5833 14.4042 13.5833 15.4167C13.5833 16.4292 14.4041 17.25 15.4167 17.25Z"
        {...strokeProps}
      />
      <path d="M6.33334 9.16663L13.6667 5.41663" {...strokeProps} />
      <path d="M6.33334 10.8334L13.6667 14.5834" {...strokeProps} />
    </Svg20>
  );
}

export function IconDiamondCore({ className }: IconProps) {
  return (
    <Svg20 className={className}>
      <path
        d="M10 2.91663L17.0834 9.99996L10 17.0833L2.91669 9.99996L10 2.91663Z"
        {...strokeProps}
      />
      <path
        d="M10 11.3333C10.7364 11.3333 11.3334 10.7363 11.3334 9.99996C11.3334 9.26358 10.7364 8.66663 10 8.66663C9.26364 8.66663 8.66669 9.26358 8.66669 9.99996C8.66669 10.7363 9.26364 11.3333 10 11.3333Z"
        fill="currentColor"
      />
    </Svg20>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <Svg20 className={className}>
      <path
        d="M13.75 9.16663H6.24998C5.32951 9.16663 4.58331 9.91282 4.58331 10.8333V14.5833C4.58331 15.5038 5.32951 16.25 6.24998 16.25H13.75C14.6705 16.25 15.4166 15.5038 15.4166 14.5833V10.8333C15.4166 9.91282 14.6705 9.16663 13.75 9.16663Z"
        {...strokeProps}
      />
      <path
        d="M7.08331 9.16667V6.66667C7.08331 5.89312 7.3906 5.15125 7.93759 4.60427C8.48457 4.05729 9.22643 3.75 9.99998 3.75C10.7735 3.75 11.5154 4.05729 12.0624 4.60427C12.6094 5.15125 12.9166 5.89312 12.9166 6.66667V9.16667"
        {...strokeProps}
      />
    </Svg20>
  );
}

/* ---------- Service row icons (Figma 53:2254 → 53:2310) ---------- */

export function IconCalendar({ className }: IconProps) {
  return (
    <Svg18 className={className}>
      <path
        d="M13.5 3.75H4.5C3.67157 3.75 3 4.42157 3 5.25V13.5C3 14.3284 3.67157 15 4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V5.25C15 4.42157 14.3284 3.75 13.5 3.75Z"
        {...thinStroke}
      />
      <path d="M3 7.5H15" {...thinStroke} />
      <path d="M6.375 2.25V5.25" {...thinStroke} />
      <path d="M11.625 2.25V5.25" {...thinStroke} />
    </Svg18>
  );
}

export function IconBlocks({ className }: IconProps) {
  return (
    <Svg18 className={className}>
      <path
        d="M10.875 2.625H7.125C6.50368 2.625 6 3.12868 6 3.75V7.5C6 8.12132 6.50368 8.625 7.125 8.625H10.875C11.4963 8.625 12 8.12132 12 7.5V3.75C12 3.12868 11.4963 2.625 10.875 2.625Z"
        {...thinStroke}
      />
      <path
        d="M7.5 9.75H3.75C3.12868 9.75 2.625 10.2537 2.625 10.875V14.625C2.625 15.2463 3.12868 15.75 3.75 15.75H7.5C8.12132 15.75 8.625 15.2463 8.625 14.625V10.875C8.625 10.2537 8.12132 9.75 7.5 9.75Z"
        {...thinStroke}
      />
      <path
        d="M14.25 9.75H10.5C9.87868 9.75 9.375 10.2537 9.375 10.875V14.625C9.375 15.2463 9.87868 15.75 10.5 15.75H14.25C14.8713 15.75 15.375 15.2463 15.375 14.625V10.875C15.375 10.2537 14.8713 9.75 14.25 9.75Z"
        {...thinStroke}
      />
    </Svg18>
  );
}

export function IconFlowArrow({ className }: IconProps) {
  return (
    <Svg18 className={className}>
      <path
        d="M3.75 10.5C4.57843 10.5 5.25 9.82843 5.25 9C5.25 8.17157 4.57843 7.5 3.75 7.5C2.92157 7.5 2.25 8.17157 2.25 9C2.25 9.82843 2.92157 10.5 3.75 10.5Z"
        {...thinStroke}
      />
      <path d="M5.625 9H12" {...thinStroke} />
      <path d="M10.125 6.375L13.125 9L10.125 11.625" {...thinStroke} />
    </Svg18>
  );
}

export function IconAgentGraph({ className }: IconProps) {
  return (
    <Svg18 className={className}>
      <path
        d="M9 5.25C9.82843 5.25 10.5 4.57843 10.5 3.75C10.5 2.92157 9.82843 2.25 9 2.25C8.17157 2.25 7.5 2.92157 7.5 3.75C7.5 4.57843 8.17157 5.25 9 5.25Z"
        {...thinStroke}
      />
      <path
        d="M3.75 15C4.57843 15 5.25 14.3284 5.25 13.5C5.25 12.6716 4.57843 12 3.75 12C2.92157 12 2.25 12.6716 2.25 13.5C2.25 14.3284 2.92157 15 3.75 15Z"
        {...thinStroke}
      />
      <path
        d="M14.25 15C15.0784 15 15.75 14.3284 15.75 13.5C15.75 12.6716 15.0784 12 14.25 12C13.4216 12 12.75 12.6716 12.75 13.5C12.75 14.3284 13.4216 15 14.25 15Z"
        {...thinStroke}
      />
      <path d="M8.09999 5.09998L4.64999 12.15" {...thinStroke} />
      <path d="M9.89999 5.09998L13.35 12.15" {...thinStroke} />
      <path d="M5.39999 13.5H12.6" {...thinStroke} />
    </Svg18>
  );
}

export function IconBarChart({ className }: IconProps) {
  return (
    <Svg18 className={className}>
      <path d="M2.625 15.375H15.375" {...thinStroke} opacity={0.45} />
      <path d="M4.5 12.75V9.375" {...thinStroke} />
      <path d="M9 12.75V4.875" {...thinStroke} />
      <path d="M13.5 12.75V7.125" {...thinStroke} />
    </Svg18>
  );
}

/* ---------- Audience card icons (Figma 53:2325 / 53:2344) ---------- */

const audienceStroke = {
  strokeWidth: 1.20417,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  stroke: "currentColor",
};

function Svg17({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
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

export function IconHotel({ className }: IconProps) {
  return (
    <Svg17 className={className}>
      <path
        d="M12.3958 2.47925H4.60416C4.01736 2.47925 3.54166 2.95495 3.54166 3.54175V13.4584C3.54166 14.0452 4.01736 14.5209 4.60416 14.5209H12.3958C12.9826 14.5209 13.4583 14.0452 13.4583 13.4584V3.54175C13.4583 2.95495 12.9826 2.47925 12.3958 2.47925Z"
        {...audienceStroke}
      />
      <path d="M7.08334 14.5209V12.0417H9.91667V14.5209" {...audienceStroke} />
      <path d="M6.375 5.66675H7.4375" {...audienceStroke} />
      <path d="M9.5625 5.66675H10.625" {...audienceStroke} />
      <path d="M6.375 8.5H7.4375" {...audienceStroke} />
      <path d="M9.5625 8.5H10.625" {...audienceStroke} />
    </Svg17>
  );
}

export function IconWarehouse({ className }: IconProps) {
  return (
    <Svg17 className={className}>
      <path
        d="M10.2709 2.47925H6.72919C6.14238 2.47925 5.66669 2.95495 5.66669 3.54175V7.08341C5.66669 7.67022 6.14238 8.14591 6.72919 8.14591H10.2709C10.8577 8.14591 11.3334 7.67022 11.3334 7.08341V3.54175C11.3334 2.95495 10.8577 2.47925 10.2709 2.47925Z"
        {...audienceStroke}
      />
      <path
        d="M7.08335 9.20825H3.54169C2.95488 9.20825 2.47919 9.68395 2.47919 10.2708V13.8124C2.47919 14.3992 2.95488 14.8749 3.54169 14.8749H7.08335C7.67016 14.8749 8.14585 14.3992 8.14585 13.8124V10.2708C8.14585 9.68395 7.67016 9.20825 7.08335 9.20825Z"
        {...audienceStroke}
      />
      <path
        d="M13.4584 9.20825H9.91669C9.32988 9.20825 8.85419 9.68395 8.85419 10.2708V13.8124C8.85419 14.3992 9.32988 14.8749 9.91669 14.8749H13.4584C14.0452 14.8749 14.5209 14.3992 14.5209 13.8124V10.2708C14.5209 9.68395 14.0452 9.20825 13.4584 9.20825Z"
        {...audienceStroke}
      />
    </Svg17>
  );
}

import type { FaqItem } from "@/components/ui/FaqGrid";

/**
 * Every industry page in the design follows the same eleven-section shape, so
 * the layout lives in one template and each industry supplies only content.
 * Adding the next one means writing a file like this, not another component.
 */
export type IndustryPageData = {
  /** Route segment under /industries. */
  slug: string;
  /** Shown in the hero eyebrow after "Industries ·". */
  name: string;

  hero: {
    title: string;
    subtitle: string;
    /**
     * Full-bleed photograph behind the hero. Optional: without it the section
     * falls back to the violet bloom and still reads as designed.
     */
    image?: { src: string; alt: string };
    secondaryCta?: { label: string; href: string };
  };

  problem: { body: string };
  /** Short audience descriptors shown as pills beside the problem. */
  whoItsFor: readonly string[];
  /** Weekly pain points, each closed with a FIXED BY SYSTEM badge. */
  issues: readonly string[];

  recommended: {
    product: string;
    body: string;
    href: string;
    ctaLabel: string;
  };

  modules: readonly string[];

  automation: {
    items: readonly string[];
    log: readonly { agent: string; result: string }[];
    /** Footnote under the log, e.g. the human-approval rule. */
    note: string;
  };

  plugs: readonly string[];

  caseStudies: readonly {
    title: string;
    blurb: string;
    href: string;
  }[];

  faq: readonly FaqItem[];

  cta: { heading: string; subheading: string };

  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
};

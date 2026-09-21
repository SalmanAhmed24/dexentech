import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

/*
  Holding page. It lives at the real URL so every "Read the case study" link
  across the site already points at its permanent address — replacing this
  file with the real page is the whole migration.
*/
export const metadata: Metadata = {
  title: "Case Studies — coming soon",
  description:
    "Case studies of DexenTech systems in production are being written up now.",
  alternates: { canonical: "/case-studies" },
  // Thin placeholder content: keep it out of the index until the real page
  // ships, but let crawlers follow the links onward.
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <ComingSoon
      eyebrow="Case studies · being written"
      title="Proof is on its way"
      description="We're writing up real systems — the operator, the problem, and what changed. Until they're published, see what we build and who we build it for."
      primary={{ label: "Explore Solutions", href: "/solutions" }}
      secondary={{ label: "Browse industries", href: "/industries" }}
      meanwhile={[
        { label: "HospitalityOS", href: "/solutions/hospitality-os" },
        { label: "SupplyFlowOS", href: "/solutions/supplyflow-os" },
        { label: "AI Intelligence Systems", href: "/solutions/ai-intelligence-systems" },
      ]}
    />
  );
}

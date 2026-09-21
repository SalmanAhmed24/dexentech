import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

/*
  Holding page — see case-studies/page.tsx. Every "Book a Strategy Call" on
  the site lands here, so this is the highest-priority route to replace.
*/
export const metadata: Metadata = {
  title: "Contact — coming soon",
  description: "Booking for DexenTech strategy calls opens shortly.",
  alternates: { canonical: "/contact" },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <ComingSoon
      eyebrow="Contact · opening soon"
      title="Strategy calls open shortly"
      description="We're setting up booking so a 30-minute systems call lands straight in the calendar. Meanwhile, pricing shows how every engagement is scoped."
      primary={{ label: "See pricing", href: "/pricing" }}
      secondary={{ label: "Explore Solutions", href: "/solutions" }}
      meanwhile={[
        { label: "Services", href: "/services" },
        { label: "Technology Stack", href: "/technology-stack" },
        { label: "Industries", href: "/industries" },
      ]}
    />
  );
}

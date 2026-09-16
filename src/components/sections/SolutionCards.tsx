import Link from "next/link";
import type { ComponentType } from "react";
import {
  IconDiamondCore,
  IconHotel,
  IconWarehouse,
} from "@/components/icons/section-icons";
import { Reveal } from "@/components/ui/Reveal";

type SolutionCard = {
  Icon: ComponentType<{ className?: string }>;
  name: string;
  body: string;
  href: string;
};

/**
 * Icons reuse the components already exported from this same Figma file for
 * the Home page. Figma redraws them here at 21px instead of 17px/20px, but the
 * geometry is identical and the stroke scales exactly: 1.20417 × (21/17) and
 * 1.41667 × (21/20) both land on 1.4875, which is what the 21px export uses.
 */
const CARDS: SolutionCard[] = [
  {
    Icon: IconHotel,
    name: "HospitalityOS",
    body: "One system for every property you run. Bookings, housekeeping, guests, and finance — synced across Booking.com, Airbnb, Expedia, and VRBO.",
    href: "/solutions/hospitality-os",
  },
  {
    Icon: IconWarehouse,
    name: "SupplyFlowOS",
    body: "Your distribution business, online end to end. Ordering portal, CRM, inventory, and workforce — wired together.",
    href: "/solutions/supplyflow-os",
  },
  {
    Icon: IconDiamondCore,
    name: "AI Intelligence Systems",
    body: "For teams whose systems should think. MCP integrations, multi-agent workflows, monitoring, and cost control.",
    href: "/solutions/ai-intelligence-systems",
  },
];

export function SolutionCards() {
  return (
    <section aria-label="Our solutions" className="shell pb-32 pt-10 md:pb-40">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal as="li" key={card.name} delay={i * 0.08} className="h-full">
            {/*
              The whole card is the link in Figma, so it is one anchor here
              rather than a card with a link inside it — that keeps the tap
              target honest and stops screen readers announcing a nested link.
            */}
            <Link
              href={card.href}
              className="group relative flex h-full flex-col gap-[18px] overflow-hidden rounded-[18px] border border-[rgb(255_255_255/0.09)] bg-slate-900 p-10 transition-colors duration-500 hover:border-[rgb(168_85_247/0.3)]"
            >
              {/* Bloom bleeding down from above the card edge (Figma 135:2190) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[17%] top-[-70px] h-[130px] w-[280px] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(109_40_217/0.32),transparent_70%)] blur-[40px] transition-opacity duration-500 group-hover:opacity-[1.6]"
              />

              <span className="relative flex size-12 items-center justify-center rounded-[12px] border border-[rgb(168_85_247/0.22)] bg-[rgb(168_85_247/0.1)] text-violet-soft transition-colors duration-500 group-hover:bg-[rgb(168_85_247/0.16)]">
                <card.Icon className="size-[21px]" />
              </span>

              {/*
                h2 in Figma. These are the page's section headings beneath the
                single h1, so the level is correct as-is.
              */}
              <h2 className="relative text-[26px] font-bold tracking-[-0.02em] text-ink-100">
                {card.name}
              </h2>

              <p className="relative max-w-[345px] text-[15px] leading-[24.75px] text-pretty text-ink-300">
                {card.body}
              </p>

              {/* Pushed to the card foot so the three rows align across the grid. */}
              <span className="relative mt-auto flex items-center gap-2 pt-2 text-[14.5px] font-semibold text-ink-100">
                Explore {card.name}
                <span
                  aria-hidden="true"
                  className="text-violet-soft transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

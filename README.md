# DexenTech

Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion · GSAP

Built from the `Home` frame (node `53:2195`) of the Dexentech Website Figma file.

---

## Setup

```bash
npm install
chmod +x scripts/fetch-figma-assets.sh && ./scripts/fetch-figma-assets.sh
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` in production. Every canonical URL, OG tag, sitemap
entry and JSON-LD `@id` derives from it, so leaving it unset ships the wrong
domain everywhere at once.

---

## What is built

| Piece | Figma node | Status |
|---|---|---|
| Design tokens | file variables | done |
| Header + nav | `53:4862` | done |
| Hero | `53:2474` | done |
| Integrations marquee | `53:4956` | done |
| Value pillars | `53:2197` | done |
| What we build | `53:2243` | done |
| Built for operators | `53:2319` | done |
| Featured solutions | `53:3570` | done |
| Problems we solve | `53:3656` | done |
| AI infrastructure | `53:2358` | done |
| Tech stack | `53:3718` | done |
| Fair questions | `53:2455` | done — also emits FAQPage schema |
| Case studies | `53:3744` | done — placeholders, see below |
| Closing CTA | `63:5230` | done |
| Footer | `53:4897` | done |

---

## Pages

| Route | Figma node | Status |
|---|---|---|
| `/` Home | `53:2195` | done — 12 sections |
| `/solutions` | `135:2159` | done — hero + 3 cards |
| `/solutions/hospitality-os` | `53:6545` | done — 13 sections |
| `/solutions/supplyflow-os` | `135:2255` | done — 13 sections, copy gaps below |
| `/solutions/ai-intelligence-systems` | `135:364` | done — built from a full-page screenshot |
| `/ai-infrastructure/mcp-integrations` | `135:1743` | done — built from the PDF export |
| `/ai-infrastructure/multi-agent-workflows` | `135:1951` | done — built from the PDF export |
| `/ai-infrastructure/monitoring-cost-optimization` | `135:724` | done — built from the PDF export |
| `/industries` | — | done — built from the PDF export |
| `/industries/independent-hotels` | `135:1349` | done — template + data |
| `/industries/hostel-groups` | — | done — template + data |
| `/industries/short-term-rentals` | — | done — template + data |
| `/industries/serviced-apartments` | — | done — template + data |
| `/industries/boutique-hotels` | — | done — template + data |
| Everything else in the nav | various | not started |

Shared building blocks live in `src/components/ui/`: `CtaBand` (mid-page quote
card), `PageCta` (full-bleed closing CTA), `PillGroup`, `LabelledStrip`,
`CheckList`, `ArchitectureStack`, `BrowserFrame`, `Button` and `Reveal`, plus
`PageHero` in `components/sections/`, which covers three shapes: centred,
`align="left"`, and `panel={...}` for a hero with a console beside the copy.
`PillarCards` renders the three-up supporting row used to close the
AI Infrastructure pages. Each has exactly one implementation — the pill rows, quote bands and
architecture diagram were deduplicated across four pages.

`FeatureBlock` and the six mockup panels in `src/components/hospitality/` are
reusable for the SupplyFlowOS page (`135:2255`), which follows the same
structure. `PageHero` is built to be shared: Industries, Services, Case Studies and
Pricing all use the same centered hero in the design, so those pages should
differ only in copy.

---

## Architecture decisions worth knowing

**Keep page data in server modules.** Constants read by a route — FAQ arrays,
pill lists — must not be exported from a file carrying `"use client"`. Next
replaces a client module's exports with client references when a server
component imports them, so the route receives a proxy instead of the array and
fails at runtime with something unhelpful like `items.map is not a function`.
Heroes and anything else holding hooks live in their own `*Hero.tsx` files for
this reason; `faqSchema` throws a guard message naming the cause.

**The dot grid is CSS, not DOM.** Figma draws the hero grid as ~1,000
individual `<ellipse>` nodes. Shipping that would cost real layout time and
hurt TBT for zero visual gain, so it is a single painted `radial-gradient` at
the same 27px pitch and 2px dot size (`@utility dot-grid`).

**The logo is committed, not linked.** Figma's asset URLs expire after 7 days.
The mark and chevron were exported as SVG strings and live in
`src/components/icons/Logo.tsx` with their original geometry and gradient
stops intact.

**One motion system, not scattered effects.** A single easing curve
(`--ease-out-expo` / `expo.out`) is shared by every animation. The hero runs as
one GSAP timeline rather than per-element fades — that is the difference
between a page that feels designed and one that feels assembled. Sections
below the fold should use scroll-triggered reveals sparingly, not on every
block.

**Reduced motion is handled twice.** CSS kills durations globally, and
`usePrefersReducedMotion` lets JS resolve elements straight to their final
state. Belt and braces, because the CSS layer alone cannot stop GSAP from
writing inline transforms.

**Layout uses Tailwind v4's `@theme`.** Figma variables map 1:1 to tokens, with
the original Figma name in a comment beside each so the mapping stays
auditable when the design changes.

---

## SEO

Google side:
- Metadata API with title template, canonicals, OG and Twitter cards
- `sitemap.ts` and `robots.ts` generated from the same nav config that renders
  the header, so a page cannot be in the nav but missing from the sitemap
- Semantic landmarks, exactly one `h1`, skip link, visible focus rings
- `next/font` self-hosting — no render-blocking font request, no CLS
- AVIF/WebP, `priority` + `fetchPriority="high"` on the LCP image

Answer-engine side:
- A single JSON-LD `@graph` (Organization, WebSite, WebPage, BreadcrumbList,
  two SoftwareApplication entities) rendered server-side, so fetchers that
  don't run JavaScript still see it
- `public/llms.txt` summarising what the company does in plain prose
- `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot` and `Google-Extended`
  explicitly allowed in robots

Every schema claim is also visible on the rendered page. Schema that
contradicts the page is worse than no schema at all.

---

## Routing note

The Figma frame is titled "AI Infrastructure Services", but the page ships at
`/solutions/ai-intelligence-systems` to match the third Solutions card. The
`AI Infrastructure` nav group's "Overview" entry now points there too, while
its deeper pages keep their own `/ai-infrastructure/*` paths — those are
separate Figma frames (`135:1743` MCP Integrations, `135:724` Monitoring) and
aren't built yet. If you'd rather the whole group moved under Solutions, it's a
single edit in `src/lib/site.ts`.

---

## The industry page template

All eleven industry pages share one eleven-section shape, so the layout lives
in `src/components/industry/IndustryTemplate.tsx` and each industry supplies
only content — see `src/lib/industries/independent-hotels.ts` and the
`IndustryPageData` type beside it. Adding the next industry means writing one
data file and a four-line route, not another component.

Blocks the hospitality pages repeat verbatim — the recommended system, module
list, integrations, agent log, case studies and three of the four questions —
live in `src/lib/industries/shared.ts`, so each page file is under 100 lines
of genuinely industry-specific copy.

Each needs one asset: a hero photograph at
`public/images/industries/<slug>.jpg`. Without it the hero falls back to its
scrim and still reads as designed, so a missing photo degrades rather than
breaks.

---

## Single sources of truth

`src/lib/site.ts` holds `industryGroups`. The Industries dropdown, the
`/industries` page, the `ItemList` structured data and the sitemap all derive
from it, so an industry cannot appear in one and be missing from another. The
sitemap likewise derives from `primaryNav`.

---

## Build gotchas already hit

Three that only surface at `next build`, all fixed — worth knowing if you add
components:

- **Props typed `string` that receive JSX.** `PanelHeading`'s `right` took a
  `<LiveDot />`; it needs `ReactNode`.
- **`as const` on values Framer Motion consumes.** `EASE` must be a mutable
  `[number, number, number, number]` — Framer's bezier type is mutable, and
  TypeScript refuses readonly-to-mutable tuple assignment.
- **`React.` namespace without importing React.** React 19's types dropped the
  global UMD namespace, so `React.ReactNode` fails in a module.

---

## Known gaps

**SupplyFlowOS copy is partly missing.** Figma's metadata truncates text at
~50 characters and the MCP quota ran out mid-page. Section 01 has its full
copy; sections 02–05 render bold labels with no description, and the six FAQ
answers are cut short. Each FAQ entry carries a `complete: false` flag and is
filtered out of the FAQPage structured data, so nothing half-written is
published as schema — fix the copy, flip the flag, and the schema turns itself
on. Capability `detail` is optional, so those are one-line edits.

**HospitalityOS sections 02, 03 and 05** are missing their capability
descriptions for the same reason.

**Authored icons.** Four on `/solutions/ai-intelligence-systems` and four on
`/ai-infrastructure/mcp-integrations` (nodes `135:1810`, `135:1844`,
`135:1859`, `135:1874`) were drawn by hand rather than exported, because the
Figma MCP quota was exhausted each time. The MCP page's other two cards reuse
`IconShareNodes` and `IconBarChart`, which are genuine exports from this file.
Original note follows — four icons on `/solutions/ai-intelligence-systems` are
authored, not exported.** Figma nodes
`135:438`, `135:459`, `135:481` and `135:499` (sparkle, pyramid, eye, person)
plus the checkmark at `135:593` were drawn by hand to match the design, because
the MCP quota was exhausted. They use the same 20px box and 1.41667 stroke as
the exported set. Swap them when quota allows.

**None blocking.** The two items below are content and polish, not bugs.

**Five icons in the AI infrastructure section are stand-ins.** Nodes `53:2368`,
`53:2382`, `53:2397`, `53:2408` and `53:2422` could not be exported before the
Figma MCP quota ran out, so the closest matching icons already in the library
are used. Four are good matches; "Cost optimization" currently borrows the lock
glyph and should be swapped once the real export is available.

**Case study cards are placeholders by design.** The Figma file has literal
`SLOT · CASE STUDY 01` text with bracketed `[Client type]` and `[Metric result]`
fields. Those are reproduced verbatim with a dashed border rather than filled
with invented clients. Edit `CASE_STUDIES` in `CaseStudies.tsx` and flip
`placeholder: false`.

---

## Open items

**Monument Extended is a commercial font.** The wordmark uses it. Drop the
licensed `.woff2` into `public/fonts/` and it activates; until then the stack
falls back to Geist. Nothing breaks either way.

**Nav URLs are provisional.** `src/lib/site.ts` holds the route map inferred
from the other Figma frames. Correct the slugs there once and header, mobile
drawer and sitemap all follow.

**Not yet verified in a browser.** This was written without network access, so
`npm install` and a real Lighthouse run have not happened. Expect small
adjustments on first boot.

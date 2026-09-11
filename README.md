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
| Sections 8–12 | see below | not started |
| Footer | `53:4897` | done |

---

## Architecture decisions worth knowing

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

## Remaining Home sections, in build order

Five blocks left, with their Figma node IDs and scroll positions:

1. `53:2358` — y 4984, 635px tall
2. `53:3718` — y 5764, 193px
3. `53:2455` — y 6106, 338px
4. `53:3744` — y 6578, 289px
5. `63:5230` — y 6950, 688px

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

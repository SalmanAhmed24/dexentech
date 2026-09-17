#!/usr/bin/env bash
#
# Remaining Figma assets that still need pulling by hand.
#
# Most artwork is now committed to /public/images as optimized WebP — the hero
# figure, both home-page solution mockups, the closing-CTA mesh, and the two
# HospitalityOS dashboards. Nothing below is required for the site to build.
#
set -euo pipefail

cat <<'NOTE'
Nothing to download automatically — the Figma MCP asset URLs expire after
7 days, so assets are committed to the repo instead.

All page artwork is committed. OPTIONAL BRANDING (referenced by src/app/layout.tsx):

  public/images/logo-192.png      app icon, 192x192
  public/images/logo-512.png      app icon, 512x512
  public/opengraph-image.png      1200x630 social card
  public/favicon.ico
  public/icon.svg
  public/apple-touch-icon.png     180x180
  public/fonts/MonumentExtended-Regular.woff2   (licensed — wordmark only)

Missing files degrade gracefully; they will not break the build.
NOTE

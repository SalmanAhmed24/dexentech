#!/usr/bin/env bash
#
# Pulls the hero artwork out of Figma into /public/images.
#
# RUN THIS FIRST — these URLs are issued by the Figma MCP asset service and
# expire roughly 7 days after they were generated (2026-09-10). If they 404,
# re-export node 53:2483 from the Dexentech Website file and swap the URLs in.
#
#   chmod +x scripts/fetch-figma-assets.sh && ./scripts/fetch-figma-assets.sh
#
set -euo pipefail

DEST="public/images"
mkdir -p "$DEST"

echo "→ hero figure (composited, 2x — this is the one the Hero component uses)"
curl -fsSL -o "$DEST/hero-figure.png" \
  "https://www.figma.com/api/mcp/asset/f339ccb8-8617-4630-8608-fb5afa5cf38f.png"

echo "→ hero source layers (kept for future re-composition)"
curl -fsSL -o "$DEST/hero-source-1.png" \
  "https://www.figma.com/api/mcp/asset/3ecaada4-17bc-4f79-801f-b05d240c8fc3"
curl -fsSL -o "$DEST/hero-source-2.png" \
  "https://www.figma.com/api/mcp/asset/73bbb4db-da48-47e6-a77b-f3834c34a651"

echo "→ product mockups (Featured Solutions section)"
curl -fsSL -o "$DEST/mockup-hospitality.png" \
  "https://www.figma.com/api/mcp/asset/f53b67d3-0e3e-445a-bc60-687a47b8bb06.png"
curl -fsSL -o "$DEST/mockup-supplyflow.png" \
  "https://www.figma.com/api/mcp/asset/b0028fae-5037-47f1-a236-847e1b8a53e4.png"

echo
echo "Done. Files in $DEST:"
ls -lh "$DEST"

cat <<'NOTE'

Still to add by hand:
  public/images/logo-192.png      app icon    (export the mark at 192x192)
  public/images/logo-512.png      app icon    (export the mark at 512x512)
  public/opengraph-image.png      1200x630 social card
  public/favicon.ico
  public/icon.svg
  public/apple-touch-icon.png     180x180
  public/fonts/MonumentExtended-Regular.woff2   (licensed — wordmark only)

Everything above is referenced by src/app/layout.tsx and globals.css.
Missing files degrade gracefully; they will not break the build.
NOTE

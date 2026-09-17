import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { graph, organizationSchema, websiteSchema } from "@/lib/structured-data";
import { site } from "@/lib/site";
import "./globals.css";

/*
  next/font self-hosts these at build time. No render-blocking request to
  fonts.googleapis.com, no layout shift, and `display: swap` keeps text
  paintable while the face loads — all three are things Lighthouse checks.
*/
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AI Operational Systems for Hospitality and B2B Commerce",
    // Every child page gets the brand appended without repeating itself.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "AI operational systems",
    "hospitality management software",
    "B2B commerce platform",
    "channel manager integration",
    "hotel booking software",
    "distributor ordering portal",
    "MCP integration",
    "multi-agent workflow automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: "AI Operational Systems for Hospitality and B2B Commerce",
    description: site.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — AI operational systems for hospitality and B2B commerce`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: "AI Operational Systems for Hospitality and B2B Commerce",
    description: site.description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  // Never cap zoom — capping it is an automatic accessibility failure.
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only-focusable left-4 top-4 z-[100] rounded-[9px] bg-violet-core px-4 py-2 text-sm font-medium text-white"
        >
          Skip to content
        </a>

        <Header />
        <main id="main">{children}</main>
        <Footer />

        {/* Site-wide entities. Page-level schema is added per route. */}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
      </body>
    </html>
  );
}

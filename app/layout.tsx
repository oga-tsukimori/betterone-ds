import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const siteUrl = "https://design.betterone.work"
const siteName = "BetterOne Design System"
const siteTitle = "BetterOne — one design system for POS, Inventory and Store"
const siteDescription =
  "BetterOne is a shadcn-aligned design system with Atoms, Molecules and Organisms, Light and Dark modes, and WCAG AA colors. Install components and tokens with the betterone-ds CLI."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s · BetterOne" },
  description: siteDescription,
  keywords: [
    "BetterOne",
    "design system",
    "shadcn",
    "component library",
    "React components",
    "design tokens",
    "POS design system",
    "accessibility",
    "WCAG AA",
  ],
  authors: [{ name: "BetterOne" }],
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      { url: "/logo-full-light.png", width: 1288, height: 564, alt: siteName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo-full-light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@type": "Organization",
    name: "BetterOne",
    url: siteUrl,
    logo: `${siteUrl}/logo-full-light.png`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        geistHeading.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-svh flex-col bg-background font-sans text-base text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

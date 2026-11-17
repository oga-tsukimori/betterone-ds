import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'})
const inter = Inter({subsets:['latin'],variable:'--font-sans'})
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "BetterOne — one design system for POS, Inventory and Store",
  description:
    "BetterOne is a shadcn-aligned design system with Atoms, Molecules and Organisms, Light and Dark modes, and WCAG AA colors.",
  icons: { icon: "/logo-light.png" },
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
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, geistHeading.variable)}
    >
      <head>
      </head>
      <body className="flex min-h-svh flex-col bg-background font-sans text-base text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

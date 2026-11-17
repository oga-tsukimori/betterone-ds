import { Hero } from "@/components/landing/hero"
import { Nav } from "@/components/landing/nav"
import {
  Cta,
  GetStarted,
  Footer,
  Marquee,
  Products,
} from "@/components/landing/sections"

// The landing page uses the same Figma tokens as the docs. Tanker (font-display) is the display face for the hero and section titles.
export default function Page() {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <GetStarted />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

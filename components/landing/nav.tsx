"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { FigmaLogo, Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "@/components/theme-provider"

import { Button, LinkButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const LINKS = [
  { label: "Foundations", href: "/docs/color" },
  { label: "Components", href: "/docs/buttons" },
  { label: "Patterns", href: "/docs/templates/dashboard" },
  { label: "Playground", href: "/docs" },
]

export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center", className)}>
      <Image
        src="/logo-full-light.png"
        alt="BetterOne"
        width={183}
        height={80}
        className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 dark:hidden"
        priority
      />
      <Image
        src="/logo-full-dark.png"
        alt=""
        aria-hidden
        width={183}
        height={80}
        className="hidden h-10 w-auto transition-transform duration-300 group-hover:scale-105 dark:block"
        priority
      />
    </Link>
  )
}

function ScrollBar() {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const h = () => {
      const el = ref.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    h()
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])
  return <div ref={ref} className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--brand-mint)]" />
}

export function Nav() {
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "border-b bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <ScrollBar />
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Brand />
        <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--brand-mint)] after:transition-transform hover:text-foreground hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun weight="bold" className="hidden dark:block" />
            <Moon weight="bold" className="dark:hidden" />
          </Button>
          <LinkButton href="https://www.figma.com/design/nQmaPvh4NuFPUl6kmfTYFm/Gaga_DS" target="_blank" variant="outline" className="hidden sm:inline-flex">
            <FigmaLogo /> Figma file
          </LinkButton>
          <LinkButton href="/docs">Get started</LinkButton>
        </div>
      </div>
    </header>
  )
}

"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { docsNav } from "@/lib/docs-nav"
import { FigmaLogo, Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "@/components/theme-provider"

import { Button, LinkButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/buttons" },
  { label: "Patterns", href: "/docs/templates/dashboard" },
  { label: "Playground", href: "/playground" },
]

const GETTING_STARTED = new Set(docsNav[0].items.map((i) => i.href))

// Which top-level tab a path belongs to, so the current one can show as active.
export function activeTab(pathname: string): string | null {
  if (pathname.startsWith("/playground")) return "Playground"
  if (pathname.startsWith("/docs/templates")) return "Patterns"
  if (pathname === "/docs" || GETTING_STARTED.has(pathname)) return "Docs"
  if (pathname.startsWith("/docs/")) return "Components"
  return null
}

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname()
  const active = activeTab(pathname)
  return (
    <nav className={cn("ml-4 hidden items-center gap-1 md:flex", className)} aria-label="Main">
      {LINKS.map((l) => {
        const isActive = active === l.label
        return (
          <Link
            key={l.label}
            href={l.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-[var(--brand-mint)] after:transition-transform hover:text-foreground hover:after:scale-x-100",
              isActive ? "text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0"
            )}
          >
            {l.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function Brand({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center", className)}>
      <Image
        src="/logo-full-light.png"
        alt="BetterOne"
        width={183}
        height={80}
        className="h-10 w-auto max-w-none shrink-0 transition-transform duration-300 group-hover:scale-105 dark:hidden"
        priority
      />
      <Image
        src="/logo-full-dark.png"
        alt=""
        aria-hidden
        width={183}
        height={80}
        className="hidden h-10 w-auto max-w-none shrink-0 transition-transform duration-300 group-hover:scale-105 dark:block"
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
        <NavLinks />
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

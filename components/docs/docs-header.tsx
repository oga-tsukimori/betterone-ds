"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Moon, Search, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

import { Brand, LINKS } from "@/components/landing/nav"
import { docsPages } from "@/lib/docs-nav"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

// Site header shared by the home page and the docs. Matches the handoff's top nav.
export function DocsHeader() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  // ⌘K opens search.
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function go(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Brand />
        <nav className="ml-4 hidden items-center gap-1 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[var(--brand-mint)] after:transition-transform hover:text-foreground hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          aria-label="Search docs"
          className="w-60 justify-between text-muted-foreground"
          onPress={() => setOpen(true)}
        >
          <span className="flex items-center gap-2">
            <Search className="size-3.5" aria-hidden="true" />
            Search docs…
          </span>
          <kbd className="font-mono text-xs">⌘K</kbd>
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Toggle theme"
          onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <Sun className="hidden dark:block" aria-hidden="true" />
          <Moon className="dark:hidden" aria-hidden="true" />
        </Button>
        <a
          href="https://github.com"
          aria-label="BetterOne on GitHub"
          className={buttonVariants({ variant: "outline", size: "icon-sm" })}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
      </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen} title="Search docs" description="Find a page">
        <CommandInput placeholder="Search docs…" />
        <CommandList aria-label="Pages">
          <CommandEmpty>No pages found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {docsPages.map((item) => (
              <CommandItem key={item.href} id={item.href} textValue={`${item.group} ${item.title}`} onAction={() => go(item.href)}>
                <span className="text-muted-foreground">{item.group} /</span>
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}

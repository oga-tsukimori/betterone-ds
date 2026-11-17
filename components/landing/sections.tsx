"use client"

import * as React from "react"
import {
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  Package,
  ShoppingCart,
  Storefront,
} from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Brand } from "./nav"

/* --------------------------------------------------- reveal on scroll */

function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: "up" | "left" | "right" | "scale"
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [shown, setShown] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none",
        shown
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
          : cn(
              "opacity-0 blur-[3px]",
              from === "up" && "translate-y-7",
              from === "left" && "-translate-x-8",
              from === "right" && "translate-x-8",
              from === "scale" && "scale-95"
            ),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ------------------------------ word-by-word heading + count up */

function useInView<T extends Element>(threshold = 0.3) {
  const ref = React.useRef<T>(null)
  const [seen, setSeen] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen] as const
}

function Words({ text }: { text: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4)
  return (
    <span ref={ref} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden>
          <span
            className="inline-block transition-transform duration-700 ease-[cubic-bezier(.2,.9,.3,1)]"
            style={{ transform: seen ? "translateY(0)" : "translateY(110%)", transitionDelay: `${i * 70}ms` }}
          >
            {w}&nbsp;
          </span>
        </span>
      ))}
    </span>
  )
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Badge variant="outline" className="mb-3">
        {eyebrow}
      </Badge>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-5xl"><Words text={title} /></h2>
      <p className="mt-3 text-lg text-muted-foreground text-balance">{sub}</p>
    </Reveal>
  )
}

/* ------------------------------------------------ trust / marquee row */

export function Marquee() {
  const items = [
    "Atoms",
    "Molecules",
    "Organisms",
    "Light & Dark",
    "WCAG AA",
    "shadcn tokens",
    "Phosphor icons",
    "Tanker + Inter",
    "44px touch targets",
    "Figma variables",
  ]
  return (
    <Reveal>
    <div className="overflow-hidden border-y bg-foreground py-3 text-background" aria-hidden>
      <div className="bo-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium">
            {t}
            <span className="size-1.5 rounded-full bg-[var(--brand-mint)]" />
          </span>
        ))}
      </div>
    </div>
    </Reveal>
  )
}

/* --------------------------------------------------------- products */

const PRODUCTS = [
  {
    id: "pos",
    name: "POS",
    blurb: "Sell fast at the counter: item grid, cart, payment modes, number pad and receipts.",
    img: "/products/pos",
    ratio: "1440 / 900",
    tags: ["Cart Panel", "Payment Panel", "Number Pad", "Receipt"],
    color: "var(--tag-mint)",
  },
  {
    id: "inventory",
    name: "Inventory",
    blurb: "Stay on top of stock: KPI row, charts, searchable tables and item detail sheets.",
    img: "/products/inventory",
    ratio: "1440 / 900",
    tags: ["KPI Row", "Stock Table", "Bar Chart", "Item Sheet"],
    color: "var(--tag-sky)",
  },
  {
    id: "store",
    name: "Store",
    blurb: "Sell online: header, hero, categories, product cards, checkout and order tracking.",
    img: "/products/store",
    ratio: "1200 / 694",
    tags: ["Store Header", "Hero", "Order Timeline", "Cart Drawer"],
    color: "var(--tag-sun)",
  },
]

export function Products() {
  const [i, setI] = React.useState(0)
  const p = PRODUCTS[i]
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead
        eyebrow="Three products"
        title="One system, three real products"
        sub="Every screen below is assembled only from BetterOne components and semantic tokens."
      />
      <Reveal className="mt-10 flex justify-center" delay={100}>
        <div role="tablist" className="relative flex rounded-full border bg-muted p-1">
          <span
            className="absolute top-1 bottom-1 rounded-full bg-background shadow transition-all duration-300"
            style={{ left: `calc(${i * (100 / 3)}% + 4px)`, width: "calc(33.333% - 5.33px)" }}
          />
          {PRODUCTS.map((x, idx) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={cn(
                "relative z-10 w-28 rounded-full py-2 text-sm font-semibold transition-colors",
                idx === i ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {x.name}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[320px_1fr]">
        <Reveal from="left" className="space-y-4" delay={150}>
          <h3 className="font-heading text-3xl font-bold">{p.name}</h3>
          <p className="text-muted-foreground">{p.blurb}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t, ti) => (
              <span
                key={`${p.id}-${t}`}
                className="bo-pop rounded-full px-3 py-1 text-xs font-semibold text-[#201d1c]"
                style={{ background: p.color, animationDelay: `${ti * 70}ms` }}
              >
                {t}
              </span>
            ))}
          </div>
          <LinkButton href={`/docs/templates/dashboard`} variant="outline">
            View {p.name} screens <ArrowRight weight="bold" />
          </LinkButton>
        </Reveal>
        <Reveal from="right" delay={200}>
          <div
            className="rounded-2xl border bg-card p-2 shadow-2xl transition-transform duration-200 ease-out"
            style={{ transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 5, y: -((e.clientY - r.top) / r.height - 0.5) * 5 })
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="size-2.5 rounded-full bg-[#ff6b5e]" />
              <span className="size-2.5 rounded-full bg-[#ffc233]" />
              <span className="size-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 rounded-full bg-muted px-3 py-0.5 text-xs text-muted-foreground">
                betterone.app/{p.id}
              </span>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl border bg-background" style={{ aspectRatio: p.ratio }}>
              {(["light", "dark"] as const).map((mode) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${p.id}-${mode}`}
                  src={`${p.img}-${mode}.png`}
                  alt={`${p.name} screen (${mode} mode) built with BetterOne components`}
                  width={2880}
                  height={1800}
                  decoding="async"
                  className={cn(
                    "bo-fade-up absolute inset-0 size-full object-cover object-top",
                    mode === "light" ? "dark:hidden" : "hidden dark:block"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------- get started (cards) */

function StackedSheets({ children, tone }: { children: React.ReactNode; tone: string }) {
  return (
    <div className="absolute right-0 bottom-0 left-8 h-[58%]">
      <div className="absolute inset-0 translate-x-0 rounded-tl-2xl border bg-muted/60 transition-transform duration-500 group-hover:-translate-x-2" style={{ left: -22, top: 14 }} />
      <div className="absolute inset-0 rounded-tl-2xl border bg-muted/80 transition-transform duration-500 group-hover:-translate-x-1" style={{ left: -11, top: 7 }} />
      <div className="absolute inset-0 overflow-hidden rounded-tl-2xl border bg-background shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
        <div className="absolute -bottom-10 -left-10 size-40 rounded-full opacity-50 blur-2xl" style={{ background: tone }} />
        {children}
      </div>
    </div>
  )
}

function FoundationsArt() {
  return (
    <StackedSheets tone="var(--tag-mint)">
      <div className="relative flex h-full gap-3 p-5">
        <div className="flex flex-col gap-2.5">
          {["var(--primary)", "var(--brand-ink)", "var(--tag-sun)", "var(--tag-coral)"].map((c) => (
            <span key={c} className="size-9 rounded-xl border shadow-sm" style={{ background: c }} />
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-heading text-6xl leading-none">Aa</span>
          <div className="space-y-1.5">
            <div className="h-2 w-28 rounded-full bg-muted" />
            <div className="h-2 w-20 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </StackedSheets>
  )
}

function ComponentsArt() {
  return (
    <StackedSheets tone="var(--tag-sky)">
      <div className="relative grid h-full grid-cols-[1.1fr_1fr] gap-3 p-4">
        <div className="space-y-2 rounded-xl border p-3">
          <div className="h-2 w-16 rounded-full bg-muted" />
          <div className="h-2 w-24 rounded-full bg-muted" />
          <div className="h-7 w-20 rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border bg-[var(--tag-sun)]" />
          <div className="rounded-xl border p-2">
            <div className="h-2 w-8 rounded-full bg-muted" />
          </div>
          <div className="col-span-2 flex items-center gap-1.5 rounded-xl border px-3">
            {["var(--tag-sky)", "var(--primary)", "var(--tag-sun)", "var(--tag-coral)", "var(--tag-lilac)"].map((c) => (
              <span key={c} className="size-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </StackedSheets>
  )
}

function ProductsArt() {
  const apps = [
    { Icon: Storefront, bg: "var(--brand-mint)", fg: "#201d1c", label: "POS" },
    { Icon: Package, bg: "var(--brand-ink)", fg: "#46eda8", label: "Inventory" },
    { Icon: ShoppingCart, bg: "var(--tag-sun)", fg: "#201d1c", label: "Store" },
  ]
  return (
    <div className="absolute right-0 bottom-0 left-8 flex h-[52%] items-start gap-0">
      {apps.map(({ Icon, bg, fg, label }, i) => (
        <div
          key={label}
          className="relative -mr-5 grid size-28 place-items-center rounded-[1.6rem] shadow-lg transition-transform duration-500 group-hover:-translate-y-3"
          style={{ background: bg, color: fg, zIndex: 3 - i, transitionDelay: `${i * 60}ms` }}
        >
          <Icon className="size-10" weight="bold" />
          <span className="absolute bottom-2 text-[11px] font-semibold">{label}</span>
          <span className="absolute inset-x-0 top-[calc(100%+6px)] h-16 rounded-b-[1.6rem] bg-muted/80" />
        </div>
      ))}
    </div>
  )
}

function PlaygroundArt() {
  return (
    <StackedSheets tone="var(--tag-mint)">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/products/pos-light.png"
        alt=""
        className="absolute inset-0 size-full origin-top-left scale-[1.5] object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.65] dark:hidden"
      />
      <img
        src="/products/pos-dark.png"
        alt=""
        className="absolute inset-0 hidden size-full origin-top-left scale-[1.5] object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.65] dark:block"
      />
      {/* eslint-enable @next/next/no-img-element */}
    </StackedSheets>
  )
}

const START = [
  { tag: "Foundations", title: "Tokens, type and spacing", href: "/docs/color", pill: "border-primary/60 bg-primary/10 text-primary", Art: FoundationsArt },
  { tag: "Components", title: "Browse atoms to organisms", href: "/docs/buttons", pill: "border-teal-600/50 bg-teal-500/10 text-teal-700 dark:text-teal-300", Art: ComponentsArt },
  { tag: "Products", title: "See POS, Inventory and Store", href: "/docs/templates/dashboard", pill: "border-amber-500/60 bg-amber-400/15 text-amber-700 dark:text-amber-300", Art: ProductsArt },
  { tag: "Playground", title: "Compose your own screens", href: "/docs", pill: "border-primary/60 bg-primary/10 text-primary", Art: PlaygroundArt },
]

export function GetStarted() {
  const scroller = React.useRef<HTMLDivElement>(null)
  const [edge, setEdge] = React.useState({ start: true, end: false })
  const update = React.useCallback(() => {
    const el = scroller.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])
  React.useEffect(() => {
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [update])
  const go = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(480, el.clientWidth * 0.8), behavior: "smooth" })
  }
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <h2 className="font-display text-4xl text-balance md:text-6xl"><Words text="Need help getting started?" /></h2>
        </Reveal>
        <div
          ref={scroller}
          onScroll={update}
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {START.map(({ tag, title, href, pill, Art }, i) => (
            <Reveal key={tag} delay={i * 90} className="snap-start">
              <a
                href={href}
                className="group relative block aspect-[4/5] w-[min(82vw,340px)] shrink-0 overflow-hidden rounded-[1.75rem] border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl md:w-[360px]"
              >
                <div className="flex items-start justify-between">
                  <span className={cn("rounded-full border px-3.5 py-1 text-sm font-medium", pill)}>{tag}</span>
                  <span className="grid size-11 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <ArrowUpRight className="size-5" weight="bold" />
                  </span>
                </div>
                <h3 className="mt-4 max-w-[14ch] font-heading text-3xl leading-[1.08]">{title}</h3>
                <Art />
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-2 flex justify-end gap-3">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              aria-label={d === -1 ? "Previous" : "Next"}
              disabled={d === -1 ? edge.start : edge.end}
              onClick={() => go(d)}
              className="grid size-12 place-items-center rounded-full border bg-background shadow-sm transition-all hover:scale-105 hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-40"
            >
              {d === -1 ? <CaretLeft weight="bold" /> : <CaretRight weight="bold" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- CTA */

export function Cta() {
  return (
    <section className="px-5 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--brand-ink)] px-6 py-16 text-center text-white">
          <div className="bo-grid-bg absolute inset-0 opacity-20" />
          <div className="bo-breathe absolute -top-20 left-1/2 size-72 rounded-full bg-[var(--brand-mint)] opacity-30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-6xl"> Make it <span className="text-[var(--brand-mint)]">better</span>, once.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Start with the tokens, copy a component, ship a screen.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="/docs" size="lg" className="bo-shine bg-primary text-primary-foreground hover:bg-primary-hover">
                Get started <ArrowRight weight="bold" />
              </LinkButton>
              <LinkButton href="/docs" size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                Open playground
              </LinkButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ----------------------------------------------------------- footer */

export function Footer() {
  return (
    <footer className="border-t">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <Brand />
        <p className="text-sm text-muted-foreground">
          BetterOne design system · Luma · Mist · Green · Tanker + Inter · Phosphor
        </p>
      </Reveal>
    </footer>
  )
}

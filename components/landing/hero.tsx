"use client"

import * as React from "react"
import {
  ArrowRight,
  Command,
  MagnifyingGlass,
  Palette,
  Package,
  Stack,
  TextAa,
} from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  KpiCard,
  NumpadCard,
  ProductCard,
  RadioCardsCard,
  TabsCard,
  ToastCard,
} from "./showcase-cards"

/* ---------------------------------------------------------------- data */

const STAGE_W = 1200
const STAGE_H = 620
const SEARCH = { x: 320, y: 288, w: 560, h: 64 }

type Placed = {
  id: string
  x: number
  y: number
  w: number
  rot: number
  delay: number
  node: React.ReactNode
}

const PLACED: Placed[] = [
  { id: "product", x: 60, y: 70, w: 210, rot: -2, delay: 0.15, node: <ProductCard /> },
  { id: "tabs", x: 465, y: 8, w: 270, rot: 1, delay: 0.25, node: <TabsCard /> },
  { id: "toast", x: 930, y: 50, w: 240, rot: 2, delay: 0.35, node: <ToastCard /> },
  { id: "kpi", x: 40, y: 400, w: 270, rot: 1.5, delay: 0.45, node: <KpiCard /> },
  { id: "radio", x: 450, y: 500, w: 300, rot: -1, delay: 0.55, node: <RadioCardsCard /> },
  { id: "numpad", x: 910, y: 380, w: 270, rot: -1.5, delay: 0.65, node: <NumpadCard /> },
]

/** cubic bezier arrows (one per card, same order): [sx, sy, c1x, c1y, c2x, c2y, ex, ey] */
const ARROWS: { pts: number[]; delay: number }[] = [
  { pts: [272, 200, 322, 215, 282, 315, 316, 320], delay: 0.9 },
  { pts: [604, 122, 590, 180, 612, 225, 602, 284], delay: 1.0 },
  { pts: [930, 120, 880, 130, 880, 230, 842, 284], delay: 1.1 },
  { pts: [312, 450, 370, 430, 410, 410, 424, 358], delay: 1.2 },
  { pts: [602, 500, 614, 450, 590, 410, 600, 358], delay: 1.3 },
  { pts: [912, 460, 880, 410, 830, 410, 790, 358], delay: 1.4 },
]

const SUGGESTIONS = [
  { name: "Button", group: "Atoms", href: "/docs/buttons", Icon: Stack },
  { name: "Input", group: "Atoms", href: "/docs/input", Icon: Stack },
  { name: "Product Card", group: "Molecules", href: "/docs/card", Icon: Package },
  { name: "KPI Card", group: "Molecules", href: "/docs/card", Icon: Package },
  { name: "Cart Panel", group: "Organisms", href: "/docs/card", Icon: Package },
  { name: "Payment Panel", group: "Organisms", href: "/docs/card", Icon: Package },
  { name: "colors/primary", group: "Tokens", href: "/docs/color", Icon: Palette },
  { name: "colors/muted-foreground", group: "Tokens", href: "/docs/color", Icon: Palette },
  { name: "font/size/base", group: "Tokens", href: "/docs/typography", Icon: TextAa },
  { name: "Dialog", group: "Organisms", href: "/docs", Icon: Package },
]

/* --------------------------------------------------------- typewriter */

function useTypewriter(words: string[], active: boolean) {
  const [text, setText] = React.useState("")
  React.useEffect(() => {
    if (!active) return
    let wi = 0
    let ci = 0
    let del = false
    let t: ReturnType<typeof setTimeout>
    const step = () => {
      const w = words[wi]
      if (!del) {
        ci++
        setText(w.slice(0, ci))
        if (ci === w.length) {
          del = true
          t = setTimeout(step, 1400)
          return
        }
        t = setTimeout(step, 70)
      } else {
        ci--
        setText(w.slice(0, ci))
        if (ci === 0) {
          del = false
          wi = (wi + 1) % words.length
          t = setTimeout(step, 350)
          return
        }
        t = setTimeout(step, 35)
      }
    }
    t = setTimeout(step, 600)
    return () => clearTimeout(t)
  }, [words, active])
  return text
}

/* --------------------------------------------------------- search bar */

export function SearchBar({
  value,
  setValue,
  inputRef,
}: {
  value: string
  setValue: (v: string) => void
  inputRef: React.RefObject<HTMLInputElement | null>
}) {
  const [focus, setFocus] = React.useState(false)
  const [idx, setIdx] = React.useState(0)
  const words = React.useMemo(
    () => ["Search components…", "Button", "Cart Panel", "colors/primary", "Payment Panel", "radius/md"],
    []
  )
  const typed = useTypewriter(words, !focus && !value)
  const results = SUGGESTIONS.filter((s) =>
    s.name.toLowerCase().includes(value.trim().toLowerCase())
  ).slice(0, 6)

  return (
    <div className="relative w-full">
      <div
        className={cn(
          "relative flex h-16 w-full items-center gap-3 rounded-full border-2 bg-background px-5 shadow-xl transition-all duration-300",
          focus
            ? "scale-[1.02] border-primary shadow-2xl ring-4 ring-primary/20"
            : "border-foreground/80 hover:shadow-2xl"
        )}
      >
        <MagnifyingGlass className="size-5 shrink-0 text-muted-foreground" weight="bold" />
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setIdx(0)
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setIdx((i) => Math.min(results.length - 1, i + 1))
            }
            if (e.key === "ArrowUp") {
              e.preventDefault()
              setIdx((i) => Math.max(0, i - 1))
            }
            if (e.key === "Enter" && results[idx]) window.location.href = results[idx].href
            if (e.key === "Escape") (e.target as HTMLInputElement).blur()
          }}
          aria-label="Search components and tokens"
          className="h-full min-w-0 flex-1 bg-transparent text-base outline-none"
        />
        {!value && !focus && (
          <span className="pointer-events-none absolute left-14 text-base text-muted-foreground">
            {typed}
            <span className="bo-caret ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-foreground" />
          </span>
        )}
        <kbd className="hidden items-center gap-0.5 rounded-md border bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground sm:flex">
          <Command className="size-3" /> K
        </kbd>
      </div>

      {focus && (
        <div className="bo-fade-up absolute top-[calc(100%+10px)] right-0 left-0 z-50 overflow-hidden rounded-2xl border bg-popover p-1.5 text-popover-foreground shadow-2xl">
          {results.length === 0 && (
            <div className="px-3 py-4 text-center text-sm text-muted-foreground">
              No match — try “Button” or “colors/primary”
            </div>
          )}
          {results.map((r, i) => (
            <a
              key={r.name}
              href={r.href}
              onMouseEnter={() => setIdx(i)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                i === idx ? "bg-accent text-accent-foreground" : ""
              )}
            >
              <r.Icon className="size-4 text-muted-foreground" />
              <span className="flex-1 font-medium">{r.name}</span>
              <Badge variant="secondary">{r.group}</Badge>
              <ArrowRight className={cn("size-3.5 transition-opacity", i === idx ? "opacity-100" : "opacity-0")} />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------- arrows */

function Arrows({ offsets }: { offsets: { x: number; y: number }[] }) {
  return (
    <svg
      viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
      className="pointer-events-none absolute inset-0 size-full text-muted-foreground"
      aria-hidden
    >
      {ARROWS.map(({ pts, delay }, i) => {
        const o = offsets[i] ?? { x: 0, y: 0 }
        const [sx, sy, c1x, c1y, c2x, c2y, ex0, ey0] = pts
        // stop 12px short of the search bar so the head has room to breathe
        const a0 = Math.atan2(ey0 - c2y, ex0 - c2x)
        const ex = ex0 - Math.cos(a0) * 12
        const ey = ey0 - Math.sin(a0) * 12
        // the start + first control point follow the dragged card; the end stays on the search bar
        const d = `M${sx + o.x} ${sy + o.y} C${c1x + o.x} ${c1y + o.y}, ${c2x} ${c2y}, ${ex} ${ey}`
        const deg = (Math.atan2(ey - c2y, ex - c2x) * 180) / Math.PI
        return (
          <g key={i}>
            <path
              d={d}
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.55}
              strokeWidth={2}
              strokeLinecap="round"
              className="bo-draw"
              style={{ animationDelay: `${delay}s` }}
            />
            <path
              d={d}
              fill="none"
              stroke="var(--brand-mint)"
              strokeWidth={2.5}
              strokeLinecap="round"
              className="bo-march"
              style={{ opacity: 0, animationDelay: `${delay + 1.2}s`, animationFillMode: "backwards" }}
            >
              <animate attributeName="opacity" from="0" to="0.6" begin={`${delay + 1.2}s`} dur="0.4s" fill="freeze" />
            </path>
            <g
              transform={`translate(${ex} ${ey}) rotate(${deg.toFixed(1)})`}
              style={{
                opacity: 0,
                animation: `bo-fade-in 0.5s ${delay + 0.9}s ease-out forwards`,
                filter: "drop-shadow(0 0 4px color-mix(in oklch, var(--brand-mint) 70%, transparent))",
              }}
            >
              {/* rounded triangle, tip on the line end, always aligned with the arrow direction */}
              <path d="M-1 0 L-14 -8 L-14 8 Z" fill="#fff" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
              <path d="M-1 0 L-14 -8 L-14 8 Z" fill="var(--brand-mint)" stroke="var(--brand-mint)" strokeWidth="2.2" strokeLinejoin="round" />
            </g>
            <circle r="3.5" fill="var(--brand-mint)" opacity="0.9">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${delay + 1.5}s`}
                path={d}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
            <circle
              cx={ex}
              cy={ey}
              r="8"
              fill="none"
              stroke="var(--brand-mint)"
              strokeWidth="2"
              style={{ transformOrigin: `${ex}px ${ey}px`, animation: `bo-ring 2.4s ${delay + 1.4}s ease-out infinite`, opacity: 0 }}
            />
          </g>
        )
      })}
    </svg>
  )
}

/* ------------------------------------------- interactive headline */

type Sel = { x1: number; y1: number; x2: number; y2: number }
const HEAD_CLASS =
  "flex flex-wrap items-center justify-center gap-x-5 gap-y-6 font-display text-6xl leading-none uppercase md:text-8xl"

function HeadLines({ betterRef }: { betterRef?: React.Ref<HTMLSpanElement> }) {
  return (
    <>
      <span>Design a</span>
      <span ref={betterRef}>Better One</span>
    </>
  )
}

function Cursor() {
  return (
    <svg width="40" height="34" viewBox="14 34 132 108" aria-hidden className="drop-shadow-[0_0_12px_color-mix(in_oklch,var(--brand-mint)_75%,transparent)]">
      <path d="M40 58 L124 66 L92 120 Z" fill="#fff" stroke="#fff" strokeWidth="26" strokeLinejoin="round" />
      <path d="M40 58 L124 66 L92 120 Z" fill="var(--brand-mint)" stroke="var(--brand-mint)" strokeWidth="10" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * "Design a Better One": the words are black/white by default. On load a cursor drags a
 * selection rectangle around "Better One" and the text inside turns green (plays once).
 * Afterwards the visitor can drag their own rectangle anywhere on the headline.
 */
function InteractiveHeadline() {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const betterRef = React.useRef<HTMLSpanElement>(null)
  const [sel, setSel] = React.useState<Sel | null>(null)
  const [committed, setCommitted] = React.useState(false)
  const [pop, setPop] = React.useState(0)
  const [cursor, setCursor] = React.useState<{ x: number; y: number; mode: "hidden" | "auto" | "follow" | "rest" }>({
    x: 0,
    y: 0,
    mode: "hidden",
  })
  const [size, setSize] = React.useState({ w: 0, h: 0 })
  const dragging = React.useRef(false)
  const autoRun = React.useRef(true)

  React.useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setSize({ w: el.offsetWidth, h: el.offsetHeight }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // ---- one-time intro: cursor flies in, drags a box around "Better One"
  React.useEffect(() => {
    const wrap = wrapRef.current
    const better = betterRef.current
    if (!wrap || !better) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const target = () => {
      const w = wrap.getBoundingClientRect()
      const b = better.getBoundingClientRect()
      return { x1: b.left - w.left - 14, y1: b.top - w.top - 8, x2: b.right - w.left + 14, y2: b.bottom - w.top + 8 }
    }
    if (reduce) {
      const t = target()
      setSel(t)
      setCommitted(true)
      setCursor({ x: t.x2 + 18, y: t.y2 + 22, mode: "rest" })
      return
    }
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    let raf = 0
    const timer = setTimeout(() => {
      const t = target()
      const from = { x: t.x1 - 140, y: t.y1 - 100 }
      const t0 = performance.now()
      const A = 650 // cursor flies to the first corner
      const B = 1100 // drag to the opposite corner
      const tick = (now: number) => {
        if (!autoRun.current) return
        const el = now - t0
        if (el < A) {
          const p = ease(el / A)
          setCursor({ x: from.x + (t.x1 - from.x) * p, y: from.y + (t.y1 - from.y) * p, mode: "auto" })
          raf = requestAnimationFrame(tick)
        } else if (el < A + 120) {
          setCursor({ x: t.x1, y: t.y1, mode: "auto" })
          raf = requestAnimationFrame(tick)
        } else if (el < A + 120 + B) {
          const p = ease((el - A - 120) / B)
          const x = t.x1 + (t.x2 - t.x1) * p
          const y = t.y1 + (t.y2 - t.y1) * p
          setSel({ x1: t.x1, y1: t.y1, x2: x, y2: y })
          setCursor({ x, y, mode: "auto" })
          raf = requestAnimationFrame(tick)
        } else {
          setSel(t)
          setCommitted(true)
          setPop((n) => n + 1)
          setCursor({ x: t.x2 + 18, y: t.y2 + 22, mode: "rest" })
        }
      }
      raf = requestAnimationFrame(tick)
    }, 1500)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [])

  const local = (e: React.PointerEvent) => {
    const r = wrapRef.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || e.button !== 0) return
    autoRun.current = false
    const { x, y } = local(e)
    dragging.current = true
    setCommitted(false)
    setSel({ x1: x, y1: y, x2: x, y2: y })
    setCursor({ x, y, mode: "follow" })
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {}
  }
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return
    const { x, y } = local(e)
    if (cursor.mode !== "auto" || !autoRun.current) setCursor({ x, y, mode: "follow" })
    if (dragging.current) setSel((s) => (s ? { ...s, x2: x, y2: y } : s))
  }
  const onUp = () => {
    if (!dragging.current) return
    dragging.current = false
    setSel((s) => {
      if (!s || Math.abs(s.x2 - s.x1) < 8 || Math.abs(s.y2 - s.y1) < 8) {
        setCommitted(false)
        return null
      }
      setCommitted(true)
      setPop((n) => n + 1)
      return s
    })
  }
  const onLeave = () => {
    if (dragging.current) return
    setCursor((c) => (sel ? { x: Math.max(sel.x1, sel.x2) + 18, y: Math.max(sel.y1, sel.y2) + 22, mode: "rest" } : { ...c, mode: "hidden" }))
  }

  const box = sel && {
    l: Math.min(sel.x1, sel.x2),
    t: Math.min(sel.y1, sel.y2),
    r: Math.max(sel.x1, sel.x2),
    b: Math.max(sel.y1, sel.y2),
  }
  const W = size.w
  const H = size.h
  const clip = box
    ? `inset(${Math.max(0, box.t)}px ${Math.max(0, W - box.r)}px ${Math.max(0, H - box.b)}px ${Math.max(0, box.l)}px)`
    : "inset(100% 0 0 0)"

  return (
    <div
      ref={wrapRef}
      className="bo-fade-up relative mx-auto mt-8 w-fit max-w-full touch-pan-y select-none [@media(pointer:fine)]:cursor-none"
      style={{ animationDelay: "0.08s" }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onPointerLeave={onLeave}
    >
      <h1 className={cn(HEAD_CLASS, "text-foreground")}>
        <HeadLines betterRef={betterRef} />
      </h1>

      {box && (
        <div
          className="pointer-events-none absolute z-10 border-2 border-dashed border-primary/70 bg-primary/10 dark:border-white/45 dark:bg-[var(--brand-mint)]/10"
          style={{ left: box.l, top: box.t, width: box.r - box.l, height: box.b - box.t }}
        />
      )}

      {/* green copy, only visible inside the selection */}
      <div
        aria-hidden
        className={cn(HEAD_CLASS, "pointer-events-none absolute inset-0 z-20 text-primary dark:text-[var(--brand-mint)]")}
        style={{ clipPath: clip }}
      >
        <HeadLines />
      </div>

      {box && committed &&
        [
          [box.l, box.t],
          [box.r, box.t],
          [box.l, box.b],
          [box.r, box.b],
        ].map(([x, y], i) => (
          <span
            key={`${pop}-${i}`}
            className="bo-pop pointer-events-none absolute z-30 -ml-1.5 -mt-1.5 size-3 bg-primary dark:bg-[var(--brand-mint)]"
            style={{ left: x, top: y, animationDelay: `${i * 70}ms` }}
          />
        ))}

      {cursor.mode !== "hidden" && (
        <div
          className="pointer-events-none absolute top-0 left-0 z-40"
          style={{
            transform: `translate(${cursor.x - 6}px, ${cursor.y - 4}px)`,
            transition: cursor.mode === "rest" ? "transform .6s cubic-bezier(.16,1,.3,1)" : "none",
          }}
        >
          <div className={cursor.mode === "rest" ? "bo-cursor-idle" : ""}>
            <Cursor />
          </div>
        </div>
      )}
    </div>
  )
}

/* --------------------------------------------------------------- hero */

export function Hero() {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const heroRef = React.useRef<HTMLElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [scale, setScale] = React.useState(1)
  const [value, setValue] = React.useState("")
  const [offsets, setOffsets] = React.useState(PLACED.map(() => ({ x: 0, y: 0 })))
  const [dragging, setDragging] = React.useState<number | null>(null)
  const drag = React.useRef<{ i: number; px: number; py: number; ox: number; oy: number } | null>(null)

  React.useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setScale(Math.min(1, el.clientWidth / STAGE_W)))
    ro.observe(el)
    setScale(Math.min(1, el.clientWidth / STAGE_W))
    return () => ro.disconnect()
  }, [])

  React.useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [])

  React.useEffect(() => {
    const h = () => heroRef.current?.style.setProperty("--sy", String(Math.min(window.scrollY, 600)))
    h()
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  const onDown = (i: number) => (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button, input, a, [role=switch], [role=radio]")) return
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {}
    drag.current = { i, px: e.clientX, py: e.clientY, ox: offsets[i].x, oy: offsets[i].y }
    setDragging(i)
  }
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    if (!d) return
    const x = d.ox + (e.clientX - d.px) / scale
    const y = d.oy + (e.clientY - d.py) / scale
    setOffsets((o) => o.map((v, k) => (k === d.i ? { x, y } : v)))
  }
  const onUp = () => {
    drag.current = null
    setDragging(null)
  }

  return (
    <section ref={heroRef} className="bo-grid-bg relative overflow-hidden pt-16 pb-14 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[color-mix(in_oklch,var(--brand-mint)_28%,transparent)] to-transparent" />

      <div
        className="relative mx-auto max-w-4xl px-5 text-center will-change-transform"
        style={{ transform: "translateY(calc(var(--sy, 0) * 0.1px))", opacity: "calc(1 - var(--sy, 0) / 900)" }}
      >
        <div className="bo-fade-up inline-flex items-center gap-2 rounded-full border bg-background/80 py-1 pr-3 pl-1 text-sm backdrop-blur">
          <span className="rounded-full bg-foreground px-2 py-0.5 text-xs font-semibold text-background">v1.0</span>
        </div>
        <InteractiveHeadline />
        <p
          className="bo-fade-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance md:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          BetterOne is the design system behind POS, Inventory and Store — tokens, components and ready screens
          in Light and Dark, ready to search and copy.
        </p>
      </div>

      {/* desktop / tablet stage: draggable cards + arrows into the search bar */}
      <div
        ref={wrapRef}
        className="relative mx-auto mt-16 hidden w-full max-w-[1200px] md:block"
        style={{ height: STAGE_H * scale }}
      >
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
        >
          <Arrows offsets={offsets} />
          {PLACED.map((c, i) => (
            <div
              key={c.id}
              className={cn("absolute touch-none select-none", dragging === i ? "z-30 cursor-grabbing" : "z-10 cursor-grab")}
              style={{ left: c.x, top: c.y, width: c.w, transform: `translate(${offsets[i].x}px, ${offsets[i].y}px)` }}
              onPointerDown={onDown(i)}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
            >
              <div
                className="bo-pop"
                style={{ ["--r" as string]: `${c.rot}deg`, animationDelay: `${c.delay}s` } as React.CSSProperties}
              >
                <div
                  className={cn(dragging === i ? "scale-105 drop-shadow-2xl transition-transform" : "bo-float")}
                  style={{ ["--r" as string]: `${c.rot}deg`, animationDelay: `${c.delay * 4}s` } as React.CSSProperties}
                >
                  {c.node}
                </div>
              </div>
            </div>
          ))}
          <div
            className="absolute z-20"
            style={{ left: SEARCH.x, top: SEARCH.y, width: SEARCH.w, height: SEARCH.h }}
          >
            <SearchBar value={value} setValue={setValue} inputRef={inputRef} />
          </div>
        </div>
      </div>

      {/* mobile layout */}
      <div className="relative mx-auto mt-12 max-w-xl px-5 md:hidden">
        <SearchBar value={value} setValue={setValue} inputRef={inputRef} />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PLACED.map((c) => (
            <div key={c.id}>{c.node}</div>
          ))}
        </div>
      </div>

      <div className="bo-fade-up relative mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2 px-5 text-sm" style={{ animationDelay: "1.5s" }}>
        <span className="text-muted-foreground">Popular:</span>
        {["Button", "Cart Panel", "colors/primary", "Dialog"].map((s) => (
          <button
            key={s}
            onClick={() => {
              setValue(s)
              inputRef.current?.focus()
            }}
            className="rounded-full border bg-background px-3 py-1 font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
          >
            {s}
          </button>
        ))}
      </div>
      <p className="bo-fade-up relative mt-3 hidden text-center text-xs text-muted-foreground md:block" style={{ animationDelay: "1.65s" }}>
        Tip: drag the cards around — the arrows follow.
      </p>
      <div className="bo-fade-up relative mt-10 flex justify-center gap-3 px-5" style={{ animationDelay: "1.8s" }}>
        <LinkButton href="/docs" size="lg">
          Get started <ArrowRight weight="bold" />
        </LinkButton>
        <LinkButton href="/docs" size="lg" variant="outline">
          Open playground
        </LinkButton>
      </div>
    </section>
  )
}

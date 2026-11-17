"use client"

import * as React from "react"
import {
  Backspace,
  CheckCircle,
  CreditCard,
  Minus,
  Money,
  Package,
  Plus,
  TrendUp,
} from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type TagColor = "mint" | "sun" | "coral" | "sky" | "lilac"

/** Miro-style cursor tag that labels each floating card with its layer/name. */
export function CardTag({ label, color }: { label: string; color: TagColor }) {
  return (
    <span
      className="absolute -top-3.5 left-4 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] leading-none font-semibold text-[#201d1c] shadow-md"
      style={{ background: `var(--tag-${color})` }}
    >
      <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
        <path d="M0 0 L9 5.2 L5 6.2 L3.4 11 Z" fill="#201d1c" />
      </svg>
      {label}
    </span>
  )
}

export function CardShell({
  tag,
  color,
  className,
  children,
}: {
  tag: string
  color: TagColor
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card p-4 text-card-foreground shadow-xl transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      <CardTag label={tag} color={color} />
      {children}
    </div>
  )
}

/* ---------- Atoms/Button ---------- */
export function ButtonCard() {
  return (
    <CardShell tag="Atoms/Button" color="mint">
      <div className="grid grid-cols-2 gap-2 pt-1">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <Button size="sm" variant="ghost">
          Ghost
        </Button>
        <Button size="icon-sm" aria-label="Add">
          <Plus weight="bold" />
        </Button>
      </div>
    </CardShell>
  )
}

/* ---------- Molecules/Product Card ---------- */
export function ProductCard() {
  const [added, setAdded] = React.useState(false)
  return (
    <CardShell tag="Molecules/Product Card" color="sun" className="p-0">
      <div className="grid h-24 place-items-center overflow-hidden rounded-t-2xl bg-secondary">
        <Package
          className="size-9 text-muted-foreground transition-transform duration-500 group-hover:scale-110"
          weight="duotone"
        />
      </div>
      <div className="space-y-1.5 p-3">
        <div className="text-sm font-medium">Iced Milk Tea</div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">4,000 Ks</span>
          <Badge variant="secondary">24 in stock</Badge>
        </div>
        <Button
          size="sm"
          className="mt-1 w-full"
          variant={added ? "secondary" : "default"}
          onPress={() => setAdded((a) => !a)}
        >
          {added ? (
            <>
              <CheckCircle weight="fill" /> Added
            </>
          ) : (
            <>
              <Plus weight="bold" /> Add to cart
            </>
          )}
        </Button>
      </div>
    </CardShell>
  )
}

/* ---------- Molecules/KPI Card ---------- */
function useCountUp(target: number, duration = 1600) {
  const [v, setV] = React.useState(0)
  React.useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return v
}

export function KpiCard() {
  const v = useCountUp(1250000)
  return (
    <CardShell tag="Molecules/KPI Card" color="sky">
      <div className="flex items-center justify-between text-sm font-medium">
        Total sales
        <TrendUp className="size-4 text-muted-foreground" />
      </div>
      <div className="mt-1 font-heading text-3xl font-bold tracking-tight tabular-nums">
        {v.toLocaleString()} Ks
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-xs font-medium text-primary">+12% vs last week</span>
        <svg width="84" height="26" viewBox="0 0 84 26" aria-hidden>
          <path
            d="M2 22 L16 16 L28 19 L42 9 L56 13 L70 4 L82 7"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className="bo-draw"
            style={{ animationDelay: "1.2s" }}
          />
        </svg>
      </div>
    </CardShell>
  )
}

/* ---------- Organisms/Cart Panel ---------- */
export function CartCard() {
  const [q, setQ] = React.useState([2, 1])
  const prices = [4000, 1500]
  const total = q[0] * prices[0] + q[1] * prices[1]
  const lines = ["Iced Milk Tea", "Butter Bun"]
  return (
    <CardShell tag="Organisms/Cart Panel" color="coral">
      <div className="flex items-center justify-between pb-2">
        <span className="font-heading text-base font-semibold">Current order</span>
        <Badge variant="secondary">{q[0] + q[1]} items</Badge>
      </div>
      <div className="divide-y">
        {lines.map((l, i) => (
          <div key={l} className="flex items-center justify-between py-2">
            <div>
              <div className="text-sm font-medium">{l}</div>
              <div className="text-xs text-muted-foreground">
                {prices[i].toLocaleString()} Ks
              </div>
            </div>
            <div className="flex items-center rounded-full border">
              <button
                aria-label="Decrease"
                className="grid size-6 place-items-center rounded-full hover:bg-muted"
                onClick={() => setQ((s) => s.map((x, j) => (j === i ? Math.max(0, x - 1) : x)))}
              >
                <Minus className="size-3" />
              </button>
              <span className="w-5 text-center text-xs font-semibold tabular-nums">{q[i]}</span>
              <button
                aria-label="Increase"
                className="grid size-6 place-items-center rounded-full hover:bg-muted"
                onClick={() => setQ((s) => s.map((x, j) => (j === i ? x + 1 : x)))}
              >
                <Plus className="size-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex items-baseline justify-between border-t pt-2">
        <span className="text-xs font-medium text-muted-foreground">Grand total</span>
        <span className="font-heading text-xl font-bold tabular-nums">
          {total.toLocaleString()} Ks
        </span>
      </div>
      <Button className="mt-2 w-full">Checkout</Button>
    </CardShell>
  )
}

/* ---------- Molecules/Toast + Switch Field ---------- */
export function ToastCard() {
  const [on, setOn] = React.useState(true)
  return (
    <CardShell tag="Molecules/Toast" color="lilac" className="space-y-2.5">
      <div className="flex items-center gap-2.5 rounded-xl border bg-popover p-3 shadow-sm">
        <CheckCircle weight="fill" className="size-5 text-primary" />
        <span className="flex-1 text-sm">Order complete</span>
        <button className="text-xs font-semibold text-primary hover:underline">Undo</button>
      </div>
      <div className="flex items-center justify-between rounded-xl border p-3">
        <div>
          <div className="text-sm font-medium">Redeem points</div>
          <div className="text-xs text-muted-foreground">120 available</div>
        </div>
        <button
          role="switch"
          aria-checked={on}
          aria-label="Redeem points"
          onClick={() => setOn((s) => !s)}
          className={cn(
            "relative h-5.5 w-10 rounded-full transition-colors",
            on ? "bg-primary" : "bg-input"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 left-0.5 size-4.5 rounded-full bg-background shadow transition-transform",
              on && "translate-x-4.5"
            )}
          />
        </button>
      </div>
    </CardShell>
  )
}

/* ---------- Molecules/Number Pad (calculator: digits + − × ÷ =) ---------- */
function calc(expr: string): string {
  const tokens = expr.match(/\d+\.?\d*|\.\d+|[+\-×÷]/g)
  if (!tokens) return "0"
  // first pass: × and ÷
  const pass1: (string | number)[] = []
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]
    if ((t === "×" || t === "÷") && pass1.length) {
      const prev = Number(pass1.pop())
      const next = Number(tokens[++i] ?? (t === "×" ? 1 : 1))
      pass1.push(t === "×" ? prev * next : next === 0 ? 0 : prev / next)
    } else pass1.push(/^[+\-]$/.test(t) ? t : Number(t))
  }
  // second pass: + and −
  let out = Number(pass1[0] ?? 0)
  for (let i = 1; i < pass1.length; i += 2) {
    const n = Number(pass1[i + 1] ?? 0)
    out = pass1[i] === "+" ? out + n : out - n
  }
  return String(Math.round(out * 100) / 100)
}

export function NumpadCard() {
  const [expr, setExpr] = React.useState("1500+500")
  const [result, setResult] = React.useState<string | null>(null)
  const isOp = (c: string) => "+-×÷".includes(c)
  const press = (k: string) => {
    if (k === "C") {
      setExpr("")
      setResult(null)
    } else if (k === "⌫") {
      setResult(null)
      setExpr((e) => e.slice(0, -1))
    } else if (k === "=") {
      setResult(calc(expr))
    } else {
      const base = result !== null && !isOp(k) ? "" : result !== null ? result : expr
      setResult(null)
      setExpr(() => {
        if (isOp(k) && (base === "" || isOp(base.slice(-1)))) return base === "" ? base : base.slice(0, -1) + k
        return (base + k).slice(0, 18)
      })
    }
  }
  const rows: { k: string; kind?: "op" | "fn" | "eq"; span?: boolean }[] = [
    { k: "C", kind: "fn" }, { k: "⌫", kind: "fn" }, { k: "÷", kind: "op" }, { k: "×", kind: "op" },
    { k: "7" }, { k: "8" }, { k: "9" }, { k: "−", kind: "op" },
    { k: "4" }, { k: "5" }, { k: "6" }, { k: "+", kind: "op" },
    { k: "1" }, { k: "2" }, { k: "3" }, { k: "=", kind: "eq", span: true },
    { k: "0" }, { k: "00" }, { k: "." },
  ]
  return (
    <CardShell tag="Molecules/Number Pad" color="mint">
      <div className="mb-2 rounded-xl border px-3 py-1.5 text-right">
        <div className="h-4 truncate text-[11px] text-muted-foreground tabular-nums">{result !== null ? expr : "\u00a0"}</div>
        <div className="truncate font-heading text-xl tabular-nums">
          {result !== null ? result : expr || "0"}
          <span className="ml-1 text-xs font-medium text-muted-foreground">Ks</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {rows.map(({ k, kind, span }) => (
          <button
            key={k}
            aria-label={k === "⌫" ? "Backspace" : k}
            onClick={() => press(k === "−" ? "-" : k)}
            className={cn(
              "h-8 rounded-lg border text-sm font-medium transition-all active:scale-95",
              kind === "op" && "bg-muted text-base font-semibold text-foreground hover:bg-accent",
              kind === "fn" && "text-muted-foreground hover:bg-muted",
              kind === "eq" ? "row-span-2 h-full border-transparent bg-primary text-primary-foreground hover:bg-primary/85" : "",
              !kind && "hover:bg-muted"
            )}
            style={span ? { gridRow: "span 2" } : undefined}
          >
            {k === "⌫" ? <Backspace className="mx-auto size-4" /> : k}
          </button>
        ))}
      </div>
    </CardShell>
  )
}

/* ---------- Atoms/Tabs + Badge ---------- */
export function TabsCard() {
  const tabs = ["All items", "Low stock", "Out"]
  const [i, setI] = React.useState(0)
  return (
    <CardShell tag="Molecules/Tabs" color="sun">
      <div className="relative flex rounded-full bg-muted p-1">
        <span
          className="absolute top-1 bottom-1 rounded-full bg-background shadow transition-all duration-300"
          style={{ left: `calc(${(i * 100) / 3}% + 4px)`, width: "calc(33.333% - 5px)" }}
        />
        {tabs.map((t, idx) => (
          <button
            key={t}
            onClick={() => setI(idx)}
            className={cn(
              "relative z-10 flex-1 rounded-full py-1 text-xs font-medium transition-colors",
              idx === i ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge>Paid</Badge>
        <Badge variant="secondary">Draft</Badge>
        <Badge variant="outline">Return</Badge>
        <Badge variant="destructive">Out of stock</Badge>
      </div>
    </CardShell>
  )
}

/* ---------- Molecules/Radio Card ---------- */
export function RadioCardsCard() {
  const [sel, setSel] = React.useState(0)
  const opts = [
    { n: "Cash", Icon: Money },
    { n: "KBZPay", Icon: CreditCard },
  ]
  return (
    <CardShell tag="Molecules/Radio Card" color="coral">
      <div className="grid grid-cols-2 gap-2 pt-1">
        {opts.map(({ n, Icon }, i) => (
          <button
            key={n}
            role="radio"
            aria-checked={sel === i}
            onClick={() => setSel(i)}
            className={cn(
              "flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all",
              sel === i ? "border-primary ring-2 ring-primary/30" : "hover:bg-muted"
            )}
          >
            <span
              className={cn(
                "grid size-8 place-items-center rounded-lg transition-colors",
                sel === i ? "bg-primary text-primary-foreground" : "bg-muted"
              )}
            >
              <Icon className="size-4" />
            </span>
            <span className="text-sm font-medium">{n}</span>
          </button>
        ))}
      </div>
    </CardShell>
  )
}

"use client"

import * as React from "react"
import {
  ArrowCounterClockwise,
  ArrowRight,
  Bell,
  Check,
  Copy,
  DownloadSimple,
  EnvelopeSimple,
  Gear,
  Heart,
  Moon,
  Plus,
  Shuffle,
  SpinnerGap,
  Star,
  Sun,
  Trash,
} from "@phosphor-icons/react"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import { BASE_TOKENS } from "@/components/playground/base-tokens"

type Mode = "light" | "dark"
type Vars = Record<string, string>

// Accent colours. Each one sets the primary tokens for both modes.
const ACCENTS = [
  {
    id: "mint",
    name: "Mint",
    swatch: "#2edca2",
    light: { "--primary": "#2edca2", "--primary-foreground": "#1d1918", "--primary-hover": "#34d294", "--ring": "#2edca2" },
    dark: { "--primary": "#45eaa5", "--primary-foreground": "#1d1918", "--primary-hover": "#6cf2bd", "--ring": "#45eaa5" },
  },
  {
    id: "blue",
    name: "Blue",
    swatch: "#1447e6",
    light: { "--primary": "#1447e6", "--primary-foreground": "#ffffff", "--primary-hover": "#193cb8", "--ring": "#1447e6" },
    dark: { "--primary": "#51a2ff", "--primary-foreground": "#162456", "--primary-hover": "#8ec5ff", "--ring": "#51a2ff" },
  },
  {
    id: "violet",
    name: "Violet",
    swatch: "#7c3aed",
    light: { "--primary": "#7c3aed", "--primary-foreground": "#ffffff", "--primary-hover": "#6d28d9", "--ring": "#7c3aed" },
    dark: { "--primary": "#a78bfa", "--primary-foreground": "#1e1033", "--primary-hover": "#c4b5fd", "--ring": "#a78bfa" },
  },
  {
    id: "rose",
    name: "Rose",
    swatch: "#e11d48",
    light: { "--primary": "#e11d48", "--primary-foreground": "#ffffff", "--primary-hover": "#be123c", "--ring": "#e11d48" },
    dark: { "--primary": "#fb7185", "--primary-foreground": "#4c0519", "--primary-hover": "#fda4af", "--ring": "#fb7185" },
  },
  {
    id: "orange",
    name: "Orange",
    swatch: "#ea580c",
    light: { "--primary": "#ea580c", "--primary-foreground": "#ffffff", "--primary-hover": "#c2410c", "--ring": "#ea580c" },
    dark: { "--primary": "#fb923c", "--primary-foreground": "#431407", "--primary-hover": "#fdba74", "--ring": "#fb923c" },
  },
  {
    id: "ink",
    name: "Ink",
    swatch: "#161b1d",
    light: { "--primary": "#161b1d", "--primary-foreground": "#ffffff", "--primary-hover": "#22292b", "--ring": "#67787c" },
    dark: { "--primary": "#f1f3f3", "--primary-foreground": "#161b1d", "--primary-hover": "#d0d6d8", "--ring": "#9ca8ab" },
  },
] as const

// Neutral bases. "Mist" keeps the design-system defaults and overrides nothing.
function neutral(l: string[], d: string[]) {
  const keys = ["background", "foreground", "card", "muted", "muted-foreground", "border", "input"]
  const pack = (v: string[]): Vars => {
    const o: Vars = {}
    keys.forEach((k, i) => (o[`--${k}`] = v[i]))
    o["--popover"] = v[2]
    o["--card-foreground"] = v[1]
    o["--popover-foreground"] = v[1]
    o["--secondary"] = v[3]
    o["--secondary-foreground"] = v[1]
    o["--accent"] = v[3]
    o["--accent-foreground"] = v[1]
    return o
  }
  return { light: pack(l), dark: pack(d) }
}

const BASES = [
  { id: "mist", name: "Mist", swatch: "#d0d6d8", light: {} as Vars, dark: {} as Vars },
  {
    id: "slate",
    name: "Slate",
    swatch: "#cbd5e1",
    ...neutral(
      ["#f8fafc", "#0f172a", "#ffffff", "#f1f5f9", "#475569", "#e2e8f0", "#94a3b8"],
      ["#0f172a", "#f8fafc", "#1e293b", "#334155", "#cbd5e1", "#334155", "#64748b"]
    ),
  },
  {
    id: "stone",
    name: "Stone",
    swatch: "#d6d3d1",
    ...neutral(
      ["#fafaf9", "#1c1917", "#ffffff", "#f5f5f4", "#57534e", "#e7e5e4", "#a8a29e"],
      ["#1c1917", "#fafaf9", "#292524", "#44403c", "#d6d3d1", "#44403c", "#78716c"]
    ),
  },
  {
    id: "zinc",
    name: "Zinc",
    swatch: "#d4d4d8",
    ...neutral(
      ["#fafafa", "#18181b", "#ffffff", "#f4f4f5", "#52525b", "#e4e4e7", "#a1a1aa"],
      ["#18181b", "#fafafa", "#27272a", "#3f3f46", "#d4d4d8", "#3f3f46", "#71717a"]
    ),
  },
] as const

const RADII = [
  { id: "0", label: "None", value: 0 },
  { id: "0.25", label: "Sm", value: 0.25 },
  { id: "0.5", label: "Md", value: 0.5 },
  { id: "0.75", label: "Lg", value: 0.75 },
  { id: "1", label: "Xl", value: 1 },
] as const

const FONTS = [
  { id: "inter", label: "Inter", family: "var(--font-sans)" },
  { id: "geist", label: "Geist", family: "var(--font-heading)" },
  { id: "mono", label: "Mono", family: "var(--font-mono)" },
] as const

const DENSITIES = [
  { id: "compact", label: "Compact", control: [28, 32, 36], card: "1rem", gap: "1rem" },
  { id: "default", label: "Default", control: [32, 36, 40], card: "1.5rem", gap: "1.5rem" },
  { id: "comfortable", label: "Roomy", control: [40, 44, 52], card: "2rem", gap: "2rem" },
] as const

type State = {
  style: string
  accent: string
  base: string
  radius: string
  font: string
  density: string
  mode: Mode
}

// Whole-look presets, like shadcn's styles. Picking one sets every control below it.
const STYLES = [
  { id: "betterone", name: "BetterOne", note: "Our colours and shape", accent: "mint", base: "mist", radius: "0.5", font: "inter", density: "default" },
  { id: "beyond", name: "Beyond", note: "Sharp and rectangular", accent: "ink", base: "zinc", radius: "0", font: "geist", density: "default" },
  { id: "umami", name: "Umami", note: "Round, big, breathable", accent: "orange", base: "stone", radius: "1", font: "inter", density: "comfortable" },
  { id: "haileng", name: "Haileng", note: "Slightly round, compact", accent: "blue", base: "slate", radius: "0.25", font: "geist", density: "compact" },
] as const

const DEFAULT: State = { style: "betterone", accent: "mint", base: "mist", radius: "0.5", font: "inter", density: "default", mode: "light" }

function themeVars(s: State, mode: Mode): Vars {
  const accent = ACCENTS.find((a) => a.id === s.accent) ?? ACCENTS[0]
  const base = BASES.find((b) => b.id === s.base) ?? BASES[0]
  return { ...(BASE_TOKENS[mode] as Vars), ...(base[mode] as Vars), ...(accent[mode] as Vars) }
}

function changed(s: State, mode: Mode): Vars {
  const accent = ACCENTS.find((a) => a.id === s.accent) ?? ACCENTS[0]
  const base = BASES.find((b) => b.id === s.base) ?? BASES[0]
  return { ...(base[mode] as Vars), ...(accent[mode] as Vars) }
}

function toCss(s: State) {
  const block = (sel: string, v: Vars, extra: string[] = []) =>
    `${sel} {\n${[...extra, ...Object.entries(v).map(([k, val]) => `  ${k}: ${val};`)].join("\n")}\n}`
  const font = FONTS.find((f) => f.id === s.font)
  return [
    block(":root", changed(s, "light"), [
      `  --radius: ${s.radius}rem;`,
      ...(() => {
        const d = DENSITIES.find((x) => x.id === s.density) ?? DENSITIES[1]
        return s.density === "default"
          ? []
          : [`  --size-control-sm: ${d.control[0]}px;`, `  --size-control-md: ${d.control[1]}px;`, `  --size-control-lg: ${d.control[2]}px;`]
      })(),
    ]),
    block(".dark", changed(s, "dark")),
    font && s.font !== "inter" ? `body {\n  font-family: ${font.family};\n}` : "",
  ]
    .filter(Boolean)
    .join("\n\n")
}

// Single-choice pickers built from the DS ToggleGroup.
function single(value: string, onChange: (id: string) => void) {
  return {
    selectionMode: "single" as const,
    disallowEmptySelection: true,
    selectedKeys: [value],
    onSelectionChange: (keys: Set<React.Key> | "all") => {
      if (keys === "all") return
      const id = [...keys][0]
      if (id !== undefined) onChange(String(id))
    },
  }
}

function Swatches<T extends { id: string; name: string; swatch: string }>({
  items,
  value,
  onChange,
  label,
}: {
  items: readonly T[]
  value: string
  onChange: (id: string) => void
  label: string
}) {
  return (
    <ToggleGroup
      aria-label={label}
      variant="outline"
      className="grid w-full grid-cols-2"
      {...single(value, onChange)}
    >
      {items.map((item) => (
        <ToggleGroupItem key={item.id} id={item.id} className="w-full justify-start gap-2">
          <span
            aria-hidden
            className="size-4 shrink-0 rounded-full border border-black/10"
            style={{ background: item.swatch }}
          />
          {item.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

function Segmented<T extends { id: string; label: string }>({
  items,
  value,
  onChange,
  label,
  grid,
}: {
  items: readonly T[]
  value: string
  onChange: (id: string) => void
  label: string
  grid?: boolean
}) {
  return (
    <ToggleGroup
      aria-label={label}
      variant="outline"
      spacing={grid ? 2 : 0}
      className={grid ? "grid w-full grid-cols-2" : "w-full"}
      {...single(value, onChange)}
    >
      {items.map((item) => (
        <ToggleGroupItem key={item.id} id={item.id} className={grid ? "w-full" : "flex-1"}>
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

function ControlGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{title}</h2>
      {children}
    </div>
  )
}

const salesData = [
  { month: "Jan", sales: 186 },
  { month: "Feb", sales: 305 },
  { month: "Mar", sales: 237 },
  { month: "Apr", sales: 273 },
  { month: "May", sales: 209 },
  { month: "Jun", sales: 314 },
]
const salesConfig = { sales: { label: "Sales", color: "var(--chart-1)" } } satisfies ChartConfig

const visitorData = [
  { month: "Jan", desktop: 120, mobile: 80 },
  { month: "Feb", desktop: 200, mobile: 130 },
  { month: "Mar", desktop: 160, mobile: 190 },
  { month: "Apr", desktop: 240, mobile: 150 },
  { month: "May", desktop: 210, mobile: 220 },
  { month: "Jun", desktop: 280, mobile: 200 },
]
const visitorConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-3)" },
} satisfies ChartConfig

const sourceData = [
  { source: "store", value: 420, fill: "var(--color-store)" },
  { source: "pos", value: 310, fill: "var(--color-pos)" },
  { source: "market", value: 180, fill: "var(--color-market)" },
]
const sourceConfig = {
  value: { label: "Orders" },
  store: { label: "Online store", color: "var(--chart-1)" },
  pos: { label: "POS", color: "var(--chart-2)" },
  market: { label: "Marketplace", color: "var(--chart-4)" },
} satisfies ChartConfig

function Preview() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-(--pg-gap) p-(--pg-gap)">
      <Card>
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>Enter your details to get started.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="pg-name">Name</Label>
            <Input id="pg-name" placeholder="Ada Lovelace" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pg-email">Email</Label>
            <Input id="pg-email" type="email" placeholder="ada@store.com" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="pg-terms" defaultSelected />
            <Label htmlFor="pg-terms">Accept terms and conditions</Label>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Create account</Button>
          <Button variant="outline">Cancel</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Monthly sales</CardTitle>
          <CardDescription>Compared with last month.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <span className="font-heading text-4xl font-semibold tracking-tight">$12,480</span>
            <Badge variant="success">+12.5%</Badge>
          </div>
          <Progress value={68} aria-label="Sales target" />
          <p className="text-sm text-muted-foreground">68% of the monthly target.</p>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Last six months.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={salesConfig} className="h-44 w-full">
            <BarChart data={salesData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visitors</CardTitle>
          <CardDescription>Desktop and mobile.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={visitorConfig} className="h-44 w-full">
            <AreaChart data={visitorData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area dataKey="mobile" type="monotone" fill="var(--color-mobile)" fillOpacity={0.35} stroke="var(--color-mobile)" stackId="a" />
              <Area dataKey="desktop" type="monotone" fill="var(--color-desktop)" fillOpacity={0.35} stroke="var(--color-desktop)" stackId="a" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders by channel</CardTitle>
          <CardDescription>Share of total orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={sourceConfig} className="mx-auto h-44 w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie data={sourceData} dataKey="value" nameKey="source" innerRadius={42} strokeWidth={2} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
          <CardDescription>Invite people to your workspace.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {[
            ["AL", "Ada Lovelace", "Owner"],
            ["GH", "Grace Hopper", "Admin"],
            ["AT", "Alan Turing", "Member"],
          ].map(([i, n, r]) => (
            <div key={n} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{i}</AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">{n}</span>
                <span className="text-xs text-muted-foreground">{r}</span>
              </div>
              <Button size="sm" variant="ghost">
                Manage
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultSelectedKey="general">
            <TabsList aria-label="Settings">
              <TabsTrigger id="general">General</TabsTrigger>
              <TabsTrigger id="alerts">Alerts</TabsTrigger>
              <TabsTrigger id="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent id="general" className="flex flex-col gap-4 pt-4">
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="pg-email-sw">Email notifications</Label>
                <Switch id="pg-email-sw" defaultSelected />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="pg-marketing">Marketing emails</Label>
                <Switch id="pg-marketing" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="pg-vol">Volume</Label>
                <Slider id="pg-vol" defaultValue={60} aria-label="Volume" />
              </div>
            </TabsContent>
            <TabsContent id="alerts" className="pt-4 text-sm text-muted-foreground">
              Choose which alerts reach you.
            </TabsContent>
            <TabsContent id="billing" className="pt-4 text-sm text-muted-foreground">
              Manage your plan and invoices.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Variants, sizes, icons and icon only.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">Variants</span>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">Sizes</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">With icon</span>
            <div className="flex flex-wrap gap-2">
              <Button><EnvelopeSimple /> Login with email</Button>
              <Button variant="outline">Download <DownloadSimple /></Button>
              <Button variant="secondary"><Plus /> New</Button>
              <Button variant="destructive"><Trash /> Delete</Button>
              <Button isDisabled><SpinnerGap className="animate-spin" /> Please wait</Button>
              <Button variant="ghost">Next <ArrowRight /></Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">Icon only</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="icon" aria-label="Add"><Plus /></Button>
              <Button size="icon" variant="secondary" aria-label="Notifications"><Bell /></Button>
              <Button size="icon" variant="outline" aria-label="Settings"><Gear /></Button>
              <Button size="icon" variant="ghost" aria-label="Favourite"><Heart /></Button>
              <Button size="icon" variant="destructive" aria-label="Delete"><Trash /></Button>
              <Button size="icon-sm" variant="outline" aria-label="Star"><Star /></Button>
              <Button size="icon-lg" variant="outline" aria-label="Download"><DownloadSimple /></Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>Radio group, toggles and textarea.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <RadioGroup defaultValue="card" aria-label="Payment method" className="gap-4">
            <RadioGroupItem value="card">Card</RadioGroupItem>
            <RadioGroupItem value="cash">Cash</RadioGroupItem>
          </RadioGroup>
          <ToggleGroup aria-label="Text alignment" selectionMode="single" defaultSelectedKeys={["left"]} variant="outline">
            <ToggleGroupItem id="left">Left</ToggleGroupItem>
            <ToggleGroupItem id="center">Center</ToggleGroupItem>
            <ToggleGroupItem id="right">Right</ToggleGroupItem>
          </ToggleGroup>
          <Textarea aria-label="Message" placeholder="Type your message here." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion>
            <AccordionItem id="a"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It follows the WAI-ARIA pattern.</AccordionContent></AccordionItem>
            <AccordionItem id="b"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes. It uses the semantic tokens.</AccordionContent></AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
          <CardDescription>Breadcrumb, pagination and loading.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbItem><BreadcrumbPage>Playground</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Separator />
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
          <Separator />
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Theme changes apply to the whole preview.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Saved</AlertTitle>
          <AlertDescription>Your changes were saved.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>Please try again.</AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

export function Playground() {
  const [state, setState] = React.useState<State>(DEFAULT)
  const [copied, setCopied] = React.useState(false)
  const set = (patch: Partial<State>) => setState((s) => ({ ...s, ...patch }))
  const applyStyle = (id: string) => {
    const st = STYLES.find((x) => x.id === id)
    if (st) setState((s) => ({ ...s, style: st.id, accent: st.accent, base: st.base, radius: st.radius, font: st.font, density: st.density }))
  }

  const font = FONTS.find((f) => f.id === state.font) ?? FONTS[0]
  const density = DENSITIES.find((d) => d.id === state.density) ?? DENSITIES[1]
  const style = {
    ...themeVars(state, state.mode),
    "--radius": `${state.radius}rem`,
    "--size-control-sm": `${density.control[0]}px`,
    "--size-control-md": `${density.control[1]}px`,
    "--size-control-lg": `${density.control[2]}px`,
    "--chart-1": "var(--primary)",
    "--chart-2": "color-mix(in srgb, var(--primary) 72%, var(--background))",
    "--chart-3": "color-mix(in srgb, var(--primary) 48%, var(--background))",
    "--chart-4": "color-mix(in srgb, var(--primary) 30%, var(--foreground))",
    "--chart-5": "color-mix(in srgb, var(--primary) 18%, var(--background))",
    "--pg-card-spacing": density.card,
    "--pg-gap": density.gap,
    "--font-sans": font.family,
    fontFamily: font.family,
  } as React.CSSProperties

  function shuffle() {
    const pick = <T,>(a: readonly T[]) => a[Math.floor(Math.random() * a.length)]
    set({
      accent: pick(ACCENTS).id,
      base: pick(BASES).id,
      radius: pick(RADII).id,
      font: pick(FONTS).id,
      density: pick(DENSITIES).id,
    })
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(toCss(state))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <aside className="flex w-full shrink-0 flex-col gap-6 border-b p-6 md:sticky md:top-[65px] md:h-[calc(100svh-65px)] md:w-[300px] md:self-start md:overflow-y-auto md:border-r md:border-b-0">
        <div className="flex flex-col gap-1">
          <h1 className="font-display text-4xl leading-none uppercase">Playground</h1>
          <p className="text-sm text-muted-foreground">
            Pick a theme and watch our components change. Copy the CSS when you like it.
          </p>
        </div>

        <ControlGroup title="Style">
          <Segmented
            items={STYLES.map((st) => ({ id: st.id, label: st.name }))}
            value={state.style}
            onChange={applyStyle}
            label="Style"
            grid
          />
        </ControlGroup>
        <ControlGroup title="Accent">
          <Swatches items={ACCENTS} value={state.accent} onChange={(accent) => set({ accent })} label="Accent colour" />
        </ControlGroup>
        <ControlGroup title="Base">
          <Swatches items={BASES} value={state.base} onChange={(base) => set({ base })} label="Base colour" />
        </ControlGroup>
        <ControlGroup title="Radius">
          <Segmented items={RADII} value={state.radius} onChange={(radius) => set({ radius })} label="Radius" />
        </ControlGroup>
        <ControlGroup title="Density">
          <Segmented items={DENSITIES} value={state.density} onChange={(density) => set({ density })} label="Density" />
        </ControlGroup>
        <ControlGroup title="Font">
          <Segmented items={FONTS} value={state.font} onChange={(font) => set({ font })} label="Font" />
        </ControlGroup>
        <ControlGroup title="Mode">
          <Segmented
            items={[
              { id: "light", label: "Light" },
              { id: "dark", label: "Dark" },
            ]}
            value={state.mode}
            onChange={(mode) => set({ mode: mode as Mode })}
            label="Mode"
          />
        </ControlGroup>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Button onPress={copy}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy CSS"}
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onPress={shuffle}>
              <Shuffle /> Shuffle
            </Button>
            <Button variant="outline" onPress={() => setState(DEFAULT)}>
              <ArrowCounterClockwise /> Reset
            </Button>
          </div>
        </div>
      </aside>

      <section className="min-w-0 flex-1 p-4 md:p-6">
        <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {STYLES.find((x) => x.id === state.style)?.name ?? "Custom"} · {ACCENTS.find((a) => a.id === state.accent)?.name} · {BASES.find((b) => b.id === state.base)?.name} ·{" "}
            {state.radius}rem · {font.label}
          </span>
          <span className="flex items-center gap-1">
            {state.mode === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
            {state.mode === "dark" ? "Dark" : "Light"}
          </span>
        </div>
        <div
          data-playground-preview
          data-density={state.density}
          style={style}
          className={cn(
            "overflow-hidden rounded-xl border bg-background text-foreground",
            state.mode === "dark" && "dark"
          )}
        >
          <Preview />
        </div>
      </section>
    </div>
  )
}

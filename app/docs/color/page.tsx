import { DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const groups = [
  {
    title: "Surfaces",
    tokens: [
      { name: "background", className: "bg-background" },
      { name: "card", className: "bg-card" },
      { name: "popover", className: "bg-popover" },
      { name: "sidebar", className: "bg-sidebar" },
      { name: "muted", className: "bg-muted" },
      { name: "secondary", className: "bg-secondary" },
      { name: "accent", className: "bg-accent" },
      { name: "overlay", className: "bg-overlay" },
    ],
  },
  {
    title: "Brand",
    tokens: [
      { name: "primary", className: "bg-primary" },
      { name: "primary-hover", className: "bg-primary-hover" },
      { name: "ring", className: "bg-ring" },
      { name: "border", className: "bg-border" },
      { name: "input", className: "bg-input" },
    ],
  },
  {
    title: "Status",
    tokens: [
      { name: "success", className: "bg-success" },
      { name: "success-muted", className: "bg-success-muted" },
      { name: "warning", className: "bg-warning" },
      { name: "warning-muted", className: "bg-warning-muted" },
      { name: "destructive", className: "bg-destructive" },
      { name: "destructive-muted", className: "bg-destructive-muted" },
      { name: "info", className: "bg-info" },
      { name: "info-muted", className: "bg-info-muted" },
    ],
  },
  {
    title: "Chart",
    tokens: [
      { name: "chart-1", className: "bg-chart-1" },
      { name: "chart-2", className: "bg-chart-2" },
      { name: "chart-3", className: "bg-chart-3" },
      { name: "chart-4", className: "bg-chart-4" },
      { name: "chart-5", className: "bg-chart-5" },
    ],
  },
]

const grays = [
  { step: "50", className: "bg-mist-50" },
  { step: "100", className: "bg-mist-100" },
  { step: "200", className: "bg-mist-200" },
  { step: "300", className: "bg-mist-300" },
  { step: "400", className: "bg-mist-400" },
  { step: "500", className: "bg-mist-500" },
  { step: "600", className: "bg-mist-600" },
  { step: "700", className: "bg-mist-700" },
  { step: "800", className: "bg-mist-800" },
  { step: "900", className: "bg-mist-900" },
  { step: "950", className: "bg-mist-950" },
]

export default function ColorDocsPage() {
  return (
    <DocsPage
      group="Foundations"
      title="Color"
      description="Semantic tokens. Use these names in code, never raw hex values. Light and dark values come from the same token set."
      toc={[
        { id: "semantic", label: "Semantic colors" },
        { id: "grayscale", label: "Grayscale" },
        { id: "values", label: "Values" },
        { id: "usage", label: "Usage" },
      ]}
      {...pagerFor("/docs/color")}
    >
      <DocSection id="semantic" title="Semantic colors">
        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-medium">{group.title}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {group.tokens.map((token) => (
                  <div key={token.name} className="flex flex-col overflow-hidden rounded-lg border">
                    <div className={`h-16 ${token.className}`} />
                    <div className="px-3 py-2">
                      <p className="font-mono text-xs">--{token.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="grayscale" title="Grayscale" description="Every screen works in gray first. Color is added only to show status.">
        <div className="grid grid-cols-11 overflow-hidden rounded-lg border">
          {grays.map((gray) => (
            <div key={gray.step} className="flex flex-col">
              <div className={`h-14 ${gray.className}`} />
              <span className="px-1 py-1 text-center font-mono text-[10px] text-muted-foreground">{gray.step}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="values" title="Values">
        <DocTable
          label="Color token values"
          headers={["Token", "Light", "Dark"]}
          rows={[
            ["--background", "#ffffff", "#161b1d"],
            ["--foreground", "#090b0c", "#f1f3f3"],
            ["--primary", "#2edca2", "#45eaa5"],
            ["--primary-hover", "#34d294", "#6cf2bd"],
            ["--primary-foreground", "#1d1918", "#1d1918"],
            ["--secondary", "#f1f3f3", "#394447"],
            ["--muted-foreground", "#4b585b", "#d0d6d8"],
            ["--border", "#e3e7e8", "#394447"],
            ["--input", "#67787c", "#67787c"],
            ["--ring", "#2edca2", "#45eaa5"],
            ["--destructive", "#c10007", "#ff6467"],
            ["--success", "#008236", "#00c950"],
            ["--warning", "#fe9a00", "#ffb900"],
            ["--info", "#1447e6", "#51a2ff"],
            ["--warning-muted-foreground", "#7b3306", "#fee685"],
            ["--overlay", "#090b0c", "#090b0c"],
          ]}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use Tailwind token classes such as <code>bg-primary</code> and <code>text-muted-foreground</code>.</li>
          <li>Use success, warning, destructive, and info only for status, never for decoration.</li>
          <li>Check text contrast of the pairs in the table. White on primary passes 4.5:1.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

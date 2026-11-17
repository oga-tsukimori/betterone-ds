import { DocCode, DocSection, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const css = `:root {
  --background: #ffffff;
  --foreground: #090b0c;
  --primary: #2edca2;
  --primary-foreground: #1d1918;
}

.dark {
  --background: #161b1d;
  --foreground: #f1f3f3;
  --primary: #45eaa5;
  --primary-foreground: #1d1918;
}`

const swatches = [
  ["--background", "bg-background"],
  ["--card", "bg-card"],
  ["--muted", "bg-muted"],
  ["--primary", "bg-primary"],
  ["--destructive", "bg-destructive"],
  ["--success", "bg-success"],
  ["--warning", "bg-warning"],
  ["--info", "bg-info"],
]

export default function ThemingDocsPage() {
  return (
    <DocsPage
      group="Getting Started"
      title="Theming"
      description="Colors are CSS variables. Light is the default, and adding the dark class to the html element switches every token at once."
      toc={[
        { id: "tokens", label: "Tokens" },
        { id: "modes", label: "Light and dark" },
        { id: "toggle", label: "Switching modes" },
      ]}
      {...pagerFor("/docs/theming")}
    >
      <DocSection id="tokens" title="Tokens">
        <p className="mb-4 text-muted-foreground">
          Use the semantic names in code, never raw hex values. They come from the Figma variables, so design and code stay in sync.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map(([name, cls]) => (
            <div key={name} className="overflow-hidden rounded-lg border">
              <div className={`h-14 ${cls}`} />
              <div className="px-3 py-2 font-mono text-xs">{name}</div>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="modes" title="Light and dark">
        <p className="mb-4 text-muted-foreground">
          The same token has one value per mode. Components never branch on the mode, they only read the variable.
        </p>
        <DocCode code={css} />
      </DocSection>

      <DocSection id="toggle" title="Switching modes">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use the sun and moon button in the header, or press D.</li>
          <li>The choice is saved in the browser. With no choice saved, it follows the system setting.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

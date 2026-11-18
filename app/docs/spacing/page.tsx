import type { Metadata } from "next"

import { DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Spacing",
  description:
    "A 4px base for gaps and padding. Radius is set from one base value, so every corner in the product matches.",
}

const spacing = [
  ["0", 0],
  ["0.5", 2],
  ["1", 4],
  ["1.5", 6],
  ["2", 8],
  ["3", 12],
  ["4", 16],
  ["5", 20],
  ["6", 24],
  ["8", 32],
  ["10", 40],
  ["11", 44],
  ["12", 48],
  ["14", 56],
  ["16", 64],
  ["20", 80],
  ["24", 96],
] as const

const radii = [
  { name: "sm", px: 6, className: "rounded-sm" },
  { name: "md", px: 8, className: "rounded-md" },
  { name: "lg", px: 10, className: "rounded-lg" },
  { name: "xl", px: 14, className: "rounded-xl" },
  { name: "2xl", px: 18, className: "rounded-2xl" },
  { name: "3xl", px: 22, className: "rounded-3xl" },
  { name: "4xl", px: 26, className: "rounded-4xl" },
  { name: "full", px: 9999, className: "rounded-full" },
]

export default function SpacingDocsPage() {
  return (
    <DocsPage
      group="Foundations"
      title="Spacing"
      description="A 4px base for gaps and padding. Radius is set from one base value, so every corner in the product matches."
      toc={[
        { id: "spacing", label: "Spacing scale" },
        { id: "radius", label: "Radius" },
        { id: "usage", label: "Usage" },
      ]}
      {...pagerFor("/docs/spacing")}
    >
      <DocSection id="spacing" title="Spacing scale">
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <caption className="sr-only">Spacing scale</caption>
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="px-4 py-2 font-medium">Token</th>
                <th className="px-4 py-2 font-medium">px</th>
                <th className="px-4 py-2 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody>
              {spacing.map(([token, px]) => (
                <tr key={token} className="border-b last:border-b-0">
                  <td className="px-4 py-2 font-mono text-xs">
                    spacing-{token}
                  </td>
                  <td className="px-4 py-2 font-mono text-xs">{px}</td>
                  <td className="px-4 py-2">
                    <div
                      className="h-3 rounded-sm bg-primary"
                      style={{ width: `${px}px` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection
        id="radius"
        title="Radius"
        description="The base radius is 8px. Each step follows the token scale."
      >
        <div className="grid grid-cols-2 gap-4 rounded-xl border bg-background p-6 sm:grid-cols-4">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-start gap-2">
              <div className={`size-20 border bg-secondary ${r.className}`} />
              <p className="font-mono text-xs">
                {r.name} · {r.px === 9999 ? "full" : `${r.px}px`}
              </p>
            </div>
          ))}
        </div>
        <DocTable
          label="Radius tokens"
          headers={["Token", "Value"]}
          rows={[
            ["--radius", "8px (base)"],
            ["buttons", "md, 8px"],
            ["inputs", "sm, 6px"],
            ["cards", "lg to xl, 10 to 14px"],
            ["badges", "full"],
          ]}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use the 4px steps for gaps: 8, 12, 16, 24, 32, 48.</li>
          <li>
            Do not hardcode pixel values in components. Use Tailwind spacing
            classes.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

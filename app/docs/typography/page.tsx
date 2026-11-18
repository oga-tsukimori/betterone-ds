import type { Metadata } from "next"

import { DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Typography",
  description:
    "Inter for UI text, Geist for headings, Tanker for display titles, and Geist Mono for code. Sizes follow the type scale.",
}

// Each row: a label (role, class, size) on the left and the live sample on the right.
const samples = [
  {
    role: "Display",
    meta: "font-display · 60px · Tanker",
    className: "font-display text-6xl",
    text: "Display 60",
  },
  {
    role: "Heading",
    meta: "font-heading · 36px",
    className: "font-heading text-4xl font-semibold tracking-tight",
    text: "Heading 36",
  },
  {
    role: "Heading",
    meta: "font-heading · 24px",
    className: "font-heading text-2xl font-semibold",
    text: "Heading 24",
  },
  {
    role: "Subheading",
    meta: "font-heading · 20px",
    className: "font-heading text-xl font-medium",
    text: "Subheading 20",
  },
  {
    role: "Body",
    meta: "font-sans · 16px",
    className: "text-base",
    text: "Body 16. The quick brown fox jumps over the lazy dog.",
  },
  {
    role: "Small",
    meta: "font-sans · 14px",
    className: "text-sm text-muted-foreground",
    text: "Small 14. Secondary and helper text.",
  },
  {
    role: "Caption",
    meta: "font-sans · 12px",
    className: "text-xs text-muted-foreground",
    text: "Caption 12.",
  },
  {
    role: "Code",
    meta: "font-mono · 14px",
    className: "font-mono text-sm",
    text: 'const token = "--primary"',
  },
]

export default function TypographyDocsPage() {
  return (
    <DocsPage
      group="Getting Started"
      title="Typography"
      description="Inter for UI text, Geist for headings, Tanker for display titles, and Geist Mono for code. Sizes follow the type scale."
      toc={[
        { id: "samples", label: "Samples" },
        { id: "families", label: "Font families" },
        { id: "scale", label: "Scale" },
        { id: "usage", label: "Usage" },
      ]}
      {...pagerFor("/docs/typography")}
    >
      <DocSection id="samples" title="Samples">
        <div className="overflow-hidden rounded-xl border">
          {samples.map((sample) => (
            <div
              key={sample.meta + sample.text}
              className="grid gap-3 border-b px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:items-center"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{sample.role}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {sample.meta}
                </span>
              </div>
              <p className={sample.className}>{sample.text}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection id="families" title="Font families">
        <DocTable
          label="Font families"
          headers={["Role", "Family", "Class"]}
          rows={[
            ["Body and UI", "Inter", "font-sans"],
            ["Headings", "Geist", "font-heading"],
            ["Display", "Tanker", "font-display"],
            ["Code", "Geist Mono", "font-mono"],
          ]}
        />
      </DocSection>

      <DocSection id="scale" title="Scale">
        <DocTable
          label="Type scale"
          headers={["Step", "Size", "Line height"]}
          rows={[
            ["xs", "12px", "16px"],
            ["sm", "14px", "20px"],
            ["base", "16px", "24px"],
            ["lg", "18px", "28px"],
            ["xl", "20px", "28px"],
            ["2xl", "24px", "32px"],
            ["3xl", "30px", "36px"],
            ["4xl", "36px", "40px"],
            ["5xl", "48px", "48px"],
            ["6xl", "60px", "60px"],
          ]}
        />
        <DocTable
          label="Font weights"
          headers={["Weight", "Value"]}
          rows={[
            ["regular", "400"],
            ["medium", "500"],
            ["semibold", "600"],
            ["bold", "700"],
          ]}
        />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Body text is 14 to 16px. Use 14px for dense UI, 16px for reading.
          </li>
          <li>
            Use semibold for headings and medium for labels. Avoid bold in body
            text.
          </li>
          <li>
            Use Tanker (font-display) only for display titles such as the
            landing hero and large section titles, never for UI text.
          </li>
          <li>Use the mono font only for code, token names, and file paths.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

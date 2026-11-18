import type { Metadata } from "next"

import { ScrollAreaDemo } from "@/components/docs/demos"
import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Scroll Area",
  description: "A region with styled scrollbars for long content.",
}

const code = `<ScrollArea className="h-40 w-56">…</ScrollArea>`

export default function ScrollAreaDocsPage() {
  return (
    <DocsPage
      group="Layout & Utility"
      title="Scroll Area"
      description="A region with styled scrollbars for long content."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/scroll-area")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/scroll-area.tsx"
        code={code}
        preview={<ScrollAreaDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add scroll-area" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Scroll Area props"
          headers={["Prop", "Type", "Default"]}
          rows={[["className", "string", "\u2014"]]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Scrollable regions should be focusable so keyboard users can scroll.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

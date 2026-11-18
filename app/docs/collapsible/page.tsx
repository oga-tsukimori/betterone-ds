import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const metadata: Metadata = {
  title: "Collapsible",
  description:
    "An expandable region with a trigger. Use Accordion for a group of them.",
}

const code = `<Collapsible>
  <CollapsibleTrigger>Order #1042 — 3 items</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Flat white × 2</p>
  </CollapsibleContent>
</Collapsible>`

export default function CollapsibleDocsPage() {
  return (
    <DocsPage
      group="Layout & Utility"
      title="Collapsible"
      description="An expandable region with a trigger. Use Accordion for a group of them."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/collapsible")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/collapsible.tsx"
        code={code}
        preview={
          <Collapsible className="w-full max-w-sm">
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium">
              Order #1042 — 3 items
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-2 pt-2 text-sm">
                <div className="rounded-md border px-3 py-2">
                  Flat white × 2
                </div>
                <div className="rounded-md border px-3 py-2">Oat latte × 1</div>
                <div className="rounded-md border px-3 py-2">Cold brew × 1</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add collapsible" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Collapsible props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["Collapsible", "defaultExpanded", "boolean", "false"],
            ["Collapsible", "isDisabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>The trigger exposes aria-expanded to assistive technology.</li>
          <li>Space and Enter toggle the region.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

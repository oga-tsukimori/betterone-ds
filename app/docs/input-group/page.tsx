import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { pagerFor } from "@/lib/docs-nav"

const description = "An input with an icon, text or button attached to it."

export const metadata: Metadata = {
  title: "Input Group",
  description,
}

const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

<InputGroup aria-label="Price" className="w-48">
  <InputGroupAddon>$</InputGroupAddon>
  <InputGroupInput aria-label="Price" placeholder="0.00" />
</InputGroup>`

export default function InputGroupDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Input Group"
      description={description}
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/input-group")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/input-group.tsx"
        code={code}
        preview={
          <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-3">
            <InputGroup aria-label="Price" className="w-48">
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupInput aria-label="Price" placeholder="0.00" />
            </InputGroup>
            <Button>Apply</Button>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add input-group" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Input Group props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            [
              "align (InputGroupAddon)",
              '"inline-start" | "inline-end" | "block-start" | "block-end"',
              '"inline-start"',
            ],
            [
              "size (InputGroupButton)",
              '"xs" | "sm" | "icon-xs" | "icon-sm"',
              '"xs"',
            ],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Give the input a visible label or an aria-label.</li>
          <li>Icon-only buttons inside the group need an aria-label.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

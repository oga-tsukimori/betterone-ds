import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import {
  Select,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Select",
  description:
    "Lets the user choose one option from a list that opens over the page.",
}

const code = `import {
  Select,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select aria-label="Team">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectPopover>
    <SelectList>
      <SelectItem id="design" textValue="Design">Design</SelectItem>
      <SelectItem id="engineering" textValue="Engineering">Engineering</SelectItem>
    </SelectList>
  </SelectPopover>
</Select>`

export default function SelectDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Select"
      description="Lets the user choose one option from a list that opens over the page."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/select")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/select.tsx"
        code={code}
        preview={
          <Select aria-label="Team" className="w-full max-w-xs">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectPopover>
              <SelectList>
                <SelectItem id="design" textValue="Design">
                  Design
                </SelectItem>
                <SelectItem id="engineering" textValue="Engineering">
                  Engineering
                </SelectItem>
                <SelectItem id="research" textValue="Research">
                  Research
                </SelectItem>
              </SelectList>
            </SelectPopover>
          </Select>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add select" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Select props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["aria-label", "string", "required when there is no visible label"],
            ["selectedKey", "Key", "—"],
            ["isDisabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Give the select a visible label or an aria-label.</li>
          <li>
            Use a select for many options. For two or three options, a radio
            group is easier to scan.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

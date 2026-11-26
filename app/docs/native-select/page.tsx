import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { pagerFor } from "@/lib/docs-nav"

const description = "A styled version of the browser's own select menu."

export const metadata: Metadata = {
  title: "Native Select",
  description,
}

const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

<NativeSelect aria-label="Team">
  <NativeSelectOption value="design">Design</NativeSelectOption>
  <NativeSelectOption value="engineering">Engineering</NativeSelectOption>
</NativeSelect>`

export default function NativeSelectDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Native Select"
      description={description}
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/native-select")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/native-select.tsx"
        code={code}
        preview={
          <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-3">
            <NativeSelect aria-label="Team">
              <NativeSelectOption value="design">Design</NativeSelectOption>
              <NativeSelectOption value="engineering">
                Engineering
              </NativeSelectOption>
            </NativeSelect>
            <Input aria-label="Name" placeholder="Name" className="w-40" />
            <Button>Save</Button>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add native-select" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Native Select props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["aria-label", "string", "required when there is no visible label"],
            ["size", '"sm" | "default"', '"default"'],
            ["disabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Give the select a visible label or an aria-label.</li>
          <li>
            The browser supplies the menu, so keyboard and touch behaviour match
            the device.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

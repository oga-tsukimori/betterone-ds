import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Input",
  description:
    "A single-line text field for entering short values, such as an email or a name.",
}

const code = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="flex flex-col gap-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`

export default function InputDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Input"
      description="A single-line text field for entering short values, such as an email or a name."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/input")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/input.tsx"
        code={code}
        preview={
          <div className="grid w-full max-w-sm gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="docs-email">Email</Label>
              <Input
                id="docs-email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="docs-disabled">Disabled</Label>
              <Input id="docs-disabled" placeholder="Not editable" disabled />
            </div>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add input" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Input props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["type", '"text" | "email" | "password" | ...', '"text"'],
            ["placeholder", "string", "—"],
            ["disabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Always pair an input with a visible label. A placeholder is not a
            label.
          </li>
          <li>Keep the focus ring visible when the field is active.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

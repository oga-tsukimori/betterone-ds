import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center gap-2">
  <Checkbox id="terms" defaultSelected />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

<div className="flex items-center gap-2">
  <Checkbox id="disabled" isDisabled />
  <Label htmlFor="disabled">Not available</Label>
</div>`

export default function CheckboxDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Checkbox"
      description="A control for choosing one or more options from a set."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/checkbox")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/checkbox.tsx"
        code={code}
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="docs-terms" defaultSelected />
              <Label htmlFor="docs-terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="docs-updates" />
              <Label htmlFor="docs-updates">Send me product updates</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="docs-disabled" isDisabled />
              <Label htmlFor="docs-disabled" className="text-muted-foreground">
                Not available
              </Label>
            </div>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add checkbox" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Checkbox props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["defaultSelected", "boolean", "false"],
            ["isSelected", "boolean", "—"],
            ["isDisabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Every checkbox needs a visible label. The label is the text inside the component.</li>
          <li>Use a checkbox for multiple choices and a radio group for one choice.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

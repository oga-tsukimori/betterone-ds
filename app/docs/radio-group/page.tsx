import { RadioGroupDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<RadioGroup defaultValue="card">
  <RadioGroupItem value="card">Card</RadioGroupItem>
  <RadioGroupItem value="cash">Cash</RadioGroupItem>
</RadioGroup>`

export default function RadioGroupDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Radio Group"
      description="Choose one option from a short list."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/radio-group")}
    >
      <DocPreviewTabs id="preview" file="components/ui/radio-group.tsx" code={code} preview={<RadioGroupDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add radio-group" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Radio Group props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["defaultValue", "string", "\u2014"],
            ["orientation", "\"horizontal\" | \"vertical\"", "\"vertical\""],
            ["isDisabled", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys move between options. Give the group an aria-label.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

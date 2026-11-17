import { FormDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<FieldGroup>
  <Field>
    <FieldLabel htmlFor="name">Store name</FieldLabel>
    <Input id="name" />
    <FieldDescription>Shown on receipts.</FieldDescription>
  </Field>
</FieldGroup>`

export default function FormDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Form"
      description="Group fields with labels, hints and errors."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/form")}
    >
      <DocPreviewTabs id="preview" file="components/ui/field.tsx" code={code} preview={<FormDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add field" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Form props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["Field orientation", "\"vertical\" | \"horizontal\"", "\"vertical\""],
            ["FieldError", "children", "\u2014"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Link hints and errors to the input so screen readers read them.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

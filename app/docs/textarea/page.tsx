import { TextareaDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Textarea placeholder="Type your message here." />`

export default function TextareaDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Textarea"
      description="A multi-line text field for longer messages and notes."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/textarea")}
    >
      <DocPreviewTabs id="preview" file="components/ui/textarea.tsx" code={code} preview={<TextareaDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add textarea" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Textarea props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["placeholder", "string", "\u2014"],
            ["isDisabled", "boolean", "false"],
            ["rows", "number", "auto"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Always pair with a visible Label or aria-label.</li>
          <li>Do not use placeholder text as the only label.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

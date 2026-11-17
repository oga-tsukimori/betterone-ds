import { LabelDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />`

export default function LabelDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Label"
      description="Names a form control. Click the label to focus its field."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/label")}
    >
      <DocPreviewTabs id="preview" file="components/ui/label.tsx" code={code} preview={<LabelDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add label" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Label props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["htmlFor", "string", "\u2014"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Every input needs a label. Match htmlFor to the input id.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

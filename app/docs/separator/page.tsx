import { SeparatorDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Separator />
<Separator orientation="vertical" />`

export default function SeparatorDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Separator"
      description="A thin line that divides content."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/separator")}
    >
      <DocPreviewTabs id="preview" file="components/ui/separator.tsx" code={code} preview={<SeparatorDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add separator" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Separator props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Purely decorative separators are hidden from screen readers.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

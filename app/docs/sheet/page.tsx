import { SheetDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<SheetTrigger>
  <Button variant="outline">Open</Button>
  <Sheet side="right">…</Sheet>
</SheetTrigger>`

export default function SheetDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Sheet"
      description="A panel that slides in from the edge of the screen."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/sheet")}
    >
      <DocPreviewTabs id="preview" file="components/ui/sheet.tsx" code={code} preview={<SheetDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add sheet" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Sheet props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["Sheet side", "\"top\" | \"right\" | \"bottom\" | \"left\"", "\"right\""],
            ["Sheet showCloseButton", "boolean", "true"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Same focus rules as Dialog. Esc closes it.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

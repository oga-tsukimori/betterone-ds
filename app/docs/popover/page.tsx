import { PopoverDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<PopoverTrigger>
  <Button variant="outline">Open</Button>
  <Popover>…</Popover>
</PopoverTrigger>`

export default function PopoverDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Popover"
      description="A small floating panel opened by a button."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/popover")}
    >
      <DocPreviewTabs id="preview" file="components/ui/popover.tsx" code={code} preview={<PopoverDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add popover" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Popover props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["Popover placement", "string", "\"bottom\""],
            ["Popover offset", "number", "4"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Esc closes it. Focus returns to the trigger.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

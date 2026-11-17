import { TooltipDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<TooltipTrigger>
  <Button variant="outline">Hover me</Button>
  <Tooltip>Add to cart</Tooltip>
</TooltipTrigger>`

export default function TooltipDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Tooltip"
      description="A short label that appears on hover or focus."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/tooltip")}
    >
      <DocPreviewTabs id="preview" file="components/ui/tooltip.tsx" code={code} preview={<TooltipDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add tooltip" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Tooltip props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["TooltipTrigger delay", "number", "0"],
            ["Tooltip placement", "string", "\"top\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Keep it short. Do not put interactive content in a tooltip.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

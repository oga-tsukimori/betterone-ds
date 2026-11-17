import { AccordionDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Accordion>
  <AccordionItem id="a">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes.</AccordionContent>
  </AccordionItem>
</Accordion>`

export default function AccordionDocsPage() {
  return (
    <DocsPage
      group="Layout & Utility"
      title="Accordion"
      description="A stack of sections that expand and collapse."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/accordion")}
    >
      <DocPreviewTabs id="preview" file="components/ui/accordion.tsx" code={code} preview={<AccordionDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add accordion" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Accordion props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["allowsMultipleExpanded", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Triggers expose aria-expanded. Enter and Space toggle a section.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

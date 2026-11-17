import { PaginationDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`

export default function PaginationDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Pagination"
      description="Move between pages of results."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/pagination")}
    >
      <DocPreviewTabs id="preview" file="components/ui/pagination.tsx" code={code} preview={<PaginationDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add pagination" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Pagination props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["PaginationLink isActive", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>The nav is labelled "pagination". Mark the current page.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

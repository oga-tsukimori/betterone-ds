import { BreadcrumbDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`

export default function BreadcrumbDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Breadcrumb"
      description="Shows where the user is in the site hierarchy."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/breadcrumb")}
    >
      <DocPreviewTabs id="preview" file="components/ui/breadcrumb.tsx" code={code} preview={<BreadcrumbDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add breadcrumb" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Breadcrumb props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["BreadcrumbLink href", "string", "required"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>The current page uses aria-current="page".</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

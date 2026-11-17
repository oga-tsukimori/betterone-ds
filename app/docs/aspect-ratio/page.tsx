import { AspectRatioDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<AspectRatio ratio={16 / 9}>…</AspectRatio>`

export default function AspectRatioDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Aspect Ratio"
      description="Keeps content at a fixed width to height ratio."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/aspect-ratio")}
    >
      <DocPreviewTabs id="preview" file="components/ui/aspect-ratio.tsx" code={code} preview={<AspectRatioDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add aspect-ratio" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Aspect Ratio props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["ratio", "number", "required"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use for images and video so the layout does not jump while loading.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

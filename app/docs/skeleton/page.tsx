import type { Metadata } from "next"

import { SkeletonDemo } from "@/components/docs/demos"
import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Skeleton",
  description: "A placeholder shown while content loads.",
}

const code = `<Skeleton className="h-4 w-48" />`

export default function SkeletonDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Skeleton"
      description="A placeholder shown while content loads."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/skeleton")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/skeleton.tsx"
        code={code}
        preview={<SkeletonDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add skeleton" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Skeleton props"
          headers={["Prop", "Type", "Default"]}
          rows={[["className", "string", "\u2014"]]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Mark the loading region with aria-busy.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

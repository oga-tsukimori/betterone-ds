import type { Metadata } from "next"

import { ProgressDemo } from "@/components/docs/demos"
import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Progress",
  description: "Shows how far a task has come.",
}

const code = `<Progress value={60} aria-label="Upload">
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</Progress>`

export default function ProgressDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Progress"
      description="Shows how far a task has come."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/progress")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/progress.tsx"
        code={code}
        preview={<ProgressDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add progress" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Progress props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["value", "number", "0"],
            ["isIndeterminate", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Always set an aria-label. Use indeterminate when the length is
            unknown.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

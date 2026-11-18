import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Badge } from "@/components/ui/badge"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Badge",
  description: "Shows a short status, count, or label.",
}

const code = `import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>`

export default function BadgeDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Badge"
      description="Shows a short status, count, or label."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/badge")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/badge.tsx"
        code={code}
        preview={
          <>
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="success">Success</Badge>
          </>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add badge" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Badge props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            [
              "variant",
              '"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info"',
              '"default"',
            ],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Badges are text. Do not use them as the only way to show status.
          </li>
          <li>Keep the label short, one or two words.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

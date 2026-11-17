import { HoverCardDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<HoverCardTrigger>
  <Button variant="link">@betterone</Button>
  <HoverCard>…</HoverCard>
</HoverCardTrigger>`

export default function HoverCardDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Hover Card"
      description="A preview shown when hovering or focusing a link."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/hover-card")}
    >
      <DocPreviewTabs id="preview" file="components/ui/hover-card.tsx" code={code} preview={<HoverCardDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add hover-card" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Hover Card props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["HoverCard placement", "string", "\"bottom\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Opens on keyboard focus too. Never put the only copy of important content in it.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

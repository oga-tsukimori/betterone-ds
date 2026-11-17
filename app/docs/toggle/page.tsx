import { ToggleDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Toggle aria-label="Bold">Bold</Toggle>`

export default function ToggleDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Toggle"
      description="A button that switches between on and off."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/toggle")}
    >
      <DocPreviewTabs id="preview" file="components/ui/toggle.tsx" code={code} preview={<ToggleDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add toggle" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Toggle props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["variant", "\"default\" | \"outline\"", "\"default\""],
            ["size", "\"sm\" | \"default\" | \"lg\"", "\"default\""],
            ["isSelected", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Icon-only toggles need an aria-label.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { ToggleGroupDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<ToggleGroup selectionMode="single">
  <ToggleGroupItem id="left">Left</ToggleGroupItem>
  <ToggleGroupItem id="right">Right</ToggleGroupItem>
</ToggleGroup>`

export default function ToggleGroupDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Toggle Group"
      description="A set of toggles where one or many can be on."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/toggle-group")}
    >
      <DocPreviewTabs id="preview" file="components/ui/toggle-group.tsx" code={code} preview={<ToggleGroupDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add toggle-group" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Toggle Group props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["selectionMode", "\"single\" | \"multiple\"", "\"single\""],
            ["variant", "\"default\" | \"outline\"", "\"default\""],
            ["orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys move focus within the group.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { SliderDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Slider defaultValue={50} aria-label="Volume" />`

export default function SliderDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Slider"
      description="Pick a value or a range by dragging a thumb."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/slider")}
    >
      <DocPreviewTabs id="preview" file="components/ui/slider.tsx" code={code} preview={<SliderDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add slider" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Slider props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["defaultValue", "number | number[]", "\u2014"],
            ["minValue / maxValue", "number", "0 / 100"],
            ["step", "number", "1"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys change the value. Always set an aria-label.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

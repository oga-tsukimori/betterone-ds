import { CalendarDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Calendar aria-label="Pick a date" />`

export default function CalendarDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Calendar"
      description="A month grid for picking a date."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/calendar")}
    >
      <DocPreviewTabs id="preview" file="components/ui/calendar.tsx" code={code} preview={<CalendarDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add calendar" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Calendar props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["value", "DateValue", "\u2014"],
            ["isDisabled", "boolean", "false"],
            ["numberOfMonths", "number", "1"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys move by day, Page Up/Down by month.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

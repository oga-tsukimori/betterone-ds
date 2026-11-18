import type { Metadata } from "next"

import { DatePickerDemo } from "@/components/docs/demos"
import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Date Picker",
  description: "A button that opens a calendar in a popover.",
}

const code = `<PopoverTrigger>
  <Button variant="outline">Pick a date</Button>
  <Popover className="w-auto p-0">
    <Calendar aria-label="Pick a date" />
  </Popover>
</PopoverTrigger>`

export default function DatePickerDocsPage() {
  return (
    <DocsPage
      group="Forms & Inputs"
      title="Date Picker"
      description="A button that opens a calendar in a popover."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/date-picker")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/calendar.tsx"
        code={code}
        preview={<DatePickerDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add calendar popover" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Date Picker props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["Calendar value", "DateValue", "\u2014"],
            ["Popover placement", "string", '"bottom"'],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>The popover traps focus and closes with Esc.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

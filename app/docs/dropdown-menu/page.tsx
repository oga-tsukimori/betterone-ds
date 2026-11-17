import { DropdownMenuDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<DropdownMenuTrigger>
  <Button variant="outline">Open</Button>
  <DropdownMenu aria-label="Account">
    <DropdownMenuItem id="profile">Profile</DropdownMenuItem>
  </DropdownMenu>
</DropdownMenuTrigger>`

export default function DropdownMenuDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Dropdown Menu"
      description="A menu of actions opened by a button."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/dropdown-menu")}
    >
      <DocPreviewTabs id="preview" file="components/ui/dropdown-menu.tsx" code={code} preview={<DropdownMenuDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add dropdown-menu" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Dropdown Menu props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["DropdownMenuItem variant", "\"default\" | \"destructive\"", "\"default\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys move, Enter selects, Esc closes.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { CommandDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Command>
  <CommandInput placeholder="Type a command…" />
  <CommandList>
    <CommandItem id="new">New order</CommandItem>
  </CommandList>
</Command>`

export default function CommandDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Command"
      description="A searchable list of actions, like a command palette."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/command")}
    >
      <DocPreviewTabs id="preview" file="components/ui/command.tsx" code={code} preview={<CommandDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add command" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Command props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["CommandDialog open", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Arrow keys move through the list, Enter runs the command.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

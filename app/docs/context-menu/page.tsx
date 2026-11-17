import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { ContextMenu, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Button } from "@/components/ui/button"

const code = `<ContextMenuTrigger>
  <Button variant="outline">Right-click me</Button>
  <ContextMenu aria-label="Actions">
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenu>
</ContextMenuTrigger>`

export default function ContextMenuDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Context Menu"
      description="A menu opened by right-click or long press on a target."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/context-menu")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/context-menu.tsx"
        code={code}
        preview={
          <ContextMenuTrigger>
            <Button variant="outline">Right-click me</Button>
            <ContextMenu aria-label="Actions">
              <ContextMenuItem id="back">Back</ContextMenuItem>
              <ContextMenuItem id="reload">Reload</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem id="delete" variant="destructive">Delete</ContextMenuItem>
            </ContextMenu>
          </ContextMenuTrigger>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add context-menu" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Context Menu props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["ContextMenuItem", "variant", "\"default\" | \"destructive\"", "\"default\""],
            ["ContextMenuItem", "inset", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Also reachable with the keyboard menu key or Shift+F10.</li>
          <li>Every action must also exist elsewhere in the UI. Do not hide the only way to do something.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

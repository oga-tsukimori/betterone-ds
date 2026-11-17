import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const code = `<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={33}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={67}>Content</ResizablePanel>
</ResizablePanelGroup>`

export default function ResizableDocsPage() {
  return (
    <DocsPage
      group="Layout & Utility"
      title="Resizable"
      description="Panels that can be resized by dragging or with the keyboard."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/resizable")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/resizable.tsx"
        code={code}
        preview={
          <ResizablePanelGroup orientation="horizontal" className="h-40 max-w-md rounded-lg border">
            <ResizablePanel defaultSize={33}>
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Sidebar</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={67}>
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Content</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add resizable" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Resizable props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["ResizablePanelGroup", "orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\""],
            ["ResizablePanel", "defaultSize", "number", "\u2014"],
            ["ResizableHandle", "withHandle", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>The handle is focusable. Arrow keys resize, Home/End jump to the limits.</li>
          <li>Set a minimum size so content never becomes unreadable.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { MenubarDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent aria-label="File">
      <MenubarItem id="new">New order</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`

export default function MenubarDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Menubar"
      description="A row of menus, like the File and View menus in an app."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/menubar")}
    >
      <DocPreviewTabs id="preview" file="components/ui/menubar.tsx" code={code} preview={<MenubarDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add menubar" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Menubar props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["MenubarItem id", "string", "required"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Built on the dropdown menu, so keyboard and screen reader support carry over.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import type { Metadata } from "next"

import { SidebarDemo } from "@/components/docs/demos"
import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Sidebar",
  description: "A side navigation panel with groups and menu items.",
}

const code = `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Inventory</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton isActive>Products</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`

export default function SidebarDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Sidebar"
      description="A side navigation panel with groups and menu items."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/sidebar")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/sidebar.tsx"
        code={code}
        preview={<SidebarDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add sidebar" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Sidebar props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            [
              "Sidebar collapsible",
              '"offcanvas" | "icon" | "none"',
              '"offcanvas"',
            ],
            ["Sidebar side", '"left" | "right"', '"left"'],
            ["SidebarMenuButton isActive", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Wrap the sidebar in a nav landmark. The collapsed icon mode needs
            tooltips.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

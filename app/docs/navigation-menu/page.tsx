import { NavigationMenuDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<NavigationMenu aria-label="Main">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs" isActive>Docs</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`

export default function NavigationMenuDocsPage() {
  return (
    <DocsPage
      group="Navigation"
      title="Navigation Menu"
      description="A list of links for the main site navigation."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/navigation-menu")}
    >
      <DocPreviewTabs id="preview" file="components/ui/navigation-menu.tsx" code={code} preview={<NavigationMenuDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add navigation-menu" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Navigation Menu props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["NavigationMenuLink isActive", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Label the nav landmark. The active link uses aria-current.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { DrawerDemo } from "@/components/docs/drawer-demo"

const code = `<Drawer>
  <DrawerTrigger className={buttonVariants({ variant: "outline" })}>Open drawer</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Edit stock</DrawerTitle>
      <DrawerDescription>Update the count for this product.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose className={buttonVariants({ variant: "outline" })}>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`

export default function DrawerDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Drawer"
      description="A panel that slides in from the edge of the screen. Swipe to dismiss on touch devices."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/drawer")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/drawer.tsx"
        code={code}
        preview={<DrawerDemo />}
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add drawer" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Drawer props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["Drawer", "swipeDirection", "\"down\" | \"up\" | \"left\" | \"right\"", "\"down\""],
            ["Drawer", "showSwipeHandle", "boolean", "false"],
            ["Drawer", "modal", "boolean", "true"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Focus is trapped inside while open. Esc closes it.</li>
          <li>Always include a visible Close or Cancel control, not only the swipe gesture.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

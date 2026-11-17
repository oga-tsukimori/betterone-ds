import { DialogDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<DialogTrigger>
  <Button variant="outline">Close shift</Button>
  <Dialog>
    <DialogHeader>
      <DialogTitle>Close shift</DialogTitle>
    </DialogHeader>
  </Dialog>
</DialogTrigger>`

export default function DialogDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Dialog"
      description="A window layered over the page that asks for input or shows detail."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/dialog")}
    >
      <DocPreviewTabs id="preview" file="components/ui/dialog.tsx" code={code} preview={<DialogDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add dialog" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Dialog props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["Dialog showCloseButton", "boolean", "true"],
            ["Dialog isDismissable", "boolean", "true"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Focus is trapped while open and returns to the trigger on close.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const code = `<AlertDialogTrigger>
  <Button variant="outline">Delete product</Button>
  <AlertDialog>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete this product?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialog>
</AlertDialogTrigger>`

export default function AlertDialogDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Alert Dialog"
      description="A modal that interrupts the user to confirm an action. It has no close icon."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/alert-dialog")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/alert-dialog.tsx"
        code={code}
        preview={
          <AlertDialogTrigger>
            <Button variant="outline">Delete product</Button>
            <AlertDialog>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this product?</AlertDialogTitle>
                <AlertDialogDescription>This permanently removes the product and its stock history.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialog>
          </AlertDialogTrigger>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add alert-dialog" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Alert Dialog props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["AlertDialog", "size", "\"default\" | \"sm\"", "\"default\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Uses role="alertdialog". Focus moves into the dialog and returns to the trigger on close.</li>
          <li>Use for destructive or irreversible actions only. Use Dialog for everything else.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

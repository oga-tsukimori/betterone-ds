import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Color is only used when it carries meaning.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Something went wrong</AlertTitle>
  <AlertDescription>Check the form and try again.</AlertDescription>
</Alert>`

export default function AlertDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Alert"
      description="Displays a short message that needs the user's attention, such as a status or an error."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/alert")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/alert.tsx"
        code={code}
        preview={
          <div className="flex w-full flex-col gap-4">
            <Alert>
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>Color is only used when it carries meaning.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>Check the form and try again.</AlertDescription>
            </Alert>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add alert" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Alert props"
          headers={["Prop", "Type", "Default"]}
          rows={[["variant", '"default" | "destructive"', '"default"']]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use a title and a description so screen readers announce the full message.</li>
          <li>Do not rely on color alone. Pair the destructive variant with clear wording.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

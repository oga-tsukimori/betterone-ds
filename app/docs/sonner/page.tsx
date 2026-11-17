import { SonnerDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { toast } from "sonner"

<Toaster />
toast("Order saved", { description: "Order #1042 was saved." })`

export default function SonnerDocsPage() {
  return (
    <DocsPage
      group="Overlay & Feedback"
      title="Sonner"
      description="A toast that confirms an action and goes away on its own."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/sonner")}
    >
      <DocPreviewTabs id="preview" file="components/ui/sonner.tsx" code={code} preview={<SonnerDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add sonner" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Sonner props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["toast()", "string", "\u2014"],
            ["Toaster position", "string", "\"bottom-right\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Toasts are announced politely. Do not use them for errors that need action.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

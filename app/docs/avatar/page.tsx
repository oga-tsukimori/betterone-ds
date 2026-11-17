import { AvatarDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`

export default function AvatarDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Avatar"
      description="An image or initials that represent a person."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/avatar")}
    >
      <DocPreviewTabs id="preview" file="components/ui/avatar.tsx" code={code} preview={<AvatarDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add avatar" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Avatar props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["size", "\"sm\" | \"default\" | \"lg\"", "\"default\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Give meaningful images alt text. Initials are readable as they are.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

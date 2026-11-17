import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { Switch } from "@/components/ui/switch"

<div className="flex items-center justify-between gap-3">
  <Label htmlFor="email">Email notifications</Label>
  <Switch id="email" defaultSelected />
</div>

<div className="flex items-center justify-between gap-3">
  <Label htmlFor="disabled">Not available</Label>
  <Switch id="disabled" isDisabled />
</div>`

export default function SwitchDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Switch"
      description="Turns a single setting on or off. The change takes effect right away."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/switch")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/switch.tsx"
        code={code}
        preview={
          <div className="flex w-full max-w-sm flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="docs-email">Email notifications</Label>
              <Switch id="docs-email" defaultSelected />
            </div>
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="docs-digest">Weekly digest</Label>
              <Switch id="docs-digest" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="docs-disabled" className="text-muted-foreground">
                Not available
              </Label>
              <Switch id="docs-disabled" isDisabled />
            </div>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add switch" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Switch props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["defaultSelected", "boolean", "false"],
            ["isSelected", "boolean", "—"],
            ["isDisabled", "boolean", "false"],
            ["size", '"default" | "sm"', '"default"'],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use a switch for on or off settings. Use a checkbox when the change needs a submit step.</li>
          <li>Write the label as the setting name, such as "Email notifications".</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

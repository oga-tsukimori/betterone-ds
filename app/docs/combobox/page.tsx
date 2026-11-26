import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { pagerFor } from "@/lib/docs-nav"

const description =
  "A text input that filters a list of options as the user types."

export const metadata: Metadata = {
  title: "Combobox",
  description,
}

const code = `import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

<Combobox aria-label="Product" className="w-48">
  <ComboboxInput placeholder="Search products" />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxItem id="coffee">Coffee</ComboboxItem>
      <ComboboxItem id="tea">Tea</ComboboxItem>
      <ComboboxItem id="juice">Juice</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`

export default function ComboboxDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Combobox"
      description={description}
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/combobox")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/combobox.tsx"
        code={code}
        preview={
          <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-3">
            <Combobox aria-label="Product" className="w-48">
              <ComboboxInput placeholder="Search products" />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem id="coffee">Coffee</ComboboxItem>
                  <ComboboxItem id="tea">Tea</ComboboxItem>
                  <ComboboxItem id="juice">Juice</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <Button>Add</Button>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add combobox" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Combobox props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["aria-label", "string", "required when there is no visible label"],
            ["isDisabled", "boolean", "false"],
            ["showTrigger (ComboboxInput)", "boolean", "true"],
            ["showClear (ComboboxInput)", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Give the combobox a visible label or an aria-label.</li>
          <li>
            Arrow keys move through the options, Enter selects and Escape closes
            the list.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

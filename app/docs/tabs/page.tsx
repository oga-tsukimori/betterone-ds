import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Tabs",
  description:
    "Splits related content into panels, and shows one panel at a time.",
}

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultSelectedKey="account">
  <TabsList aria-label="Settings">
    <TabsTrigger id="account">Account</TabsTrigger>
    <TabsTrigger id="password">Password</TabsTrigger>
    <TabsTrigger id="team">Team</TabsTrigger>
  </TabsList>
  <TabsContent id="account">Account settings.</TabsContent>
  <TabsContent id="password">Change your password.</TabsContent>
  <TabsContent id="team">Manage your team.</TabsContent>
</Tabs>`

export default function TabsDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Tabs"
      description="Splits related content into panels, and shows one panel at a time."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/tabs")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/tabs.tsx"
        code={code}
        preview={
          <Tabs defaultSelectedKey="account" className="w-full max-w-md">
            <TabsList aria-label="Settings">
              <TabsTrigger id="account">Account</TabsTrigger>
              <TabsTrigger id="password">Password</TabsTrigger>
              <TabsTrigger id="team">Team</TabsTrigger>
            </TabsList>
            <TabsContent id="account" className="pt-3 text-muted-foreground">
              Account settings.
            </TabsContent>
            <TabsContent id="password" className="pt-3 text-muted-foreground">
              Change your password.
            </TabsContent>
            <TabsContent id="team" className="pt-3 text-muted-foreground">
              Manage your team.
            </TabsContent>
          </Tabs>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add tabs" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Tabs props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["defaultSelectedKey", "string", "—"],
            ["selectedKey", "string", "—"],
            ["TabsList variant", '"default" | "line"', '"default"'],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Give the tab list an aria-label that describes what the tabs
            contain.
          </li>
          <li>Each trigger needs an id that matches its panel.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

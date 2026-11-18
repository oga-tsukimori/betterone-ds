import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocsPage,
} from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Settings",
  description:
    "A settings page with tabs, on/off switches, and one save action. Copy the layout, then add your own sections.",
}

const code = `import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultSelectedKey="notifications">
  <TabsList aria-label="Settings">
    <TabsTrigger id="notifications">Notifications</TabsTrigger>
    <TabsTrigger id="privacy">Privacy</TabsTrigger>
  </TabsList>
  <TabsContent id="notifications" className="flex flex-col gap-4 pt-4">
    <div className="flex items-center justify-between gap-3">
      <Label htmlFor="email">Email notifications</Label>
      <Switch id="email" defaultSelected />
    </div>
    <div className="flex items-center justify-between gap-3">
      <Label htmlFor="digest">Weekly digest</Label>
      <Switch id="digest" />
    </div>
    <Button>Save changes</Button>
  </TabsContent>
  <TabsContent id="privacy">Privacy settings.</TabsContent>
</Tabs>`

export default function SettingsTemplatePage() {
  return (
    <DocsPage
      group="Templates"
      title="Settings"
      description="A settings page with tabs, on/off switches, and one save action. Copy the layout, then add your own sections."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "usage", label: "Usage" },
      ]}
      {...pagerFor("/docs/templates/settings")}
    >
      <DocPreviewTabs
        id="preview"
        file="app/settings/page.tsx"
        code={code}
        preview={
          <Tabs defaultSelectedKey="notifications" className="w-full max-w-md">
            <TabsList aria-label="Settings">
              <TabsTrigger id="notifications">Notifications</TabsTrigger>
              <TabsTrigger id="privacy">Privacy</TabsTrigger>
            </TabsList>
            <TabsContent
              id="notifications"
              className="flex flex-col gap-4 pt-4"
            >
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="settings-email">Email notifications</Label>
                <Switch id="settings-email" defaultSelected />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor="settings-digest">Weekly digest</Label>
                <Switch id="settings-digest" />
              </div>
              <div>
                <Button>Save changes</Button>
              </div>
            </TabsContent>
            <TabsContent id="privacy" className="pt-4 text-muted-foreground">
              Privacy settings.
            </TabsContent>
          </Tabs>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add tabs switch button" />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>
            Group related settings into tabs. Keep one save action per panel.
          </li>
          <li>
            Switches apply on change. Use the save button only for changes that
            need a confirmation.
          </li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

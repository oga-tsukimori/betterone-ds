import type { Metadata } from "next"

import {
  DocCode,
  DocPreviewTabs,
  DocSection,
  DocTable,
  DocsPage,
} from "@/components/docs/docs-page"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "A starting layout with summary cards and a list of recent activity. Copy the layout, then make it yours.",
}

const code = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Dashboard() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card>
        <CardHeader>
          <CardDescription>Active users</CardDescription>
          <CardTitle>2,350</CardTitle>
        </CardHeader>
        <CardContent><Badge variant="secondary">+12%</Badge></CardContent>
      </Card>
      {/* more cards and a table */}
    </div>
  )
}`

const stats = [
  { label: "Active users", value: "2,350", change: "+12%" },
  { label: "Revenue", value: "$18,420", change: "+4%" },
  { label: "Open tickets", value: "34", change: "-6%" },
]

export default function DashboardTemplatePage() {
  return (
    <DocsPage
      group="Templates"
      title="Dashboard"
      description="A starting layout with summary cards and a list of recent activity. Copy the layout, then make it yours."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "recent", label: "Recent activity" },
      ]}
      {...pagerFor("/docs/templates/dashboard")}
    >
      <DocPreviewTabs
        id="preview"
        file="app/dashboard/page.tsx"
        code={code}
        preview={
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardHeader>
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{stat.change}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add card badge" />
      </DocSection>

      <DocSection id="recent" title="Recent activity">
        <DocTable
          label="Recent activity"
          headers={["Event", "Status", "Time"]}
          rows={[
            ["Invoice paid", "Success", "2 min ago"],
            ["Build failed", "Error", "18 min ago"],
            ["New member joined", "Info", "1 h ago"],
          ]}
        />
      </DocSection>
    </DocsPage>
  )
}

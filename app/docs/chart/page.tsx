import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { ChartDemo } from "@/components/docs/chart-demo"

const code = `<ChartContainer config={{ orders: { label: "Orders", color: "var(--chart-2)" } }}>
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="day" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="orders" fill="var(--color-orders)" radius={4} />
  </BarChart>
</ChartContainer>`

export default function ChartDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Chart"
      description="Charts built on Recharts. Series colors come from the --chart-1 to --chart-5 tokens."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/chart")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/chart.tsx"
        code={code}
        preview={
          <ChartDemo />
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add chart" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Chart props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["ChartContainer", "config", "ChartConfig", "required"],
            ["ChartTooltipContent", "indicator", "\"dot\" | \"line\" | \"dashed\"", "\"dot\""],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Do not rely on color alone. Add labels or a legend.</li>
          <li>Provide the underlying numbers in a table for screen reader users.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

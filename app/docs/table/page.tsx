import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const code = `<Table aria-label="Stock">
  <TableHeader>
    <TableHead isRowHeader>Product</TableHead>
    <TableHead>SKU</TableHead>
    <TableHead>Stock</TableHead>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Oat latte</TableCell><TableCell>BV-1042</TableCell><TableCell>48</TableCell></TableRow>
  </TableBody>
</Table>`

export default function TableDocsPage() {
  return (
    <DocsPage
      group="Display & Data"
      title="Table"
      description="A responsive table for rows of data such as stock, orders and prices."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/table")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/table.tsx"
        code={code}
        preview={
          <div className="w-full max-w-xl rounded-lg border">
            <Table aria-label="Stock">
              <TableHeader>
                <TableHead id="p" isRowHeader>Product</TableHead>
                <TableHead id="s">SKU</TableHead>
                <TableHead id="n">Stock</TableHead>
                <TableHead id="pr">Price</TableHead>
              </TableHeader>
              <TableBody>
                <TableRow id="1"><TableCell>Oat latte</TableCell><TableCell>BV-1042</TableCell><TableCell>48</TableCell><TableCell>$4.50</TableCell></TableRow>
                <TableRow id="2"><TableCell>Flat white</TableCell><TableCell>BV-1043</TableCell><TableCell>12</TableCell><TableCell>$4.00</TableCell></TableRow>
                <TableRow id="3"><TableCell>Cold brew</TableCell><TableCell>BV-1051</TableCell><TableCell>0</TableCell><TableCell>$5.00</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add table" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Table props"
          headers={["Component", "Prop", "Type", "Default"]}
          rows={[
            ["Table", "aria-label", "string", "required"],
            ["TableHead", "isRowHeader", "boolean", "false"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Always give the table an aria-label.</li>
          <li>Mark the first column as the row header with isRowHeader.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

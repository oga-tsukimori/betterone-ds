import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Component</CardTitle>
    <CardDescription>A short summary of what this card shows.</CardDescription>
  </CardHeader>
  <CardContent>Card body content goes here.</CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Action</Button>
  </CardFooter>
</Card>`

export default function CardDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Card"
      description="A container that groups related content and actions."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "parts", label: "Parts" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/card")}
    >
      <DocPreviewTabs
        id="preview"
        file="components/ui/card.tsx"
        code={code}
        preview={
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Component</CardTitle>
              <CardDescription>A short summary of what this card shows.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Card body content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </CardFooter>
          </Card>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add card" />
      </DocSection>

      <DocSection id="parts" title="Parts">
        <DocTable
          label="Card parts"
          headers={["Part", "Use for"]}
          rows={[
            ["CardHeader", "Title and description block"],
            ["CardTitle", "The card heading"],
            ["CardDescription", "Short supporting text"],
            ["CardContent", "Main body"],
            ["CardFooter", "Actions"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Use a heading level that fits the page outline.</li>
          <li>If the whole card is a link, put the link on one element and keep the text clear.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

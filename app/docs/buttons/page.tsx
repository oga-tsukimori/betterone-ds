import { ArrowRight, Check, Download, LoaderCircle, Mail, Plus, Trash2, X } from "lucide-react"

import { DocCode, DocPreview, DocSection, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const variants = [
  { variant: "default", label: "Default", note: "primary action" },
  { variant: "secondary", label: "Secondary", note: "supporting" },
  { variant: "outline", label: "Outline", note: "cancel, back" },
  { variant: "ghost", label: "Ghost", note: "toolbars" },
  { variant: "destructive", label: "Destructive", note: "irreversible" },
  { variant: "link", label: "Link", note: "inline text" },
] as const

const props = [
  { prop: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', def: '"default"' },
  { prop: "size", type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"', def: '"default"' },
  { prop: "isDisabled", type: "boolean", def: "false" },
]

const installCommand = "npx shadcn@latest add button"
const usageCode = `import { Button } from "@/components/ui/button"

export function SaveBar() {
  return (
    <div className="flex gap-3">
      <Button>Save changes</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  )
}`

export default function ButtonDocsPage() {
  return (
    <DocsPage
      group="Components"
      title="Button"
      description="Triggers an action or event, such as submitting a form, opening a dialog, or saving changes."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "variants", label: "Variants" },
        { id: "sizes", label: "Sizes" },
        { id: "with-icon", label: "With icon" },
        { id: "states", label: "States" },
        { id: "props", label: "Props" },
        { id: "usage", label: "Usage" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/buttons")}
    >
      {/* Preview / Code */}
      <section id="preview" className="scroll-mt-8 overflow-hidden rounded-xl border">
        <Tabs defaultSelectedKey="preview">
          <div className="flex items-center justify-between gap-3 border-b bg-muted/50 px-3 py-2">
            <TabsList aria-label="Preview or code">
              <TabsTrigger id="preview">Preview</TabsTrigger>
              <TabsTrigger id="code">Code</TabsTrigger>
            </TabsList>
            <span className="font-mono text-xs text-muted-foreground">components/ui/button.tsx</span>
          </div>
          <TabsContent id="preview" className="m-0">
            <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-3 bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[length:16px_16px] p-8">
              <Button>Save changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </TabsContent>
          <TabsContent id="code" className="m-0 p-3">
            <DocCode code={usageCode} title="button.tsx" />
          </TabsContent>
        </Tabs>
      </section>

      <DocSection id="installation" title="Installation">
        <DocCode code={installCommand} />
      </DocSection>

      <DocSection id="variants" title="Variants" description="Pick the variant that matches the importance of the action.">
        <div className="grid gap-4 sm:grid-cols-2">
          {variants.map((item) => (
            <Card key={item.variant} size="sm">
              <CardContent className="flex flex-col gap-3">
                <div>
                  <Button variant={item.variant}>{item.label}</Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.label}</span>
                  <span className="text-muted-foreground">{item.note}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <DocPreview>
          <div className="flex flex-col items-center gap-2">
            <Button size="sm">Small</Button>
            <span className="font-mono text-xs text-muted-foreground">sm · 32px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="default">Default</Button>
            <span className="font-mono text-xs text-muted-foreground">default · 36px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="lg">Large</Button>
            <span className="font-mono text-xs text-muted-foreground">lg · 40px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" aria-label="Add item">
              <Plus />
            </Button>
            <span className="font-mono text-xs text-muted-foreground">icon · 36px</span>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection
        id="with-icon"
        title="With icon"
        description="Put an icon before or after the label, or use an icon-only button. Icons size themselves from the icon tokens, so no size class is needed."
      >
        <DocPreview>
          <div className="flex flex-col items-center gap-2">
            <Button>
              <Mail /> Login with email
            </Button>
            <span className="font-mono text-xs text-muted-foreground">leading icon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline">
              Continue <ArrowRight />
            </Button>
            <span className="font-mono text-xs text-muted-foreground">trailing icon</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="secondary">
              <Download /> Export
            </Button>
            <span className="font-mono text-xs text-muted-foreground">secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="destructive">
              <Trash2 /> Delete
            </Button>
            <span className="font-mono text-xs text-muted-foreground">destructive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" variant="outline" aria-label="Add item">
              <Plus />
            </Button>
            <span className="font-mono text-xs text-muted-foreground">icon only</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button isDisabled>
              <LoaderCircle className="animate-spin" /> Please wait
            </Button>
            <span className="font-mono text-xs text-muted-foreground">loading</span>
          </div>
        </DocPreview>
        <div className="mt-4">
          <DocCode
            title="with-icon.tsx"
            code={`import { ArrowRight, Mail, Plus } from "lucide-react"

<Button><Mail /> Login with email</Button>
<Button variant="outline">Continue <ArrowRight /></Button>
<Button size="icon" aria-label="Add item"><Plus /></Button>`}
          />
        </div>
      </DocSection>

      <DocSection id="states" title="States" description="Hover and focus are shown as fixed styles here. In the app they respond to the pointer and keyboard.">
        <DocPreview>
          <div className="flex flex-col items-center gap-2">
            <Button>Default</Button>
            <span className="font-mono text-xs text-muted-foreground">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="bg-primary/80">Hover</Button>
            <span className="font-mono text-xs text-muted-foreground">hover</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button className="ring-3 ring-ring/30">Focus</Button>
            <span className="font-mono text-xs text-muted-foreground">focus-visible</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button isDisabled>Disabled</Button>
            <span className="font-mono text-xs text-muted-foreground">disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button isDisabled>
              <LoaderCircle className="animate-spin" aria-hidden="true" />
              Saving
            </Button>
            <span className="font-mono text-xs text-muted-foreground">loading</span>
          </div>
        </DocPreview>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="overflow-x-auto rounded-xl border">
          <Table aria-label="Button props">
            <TableHeader>
              <TableHead id="prop" isRowHeader>Prop</TableHead>
              <TableHead id="type">Type</TableHead>
              <TableHead id="default">Default</TableHead>
            </TableHeader>
            <TableBody>
              {props.map((row) => (
                <TableRow key={row.prop} id={row.prop}>
                  <TableCell className="font-mono">{row.prop}</TableCell>
                  <TableCell className="font-mono text-xs">{row.type}</TableCell>
                  <TableCell className="font-mono text-xs">{row.def}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DocSection>

      <DocSection id="usage" title="Usage">
        <div className="grid gap-4 sm:grid-cols-2">
          <Card size="sm">
            <CardHeader>
              <div className="flex gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <span className="flex items-center gap-2 font-medium">
                <Check className="size-4" aria-hidden="true" />
                Do
              </span>
              <span className="text-muted-foreground">
                Use one primary button per view. Pair it with an outline or ghost button for secondary actions.
              </span>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <div className="flex gap-3">
                <Button>Save</Button>
                <Button>Publish</Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <span className="flex items-center gap-2 font-medium">
                <X className="size-4" aria-hidden="true" />
                Don&apos;t
              </span>
              <span className="text-muted-foreground">
                Don&apos;t put two primary buttons side by side. People won&apos;t know which action matters most.
              </span>
            </CardContent>
          </Card>
        </div>
        <DocCode code={usageCode} title="usage.tsx" />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <Alert>
          <AlertTitle>Keep these in mind</AlertTitle>
          <AlertDescription>
            <ul className="list-disc space-y-1 pl-4">
              <li>Use a button for actions and a link for navigation.</li>
              <li>Icon-only buttons need an <code>aria-label</code>.</li>
              <li>Keep the focus ring visible. Never remove it without a replacement.</li>
              <li>Keep touch targets at least 44px on mobile.</li>
            </ul>
          </AlertDescription>
        </Alert>
      </DocSection>
    </DocsPage>
  )
}

import { DocCode, DocPreviewTabs, DocSection, DocsPage } from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { pagerFor } from "@/lib/docs-nav"

const code = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your email to continue.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}`

export default function AuthenticationTemplatePage() {
  return (
    <DocsPage
      group="Templates"
      title="Authentication"
      description="A sign-in card with one field and one primary action. Copy the layout, then add your own providers."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "usage", label: "Usage" },
      ]}
      {...pagerFor("/docs/templates/authentication")}
    >
      <DocPreviewTabs
        id="preview"
        file="app/login/page.tsx"
        code={code}
        preview={
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Enter your email to continue.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="auth-email">Email</Label>
                <Input id="auth-email" type="email" placeholder="you@example.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue</Button>
            </CardFooter>
          </Card>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx betterone-ds add card input label button" />
      </DocSection>

      <DocSection id="usage" title="Usage">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Keep one primary action per screen. Use the full-width button for sign in.</li>
          <li>Always show a visible label for the email field, not only a placeholder.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

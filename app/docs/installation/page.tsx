import { DocCode, DocSection, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export default function InstallationDocsPage() {
  return (
    <DocsPage
      group="Getting started"
      title="Installation"
      description="Add a component to your project with the shadcn CLI. The component source is copied into your repo, so you can change it."
      toc={[
        { id: "add", label: "Add a component" },
        { id: "tokens", label: "Tokens" },
        { id: "next", label: "Next steps" },
      ]}
      {...pagerFor("/docs/installation")}
    >
      <DocSection id="add" title="Add a component">
        <DocCode code="npx shadcn@latest add button" />
        <p className="text-muted-foreground">
          Replace <code>button</code> with any component name from the sidebar.
        </p>
      </DocSection>

      <DocSection id="tokens" title="Tokens">
        <p className="text-muted-foreground">
          Colors, radius, and type come from the token set in <code>app/globals.css</code>. Do not copy values
          into components. Use token classes such as <code>bg-primary</code>.
        </p>
      </DocSection>

      <DocSection id="next" title="Next steps">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Read the Color and Spacing pages to learn the tokens.</li>
          <li>Open a component page to see its preview, code, and props.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

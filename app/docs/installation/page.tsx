import type { Metadata } from "next"

import { DocCode, DocSection, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Install BetterOne components and tokens into your project with the betterone-ds CLI. The source is copied into your repo, so you can change it.",
}

export default function InstallationDocsPage() {
  return (
    <DocsPage
      group="Getting started"
      title="Installation"
      description="Install BetterOne components and tokens into your project with the betterone-ds CLI. The source is copied into your repo, so you can change it."
      toc={[
        { id: "registry", label: "Connect the registry" },
        { id: "tokens", label: "Add the tokens" },
        { id: "add", label: "Add a component" },
        { id: "next", label: "Next steps" },
      ]}
      {...pagerFor("/docs/installation")}
    >
      <DocSection id="registry" title="Connect the registry">
        <p className="text-muted-foreground">
          Run this once in your project. It needs a <code>components.json</code>
          , so run <code>npx shadcn@latest init</code> first if you do not have
          one.
        </p>
        <DocCode code="npx betterone-ds init" />
      </DocSection>

      <DocSection id="tokens" title="Add the tokens">
        <p className="text-muted-foreground">
          Colors and radius come from the Figma variables. Install them first,
          so every component picks up the right values in Light and Dark. Do not
          copy values into components. Use token classes such as{" "}
          <code>bg-primary</code>.
        </p>
        <DocCode code="npx betterone-ds add tokens" />
      </DocSection>

      <DocSection id="add" title="Add a component">
        <DocCode code="npx betterone-ds add button" />
        <p className="text-muted-foreground">
          Replace <code>button</code> with any component name from the sidebar.
          Its dependencies are added with it.
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

import { notFound } from "next/navigation"

import { DocCode, DocPreviewTabs, DocSection, DocsPage } from "@/components/docs/docs-page"
import { builtDocsHrefs, docsPages, pagerFor } from "@/lib/docs-nav"

// Generic page for sidebar items that the design system doesn't have yet.
// Same layout as the built pages; the preview says it isn't built yet.

const placeholderItems = docsPages.filter((item) => !builtDocsHrefs.has(item.href))

export function generateStaticParams() {
  return placeholderItems.map((item) => ({ slug: item.href.replace("/docs/", "") }))
}

export default async function PlaceholderDocsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = placeholderItems.find((page) => page.href === `/docs/${slug}`)
  if (!item) notFound()

  return (
    <DocsPage
      group={item.group}
      title={item.title}
      description={`Displays ${item.title.toLowerCase()} for the product. This component is listed in the sidebar and will be added to the design system.`}
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor(item.href)}
    >
      <DocPreviewTabs
        id="preview"
        file={`components/ui/${slug}.tsx`}
        code={`// ${item.title} is not in the design system yet.`}
        preview={
          <p className="text-sm text-muted-foreground">
            {item.title} is not built in the design system yet.
          </p>
        }
      />

      <DocSection id="installation" title="Installation">
        <DocCode code={`npx betterone-ds add ${slug}`} />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <p className="text-muted-foreground">Accessibility notes are added when the component is built.</p>
      </DocSection>
    </DocsPage>
  )
}

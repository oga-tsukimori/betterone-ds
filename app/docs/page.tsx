import { DocSection, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

export default function IntroductionPage() {
  return (
    <DocsPage
      title="Introduction"
      description="BetterOne is a minimal component library with clear docs for designers and developers. Learn the foundations, copy the code, build faster."
      toc={[
        { id: "start", label: "Start here" },
        { id: "how", label: "How the docs work" },
      ]}
      {...pagerFor("/docs")}
    >
      <DocSection id="start" title="Start here">
        <p className="text-muted-foreground">
          Begin with Installation to add your first component. Then read the Foundations pages for color,
          typography, and spacing before you build.
        </p>
      </DocSection>

      <DocSection id="how" title="How the docs work">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Each page shows a live preview, the code, and the props.</li>
          <li>Components are based on shadcn/ui and read their colors and radius from the tokens.</li>
          <li>Use the search (⌘K) to jump to any page.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

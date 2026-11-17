import { CarouselDemo } from "@/components/docs/demos"
import { DocCode, DocPreviewTabs, DocSection, DocTable, DocsPage } from "@/components/docs/docs-page"
import { pagerFor } from "@/lib/docs-nav"

const code = `<Carousel>
  <CarouselContent>
    <CarouselItem>1</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`

export default function CarouselDocsPage() {
  return (
    <DocsPage
      group="Layout & Utility"
      title="Carousel"
      description="Slides you can swipe or step through."
      toc={[
        { id: "preview", label: "Preview" },
        { id: "installation", label: "Installation" },
        { id: "props", label: "Props" },
        { id: "accessibility", label: "Accessibility" },
      ]}
      {...pagerFor("/docs/carousel")}
    >
      <DocPreviewTabs id="preview" file="components/ui/carousel.tsx" code={code} preview={<CarouselDemo />} />

      <DocSection id="installation" title="Installation">
        <DocCode code="npx shadcn@latest add carousel" />
      </DocSection>

      <DocSection id="props" title="Props">
        <DocTable
          label="Carousel props"
          headers={["Prop", "Type", "Default"]}
          rows={[
            ["orientation", "\"horizontal\" | \"vertical\"", "\"horizontal\""],
            ["opts", "EmblaOptions", "\u2014"],
          ]}
        />
      </DocSection>

      <DocSection id="accessibility" title="Accessibility">
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>Previous and Next are buttons. Do not auto-play without a pause control.</li>
        </ul>
      </DocSection>
    </DocsPage>
  )
}

import type { Metadata } from "next"

import { DocsHeader } from "@/components/docs/docs-header"
import { Playground } from "@/components/playground/playground"

export const metadata: Metadata = {
  title: "Playground — BetterOne",
  description: "Try accent colours, base tones, radius and fonts on live BetterOne components.",
}

export default function PlaygroundPage() {
  return (
    <>
      <DocsHeader />
      <main className="flex flex-1 flex-col">
        <Playground />
      </main>
    </>
  )
}

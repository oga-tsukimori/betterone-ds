import { DocsHeader } from "@/components/docs/docs-header"
import { DocsSidebar } from "@/components/docs/docs-sidebar"

// Docs shell: header on top, grouped sidebar beside the page.
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-1 flex-col">
      <DocsHeader />
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-wrap items-start">
        <DocsSidebar />
        {children}
      </div>
    </div>
  )
}

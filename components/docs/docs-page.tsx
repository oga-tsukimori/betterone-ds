import Link from "next/link"

import { cn } from "@/lib/utils"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block"

export type TocItem = { id: string; label: string }
export type Pager = { title: string; href: string }

// One docs page: breadcrumb, title, description, body, "On this page", prev/next.
// The sidebar and header come from the docs layout.
export function DocsPage({
  group,
  title,
  description,
  toc,
  prev,
  next,
  children,
}: {
  group?: string
  title: string
  description?: string
  toc: TocItem[]
  prev?: Pager
  next?: Pager
  children: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-1 basis-[360px] flex-wrap items-start">
      <main className="flex min-w-0 flex-1 flex-col gap-12 px-6 py-10 lg:px-12">
        <div className="flex flex-col gap-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground">
              Docs
            </Link>
            {group ? (
              <>
                <span aria-hidden="true">/</span>
                <span>{group}</span>
              </>
            ) : null}
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{title}</span>
          </nav>
          <h1 className="font-heading text-[36px] leading-tight font-semibold tracking-tight">{title}</h1>
          {description ? <p className="text-muted-foreground">{description}</p> : null}
        </div>

        {children}

        {prev || next ? (
          <nav aria-label="Pagination" className="grid gap-3 border-t pt-6 sm:grid-cols-2">
            {prev ? <PagerLink href={prev.href} label="Previous" title={`← ${prev.title}`} /> : <span />}
            {next ? <PagerLink href={next.href} label="Next" title={`${next.title} →`} align="end" /> : null}
          </nav>
        ) : null}
      </main>

      {toc.length > 0 ? (
        <aside
          aria-label="On this page"
          className="hidden w-[220px] shrink-0 flex-col gap-2 py-10 pr-8 xl:flex"
        >
          <span className="text-xs font-medium text-muted-foreground">On this page</span>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
        </aside>
      ) : null}
    </div>
  )
}

function PagerLink({
  href,
  label,
  title,
  align,
}: {
  href: string
  label: string
  title: string
  align?: "end"
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col gap-1 rounded-lg border p-4 hover:bg-muted",
        align === "end" && "items-end text-right"
      )}
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-medium">{title}</span>
    </Link>
  )
}

// A titled section. Each section has an id so "On this page" can link to it.
export function DocSection({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex scroll-mt-8 flex-col gap-4">
      <h2 className="font-heading border-b pb-2 text-[22px] font-semibold tracking-tight">{title}</h2>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
      {children}
    </section>
  )
}

// Preview box with the dotted background from the handoff. Uses a token, not a hex value.
export function DocPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-3 bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[length:16px_16px] p-8">
        {children}
      </div>
    </div>
  )
}

// Code block from the existing CodeBlock component, with a copy button.
export function DocCode({ code, title }: { code: string; title?: string }) {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        {title ? <CodeBlockTitle>{title}</CodeBlockTitle> : null}
        <CodeBlockActions>
          <CodeBlockCopyButton value={code} aria-label="Copy code" />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>
        {code.split("\n").map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

// Preview / Code card, the same as on the Button page.
export function DocPreviewTabs({
  id,
  file,
  preview,
  code,
  codeTitle,
}: {
  id: string
  file: string
  preview: React.ReactNode
  code: string
  codeTitle?: string
}) {
  return (
    <section id={id} className="scroll-mt-8 overflow-hidden rounded-xl border">
      <Tabs defaultSelectedKey="preview">
        <div className="flex items-center justify-between gap-3 border-b bg-muted/50 px-3 py-2">
          <TabsList aria-label="Preview or code">
            <TabsTrigger id="preview">Preview</TabsTrigger>
            <TabsTrigger id="code">Code</TabsTrigger>
          </TabsList>
          <span className="font-mono text-xs text-muted-foreground">{file}</span>
        </div>
        <TabsContent id="preview" className="m-0">
          <div className="flex min-h-[220px] flex-wrap items-center justify-center gap-3 bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[length:16px_16px] p-8">
            {preview}
          </div>
        </TabsContent>
        <TabsContent id="code" className="m-0 p-3">
          <DocCode code={code} title={codeTitle} />
        </TabsContent>
      </Tabs>
    </section>
  )
}

// Generic table for props and token values. Column and row ids are generated.
export function DocTable({
  label,
  headers,
  rows,
}: {
  label: string
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <Table aria-label={label}>
        <TableHeader>
          {headers.map((header, i) => (
            <TableHead key={header} id={`c${i}`} isRowHeader={i === 0}>
              {header}
            </TableHead>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row, r) => (
            <TableRow key={r} id={`r${r}`}>
              {row.map((cell, c) => (
                <TableCell key={c} className="font-mono text-xs">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

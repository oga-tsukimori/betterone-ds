"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { docsNav } from "@/lib/docs-nav"

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-full flex-col gap-6 border-b text-sm px-4 py-6 pl-8 md:sticky md:top-[65px] md:h-[calc(100svh-65px)] md:w-[260px] md:shrink-0 md:self-start md:overflow-y-auto md:border-r md:border-b-0 md:pb-12">
      {docsNav.map((group) => (
        <div key={group.title} className="flex flex-col gap-0.5">
          <span className="mb-1 text-xs font-medium text-muted-foreground">{group.title}</span>
          {group.items.map((item) => {
            if (!item.href) {
              return (
                <span key={item.title} className="px-2 py-1 text-muted-foreground/50">
                  {item.title}
                </span>
              )
            }

            // Highlight the page the user is on.
            const active = pathname === item.href
            return (
              <Link
                key={item.title}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-2 py-1",
                  active
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      ))}
    </aside>
  )
}

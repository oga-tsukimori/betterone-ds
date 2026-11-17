import * as React from "react"
import { cn } from "cn"

// Site navigation: a list of links. Uses semantic tokens only.
function NavigationMenu({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="navigation-menu" className={cn("relative flex max-w-max items-center", className)} {...props} />
}

function NavigationMenuList({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="navigation-menu-list" className={cn("flex items-center gap-1", className)} {...props} />
}

function NavigationMenuItem(props: React.ComponentProps<"li">) {
  return <li data-slot="navigation-menu-item" {...props} />
}

function NavigationMenuLink({
  className,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) {
  return (
    <a
      data-slot="navigation-menu-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex h-(--size-control-md) items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-muted text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList }

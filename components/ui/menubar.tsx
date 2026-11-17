"use client"

import * as React from "react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// A row of menus, built from the dropdown menu. Uses semantic tokens only.
function Menubar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="menubar"
      data-slot="menubar"
      className={cn(
        "flex h-(--size-control-md) items-center gap-1 rounded-md border bg-background p-1",
        className
      )}
      {...props}
    />
  )
}

const MenubarMenu = DropdownMenuTrigger

function MenubarTrigger({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="ghost"
      size="sm"
      data-slot="menubar-trigger"
      className={cn("h-7 px-2 font-medium", className)}
      {...props}
    />
  )
}

const MenubarContent = DropdownMenu
const MenubarItem = DropdownMenuItem
const MenubarSeparator = DropdownMenuSeparator
const MenubarShortcut = DropdownMenuShortcut

export {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
}

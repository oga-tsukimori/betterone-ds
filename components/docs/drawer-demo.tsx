"use client"

import { buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants({ variant: "outline" })}>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit stock</DrawerTitle>
          <DrawerDescription>Update the count for this product.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className={buttonVariants({ variant: "outline" })}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

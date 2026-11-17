"use client"

import { toast } from "sonner"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Dialog, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Progress, ProgressIndicator, ProgressTrack } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetClose, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"

export function TextareaDemo() {
  return <Textarea aria-label="Message" placeholder="Type your message here." className="max-w-sm" />
}

export function LabelDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="demo-email">Email</Label>
      <Input id="demo-email" type="email" placeholder="you@store.com" />
    </div>
  )
}

const radioLabel = "absolute top-1/2 left-6 -translate-y-1/2 text-sm whitespace-nowrap"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="card" aria-label="Payment method" className="gap-4">
      <RadioGroupItem value="card"><span className={radioLabel}>Card</span></RadioGroupItem>
      <RadioGroupItem value="cash"><span className={radioLabel}>Cash</span></RadioGroupItem>
      <RadioGroupItem value="transfer"><span className={radioLabel}>Bank transfer</span></RadioGroupItem>
    </RadioGroup>
  )
}

export function SliderDemo() {
  return (
    <div className="w-full max-w-sm">
      <Slider defaultValue={50} aria-label="Volume" />
    </div>
  )
}

export function ToggleDemo() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Bold" variant="outline">Bold</Toggle>
      <Toggle aria-label="Italic">Italic</Toggle>
    </div>
  )
}

export function ToggleGroupDemo() {
  return (
    <ToggleGroup aria-label="Text alignment" selectionMode="single" defaultSelectedKeys={["left"]} variant="outline">
      <ToggleGroupItem id="left">Left</ToggleGroupItem>
      <ToggleGroupItem id="center">Center</ToggleGroupItem>
      <ToggleGroupItem id="right">Right</ToggleGroupItem>
    </ToggleGroup>
  )
}

export function InputOtpDemo() {
  return (
    <InputOTP maxLength={6} aria-label="One-time code">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export function CalendarDemo() {
  return <Calendar aria-label="Pick a date" className="rounded-lg border" />
}

export function DatePickerDemo() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Pick a date</Button>
      <Popover className="w-auto p-0">
        <Calendar aria-label="Pick a date" />
      </Popover>
    </PopoverTrigger>
  )
}

export function FormDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="form-name">Store name</FieldLabel>
        <Input id="form-name" placeholder="BetterOne Coffee" />
        <FieldDescription>Shown on receipts and the storefront.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="form-email">Contact email</FieldLabel>
        <Input id="form-email" type="email" placeholder="hello@store.com" />
      </Field>
      <Button className="self-start">Save changes</Button>
    </FieldGroup>
  )
}

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar size="sm"><AvatarFallback>AB</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>EF</AvatarFallback></Avatar>
      <AvatarGroup>
        <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>EF</AvatarFallback></Avatar>
      </AvatarGroup>
    </div>
  )
}

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

export function ProgressDemo() {
  return (
    <div className="w-full max-w-sm">
      <Progress value={60} aria-label="Upload progress">
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
    </div>
  )
}

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <div className="font-medium">BetterOne</div>
      <Separator />
      <div className="flex h-5 items-center gap-3">
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Playground</span>
      </div>
    </div>
  )
}

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        16 : 9
      </AspectRatio>
    </div>
  )
}

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbItem><BreadcrumbLink href="/docs/buttons">Components</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu aria-label="Main">
      <NavigationMenuList>
        <NavigationMenuItem><NavigationMenuLink href="#" isActive>Foundations</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">Components</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">Patterns</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#">Playground</NavigationMenuLink></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent aria-label="File">
          <MenubarItem id="new">New order</MenubarItem>
          <MenubarItem id="print">Print receipt</MenubarItem>
          <MenubarSeparator />
          <MenubarItem id="close">Close shift</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent aria-label="View">
          <MenubarItem id="grid">Grid</MenubarItem>
          <MenubarItem id="list">List</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export function SidebarDemo() {
  return (
    <SidebarProvider className="min-h-0 w-full max-w-xs">
      <Sidebar collapsible="none" className="h-72 rounded-lg border">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Inventory</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem><SidebarMenuButton isActive>Products</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton>Stock counts</SidebarMenuButton></SidebarMenuItem>
              <SidebarMenuItem><SidebarMenuButton>Suppliers</SidebarMenuButton></SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

export function CommandDemo() {
  return (
    <Command className="max-w-sm rounded-lg border">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList aria-label="Commands">
        <CommandItem id="new">New order</CommandItem>
        <CommandItem id="stock">Check stock</CommandItem>
        <CommandItem id="report">Daily report</CommandItem>
      </CommandList>
    </Command>
  )
}

export function DialogDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Close shift</Button>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Close shift</DialogTitle>
          <DialogDescription>Count the cash in the drawer, then confirm.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose variant="default">Confirm</DialogClose>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
  )
}

export function SheetDemo() {
  return (
    <SheetTrigger>
      <Button variant="outline">Open sheet</Button>
      <Sheet>
        <SheetHeader>
          <SheetTitle>Order #1042</SheetTitle>
          <SheetDescription>3 items · Paid by card</SheetDescription>
        </SheetHeader>
        <div className="p-4">
          <SheetClose>Close</SheetClose>
        </div>
      </Sheet>
    </SheetTrigger>
  )
}

export function PopoverDemo() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Open popover</Button>
      <Popover>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the size of the label.</PopoverDescription>
        </PopoverHeader>
      </Popover>
    </PopoverTrigger>
  )
}

export function HoverCardDemo() {
  return (
    <HoverCardTrigger>
      <Button variant="link">@betterone</Button>
      <HoverCard className="w-64 p-4 text-sm">
        BetterOne is the design system behind POS, Inventory and Store.
      </HoverCard>
    </HoverCardTrigger>
  )
}

export function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
      <Tooltip>Add to cart</Tooltip>
    </TooltipTrigger>
  )
}

export function DropdownMenuDemo() {
  return (
    <DropdownMenuTrigger>
      <Button variant="outline">Open menu</Button>
      <DropdownMenu aria-label="Account">
        <DropdownMenuItem id="profile">Profile</DropdownMenuItem>
        <DropdownMenuItem id="billing">Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem id="logout" variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}

export function SonnerDemo() {
  return (
    <>
      <Toaster />
      <Button variant="outline" onPress={() => toast("Order saved", { description: "Order #1042 was saved." })}>
        Show toast
      </Button>
    </>
  )
}

export function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-sm">
      <AccordionItem id="a"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It follows the WAI-ARIA pattern.</AccordionContent></AccordionItem>
      <AccordionItem id="b"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes. It uses the semantic tokens.</AccordionContent></AccordionItem>
    </Accordion>
  )
}

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-56 rounded-md border p-3 text-sm">
      {Array.from({ length: 14 }, (_, i) => (
        <div key={i} className="py-1">Product {i + 1}</div>
      ))}
    </ScrollArea>
  )
}

export function CarouselDemo() {
  return (
    <div className="w-full max-w-xs px-10">
      <Carousel>
        <CarouselContent>
          {[1, 2, 3].map((n) => (
            <CarouselItem key={n}>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted text-3xl font-semibold">{n}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

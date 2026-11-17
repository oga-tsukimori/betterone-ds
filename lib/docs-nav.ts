// Sidebar structure, copied from the reference docs site. Every item links to /docs/<slug>.
// Items we have built have their own page. The rest use the generic placeholder page
// in app/docs/[slug]/page.tsx until the component exists in the design system.

export type DocsNavItem = {
  title: string
  href: string
  isNew?: boolean
}

export type DocsNavGroup = {
  title: string
  items: DocsNavItem[]
}

export const docsNav: DocsNavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Typography", href: "/docs/typography" },
    ],
  },
  {
    title: "Forms & Inputs",
    items: [
      { title: "Button", href: "/docs/buttons" },
      { title: "Input", href: "/docs/input" },
      { title: "Textarea", href: "/docs/textarea" },
      { title: "Label", href: "/docs/label" },
      { title: "Checkbox", href: "/docs/checkbox" },
      { title: "Radio Group", href: "/docs/radio-group" },
      { title: "Select", href: "/docs/select" },
      { title: "Switch", href: "/docs/switch" },
      { title: "Slider", href: "/docs/slider" },
      { title: "Toggle", href: "/docs/toggle" },
      { title: "Toggle Group", href: "/docs/toggle-group" },
      { title: "Input OTP", href: "/docs/input-otp" },
      { title: "Calendar", href: "/docs/calendar" },
      { title: "Date Picker", href: "/docs/date-picker" },
      { title: "Form", href: "/docs/form" },
    ],
  },
  {
    title: "Display & Data",
    items: [
      { title: "Avatar", href: "/docs/avatar" },
      { title: "Badge", href: "/docs/badge" },
      { title: "Card", href: "/docs/card" },
      { title: "Table", href: "/docs/table" },
      { title: "Chart", href: "/docs/chart", isNew: true },
      { title: "Skeleton", href: "/docs/skeleton" },
      { title: "Progress", href: "/docs/progress" },
      { title: "Separator", href: "/docs/separator" },
      { title: "Aspect Ratio", href: "/docs/aspect-ratio" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Breadcrumb", href: "/docs/breadcrumb" },
      { title: "Navigation Menu", href: "/docs/navigation-menu" },
      { title: "Menubar", href: "/docs/menubar" },
      { title: "Pagination", href: "/docs/pagination" },
      { title: "Tabs", href: "/docs/tabs" },
      { title: "Sidebar", href: "/docs/sidebar", isNew: true },
      { title: "Command", href: "/docs/command" },
    ],
  },
  {
    title: "Overlay & Feedback",
    items: [
      { title: "Dialog", href: "/docs/dialog" },
      { title: "Alert Dialog", href: "/docs/alert-dialog" },
      { title: "Sheet", href: "/docs/sheet" },
      { title: "Drawer", href: "/docs/drawer" },
      { title: "Popover", href: "/docs/popover" },
      { title: "Hover Card", href: "/docs/hover-card" },
      { title: "Tooltip", href: "/docs/tooltip" },
      { title: "Dropdown Menu", href: "/docs/dropdown-menu" },
      { title: "Context Menu", href: "/docs/context-menu" },
      { title: "Alert", href: "/docs/alert" },
      { title: "Sonner", href: "/docs/sonner" },
    ],
  },
  {
    title: "Layout & Utility",
    items: [
      { title: "Accordion", href: "/docs/accordion" },
      { title: "Collapsible", href: "/docs/collapsible" },
      { title: "Scroll Area", href: "/docs/scroll-area" },
      { title: "Resizable", href: "/docs/resizable" },
      { title: "Carousel", href: "/docs/carousel" },
    ],
  },
]

type BuiltItem = { group: string; title: string; href: string }

// Flat list of every sidebar page in order. Drives search and previous/next.
export const docsPages: BuiltItem[] = docsNav.flatMap((group) =>
  group.items.map((item) => ({ group: group.title, title: item.title, href: item.href }))
)

// Items that have a dedicated page (not the generic placeholder).
export const builtDocsHrefs = new Set([
  "/docs",
  "/docs/installation",
  "/docs/typography",
  "/docs/theming",
  "/docs/buttons",
  "/docs/input",
  "/docs/checkbox",
  "/docs/select",
  "/docs/switch",
  "/docs/badge",
  "/docs/card",
  "/docs/tabs",
  "/docs/alert",
  "/docs/table",
  "/docs/chart",
  "/docs/alert-dialog",
  "/docs/drawer",
  "/docs/context-menu",
  "/docs/collapsible",
  "/docs/resizable",
  "/docs/textarea",
  "/docs/label",
  "/docs/radio-group",
  "/docs/slider",
  "/docs/toggle",
  "/docs/toggle-group",
  "/docs/input-otp",
  "/docs/calendar",
  "/docs/date-picker",
  "/docs/form",
  "/docs/avatar",
  "/docs/skeleton",
  "/docs/progress",
  "/docs/separator",
  "/docs/aspect-ratio",
  "/docs/breadcrumb",
  "/docs/navigation-menu",
  "/docs/menubar",
  "/docs/pagination",
  "/docs/sidebar",
  "/docs/command",
  "/docs/dialog",
  "/docs/sheet",
  "/docs/popover",
  "/docs/hover-card",
  "/docs/tooltip",
  "/docs/dropdown-menu",
  "/docs/sonner",
  "/docs/accordion",
  "/docs/scroll-area",
  "/docs/carousel",
])

export function pagerFor(href: string) {
  const index = docsPages.findIndex((page) => page.href === href)
  const prev = index > 0 ? docsPages[index - 1] : undefined
  const next = index >= 0 && index < docsPages.length - 1 ? docsPages[index + 1] : undefined
  return {
    prev: prev ? { title: prev.title, href: prev.href } : undefined,
    next: next ? { title: next.title, href: next.href } : undefined,
  }
}

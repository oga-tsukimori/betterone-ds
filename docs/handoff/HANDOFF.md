# Handoff: Home and Button docs

Pages covered: **Home** and **Button docs** (`button.tsx`).

## The one rule

The design uses plain HTML and inline styles **only to show the look**.
In code, do **not** copy the inline styles. Use the real UXHUB DS components (shadcn/ui based) and the DS tokens.
Import from the DS, for example `@/components/ui/button`, or `[YOUR-PACKAGE-NAME]` once UXHUB is published.

## Files

| File | What it is |
|---|---|
| `home.html` | Static reference of the Home page |
| `button.html` | Static reference of the Button docs page (Preview and Code both visible) |
| `HANDOFF.md` | This file |

The design source stays on the canvas (`Main.dc.html`, `Button.dc.html`).

---

## 1. Component mapping (design → DS)

| In the design | Use in code | Props / notes |
|---|---|---|
| Primary button | `Button` | `variant="default"` |
| Secondary button | `Button` | `variant="secondary"` |
| Outline button (Cancel, Browse components) | `Button` | `variant="outline"` |
| Ghost button | `Button` | `variant="ghost"` |
| Delete button | `Button` | `variant="destructive"` |
| Link button | `Button` | `variant="link"` |
| Small / Large | `Button` | `size="sm"` (32px) / `size="lg"` (40px) |
| Default size | `Button` | `size="default"` (36px) |
| Icon buttons (GitHub, Copy, Add) | `Button` | `size="icon"` + `aria-label` required |
| Loading button | `Button` | `disabled` + spinner icon (`Loader2` with `animate-spin`) |
| Search field in header | `Button variant="outline"` that opens `CommandDialog` | ⌘K shortcut; `Command` component |
| Input + label | `Input` + `Label` | |
| Badge (Default, Secondary, Outline) | `Badge` | `variant="default" \| "secondary" \| "outline"` |
| Badge Success / Error | `Badge` | Add `success` and `destructive` variants that use the `--success*` and `--destructive*` tokens |
| Switch | `Switch` | |
| Tabs (Account, Password, Team) | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | |
| Preview / Code toggle on docs pages | `Tabs` | Two triggers: Preview, Code |
| Alert (Heads up) | `Alert`, `AlertTitle`, `AlertDescription` | Info style |
| Feature cards on Home | `Card` | Whole card is a link |
| Props table | `Table` | Wrap in an `overflow-x-auto` box |
| Docs sidebar | `Sidebar` or a custom nav | Active item has muted background and medium weight |
| "On this page" | Custom TOC | Anchors to section ids |
| Code block with copy button | Custom `CodeBlock` | Mono font, copy icon button |
| Do / Don't cards | Custom `DoDont` | Green check for Do, red cross for Don't |

## 2. Tokens (shadcn token names)

Use the native shadcn token names, flat. Values come from the `betterone_ds_tokens` set and are already in `app/globals.css`. Do not hardcode hex values in components.

Light values shown below. Dark values come from `.dark` in `app/globals.css`, which is generated from the same token set (`Semantic/Color/Dark.json`).

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` | `#ffffff` | `#161b1d` | Page |
| `--foreground` | `#090b0c` | `#f1f3f3` | Main text |
| `--card` | `#ffffff` | `#22292b` | Cards |
| `--card-foreground` | `#090b0c` | `#f1f3f3` | Card text |
| `--popover` | `#ffffff` | `#22292b` | Popovers, menus |
| `--primary` | `#008236` | `#00c950` | Primary buttons, default badge, switch on |
| `--primary-foreground` | `#ffffff` | `#032e15` | Text on primary |
| `--primary-hover` | `#016630` | `#05df72` | Primary hover (token, not a shadcn default) |
| `--secondary` | `#f1f3f3` | `#394447` | Secondary button, tab list background |
| `--secondary-foreground` | `#161b1d` | `#f1f3f3` | |
| `--muted` | `#f1f3f3` | `#394447` | Subtle fills, sidebar active item |
| `--muted-foreground` | `#4b585b` | `#d0d6d8` | Secondary text |
| `--accent` | `#f1f3f3` | `#394447` | Outline / ghost hover |
| `--accent-foreground` | `#161b1d` | `#f1f3f3` | |
| `--border` | `#e3e7e8` | `#394447` | 1px borders |
| `--input` | `#67787c` | `#67787c` | Input and outline button border |
| `--ring` | `#008236` | `#05df72` | Focus ring |
| `--destructive` | `#c10007` | `#ff6467` | Delete button, error text |
| `--destructive-foreground` | `#ffffff` | `#460809` | Text on destructive |
| `--destructive-muted` | `#fef2f2` | `#460809` | Error background |
| `--success` / `--success-foreground` / `--success-muted` | `#008236` / `#ffffff` / `#dcfce7` | `#00c950` / `#032e15` / `#032e15` | Success badge and alerts |
| `--warning` / `--warning-foreground` / `--warning-muted` | `#fe9a00` / `#461901` / `#fef3c6` | `#ffb900` / `#461901` / `#461901` | Warning badge and alerts |
| `--warning-muted-foreground` | `#7b3306` | `#fee685` | Text on warning-muted |
| `--info` / `--info-foreground` / `--info-muted` | `#1447e6` / `#ffffff` / `#dbeafe` | `#51a2ff` / `#162456` / `#162456` | Info alerts (e.g. "Heads up") |
| `--overlay` | `#090b0c` | `#090b0c` | Dialog and sheet backdrops |
| `--sidebar` | `#f9fbfb` | `#22292b` | Docs sidebar background |
| `--radius` | `0.5rem` (8px) | — | See radius below |

Chart colors `--chart-1` to `--chart-5` and the sidebar variants (`--sidebar-primary`, `--sidebar-accent`, `--sidebar-border`, `--sidebar-ring`) are also defined in both modes in `app/globals.css`.

Tailwind utilities are available for all of the above (for example `bg-primary-hover`, `text-success`, `bg-info-muted`).

Gray scale: the token set uses the **mist** scale: 50 `#f9fbfb`, 100 `#f1f3f3`, 200 `#e3e7e8`, 300 `#d0d6d8`, 400 `#9ca8ab`, 500 `#67787c`, 600 `#4b585b`, 700 `#394447`, 800 `#22292b`, 900 `#161b1d`, 950 `#090b0c`.

## 3. Type, radius, spacing

- **Fonts:** `--font-sans` is Inter (400, 500, 600) for UI. `--font-heading` is Geist (the token set's heading family). JetBrains Mono is not in the token set, so it is not used as a token.
- **Type scale (tokens):** `--text-xs` 12, `--text-sm` 14, `--text-base` 16, `--text-lg` 18, `--text-xl` 20, `--text-2xl` 24, `--text-3xl` 30, `--text-4xl` 36, `--text-5xl` 48, `--text-6xl` 60. Each has a matching `--text-*--line-height` (16, 20, 24, 28, 28, 32, 36, 40, 48, 60). Weights: `--font-weight-regular` 400, `--font-weight-medium` 500, `--font-weight-semibold` 600, `--font-weight-bold` 700.
- **Body:** `--text-base` (16px / 24px). Labels and small UI text use `--text-sm` (14px / 20px).
- **Home H1:** 56px, weight 600, letter spacing -0.035em, line height 1.05.
- **Section H2 (Home):** 28px, weight 600, letter spacing -0.025em.
- **Docs H1:** 36px. **Docs H2:** 22px with a 1px bottom border.
- **Radius:** base `--radius` is 8px. Scale from the token set: sm 6px, md 8px (base), lg 10px, xl 14px, 2xl 18px, 3xl 22px, 4xl 26px, full for badges. Buttons use md, inputs use sm, cards use lg to xl.
- **Spacing:** 4px base. Tokens `--spacing-0` to `--spacing-24` (0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 44, 48, 56, 64, 80, 96 px, with `--spacing-0-5`, `--spacing-1-5` and the others in `globals.css`). Common gaps: 8, 12, 16, 24, 32, 48.
- **Control sizes:** `--size-control-sm` / `-md` / `-lg` are 32 / 36 / 40px on desktop and 40 / 44 / 48px on tablet and mobile. `--size-touch-target` is 44px.
- **Icons:** `--icon-size-xs` 12, `-sm` 16, `-md` 20, `-lg` 24px. Stroke: `--icon-stroke-regular` 1.5px, `--icon-stroke-bold` 2px.
- **Strokes:** `--stroke-default` 1px, `--stroke-medium` 1.5px, `--stroke-thick` 2px.

## 4. Layout

**Home**
- Header: logo + "Student" badge, nav (Docs, Components, Templates, Changelog), search button (240px), GitHub icon button.
- Content max width 1120px, centered.
- Order: Hero, Component preview grid, Feature cards (3), Grayscale strip, Community CTA, Footer.
- Grids use `auto-fit` with a 300px minimum, so they stack on mobile.

**Docs page (Button)**
- 3 columns: sidebar 260px, content flexible (min 560px), "On this page" 220px. Max width 1400px.
- On narrow screens the sidebar and TOC wrap below or above the content (no sticky or 100vh).
- Section order: Breadcrumb, Title, Preview/Code, Installation, Variants, Sizes, States, Props, Usage (Do/Don't), Accessibility, Previous/Next.

## 5. Docs content structure (suggested MDX)

Each component page uses the same sections so every page feels the same:

1. Title + one-line description
2. Preview / Code card
3. Installation (CLI command)
4. Variants
5. Sizes
6. States (default, hover, focus-visible, disabled, loading)
7. Props table
8. Usage (Do / Don't)
9. Accessibility
10. Previous / Next

Button props shown in the design:
- `variant`: `"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"` (default `"default"`)
- `size`: `"default" | "sm" | "lg" | "icon"` (default `"default"`)
- `asChild`: `boolean` (default `false`)
- `disabled`: `boolean` (default `false`)

## 6. Accessibility

- Actions use `button`. Navigation uses a link.
- Icon-only buttons need `aria-label`.
- Keep a visible focus ring (`focus-visible`).
- Switches use `role="switch"` with `aria-checked`.
- Touch targets should be at least 44px on mobile. The design's 36px default button needs extra padding or a larger hit area on touch.
- Text contrast is at least 4.5:1. White on `--primary` (`#008236`) is about 4.9:1, which passes for normal text. Dark mode `#032e15` on `#00c950` is about 6.8:1, which also passes.

---

## Open items (decide before build)

1. **Hover color.** Resolved: the token set defines `--primary-hover` (`#016630` light, `#05df72` dark). Use `bg-primary-hover` on primary buttons. The design's blue hover no longer applies.
2. **Focus ring.** `--ring` is now `#008236` (light) and `#05df72` (dark). Verify the ring contrast on a primary button in the design, because the design's dark ring (`#111111`) was drawn for blue. Confirm before build.
3. **Neutral values.** Resolved: the DS uses the mist scale (see Gray scale above). Tailwind neutral values are not used.
4. **Badge Success / Error.** Resolved: add `success` and `destructive` variants that use the new tokens.
5. **Package name and install URL.** The design shows `npx shadcn@latest add button`. Replace with `[YOUR-PACKAGE-NAME]` and `[YOUR-REGISTRY-URL]` when ready.
6. **Placeholder content.** GitHub links point to `https://github.com`. Sidebar items other than Button, Templates, and Changelog are placeholders. The logo mark is a placeholder.
7. **Dark mode.** Not designed yet. Light mode only.

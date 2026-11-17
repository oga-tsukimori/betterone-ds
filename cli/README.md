# betterone-ds

CLI for the BetterOne design system. It adds components and tokens from the BetterOne registry to your project, using the shadcn CLI.

```bash
npx betterone-ds init          # connect the @betterone registry in components.json
npx betterone-ds add tokens    # Light and Dark color tokens
npx betterone-ds add button    # a component and its dependencies
npx betterone-ds list          # everything available
```

Your project needs a `components.json` (run `npx shadcn@latest init` first). Components are copied into your repo, so you can change them.

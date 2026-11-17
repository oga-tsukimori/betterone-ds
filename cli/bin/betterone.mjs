#!/usr/bin/env node
// BetterOne CLI. Thin wrapper around the shadcn CLI, pointed at the BetterOne registry.
import { spawn } from "node:child_process"
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const REGISTRY_BASE = process.env.BETTERONE_REGISTRY ?? "https://raw.githubusercontent.com/oga-tsukimori/betterone-ds/main/public/r"
const NAMESPACE = "@betterone"
const itemUrl = (name) => `${REGISTRY_BASE}/${name}.json`

const help = `betterone-ds — BetterOne design system CLI

Usage:
  betterone-ds init                 Connect the @betterone registry in components.json
  betterone-ds add <name...>        Add components (and their dependencies)
  betterone-ds add tokens           Add the Light/Dark color tokens
  betterone-ds list                 List available items

Examples:
  npx betterone-ds add button dialog
  npx betterone-ds add tokens
`

function fail(message) {
  console.error(`\n  ${message}\n`)
  process.exit(1)
}

function run(args) {
  const child = spawn("npx", ["--yes", "shadcn@latest", ...args], { stdio: "inherit", shell: process.platform === "win32" })
  child.on("exit", (code) => process.exit(code ?? 0))
}

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) fail(`Could not load ${url} (${res.status}). Check your connection and the item name.`)
  return res.json()
}

async function init() {
  const file = join(process.cwd(), "components.json")
  if (!existsSync(file)) {
    fail("No components.json here. Run `npx shadcn@latest init` first, then run `betterone-ds init` again.")
  }
  const config = JSON.parse(readFileSync(file, "utf8"))
  config.registries = { ...(config.registries ?? {}), [NAMESPACE]: `${REGISTRY_BASE}/{name}.json` }
  writeFileSync(file, JSON.stringify(config, null, 2) + "\n")
  console.log(`\n  Added ${NAMESPACE} to components.json.\n  Next: npx betterone-ds add tokens\n`)
}

async function list() {
  const registry = await fetchJson(`${REGISTRY_BASE}/registry.json`)
  const groups = {}
  for (const item of registry.items) (groups[item.type] ??= []).push(item.name)
  for (const [type, names] of Object.entries(groups)) {
    console.log(`\n${type.replace("registry:", "")} (${names.length})`)
    console.log("  " + names.join(", "))
  }
  console.log()
}

function add(names) {
  if (names.length === 0) fail("Tell me what to add, for example: betterone-ds add button")
  const urls = names.map((name) => itemUrl(name === "tokens" ? "betterone-tokens" : name))
  run(["add", ...urls])
}

const [command, ...rest] = process.argv.slice(2)
switch (command) {
  case "init":
    await init()
    break
  case "add":
    add(rest.filter((arg) => !arg.startsWith("-")).length ? rest : [])
    break
  case "list":
    await list()
    break
  case undefined:
  case "help":
  case "--help":
  case "-h":
    console.log(help)
    break
  default:
    console.error(`Unknown command: ${command}`)
    console.log(help)
    process.exit(1)
}

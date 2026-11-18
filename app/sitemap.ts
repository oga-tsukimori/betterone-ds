import type { MetadataRoute } from "next"

import { docsPages } from "@/lib/docs-nav"

const siteUrl = "https://design.betterone.work"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/docs`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/docs/color`, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteUrl}/docs/spacing`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/docs/templates/authentication`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/docs/templates/dashboard`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/docs/templates/settings`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  const docRoutes: MetadataRoute.Sitemap = docsPages
    .filter((page) => page.href !== "/docs")
    .map((page) => ({
      url: `${siteUrl}${page.href}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }))

  return [...staticRoutes, ...docRoutes]
}

import type { MetadataRoute } from "next"
import { site } from "@/src/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}

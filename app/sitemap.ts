export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap | [] {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (!baseUrl) return []

  const routes = ['', '/about', '/skills', '/projects', '/experience', '/certifications', '/education', '/contact', '/resume']
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}

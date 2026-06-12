export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://abhilashgundelli.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/skills',
    '/projects',
    '/experience',
    '/certifications',
    '/education',
    '/contact',
    '/resume',
  ]

  return routes.map(route => ({
    url:            `${baseUrl}${route}`,
    lastModified:   new Date(),
    changeFrequency: 'monthly' as const,
    priority:       route === '' ? 1 : 0.8,
  }))
}

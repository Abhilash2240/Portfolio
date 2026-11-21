import type { Metadata } from 'next'
import { Newsreader, Space_Grotesk, Special_Elite } from 'next/font/google'
import './globals.css'
import RouteShell from '@/components/layout/RouteShell'

const newsreader = Newsreader({ subsets: ['latin'], weight: ['200','300','400','500','600','700','800'], style: ['normal','italic'], variable: '--font-newsreader', display: 'swap' })
const specialElite = Special_Elite({ subsets: ['latin'], weight: ['400'], variable: '--font-special-elite', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-space-grotesk', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: { default: 'Gundelli Abhilash — Backend Engineering & Applied AI', template: '%s | Gundelli Abhilash' },
  description: 'Computer Science undergraduate portfolio featuring backend systems, applied AI and machine learning projects.',
  keywords: ['Gundelli Abhilash', 'backend engineering', 'applied AI', 'machine learning', 'FastAPI', 'Python', 'React', 'portfolio'],
  authors: [{ name: 'Gundelli Abhilash' }],
  creator: 'Gundelli Abhilash',
  openGraph: {
    title: 'Gundelli Abhilash — Backend Engineering & Applied AI',
    description: 'Engineering portfolio: backend systems, applied AI, full-stack products, and agent automation.',
    type: 'website', locale: 'en_IN', siteName: 'Gundelli Abhilash Portfolio',
  },
  twitter: {
    card: 'summary', title: 'Gundelli Abhilash — Backend Engineering & Applied AI',
    description: 'Engineering portfolio: backend systems, applied AI, full-stack products, and agent automation.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={[newsreader.variable, specialElite.variable, spaceGrotesk.variable].join(' ')}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body><RouteShell>{children}</RouteShell></body>
    </html>
  )
}

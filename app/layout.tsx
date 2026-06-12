import type { Metadata } from 'next'
import { Newsreader, Space_Grotesk, Special_Elite } from 'next/font/google'
import './globals.css'
import RouteShell from '@/components/layout/RouteShell'

const newsreader = Newsreader({
  subsets:  ['latin'],
  weight:   ['200', '300', '400', '500', '600', '700', '800'],
  style:    ['normal', 'italic'],
  variable: '--font-newsreader',
  display:  'swap',
})

const specialElite = Special_Elite({
  subsets:  ['latin'],
  weight:   ['400'],
  variable: '--font-special-elite',
  display:  'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'Gundelli Abhilash — AI/ML & Backend Engineer',
  description: 'Portfolio of Gundelli Abhilash — CS undergraduate specializing in AI/ML, backend systems, and cloud technologies at SR University, Warangal.',
  keywords:    ['AI ML engineer', 'backend developer', 'Python', 'PyTorch', 'TensorFlow', 'cloud', 'portfolio', 'Gundelli Abhilash'],
  authors:     [{ name: 'Gundelli Abhilash' }],
  creator:     'Gundelli Abhilash',
  openGraph: {
    title:       'Gundelli Abhilash Portfolio',
    description: 'Engineering Intelligence. Architecting Scale.',
    type:        'website',
    locale:      'en_IN',
    siteName:    'Gundelli Abhilash Portfolio',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Gundelli Abhilash — AI/ML & Backend Engineer',
    description: 'Engineering Intelligence. Architecting Scale.',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={[
        newsreader.variable,
        specialElite.variable,
        spaceGrotesk.variable,
      ].join(' ')}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <RouteShell>{children}</RouteShell>
      </body>
    </html>
  )
}

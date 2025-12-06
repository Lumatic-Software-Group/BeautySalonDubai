import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glamour Palace - Dubai Beauty Salon | صالون زیبایی گلامور پالس',
  description: 'Premium beauty salon in Dubai offering luxury services | صالون زیبایی لوکس در دبی',
  keywords: ['beauty salon', 'Dubai', 'hair styling', 'nail care', 'spa', 'makeup', 'luxury'],
  authors: [{ name: 'Glamour Palace' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Glamour Palace - Dubai Beauty Salon',
    description: 'Premium beauty salon in Dubai offering luxury services',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fa_IR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Vazir:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Vazir+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
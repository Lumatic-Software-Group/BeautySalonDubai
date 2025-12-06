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
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Vazir:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
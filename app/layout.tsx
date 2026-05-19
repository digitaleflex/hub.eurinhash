import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Eurin Hash | Digital Architect & Technology Entrepreneur',
  description: 'Architecting the digital infrastructure of tomorrow. Designing scalable systems, digital ecosystems, cloud architectures and intelligent platforms for the future of Africa.',
  keywords: ['digital architect', 'technology entrepreneur', 'cloud architecture', 'AI systems', 'cybersecurity', 'Africa tech'],
  authors: [{ name: 'Eurin Hash' }],
  openGraph: {
    title: 'Eurin Hash | Digital Architect',
    description: 'Architecting the digital infrastructure of tomorrow.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

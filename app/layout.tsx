import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'MEROBOT | Shanghai Mengsu Automation Machinery Co., Ltd',
  description: 'Professional automation machinery manufacturer with 3000㎡ factory, 3 production lines + 1 customized line, monthly capacity of 300-400 units. Your trusted partner for industrial automation solutions.',
  keywords: 'automation machinery, industrial automation, Shanghai manufacturer, MEROBOT, custom automation, production line',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%BF-oD3L0baEE93CPlhSQWURA9OIFSCnRW.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%BF-oD3L0baEE93CPlhSQWURA9OIFSCnRW.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

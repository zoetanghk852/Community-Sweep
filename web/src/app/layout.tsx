import type { Metadata, Viewport } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import { ActivityRegistrationsProvider } from '@/context/ActivityRegistrationsContext'
import { PointsProvider } from '@/context/PointsContext'
import './globals.css'

const notoSansTc = Noto_Sans_TC({
  variable: '--font-noto-sans-tc',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '社區交換與修繕平台',
  description:
    '香港社區交換與修繕平台 — 鼓勵長者交換閒置物品、預約修繕，以社區感謝積分作鼓勵（不可兌現金）。',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#5b8a72',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant-HK" className={`${notoSansTc.variable} h-full`}>
      <body className="min-h-full antialiased">
        <PointsProvider>
          <ActivityRegistrationsProvider>{children}</ActivityRegistrationsProvider>
        </PointsProvider>
      </body>
    </html>
  )
}

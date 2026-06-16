import type { Metadata } from 'next'
import { LandingNav } from '@/components/landing/LandingNav'
import { LandingFooter } from '@/components/landing/LandingFooter'

export const metadata: Metadata = {
  title: '社區換物carousell，鼓勵交換閒置物品、預約修繕',
  description:
    '針對有囤積習慣的長者，在社區舉辦換物市集、修繕工作坊與藝術重組，發掘舊物價值，重建街坊連結。',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-svh bg-cream">
      <div className="grain-overlay" aria-hidden />
      <a href="#main-content" className="skip-link">
        跳至主要內容
      </a>
      <LandingNav />
      <main id="main-content">{children}</main>
      <LandingFooter />
    </div>
  )
}

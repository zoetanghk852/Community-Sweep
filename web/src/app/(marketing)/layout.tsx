import type { Metadata } from 'next'
import { LandingNav } from '@/components/landing/LandingNav'
import { LandingFooter } from '@/components/landing/LandingFooter'

export const metadata: Metadata = {
  title: '社區循環經濟與升級改造平台 — 從囤積到交流',
  description:
    '針對有囤積習慣的長者，在社區舉辦換物市集、修繕工作坊與藝術重組，發掘舊物價值，重建街坊連結。',
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-cream">
      <LandingNav />
      <main>{children}</main>
      <LandingFooter />
    </div>
  )
}

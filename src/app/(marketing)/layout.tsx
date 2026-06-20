import type { Metadata } from 'next'
import { LandingNav } from '@/components/landing/LandingNav'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '社區換物carousell，鼓勵交換閒置物品、預約修繕',
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SITE_NAME,
    description: '每月換物市集、線上換物與積分禮品，發掘舊物價值，重建街坊連結。',
    url: SITE_URL,
    locale: 'zh_HK',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/hero-community-barter.png`,
        width: 1024,
        height: 572,
        alt: '社區換物市集插圖',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: '每月換物市集、線上換物與積分禮品，發掘舊物價值，重建街坊連結。',
    images: [`${SITE_URL}/images/hero-community-barter.png`],
  },
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-svh bg-cream text-base">
      <OrganizationJsonLd />
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

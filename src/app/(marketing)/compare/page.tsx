import type { Metadata } from 'next'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { SubPageIntro } from '@/components/landing/SubPageIntro'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '服務類別與平台比較',
  description: '比較社區換物 carousell 與其他香港社區舊物、維修服務的運作模式與對象。',
  alternates: { canonical: `${SITE_URL}/compare` },
}

export default function ComparePage() {
  return (
    <>
      <SubPageIntro
        title="服務類別與平台比較"
        description="了解本服務與其他社區舊物分享、維修計畫的定位差異，協助街坊選擇合適的參與方式。"
      />
      <ComparisonSection />
    </>
  )
}

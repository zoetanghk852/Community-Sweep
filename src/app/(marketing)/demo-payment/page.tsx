import type { Metadata } from 'next'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'
import { SubPageIntro } from '@/components/landing/SubPageIntro'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: '工作坊報名付款（示範）',
  description: '示範選擇工作坊、填寫付款資料與完成確認的流程。此為模擬介面，不會實際扣款。',
  alternates: { canonical: `${SITE_URL}/demo-payment` },
}

export default function DemoPaymentPage() {
  return (
    <>
      <SubPageIntro
        title="工作坊報名付款（示範）"
        description="示範選擇工作坊、填寫付款資料與完成確認的流程。此為模擬介面，不會實際扣款。"
      />
      <MockPaymentGateway />
    </>
  )
}

import type { Metadata } from 'next'
import { Suspense } from 'react'
import { WalletPageClient } from '@/components/wallet/WalletPageClient'

export const metadata: Metadata = {
  title: '儲分與兌換｜社區換物carousell',
}
export default function WalletPage() {
  return (
    <Suspense
      fallback={
        <p className="text-center text-lg text-ink-muted">載入中…</p>
      }
    >
      <WalletPageClient />
    </Suspense>
  )
}

import { Suspense } from 'react'
import { WalletPageClient } from '@/components/wallet/WalletPageClient'

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

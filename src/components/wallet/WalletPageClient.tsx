'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PointsWalletCard } from '@/components/home/PointsWalletCard'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { EarnPointsContent } from '@/components/wallet/EarnPointsContent'
import { RedeemContent } from '@/components/wallet/RedeemContent'
import { WalletTabs, type WalletTab } from '@/components/wallet/WalletTabs'
import { usePoints } from '@/context/PointsContext'
import {
  mockEarnMethods,
  mockPointsHistory,
  mockRedeemOptions,
  mockWallet,
} from '@/lib/mockData'

export function WalletPageClient() {
  const searchParams = useSearchParams()
  const { balance, redeem, redeemedRecords } = usePoints()
  const [tab, setTab] = useState<WalletTab>('redeem')
  const [notice, setNotice] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams.get('tab') === 'earn') {
      setTab('earn')
    }
  }, [searchParams])

  const wallet = { ...mockWallet, balance }

  return (
    <>
      <SiteHeader title="儲分與兌換" subtitle={`你好，${mockWallet.memberName}`} />
      <div className="mb-6">
        <PointsWalletCard wallet={wallet} />
      </div>
      <WalletTabs active={tab} onChange={setTab} />
      <div className="mt-6" role="tabpanel">
        {tab === 'earn' ? (
          <EarnPointsContent methods={mockEarnMethods} history={mockPointsHistory} />
        ) : (
          <>
            {notice && (
              <p
                role="status"
                className="mb-4 rounded-2xl bg-sage-light px-4 py-3 text-center text-lg font-semibold text-sage-dark"
              >
                {notice}
              </p>
            )}
            <RedeemContent
              options={mockRedeemOptions}
              balance={balance}
              redeemedRecords={redeemedRecords}
              onRedeem={(option) => {
                if (redeem(option)) {
                  setNotice(`已兌換「${option.title}」，請到中心領取或預約。`)
                  setTimeout(() => setNotice(null), 5000)
                }
              }}
            />
          </>
        )}
      </div>
    </>
  )
}

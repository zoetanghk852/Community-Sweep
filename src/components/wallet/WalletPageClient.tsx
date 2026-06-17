'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { PointsWalletCard } from '@/components/home/PointsWalletCard'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { EarnPointsContent } from '@/components/wallet/EarnPointsContent'
import { RedeemContent } from '@/components/wallet/RedeemContent'
import { WalletTabs, walletPanelIds, type WalletTab } from '@/components/wallet/WalletTabs'
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
      <div
        id={walletPanelIds.earn}
        role="tabpanel"
        aria-labelledby="wallet-tab-earn"
        hidden={tab !== 'earn'}
        className="mt-6"
      >
        <EarnPointsContent methods={mockEarnMethods} history={mockPointsHistory} />
      </div>
      <div
        id={walletPanelIds.redeem}
        role="tabpanel"
        aria-labelledby="wallet-tab-redeem"
        hidden={tab !== 'redeem'}
        className="mt-6"
      >
        {notice && (
          <div
            role="status"
            className="mb-4 flex items-start gap-3 rounded-2xl bg-sage-light px-4 py-3 text-lg font-semibold text-sage-dark"
          >
            <p className="flex-1 text-center">{notice}</p>
            <button
              type="button"
              onClick={() => setNotice(null)}
              className="icon-btn shrink-0 text-sage-dark"
              aria-label="關閉通知"
            >
              ×
            </button>
          </div>
        )}
        <RedeemContent
          options={mockRedeemOptions}
          balance={balance}
          redeemedRecords={redeemedRecords}
          onRedeem={(option) => {
            if (redeem(option)) {
              setNotice(`已兌換「${option.title}」，請到中心領取或預約。`)
              setTimeout(() => setNotice(null), 15000)
            }
          }}
        />
      </div>
    </>
  )
}

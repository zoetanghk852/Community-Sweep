import { Coins, Info } from 'lucide-react'
import Link from 'next/link'
import { formatPoints } from '@/lib/format'
import type { UserWallet } from '@/lib/mockData'

interface PointsWalletCardProps {
  wallet: UserWallet
}

export function PointsWalletCard({ wallet }: PointsWalletCardProps) {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border-2 border-terracotta/30 bg-gradient-to-br from-terracotta to-terracotta-dark p-6 text-white shadow-lg"
      aria-labelledby="wallet-balance"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/10" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-medium text-white/90">我的儲分</p>
          <p id="wallet-balance" className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
            {formatPoints(wallet.balance)}
          </p>
          <p className="mt-2 text-base text-white/85">社區感謝積分 · 不可兌現金</p>
        </div>
        <div className="rounded-2xl bg-white/15 p-3">
          <Coins className="h-10 w-10" strokeWidth={2} aria-hidden />
        </div>
      </div>

      <div className="relative mt-5 flex items-center gap-2 rounded-xl bg-white/15 px-4 py-3 text-base">
        <Info className="h-5 w-5 shrink-0" aria-hidden />
        <span>紙本卡號：{wallet.paperCardNo}</span>
      </div>

      <Link
        href="/wallet"
        className="relative mt-4 flex min-h-[3rem] items-center justify-center rounded-xl bg-white/20 text-lg font-semibold text-white transition-colors hover:bg-white/30"
      >
        查看儲分與兌換
      </Link>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PointsWalletCard } from '@/components/home/PointsWalletCard'
import { QuickActions } from '@/components/home/QuickActions'
import { mockWallet } from '@/lib/mockData'

export function AppHallPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
      <div className="overflow-hidden rounded-[1.75rem] border border-border-warm bg-page shadow-lift ring-1 ring-border-warm/50">
        <div className="border-b border-border-light bg-card px-4 py-3 text-center text-sm font-semibold text-foreground">
          示範 App 主畫面
        </div>
        <div className="pointer-events-none max-h-[28rem] select-none overflow-hidden p-3 sm:p-4" aria-hidden>
          <div className="origin-top scale-[0.92] space-y-4 sm:scale-100">
            <PointsWalletCard wallet={mockWallet} />
            <QuickActions />
          </div>
        </div>
      </div>

      <Link
        href="/hall"
        className="interactive mt-5 flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-xl border border-sage/35 bg-sage-light/50 text-base font-semibold text-sage-dark hover:border-sage hover:bg-sage-light"
      >
        開啟完整示範
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  )
}

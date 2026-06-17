import { CommunityItemFilter } from '@/components/marketplace/CommunityItemFilter'
import Link from 'next/link'
import { Upload } from 'lucide-react'

export default function MarketplacePage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">線上換物</h1>
        <p className="mt-1 text-base text-muted">
          以積分預約街坊物品，下次換物市集現場交收
        </p>
        <Link
          href="/marketplace/upload"
          className="interactive mt-4 inline-flex items-center gap-2 rounded-xl bg-sage px-4 py-3 text-sm font-semibold text-white hover:bg-sage-dark"
        >
          <Upload className="h-4 w-4" aria-hidden />
          上傳閒置物品
        </Link>
      </header>

      <CommunityItemFilter />
    </div>
  )
}

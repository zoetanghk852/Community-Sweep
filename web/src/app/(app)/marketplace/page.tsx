import { CommunityItemFilter } from '@/components/marketplace/CommunityItemFilter'

export default function MarketplacePage() {
  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">社區物品篩選</h1>
        <p className="mt-1 text-base text-muted">試用分類與搜尋，瀏覽街坊分享的舊物故事</p>
      </header>

      <CommunityItemFilter />
    </div>
  )
}

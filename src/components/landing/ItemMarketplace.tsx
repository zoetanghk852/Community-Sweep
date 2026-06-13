import { CommunityItemFilter } from '@/components/marketplace/CommunityItemFilter'

export function ItemMarketplace() {
  return (
    <section id="marketplace" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label">社區物品篩選</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">換物市集預覽</h2>
          </div>
          <p className="text-lg text-ink-muted lg:text-right">
            試用分類與搜尋功能，瀏覽街坊分享的舊物故事
          </p>
        </div>

        <div className="mt-12">
          <CommunityItemFilter />
        </div>
      </div>
    </section>
  )
}

import { CommunityItemFilter } from '@/components/marketplace/CommunityItemFilter'

export function ItemMarketplace() {
  return (
    <section id="marketplace" className="scroll-mt-20 border-t border-border-warm/60 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            社區物品篩選
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">換物市集預覽</h2>
          <p className="mt-4 text-lg text-ink-muted">
            試用分類與搜尋功能，瀏覽街坊分享的舊物故事
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <CommunityItemFilter />
        </div>
      </div>
    </section>
  )
}

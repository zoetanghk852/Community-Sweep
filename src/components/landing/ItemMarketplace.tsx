import { CommunityItemFilter } from '@/components/marketplace/CommunityItemFilter'

export function ItemMarketplace() {
  return (
    <section id="marketplace" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="section-title text-3xl text-foreground sm:text-4xl">線上換物預覽</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            瀏覽街坊上架物品，以社區感謝積分預約換取；實物於換物市集現場交收
          </p>
        </div>

        <div className="mt-12">
          <CommunityItemFilter variant="landing" />
        </div>
      </div>
    </section>
  )
}

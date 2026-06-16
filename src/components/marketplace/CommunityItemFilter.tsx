'use client'

import { useEffect, useMemo, useState } from 'react'
import { Filter, Search } from 'lucide-react'
import {
  itemCategories,
  itemConditions,
  marketplaceItems,
  type MarketplaceItem,
} from '@/lib/landingData'

function ItemCard({ item, className }: { item: MarketplaceItem; className?: string }) {
  return (
    <article
      className={[
        'group flex h-full flex-col rounded-2xl bg-page p-5 transition-all hover:-translate-y-0.5 hover:shadow-warm-lg',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sage-light text-2xl transition-colors group-hover:bg-sage/15"
          role="img"
          aria-hidden
        >
          {item.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-md bg-sage-light px-2 py-0.5 text-xs font-semibold text-sage-dark">
              {item.category}
            </span>
            <span className="rounded-md bg-wood-light/80 px-2 py-0.5 text-xs font-semibold text-foreground">
              {item.condition}
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{item.story}</p>
      <p className="mt-4 border-t border-border-warm/60 pt-3 text-sm text-muted">提供者：{item.owner}</p>
    </article>
  )
}

export function CommunityItemFilter() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('全部')
  const [condition, setCondition] = useState<string>('全部')
  const [showAllMobile, setShowAllMobile] = useState(false)

  const MOBILE_INITIAL_COUNT = 3

  useEffect(() => {
    setShowAllMobile(false)
  }, [search, category, condition])

  const filtered = useMemo(() => {
    return marketplaceItems.filter((item) => {
      const matchSearch =
        !search ||
        item.title.includes(search) ||
        item.story.includes(search) ||
        item.owner.includes(search)
      const matchCategory = category === '全部' || item.category === category
      const matchCondition = condition === '全部' || item.condition === condition
      return matchSearch && matchCategory && matchCondition
    })
  }, [search, category, condition])

  const hasMoreOnMobile = filtered.length > MOBILE_INITIAL_COUNT

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-page p-5 sm:p-6">
        <div className="flex items-center gap-2 text-foreground">
          <Filter className="h-5 w-5 text-sage" />
          <span className="font-semibold">篩選條件</span>
        </div>

        <div className="mt-5 space-y-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜尋物品名稱、故事或提供者..."
              className="interactive w-full rounded-xl border border-border-warm bg-card py-3 pl-10 pr-4 text-base focus:border-sage focus:outline-none"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-ink-muted">類別</p>
            <div className="flex flex-wrap gap-2">
              {itemCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={[
                    'interactive rounded-lg px-3.5 py-2 text-sm font-medium',
                    category === cat
                      ? 'bg-sage text-white shadow-warm'
                      : 'bg-card text-ink-muted hover:bg-sage-light',
                  ].join(' ')}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-ink-muted">狀態</p>
            <div className="flex flex-wrap gap-2">
              {itemConditions.map((cond) => (
                <button
                  key={cond}
                  type="button"
                  onClick={() => setCondition(cond)}
                  className={[
                    'interactive rounded-lg px-3.5 py-2 text-sm font-medium',
                    condition === cond
                      ? 'bg-sage-dark text-white shadow-warm'
                      : 'bg-card text-ink-muted hover:bg-sage-light',
                  ].join(' ')}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted">
        共找到 <strong className="tabular-nums text-foreground">{filtered.length}</strong> 件物品
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <ItemCard
              key={item.id}
              item={item}
              className={
                index >= MOBILE_INITIAL_COUNT && !showAllMobile ? 'hidden sm:flex' : undefined
              }
            />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-border-warm bg-page py-16 text-center">
            <p className="text-lg font-medium text-foreground">沒有符合條件的物品</p>
            <p className="mt-2 text-sm text-muted">試試調整篩選條件或清除搜尋字詞</p>
          </div>
        )}
      </div>

      {hasMoreOnMobile && !showAllMobile && (
        <button
          type="button"
          onClick={() => setShowAllMobile(true)}
          className="interactive w-full rounded-xl border border-border-warm bg-page py-3.5 text-base font-semibold text-sage-dark hover:border-sage hover:bg-sage-light sm:hidden"
        >
          顯示更多…
        </button>
      )}
    </div>
  )
}

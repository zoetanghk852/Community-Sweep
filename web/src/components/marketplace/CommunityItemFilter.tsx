'use client'

import { useMemo, useState } from 'react'
import { Filter, Search } from 'lucide-react'
import {
  itemCategories,
  itemConditions,
  marketplaceItems,
  type MarketplaceItem,
} from '@/lib/landingData'

function ItemCard({ item }: { item: MarketplaceItem }) {
  return (
    <article className="rounded-2xl border-2 border-border-warm bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="text-3xl" role="img" aria-hidden>
          {item.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            <span className="rounded-full bg-sage-light px-2.5 py-0.5 text-xs font-medium text-sage-dark">
              {item.category}
            </span>
            <span className="rounded-full bg-wood-light px-2.5 py-0.5 text-xs font-medium text-foreground">
              {item.condition}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.story}</p>
          <p className="mt-2 text-sm text-muted">提供者：{item.owner}</p>
        </div>
      </div>
    </article>
  )
}

export function CommunityItemFilter() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string>('全部')
  const [condition, setCondition] = useState<string>('全部')

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

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-border-warm bg-cream p-5">
        <div className="flex items-center gap-2 text-foreground">
          <Filter className="h-5 w-5 text-sage" />
          <span className="font-semibold">篩選條件</span>
        </div>

        <div className="mt-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜尋物品名稱、故事或提供者..."
              className="w-full rounded-xl border-2 border-border-warm bg-white py-3 pl-10 pr-4 text-base focus:border-sage focus:outline-none"
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
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    category === cat
                      ? 'bg-sage text-white'
                      : 'bg-white text-ink-muted hover:bg-sage-light',
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
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    condition === cond
                      ? 'bg-terracotta text-white'
                      : 'bg-white text-ink-muted hover:bg-wood-light',
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
        共找到 <strong className="text-foreground">{filtered.length}</strong> 件物品
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-full rounded-2xl border-2 border-dashed border-border-warm py-12 text-center text-ink-muted">
            沒有符合條件的物品，試試調整篩選條件
          </p>
        )}
      </div>
    </div>
  )
}

'use client'

export type WalletTab = 'earn' | 'redeem'

interface WalletTabsProps {
  active: WalletTab
  onChange: (tab: WalletTab) => void
}

const tabs: { id: WalletTab; label: string }[] = [
  { id: 'earn', label: '如何賺分' },
  { id: 'redeem', label: '兌換服務／物品' },
]

export function WalletTabs({ active, onChange }: WalletTabsProps) {
  return (
    <div
      className="flex gap-2 rounded-2xl bg-cream-dark p-2"
      role="tablist"
      aria-label="儲分錢包分頁"
    >
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          role="tab"
          {...(active === id ? { 'aria-selected': true as const } : {})}
          onClick={() => onChange(id)}
          className={[
            'interactive min-h-[3.25rem] flex-1 rounded-xl px-3 py-3 text-lg font-bold',
            active === id
              ? 'bg-card text-terracotta-dark shadow-sm'
              : 'text-ink-muted hover:text-foreground',
          ].join(' ')}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

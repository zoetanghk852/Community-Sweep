'use client'

import { SectionCard } from '@/components/ui/SectionCard'
import { LargeButton } from '@/components/ui/LargeButton'
import type { RedeemOption } from '@/lib/mockData'

interface RedeemContentProps {
  options: RedeemOption[]
  balance: number
  onRedeem?: (option: RedeemOption) => void
}

export function RedeemContent({ options, balance, onRedeem }: RedeemContentProps) {
  return (
    <div className="space-y-5">
      <p className="rounded-2xl bg-sage-light px-4 py-3 text-center text-lg font-semibold text-sage-dark">
        可用積分：<span className="text-2xl">{balance}</span>
      </p>

      <SectionCard
        title="兌換服務／物品"
        subtitle="例如：社區茶敘券 20 分、環保袋套裝 30 分"
      >
        <ul className="space-y-4">
          {options.map((option) => {
            const canAfford = balance >= option.pointsCost
            return (
              <li
                key={option.id}
                className="rounded-2xl border-2 border-border-warm bg-cream p-4"
              >
                <div className="flex gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm"
                    aria-hidden
                  >
                    {option.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">{option.title}</h3>
                      <span className="rounded-full bg-wood-light px-3 py-0.5 text-sm font-semibold text-ink-muted">
                        {option.category}
                      </span>
                    </div>
                    <p className="mt-1 text-base text-ink-muted">{option.description}</p>
                    <p className="mt-2 text-xl font-bold text-terracotta-dark">
                      {option.pointsCost} 積分
                    </p>
                    <div className="mt-3">
                      <LargeButton
                        variant={canAfford ? 'primary' : 'outline'}
                        disabled={!canAfford}
                        onClick={() => onRedeem?.(option)}
                        className="!min-h-[3rem] !text-base"
                      >
                        {canAfford ? '立即兌換' : '積分不足'}
                      </LargeButton>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </SectionCard>
    </div>
  )
}

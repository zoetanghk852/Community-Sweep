import {
  Gift,
  Hammer,
  QrCode,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { SectionCard } from '@/components/ui/SectionCard'
import type { EarnMethod, PointsHistoryItem } from '@/lib/mockData'

const iconMap: Record<EarnMethod['icon'], LucideIcon> = {
  scan: QrCode,
  exchange: Gift,
  repair: Hammer,
  visit: Sparkles,
}

interface EarnPointsContentProps {
  methods: EarnMethod[]
  history: PointsHistoryItem[]
}

export function EarnPointsContent({ methods, history }: EarnPointsContentProps) {
  return (
    <div className="space-y-5">
      <SectionCard title="點樣賺積分？" subtitle="積分係社區感謝，唔可以兌現金">
        <ul className="space-y-4">
          {methods.map((method) => {
            const Icon = iconMap[method.icon]
            return (
              <li
                key={method.id}
                className="flex gap-4 rounded-2xl border-2 border-border-warm bg-cream p-4"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-light">
                  <Icon className="h-7 w-7 text-sage-dark" strokeWidth={2.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">{method.title}</h3>
                    <span className="text-lg font-bold text-sage-dark">{method.points}</span>
                  </div>
                  <p className="mt-1 text-base text-ink-muted">{method.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </SectionCard>

      <SectionCard title="最近賺分紀錄">
        <ul className="divide-y-2 divide-border-warm">
          {history
            .filter((h) => h.amount > 0)
            .map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-lg font-semibold text-foreground">{item.title}</p>
                  <p className="text-base text-ink-muted">{item.date}</p>
                </div>
                <span className="text-xl font-bold text-sage-dark">+{item.amount}</span>
              </li>
            ))}
        </ul>
      </SectionCard>

      <div className="rounded-2xl border-2 border-dashed border-terracotta/50 bg-cream-dark p-6 text-center">
        <QrCode className="mx-auto h-12 w-12 text-terracotta" strokeWidth={2} aria-hidden />
        <p className="mt-3 text-lg font-semibold text-foreground">掃描活動海報 QR 碼</p>
        <p className="mt-1 text-base text-ink-muted">到交換日現場，請義工協助掃碼</p>
      </div>
    </div>
  )
}

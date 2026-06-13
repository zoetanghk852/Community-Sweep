import Link from 'next/link'
import { Calendar, ChevronRight, MapPin, Users } from 'lucide-react'
import type { QuickEvent } from '@/lib/mockData'

interface UpcomingEventsProps {
  events: QuickEvent[]
}

function formatEventDate(date: string) {
  const [y, m, d] = date.split('-').map(Number)
  return `${y}年${m}月${d}日`
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (events.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border-warm bg-card px-4 py-8 text-center text-base text-muted">
        暫時沒有即將舉行的活動，可前往探索活動查看更多。
      </p>
    )
  }

  return (
    <ul className="space-y-3">
      {events.map((event, index) => (
        <li key={event.id}>
          <Link
            href={`/explore/${event.exploreActivityId}`}
            className={[
              'block rounded-2xl border p-4 shadow-sm transition-colors hover:bg-slate-50/80',
              index === 0
                ? 'border-terracotta/30 bg-card'
                : 'border-border-light bg-card',
            ].join(' ')}
          >
            <div className="flex gap-4">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream-dark text-3xl"
                aria-hidden
              >
                {event.emoji}
              </span>
              <div className="min-w-0 flex-1">
                {index === 0 && (
                  <span className="mb-1 inline-block rounded-full bg-terracotta px-3 py-0.5 text-base font-semibold text-white">
                    最近活動
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                <p className="mt-1 text-base text-muted">{event.category}</p>
                <ul className="mt-2 space-y-1.5 text-base text-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-terracotta" aria-hidden />
                    <span>
                      {formatEventDate(event.date)} · {event.time}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-terracotta" aria-hidden />
                    <span>{event.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 shrink-0 text-sage" aria-hidden />
                    <span>尚餘 {event.spotsLeft} 個名額</span>
                  </li>
                </ul>
                <p className="mt-2 flex items-center gap-1 text-base font-medium text-terracotta">
                  查看活動詳情
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

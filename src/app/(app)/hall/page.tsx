import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { QuickActions } from '@/components/home/QuickActions'
import { UpcomingEvents } from '@/components/home/UpcomingEvents'
import { getUpcomingHallEvents, mockWallet } from '@/lib/mockData'

export const metadata: Metadata = {
  title: '社區大廳｜社區換物carousell',
}

const HALL_ACTIVITY_PREVIEW_COUNT = 3

export default function HomePage() {
  const upcomingEvents = getUpcomingHallEvents()
  const previewEvents = upcomingEvents.slice(0, HALL_ACTIVITY_PREVIEW_COUNT)
  const hasMore = upcomingEvents.length > HALL_ACTIVITY_PREVIEW_COUNT

  return (
    <div className="space-y-6">
      <header>
        <p className="text-base text-muted">你好，{mockWallet.memberName}</p>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">社區大廳</h1>
      </header>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">即將舉行的活動</h2>
        <UpcomingEvents events={previewEvents} />
        {hasMore && (
          <Link
            href="/explore"
            className="interactive mt-4 flex min-h-[3.25rem] w-full items-center justify-center gap-1 rounded-2xl border-2 border-border-warm bg-card text-lg font-semibold text-terracotta hover:border-terracotta/40 hover:bg-cream hover:shadow-warm"
          >
            顯示更多活動
            <ChevronRight className="h-5 w-5" aria-hidden />
          </Link>
        )}
      </section>

      <QuickActions />
    </div>
  )
}

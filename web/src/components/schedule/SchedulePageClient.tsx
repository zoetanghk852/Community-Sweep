'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calendar, ChevronRight, MapPin } from 'lucide-react'
import { MonthCalendar } from '@/components/schedule/MonthCalendar'
import type { CalendarEvent } from '@/lib/mockData'
import { mockCalendarEvents } from '@/lib/mockData'

const TODAY = new Date(2026, 4, 30)

function parseEventDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function SchedulePageClient() {
  const [selectedEvents, setSelectedEvents] = useState<CalendarEvent[] | null>(null)

  const upcomingEvents = useMemo(
    () =>
      mockCalendarEvents
        .filter((ev) => parseEventDate(ev.date) >= TODAY)
        .sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()),
    [],
  )

  const displayEvents = selectedEvents ?? upcomingEvents

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">我的日程</h1>

      <MonthCalendar
        events={mockCalendarEvents}
        onDateSelect={(_date, events) => setSelectedEvents(events)}
      />

      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="font-medium text-foreground">活動標記：</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-terracotta" aria-hidden />
          交換
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sage" aria-hidden />
          修繕
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden />
          工作坊
        </span>
      </p>

      <div className="flex items-center justify-end">
        <Link
          href="/explore"
          className="flex items-center gap-0.5 text-base font-medium text-terracotta"
        >
          瀏覽全部活動
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">即將舉行</h2>

        {displayEvents.length > 0 ? (
          <ul className="space-y-3">
            {displayEvents.map((event) => (
              <li key={event.id}>
                <Link
                  href={`/explore/${event.exploreActivityId}`}
                  className="block rounded-2xl border border-border-light bg-card p-4 shadow-sm transition-colors hover:bg-slate-50/80"
                >
                  <p className="text-lg font-bold text-foreground">{event.title}</p>
                  <p className="mt-2 flex items-center gap-2 text-base text-muted">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                    {event.location}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-base text-muted">
                    <Calendar className="h-4 w-4 shrink-0" aria-hidden />
                    {event.date.replace(/-/g, '/')} · {event.time}
                  </p>
                  <p className="mt-2 flex items-center gap-1 text-sm font-medium text-terracotta">
                    查看活動詳情
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base leading-relaxed text-muted">
            目前沒有任何即將到來的義工機會或活動。
          </p>
        )}
      </section>
    </div>
  )
}

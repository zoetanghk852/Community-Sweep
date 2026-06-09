'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CalendarEvent } from '@/lib/mockData'

const WEEKDAYS = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'] as const

const EVENT_DOT: Record<CalendarEvent['type'], string> = {
  exchange: 'bg-terracotta',
  repair: 'bg-sage',
  workshop: 'bg-amber-500',
}

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

interface MonthCalendarProps {
  events: CalendarEvent[]
  onDateSelect?: (date: Date, dayEvents: CalendarEvent[]) => void
}

export function MonthCalendar({ events, onDateSelect }: MonthCalendarProps) {
  const today = useMemo(() => new Date(2026, 4, 30), [])
  const [viewDate, setViewDate] = useState(() => new Date(2026, 4, 1))
  const [selected, setSelected] = useState<Date>(() => new Date(2026, 4, 30))

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const eventDates = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>()
    for (const ev of events) {
      const list = map.get(ev.date) ?? []
      list.push(ev)
      map.set(ev.date, list)
    }
    return map
  }, [events])

  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysInPrev = new Date(year, month, 0).getDate()
    const result: { day: number; inMonth: boolean; date: Date }[] = []

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrev - i
      result.push({ day, inMonth: false, date: new Date(year, month - 1, day) })
    }
    for (let day = 1; day <= daysInMonth; day++) {
      result.push({ day, inMonth: true, date: new Date(year, month, day) })
    }
    const trailing = 42 - result.length
    for (let day = 1; day <= trailing; day++) {
      result.push({ day, inMonth: false, date: new Date(year, month + 1, day) })
    }
    return result
  }, [year, month])

  const monthLabel = `${year}年${month + 1}月`

  const goToday = () => {
    setViewDate(new Date(today.getFullYear(), today.getMonth(), 1))
    setSelected(today)
    onDateSelect?.(today, eventDates.get(toDateKey(today)) ?? [])
  }

  const selectDate = (date: Date) => {
    setSelected(date)
    onDateSelect?.(date, eventDates.get(toDateKey(date)) ?? [])
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border-light bg-card">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex flex-1 items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => setViewDate(new Date(year, month - 1, 1))}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="上一個月"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="min-w-[8rem] text-center text-lg font-bold text-foreground">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="下一個月"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <button
          type="button"
          onClick={goToday}
          className="shrink-0 rounded-lg border border-slate-300 bg-white px-4 py-2 text-base font-medium text-foreground hover:bg-slate-50"
        >
          今日
        </button>
      </div>

      <div className="grid grid-cols-7 border-t border-border-light">
        {WEEKDAYS.map((label) => (
          <div
            key={label}
            className="border-b border-border-light py-3 text-center text-sm font-medium text-muted"
          >
            {label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map(({ day, inMonth, date }, index) => {
          const key = toDateKey(date)
          const isSelected = isSameDay(date, selected)
          const dayEvents = eventDates.get(key) ?? []
          const hasEvents = inMonth && dayEvents.length > 0
          const dateLabel = `${date.getFullYear()}年${date.getMonth() + 1}月${day}日`
          const ariaLabel = hasEvents
            ? `${dateLabel}，${dayEvents.length} 個活動`
            : dateLabel

          return (
            <button
              key={`${key}-${index}`}
              type="button"
              onClick={() => selectDate(date)}
              className={[
                'flex aspect-square flex-col items-center justify-center gap-0.5 border-b border-r border-border-light text-base',
                inMonth ? 'text-foreground' : 'text-slate-300',
                !isSelected && inMonth && 'hover:bg-slate-50',
              ].join(' ')}
              aria-label={ariaLabel}
              {...(isSelected ? { 'aria-pressed': true as const } : {})}
            >
              <span
                className={[
                  'flex h-9 w-9 items-center justify-center rounded-full font-medium sm:h-10 sm:w-10',
                  isSelected && 'bg-terracotta text-white',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {day}
              </span>
              {hasEvents && (
                <span className="flex h-1.5 items-center justify-center gap-0.5" aria-hidden>
                  {dayEvents.map((ev) => (
                    <span
                      key={ev.id}
                      className={`h-1.5 w-1.5 rounded-full ${EVENT_DOT[ev.type]}`}
                    />
                  ))}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

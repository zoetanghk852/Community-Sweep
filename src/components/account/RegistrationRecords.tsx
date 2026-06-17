'use client'

import Link from 'next/link'
import { Calendar, ChevronRight, Clock, MapPin, Search } from 'lucide-react'
import { useActivityRegistrations } from '@/context/ActivityRegistrationsContext'
import { formatRegistrationTime } from '@/lib/format'
import { LargeButton } from '@/components/ui/LargeButton'

export function RegistrationRecords() {
  const { registrations } = useActivityRegistrations()

  if (registrations.length === 0) {
    return (
      <div className="empty-state">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-light">
          <Calendar className="h-7 w-7 text-sage-dark" strokeWidth={2} aria-hidden />
        </div>
        <p className="mt-4 text-lg font-semibold text-foreground">尚未報名任何活動</p>
        <p className="mx-auto mt-2 max-w-xs text-base leading-relaxed text-muted">
          瀏覽本月換物市集，選擇適合的場次後即可在此查看紀錄。
        </p>
        <div className="mx-auto mt-6 max-w-xs">
          <LargeButton href="/explore" variant="primary" icon={Search} ariaLabel="探索活動">
            探索活動
          </LargeButton>
        </div>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {registrations.map((record) => (
        <li key={record.id}>
          <Link
            href={`/explore/${record.activityId}`}
            className="interactive block rounded-2xl border border-border-light bg-card p-4 shadow-warm hover:bg-cream/70"
          >
            <p className="text-lg font-bold text-foreground">{record.title}</p>
            <p className="mt-2 flex items-center gap-2 text-base text-muted">
              <Calendar className="h-4 w-4 shrink-0 text-terracotta" aria-hidden />
              {record.dateLabel}
            </p>
            <p className="mt-1 flex items-center gap-2 text-base text-muted">
              <Clock className="h-4 w-4 shrink-0 text-terracotta" aria-hidden />
              {record.time}
            </p>
            <p className="mt-1 flex items-center gap-2 text-base text-muted">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta" aria-hidden />
              {record.venue}
            </p>
            <p className="mt-2 text-base text-muted">
              報名時間：{formatRegistrationTime(record.registeredAt)}
            </p>
            <p className="mt-2 flex items-center gap-1 text-base font-medium text-terracotta">
              查看活動詳情
              <ChevronRight className="h-4 w-4" aria-hidden />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

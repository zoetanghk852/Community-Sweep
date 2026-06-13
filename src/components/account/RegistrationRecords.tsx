'use client'

import Link from 'next/link'
import { Calendar, ChevronRight, Clock, MapPin } from 'lucide-react'
import { useActivityRegistrations } from '@/context/ActivityRegistrationsContext'
import { formatRegistrationTime } from '@/lib/format'

export function RegistrationRecords() {
  const { registrations } = useActivityRegistrations()

  if (registrations.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border-warm bg-card px-4 py-10 text-center text-base leading-relaxed text-muted">
        暫時沒有報名紀錄。前往
        <Link href="/explore" className="font-semibold text-terracotta hover:underline">
          探索活動
        </Link>
        報名後，紀錄會顯示喺呢度。
      </p>
    )
  }

  return (
    <ul className="space-y-3">
      {registrations.map((record) => (
        <li key={record.id}>
          <Link
            href={`/explore/${record.activityId}`}
            className="block rounded-2xl border border-border-light bg-card p-4 shadow-sm transition-colors hover:bg-slate-50/80"
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

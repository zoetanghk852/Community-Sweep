'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight, Heart, MapPin, Users } from 'lucide-react'
import type { ExploreActivity } from '@/lib/mockData'

interface ActivityCardProps {
  activity: ExploreActivity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const [saved, setSaved] = useState(false)
  const detailHref = `/explore/${activity.id}`

  return (
    <article className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border-light">
      <div className="relative aspect-[16/10] w-full bg-slate-200">
        <Link href={detailHref} className="absolute inset-0" aria-label={`查看${activity.title}詳情`}>
          <Image
            src={activity.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </Link>
        <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-base font-semibold text-white">
          {activity.monthBadge}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setSaved((v) => !v)
          }}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          aria-label={saved ? '取消收藏' : '收藏活動'}
          {...(saved ? { 'aria-pressed': true as const } : {})}
        >
          <Heart
            className={`h-5 w-5 ${saved ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
          />
        </button>
        <span className="pointer-events-none absolute bottom-3 left-3 flex max-w-[85%] items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-base font-medium text-foreground shadow-sm">
          <Users className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">{activity.registrationLabel}</span>
        </span>
      </div>

      <Link
        href={detailHref}
        className="block space-y-2 px-4 py-4 transition-colors hover:bg-slate-50/80"
      >
        <p className="text-base leading-snug text-muted">{activity.organization}</p>
        <h3 className="text-lg font-bold leading-snug text-foreground">{activity.title}</h3>
        <p className="flex items-center gap-2 text-base text-muted">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          {activity.location}
        </p>
        <p className="flex items-center gap-2 text-base text-muted">
          <Calendar className="h-4 w-4 shrink-0" aria-hidden />
          {activity.dateLabel}
        </p>
        <p className="flex items-center gap-1 pt-1 text-base font-medium text-terracotta">
          查看活動詳情
          <ChevronRight className="h-4 w-4" aria-hidden />
        </p>
      </Link>
    </article>
  )
}

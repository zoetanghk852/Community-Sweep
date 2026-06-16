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
    <article className="overflow-hidden rounded-2xl bg-card shadow-warm ring-1 ring-border-light transition-shadow hover:shadow-warm-lg">
      <div className="relative aspect-[16/10] w-full bg-cream-dark">
        <Link href={detailHref} className="absolute inset-0" aria-label={`查看${activity.title}詳情`}>
          <Image
            src={activity.imageUrl}
            alt={`${activity.title}活動封面`}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
          />
        </Link>
        <span className="badge-month pointer-events-none absolute left-3 top-3">
          {activity.monthBadge}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setSaved((v) => !v)
          }}
          className="interactive absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-warm"
          aria-label={saved ? '取消收藏' : '收藏活動'}
          {...(saved ? { 'aria-pressed': true as const } : {})}
        >
          <Heart
            className={`h-5 w-5 ${saved ? 'fill-terracotta text-terracotta' : 'text-muted'}`}
          />
        </button>
        <span className="pointer-events-none absolute bottom-3 left-3 flex max-w-[85%] items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 text-base font-medium text-foreground shadow-warm">
          <Users className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">{activity.registrationLabel}</span>
        </span>
      </div>

      <Link
        href={detailHref}
        className="interactive block space-y-2 px-4 py-4 hover:bg-cream/70"
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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  Heart,
  MapPin,
  Users,
  Clock,
  Building2,
  Info,
  CheckCircle2,
  X,
} from 'lucide-react'
import { useActivityRegistrations } from '@/context/ActivityRegistrationsContext'
import type { ExploreActivity } from '@/lib/mockData'

interface ActivityDetailProps {
  activity: ExploreActivity
}

export function ActivityDetail({ activity }: ActivityDetailProps) {
  const [saved, setSaved] = useState(false)
  const [dialog, setDialog] = useState<'success' | 'already' | null>(null)
  const { isRegistered, register } = useActivityRegistrations()
  const registered = isRegistered(activity.id)

  const handleRegister = () => {
    const added = register(activity)
    setDialog(added ? 'success' : 'already')
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-2">
        <Link
          href="/explore"
          className="rounded-lg p-1.5 text-foreground hover:bg-slate-100"
          aria-label="返回探索活動"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={2.25} />
        </Link>
        <h1 className="text-xl font-bold text-foreground sm:text-2xl">活動詳情</h1>
      </header>

      <article className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border-light">
        <div className="relative aspect-[16/10] w-full bg-slate-200">
          <Image
            src={activity.imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
            priority
          />
          <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-base font-semibold text-white">
            {activity.monthBadge}
          </span>
          <button
            type="button"
            onClick={() => setSaved((v) => !v)}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
            aria-label={saved ? '取消收藏' : '收藏活動'}
            {...(saved ? { 'aria-pressed': true as const } : {})}
          >
            <Heart
              className={`h-5 w-5 ${saved ? 'fill-red-500 text-red-500' : 'text-slate-600'}`}
            />
          </button>
        </div>

        <div className="space-y-4 px-4 py-5">
          <div>
            <p className="text-base text-muted">{activity.code}</p>
            <h2 className="mt-1 text-2xl font-bold text-foreground">{activity.title}</h2>
            <p className="mt-2 text-base text-muted">{activity.organization}</p>
          </div>

          <ul className="space-y-3 text-base text-foreground">
            <li className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden />
              <span>{activity.dateLabel}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden />
              <span>{activity.time}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" aria-hidden />
              <span>
                {activity.location} · {activity.venue}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden />
              <span>{activity.registrationLabel}</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-sage" aria-hidden />
              <span>尚餘 {activity.spotsLeft} 個名額</span>
            </li>
          </ul>

          <div className="rounded-xl bg-cream p-4">
            <p className="flex items-center gap-2 text-base font-semibold text-foreground">
              <Info className="h-4 w-4 text-sage" aria-hidden />
              活動簡介
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {activity.description}
            </p>
          </div>

          <p className="text-base text-muted">
            <span className="font-medium text-foreground">參加對象：</span>
            {activity.eligibility}
          </p>
        </div>
      </article>

      <button
        type="button"
        onClick={handleRegister}
        className={[
          'w-full rounded-2xl px-6 py-4 text-lg font-semibold text-white transition-colors',
          registered
            ? 'bg-sage hover:bg-sage-dark'
            : 'bg-terracotta hover:bg-terracotta/90',
        ].join(' ')}
      >
        {registered ? '已報名（示範）' : '立即報名（示範）'}
      </button>

      {dialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-dialog-title"
        >
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-8 w-8 shrink-0 text-sage" aria-hidden />
                <div>
                  <h2 id="signup-dialog-title" className="text-xl font-bold text-foreground">
                    {dialog === 'success' ? '報名成功' : '已報名此活動'}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">
                    {dialog === 'success'
                      ? '您已成功報名此活動。可於「帳戶」→「活動報名紀錄」查看詳情。'
                      : '您先前已報名此活動，可於「帳戶」→「活動報名紀錄」查看。'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDialog(null)}
                className="rounded-lg p-1.5 text-muted hover:bg-slate-100"
                aria-label="關閉"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/account/registrations"
                onClick={() => setDialog(null)}
                className="flex min-h-[3rem] items-center justify-center rounded-xl bg-terracotta text-lg font-semibold text-white hover:bg-terracotta/90"
              >
                查看報名紀錄
              </Link>
              <button
                type="button"
                onClick={() => setDialog(null)}
                className="min-h-[3rem] rounded-xl border-2 border-border-warm text-lg font-semibold text-foreground hover:bg-cream"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroStatsStrip } from '@/components/landing/HeroStatsStrip'
import { FadeUpOnMount } from '@/components/motion/Reveal'

export function HeroSectionContent() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="order-2 max-w-xl lg:order-1 lg:max-w-none">
        <FadeUpOnMount>
          <h1 className="section-title text-4xl text-foreground sm:text-5xl lg:text-[3rem]">
            社區換物carousell
          </h1>
        </FadeUpOnMount>

        <FadeUpOnMount delay={0.1}>
          <p className="prose-width mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
            換物市集 × 舊物維修 × 數碼義診
          </p>
        </FadeUpOnMount>

        <FadeUpOnMount delay={0.2}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#join"
              className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-terracotta px-7 py-4 text-lg font-semibold text-white shadow-warm-lg hover:bg-terracotta-dark hover:shadow-lift"
            >
              立即登記參加
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <Link
              href="/hall"
              className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-border-warm bg-card/90 px-7 py-4 text-lg font-semibold text-foreground hover:border-sage hover:text-sage-dark"
            >
              體驗示範 App
            </Link>
          </div>
        </FadeUpOnMount>

        <FadeUpOnMount delay={0.3}>
          <div className="mt-10 border-t border-border-warm/60 pt-8">
            <HeroStatsStrip />
          </div>
        </FadeUpOnMount>
      </div>

      <FadeUpOnMount
        className="relative order-1 mx-auto w-full max-w-lg lg:order-2 lg:mx-0 lg:max-w-none lg:-mr-6"
        delay={0.15}
        x={16}
      >
        <div className="absolute -left-6 top-8 z-10 hidden max-w-[11rem] rounded-2xl glass-panel p-4 lg:block">
          <p className="text-xs font-medium text-muted">本月換物市集</p>
          <p className="mt-1 font-display text-base font-semibold text-foreground">屯門東邨社區會堂</p>
          <p className="mt-0.5 text-sm text-sage-dark">5月18日 下午2時</p>
        </div>

        <Image
          src="/images/hero-community-barter.png"
          alt="社區換物市場的 3D 插圖，展示多位市民在陽光明媚的公園裡友好地交換植物、吉他和家電等物品"
          width={1024}
          height={572}
          priority
          className="relative z-[1] w-full rounded-[1.75rem] shadow-lift ring-1 ring-border-warm/50"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />

        <div className="absolute -bottom-5 -right-4 z-10 rounded-2xl bg-sage px-5 py-4 text-white shadow-warm-lg sm:-right-8">
          <p className="text-xs font-medium text-white/80">已促成交換</p>
          <p className="tabular-nums font-display text-2xl font-bold">1,284 件</p>
        </div>
      </FadeUpOnMount>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, Smartphone, Phone, HandHeart } from 'lucide-react'
import { appPreviewHighlights } from '@/lib/landingData'

export function AppPreviewSection() {
  return (
    <section id="app-preview" className="section-padding scroll-mt-20 overflow-hidden bg-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="lg:pr-4">
            <p className="section-label">App 預覽</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">長者友善的街坊端設計</h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
              示範 App 採大字體、高對比、大按鈕設計，配合積分錢包及活動日程，
              讓長者（或義工代操作）輕鬆參與社區活動。
            </p>

            <ul className="mt-10 space-y-5">
              {appPreviewHighlights.map(({ title, description }) => (
                <li key={title} className="flex gap-4 border-l-2 border-sage/30 pl-4">
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-base text-ink-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/hall"
              className="interactive mt-10 inline-flex min-h-[3.25rem] items-center gap-2 rounded-2xl bg-sage px-7 py-4 text-lg font-semibold text-white hover:bg-sage-dark hover:shadow-warm-lg"
            >
              進入示範 App
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs lg:mx-0 lg:ml-auto">
            <div className="rounded-[2.25rem] border-[5px] border-foreground/8 bg-cream-dark p-3 shadow-lift">
              <div className="overflow-hidden rounded-[1.65rem] bg-card">
                <div className="bg-sage px-4 py-3.5 text-center text-sm font-semibold text-white">
                  社區換物carousell
                </div>
                <div className="space-y-3 p-4">
                  <div className="rounded-xl bg-sage-light p-4">
                    <p className="text-sm text-ink-muted">我的儲分</p>
                    <p className="tabular-nums font-display text-3xl font-bold text-sage-dark">237</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['換物市集', '修繕預約', '積分兌換'].map((label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-border-warm py-3 text-center text-xs font-medium sm:text-sm"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border-warm p-3">
                    <p className="text-xs text-muted">即將舉行</p>
                    <p className="mt-1 text-sm font-semibold">4月童玩與衣物交換市集</p>
                  </div>
                </div>
                <div className="flex justify-around border-t border-border-light py-2.5 text-xs text-muted">
                  <span className="font-semibold text-terracotta">主頁</span>
                  <span>物品篩選</span>
                  <span>日程</span>
                  <span>帳戶</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-6 rounded-xl glass-panel p-3 shadow-warm">
              <Phone className="h-5 w-5 text-sage" />
              <p className="mt-1 text-xs font-medium">電話代辦</p>
            </div>
            <div className="absolute -right-5 -top-5 rounded-xl glass-panel p-3 shadow-warm">
              <HandHeart className="h-5 w-5 text-terracotta" />
              <p className="mt-1 text-xs font-medium">義工協助</p>
            </div>
            <div className="absolute -right-10 bottom-16 rounded-xl glass-panel p-3 shadow-warm">
              <Smartphone className="h-5 w-5 text-sage-dark" />
              <p className="mt-1 text-xs font-medium">PWA 示範</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight, Smartphone, Phone, HandHeart } from 'lucide-react'
import { uxHighlights } from '@/lib/landingData'

export function UXExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold uppercase tracking-wider text-sage">07 · UX 使用體驗</p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              長者友善的街坊端設計
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              示範 App 採大字體、高對比、大按鈕設計，配合積分錢包、活動日程及社區廣播，
              讓長者（或義工代操作）輕鬆參與社區活動。
            </p>

            <ul className="mt-8 space-y-4">
              {uxHighlights.map(({ title, description }) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" />
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="text-base text-ink-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/hall"
              className="mt-8 inline-flex min-h-[3.25rem] items-center gap-2 rounded-2xl bg-sage px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-sage-dark"
            >
              進入示範 App
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] border-4 border-foreground/10 bg-page p-3 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="bg-sage px-4 py-3 text-center text-base font-semibold text-white">
                  社區換物carousell
                </div>
                <div className="space-y-3 p-4">
                  <div className="rounded-xl bg-sage-light p-4">
                    <p className="text-base text-ink-muted">我的儲分</p>
                    <p className="text-3xl font-bold text-sage-dark">248</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['換物市集', '修繕預約', '積分兌換', '社區廣播'].map((label) => (
                      <div
                        key={label}
                        className="rounded-xl border border-border-warm py-3 text-center text-base font-medium"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border-warm p-3">
                    <p className="text-base text-muted">即將舉行</p>
                    <p className="mt-1 text-base font-semibold">4月童玩與衣物交換市集</p>
                  </div>
                </div>
                <div className="flex justify-around border-t border-border-light py-2 text-base text-muted">
                  <span className="font-semibold text-terracotta">主頁</span>
                  <span>物品篩選</span>
                  <span>日程</span>
                  <span>帳戶</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-3 shadow-lg">
              <Phone className="h-6 w-6 text-sage" />
              <p className="mt-1 text-base font-medium">電話代辦</p>
            </div>
            <div className="absolute -right-4 -top-4 rounded-xl bg-white p-3 shadow-lg">
              <HandHeart className="h-6 w-6 text-terracotta" />
              <p className="mt-1 text-base font-medium">義工協助</p>
            </div>
            <div className="absolute -right-8 bottom-12 rounded-xl bg-white p-3 shadow-lg">
              <Smartphone className="h-6 w-6 text-sage-dark" />
              <p className="mt-1 text-base font-medium">PWA 示範</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

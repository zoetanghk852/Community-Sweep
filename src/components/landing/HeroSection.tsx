import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '237', label: '示範積分餘額' },
  { value: '12', label: '本月換物活動' },
  { value: '47', label: '已登記街坊' },
] as const

export function HeroSection() {
  return (
    <section className="relative min-h-[88dvh] overflow-hidden bg-page">
      <div
        className="absolute inset-0 bg-[url('https://picsum.photos/seed/community-hall/1920/1080')] bg-cover bg-center opacity-[0.07]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(77,122,100,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-page"
        aria-hidden
      />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sage/8 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-terracotta/6 blur-3xl" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:min-h-[88dvh] lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="section-label">香港社區換物計劃</p>

            <h1 className="section-title mt-4 text-4xl text-foreground sm:text-5xl lg:text-[3.25rem]">
              從囤積到交流，
              <span className="text-sage-dark"> 發掘舊物的隱藏價值</span>
            </h1>

            <p className="prose-width mt-7 text-lg leading-[1.75] text-ink-muted sm:text-xl">
              不少長者抱持惜物心態，保留「修好還能用」或「總有一天會用到」的物品。
              我們在社區內舉辦換物市集，提供維修與升級改造服務，讓閒置資源得以流轉，
              重新編織長者的社區支援網絡。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#join"
                className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-terracotta px-7 py-4 text-lg font-semibold text-white shadow-warm-lg hover:bg-terracotta-dark hover:shadow-lift"
              >
                立即登記參加
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/hall"
                className="interactive inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-border-warm bg-card/90 px-7 py-4 text-lg font-semibold text-foreground hover:border-sage hover:text-sage-dark"
              >
                體驗街坊端 App
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border-warm/80 pt-8 sm:gap-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="tabular-nums text-2xl font-bold tracking-tight text-sage-dark sm:text-3xl">
                    {value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium leading-snug text-muted sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:-mr-6">
            <div className="absolute -left-6 top-8 z-10 hidden max-w-[11rem] rounded-2xl glass-panel p-4 lg:block">
              <p className="text-xs font-medium text-muted">本月換物日</p>
              <p className="mt-1 font-display text-base font-semibold text-foreground">屯門東邨社區會堂</p>
              <p className="mt-0.5 text-sm text-sage-dark">4月18日 · 下午2時</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}

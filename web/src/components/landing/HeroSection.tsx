import Link from 'next/link'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-light via-cream to-wood-light/40">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sage/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-terracotta/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-white/80 px-4 py-2 text-sm font-medium text-sage-dark">
            <Sparkles className="h-4 w-4" />
            香港社區循環經濟與升級改造平台
          </div>

          <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            從囤積到交流，
            <span className="text-sage-dark"> 發掘舊物的隱藏價值</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
            不少長者抱持惜物心態，保留「修好還能用」或「總有一天會用到」的物品。
            我們在社區內舉辦換物市集，提供維修與升級改造服務，讓閒置資源得以流轉，
            重新編織長者的社區支援網絡。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#join"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl bg-terracotta px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-terracotta/25 transition-colors hover:bg-terracotta-dark"
            >
              立即登記參加
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/hall"
              className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border-2 border-border-warm bg-white px-6 py-4 text-lg font-semibold text-foreground transition-colors hover:border-sage hover:text-sage-dark"
            >
              體驗街坊端 App
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-terracotta" />
              針對有囤積習慣的長者
            </span>
            <span>·</span>
            <span>線下為主、數碼為輔</span>
            <span>·</span>
            <span>修繕先行、低壓力釋出</span>
          </div>
        </div>
      </div>
    </section>
  )
}

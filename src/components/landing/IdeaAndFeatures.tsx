import { Gem, Users, Palette } from 'lucide-react'
import { coreFeatures, ideaPillars } from '@/lib/landingData'

const iconMap = {
  gem: Gem,
  users: Users,
  palette: Palette,
} as const

export function IdeaSection() {
  return (
    <section id="idea" className="scroll-mt-20 bg-gradient-to-b from-cream to-sage-light/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark">04 · 核心理念</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            發掘價值 · 與人交流 · 藝術美學
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            以溫柔的方式改變囤積物品的生活習慣，而非強迫清理。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ideaPillars.map(({ icon, title, description }, index) => {
            const Icon = iconMap[icon]
            return (
              <div key={title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
                  <Icon className="h-8 w-8 text-sage-dark" strokeWidth={1.75} />
                </div>
                <span className="mt-4 inline-block text-sm font-bold text-terracotta">
                  0{index + 1}
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 rounded-2xl border-2 border-sage/30 bg-white p-6 sm:p-8">
          <p className="text-center text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            「改變囤積物品生活的習慣」—— 不是叫人丟掉回憶，而是讓回憶在社區裡繼續發光。
          </p>
        </div>
      </div>
    </section>
  )
}

export function CoreFeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 bg-white py-12 pt-16 sm:py-20 sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">核心功能</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">三大社區服務支柱</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coreFeatures.map(({ emoji, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border-2 border-border-warm bg-cream p-6 transition-all hover:border-sage hover:shadow-lg"
            >
              <span className="text-4xl" role="img" aria-hidden>
                {emoji}
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
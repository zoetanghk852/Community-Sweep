import { Gem, Users, Palette } from 'lucide-react'
import { coreFeatures, ideaPillars } from '@/lib/landingData'

const iconMap = {
  gem: Gem,
  users: Users,
  palette: Palette,
} as const

export function IdeaSection() {
  return (
    <section id="idea" className="section-padding scroll-mt-20 bg-gradient-to-b from-page to-sage-light/25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">核心理念</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">
              發掘價值 · 與人交流 · 藝術美學
            </h2>
            <p className="prose-width mt-5 text-lg leading-relaxed text-ink-muted">
              以溫柔的方式改變囤積物品的生活習慣，而非強迫清理。
            </p>
          </div>

          <blockquote className="rounded-2xl border-l-4 border-sage bg-card/80 p-6 shadow-warm sm:p-8">
            <p className="font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              「改變囤積物品生活的習慣」—— 不是叫人丟掉回憶，而是讓回憶在社區裡繼續發光。
            </p>
          </blockquote>
        </div>

        <div className="mt-14 space-y-6">
          {ideaPillars.map(({ icon, title, description }, index) => {
            const Icon = iconMap[icon]
            const isEven = index % 2 === 1
            return (
              <article
                key={title}
                className={[
                  'group grid items-start gap-6 rounded-2xl bg-card/70 p-6 shadow-warm transition-shadow hover:shadow-warm-lg sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8',
                  isEven ? 'lg:ml-12' : 'lg:mr-12',
                ].join(' ')}
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-light transition-colors group-hover:bg-sage/15">
                    <Icon className="h-7 w-7 text-sage-dark" strokeWidth={1.75} />
                  </div>
                  <span className="tabular-nums text-sm font-semibold text-terracotta">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-muted">{description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CoreFeaturesSection() {
  const [featured, ...rest] = coreFeatures

  return (
    <section id="features" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-label">核心功能</p>
          <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">三大社區服務支柱</h2>
        </div>

        <article className="group relative mt-12 overflow-hidden rounded-3xl bg-sage-dark p-8 text-white shadow-lift sm:p-10">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]"
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <span className="text-6xl" role="img" aria-hidden>
              {featured.emoji}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-white/85 sm:text-lg">
                {featured.description}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {rest.map(({ emoji, title, description }, index) => (
            <article
              key={title}
              className={[
                'group flex flex-col rounded-2xl bg-page p-7 transition-all hover:-translate-y-0.5 hover:shadow-warm-lg',
                index === 1 ? 'lg:mt-10' : '',
              ].join(' ')}
            >
              <span className="text-4xl" role="img" aria-hidden>
                {emoji}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

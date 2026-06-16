import { Gem, Users, Palette, BookOpen, Repeat, Wrench } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { coreFeatures, ideaPillars } from '@/lib/landingData'

const iconMap = {
  gem: Gem,
  users: Users,
  palette: Palette,
} as const

const featureIconMap = {
  repeat: Repeat,
  book: BookOpen,
  wrench: Wrench,
} as const

export function IdeaSection() {
  return (
    <section id="idea" className="section-padding scroll-mt-20 bg-gradient-to-b from-page to-sage-light/25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="section-title text-3xl text-foreground sm:text-4xl">
            發掘價值 · 與人交流 · 藝術美學
          </h2>
          <p className="mt-5 w-full max-w-[38ch] text-pretty text-lg leading-relaxed text-ink-muted sm:max-w-none">
            以溫柔的方式改變囤積物品的生活習慣，而非強迫清理。
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {ideaPillars.map(({ icon, title, description }, index) => {
            const Icon = iconMap[icon]
            const isEven = index % 2 === 1
            return (
              <Reveal key={title} delay={index * 0.08}>
                <article
                  className={[
                    'group grid items-start gap-6 rounded-2xl bg-card/70 p-6 shadow-warm transition-shadow hover:shadow-warm-lg sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8',
                    isEven ? 'lg:ml-12' : 'lg:mr-12',
                  ].join(' ')}
                >
                  <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-light transition-colors group-hover:bg-sage/15">
                      <Icon className="h-7 w-7 text-sage-dark" strokeWidth={1.75} aria-hidden />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-ink-muted">{description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CoreFeaturesSection() {
  const [featured, ...rest] = coreFeatures
  const FeaturedIcon = featureIconMap[featured.icon]

  return (
    <section id="features" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="section-title max-w-2xl text-3xl text-foreground sm:text-4xl">三大社區服務支柱</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="group relative mt-12 overflow-hidden rounded-3xl bg-sage-dark p-8 text-white shadow-lift sm:p-10">
            <div
              className="absolute inset-0 bg-[url('https://picsum.photos/seed/community-exchange/1200/800')] bg-cover bg-center opacity-20 mix-blend-overlay"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]"
              aria-hidden
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <FeaturedIcon className="h-8 w-8 text-white" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{featured.title}</h3>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-white/85 sm:text-lg">
                  {featured.description}
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map(({ icon, title, description }, index) => {
            const Icon = featureIconMap[icon]
            return (
              <Reveal key={title} delay={0.12 + index * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-border-light bg-page p-7 transition-all hover:-translate-y-0.5 hover:shadow-warm-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light">
                    <Icon className="h-6 w-6 text-sage-dark" strokeWidth={2} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">{description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

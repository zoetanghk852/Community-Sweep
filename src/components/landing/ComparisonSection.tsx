import { Reveal } from '@/components/motion/Reveal'
import { comparisonRows } from '@/lib/landingData'

export function ComparisonSection() {
  const highlighted = comparisonRows.find((row) => row.highlight)!
  const others = comparisonRows.filter((row) => !row.highlight)

  return (
    <section id="compare" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="section-title max-w-2xl text-3xl text-foreground sm:text-4xl">服務類別與平台比較</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="mt-12 rounded-3xl border-2 border-sage/35 bg-sage-light/45 p-7 shadow-warm sm:p-9">
            <p className="text-sm font-semibold text-sage-dark">本服務</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{highlighted.name}</h3>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium text-muted">主要對象</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{highlighted.audience}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted">核心運作模式</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{highlighted.mode}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-muted">社區連結重點</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{highlighted.focus}</dd>
              </div>
            </dl>
          </article>
        </Reveal>

        <div className="mt-6 space-y-3">
          {others.map((row, index) => (
            <Reveal key={row.name} delay={Math.min(index * 0.05, 0.2)}>
              <article className="grid gap-3 rounded-2xl border border-border-light bg-page px-5 py-4 transition-shadow hover:shadow-warm sm:grid-cols-[1.1fr_1fr_1.2fr_1.2fr] sm:items-center sm:gap-6 sm:px-6 sm:py-5">
                <h4 className="font-semibold text-foreground">{row.name}</h4>
                <p className="text-sm text-ink-muted">{row.audience}</p>
                <p className="text-sm text-ink-muted">{row.mode}</p>
                <p className="text-sm text-ink-muted">{row.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { comparisonRows } from '@/lib/landingData'

export function ComparisonSection() {
  const highlighted = comparisonRows.find((row) => row.highlight)!
  const others = comparisonRows.filter((row) => !row.highlight)

  return (
    <section id="compare" className="section-padding scroll-mt-20 bg-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-label">與現有服務對比</p>
          <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">互補而非重複的定位</h2>
          <p className="mt-4 text-lg text-ink-muted">
            香港已有相類服務，本計畫採互補策略，專注長者囤積議題與社區藝術改造。
          </p>
        </div>

        <article className="mt-12 rounded-3xl bg-sage-dark p-7 text-white shadow-lift sm:p-9">
          <p className="text-xs font-semibold tracking-wide text-sage-light">本服務</p>
          <h3 className="mt-2 font-display text-2xl font-bold">{highlighted.name}</h3>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium text-white/60">主要對象</dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/90">{highlighted.audience}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-white/60">核心運作模式</dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/90">{highlighted.mode}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-white/60">社區連結重點</dt>
              <dd className="mt-1 text-sm leading-relaxed text-white/90">{highlighted.focus}</dd>
            </div>
          </dl>
        </article>

        <div className="mt-6 space-y-3">
          {others.map((row) => (
            <article
              key={row.name}
              className="grid gap-3 rounded-2xl bg-card px-5 py-4 shadow-warm transition-shadow hover:shadow-warm-lg sm:grid-cols-[1.1fr_1fr_1.2fr_1.2fr] sm:items-center sm:gap-6 sm:px-6 sm:py-5"
            >
              <h4 className="font-semibold text-foreground">{row.name}</h4>
              <p className="text-sm text-ink-muted">{row.audience}</p>
              <p className="text-sm text-ink-muted">{row.mode}</p>
              <p className="text-sm text-ink-muted">{row.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { comparisonRows } from '@/lib/landingData'

export function ComparisonSection() {
  return (
    <section id="compare" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">
            06 · 與現有服務對比
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            互補而非重複的定位
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            香港已有相類服務，本計畫採互補策略，專注長者囤積議題與社區藝術改造。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border-2 border-border-warm bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-border-warm bg-sage-light/50">
                <th className="px-4 py-4 font-bold text-foreground sm:px-6">服務名稱</th>
                <th className="px-4 py-4 font-bold text-foreground sm:px-6">主要對象</th>
                <th className="px-4 py-4 font-bold text-foreground sm:px-6">核心運作模式</th>
                <th className="px-4 py-4 font-bold text-foreground sm:px-6">社區連結重點</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.name}
                  className={[
                    'border-b border-border-warm last:border-b-0',
                    row.highlight ? 'bg-sage-light/40' : 'hover:bg-cream/50',
                  ].join(' ')}
                >
                  <td className="px-4 py-4 font-semibold text-foreground sm:px-6">
                    {row.highlight && (
                      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-sage-dark">
                        本服務
                      </span>
                    )}
                    {row.name}
                  </td>
                  <td className="px-4 py-4 text-ink-muted sm:px-6">{row.audience}</td>
                  <td className="px-4 py-4 text-ink-muted sm:px-6">{row.mode}</td>
                  <td className="px-4 py-4 text-ink-muted sm:px-6">{row.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

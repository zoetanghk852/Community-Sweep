const stats = [
  { value: '237', label: '示範積分餘額' },
  { value: '12', label: '本月換物活動' },
  { value: '47', label: '已登記街坊' },
] as const

export function HeroStatsStrip() {
  return (
    <section
      className="border-y border-border-warm/80 bg-card"
      aria-label="社區服務概況"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <dl className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center sm:text-left">
              <dt className="sr-only">{label}</dt>
              <dd className="tabular-nums text-2xl font-bold tracking-tight text-sage-dark sm:text-3xl">
                {value}
              </dd>
              <dd className="mt-1 text-xs font-medium leading-snug text-muted sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

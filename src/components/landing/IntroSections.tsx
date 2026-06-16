import { Users, Brain, ShieldOff } from 'lucide-react'

export function ServiceIntroSection() {
  const items = [
    {
      icon: Users,
      title: '活化社區閒置資源',
      text: '解決社區內閒置資源（物資、修繕技能）缺乏流動管道而造成的浪費問題。',
    },
    {
      icon: Brain,
      title: '改善心理與社交孤立',
      text: '透過藝術美學的引入與人際交流的增加，填補長者心理上的空虛，從根本改善囤積習慣。',
    },
    {
      icon: ShieldOff,
      title: '強化社區凝聚力',
      text: '透過市集與工作坊的互動，促進鄰里交流，增加社區網絡的互動性與連結。',
    },
  ] as const

  return (
    <section id="intro" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label">服務簡介</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">社區換物carousell</h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-muted lg:text-right">
            本計畫致力於社區內舉辦換物市集，並提供物品維修與升級改造服務，讓閒置資源得以流轉，
            發掘其隱藏價值，重新編織長者的社區支援網絡。
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {items.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={[
                'group rounded-2xl bg-page p-6 transition-all hover:-translate-y-0.5 hover:shadow-warm',
                index === 1 ? 'sm:row-span-2 lg:row-span-1 lg:mt-8' : '',
              ].join(' ')}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light transition-colors group-hover:bg-sage/15">
                <Icon className="h-6 w-6 text-sage-dark" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TargetAudienceSection() {
  return (
    <section id="audience" className="section-padding scroll-mt-20 bg-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-label">主要服務對象</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">
              長者人士
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
              不少長者抱持惜物心態，都有儲存舊物的習慣，常保留「修理好還能用」或
              「總有一天會用到」的物品。加上長者普遍出入較為不便，難以將物品帶到區外
              維修或妥善棄置，進而形成囤積。
            </p>
          </div>

          <div className="relative rounded-3xl bg-card p-7 shadow-warm-lg sm:p-9">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border border-sage/20" aria-hidden />
            <h3 className="font-display text-xl font-bold text-foreground">為什麼不用「斷捨離」？</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              傳統的「斷捨離」宣導或強行清理，容易引起長者的防備與抗拒。當長者透過
              交換物品、分享舊物而結識新街坊，生活重心便會逐漸從「囤積物品」轉移到
              「人際交流」。
            </p>
            <div className="mt-6 rounded-xl bg-sage-light/70 p-5">
              <p className="text-base font-medium leading-relaxed text-sage-dark">
                讓長者帶著物品走入人群，將「物品」轉化為介入點，從根源解決長者背後的
                心理與社交需求，轉化為「分享資源、造福他人」的成就感。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { RegistrationForm } from '@/components/landing/RegistrationForm'

export function JoinSection() {
  return (
    <section id="join" className="section-padding scroll-mt-20 bg-page">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="section-label">加入我們</p>
            <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">登記參加社區活動</h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-muted">
              填寫表格後，我們會在 3 個工作天內以電話聯絡你，介紹最近的換物日或修繕工作坊。
            </p>

            <div className="mt-10 space-y-4">
              {[
                { step: '01', text: '填寫基本資料與感興趣的活動' },
                { step: '02', text: '義工或職員以電話跟進' },
                { step: '03', text: '安排上門協助或社區會堂見面' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="tabular-nums text-sm font-bold text-sage-dark">{step}</span>
                  <p className="text-base text-ink-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}

import { RegistrationForm } from '@/components/landing/RegistrationForm'

export function JoinSection() {
  return (
    <section id="join" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-terracotta">加入我們</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">登記參加社區活動</h2>
          <p className="mt-4 text-lg text-ink-muted">
            填寫以下表格，我們會以電話聯絡你介紹最近的換物日或修繕工作坊
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}

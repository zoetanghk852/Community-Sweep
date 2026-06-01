import { BookOpen, RefreshCw, MessageCircleHeart } from 'lucide-react'

export function HoardingSection() {
  return (
    <section id="hoarding" className="scroll-mt-20 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage">03 · 囤積習慣的理解</p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            囤積不只是「捨唔得丟」
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            理解背後的心理需要，才能找到溫柔而有效的介入方式。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border-2 border-border-warm p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10">
              <BookOpen className="h-6 w-6 text-terracotta" />
            </div>
            <h3 className="text-lg font-bold">DSM-5 囤積症</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              精神疾病診斷與統計手冊第五版（DSM-5）已將「囤積症（Hoarding Disorder）」
              列為獨立的精神疾病，指出囤積往往是為了填補情感空虛或應對創傷。
            </p>
          </article>

          <article className="rounded-2xl border-2 border-border-warm p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-wood-light">
              <MessageCircleHeart className="h-6 w-6 text-terracotta-dark" />
            </div>
            <h3 className="text-lg font-bold">物件依戀理論</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              心理學家 Frost 和 Steketee 指出，患者將物品視為自我認同的延伸或情感的避風港。
              每件舊物都承載著回憶、身份與安全感。
            </p>
          </article>

          <article className="rounded-2xl border-2 border-sage/40 bg-sage-light/30 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light">
              <RefreshCw className="h-6 w-6 text-sage-dark" />
            </div>
            <h3 className="text-lg font-bold text-sage-dark">從「囤積」到「交流」</h3>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              將失去物品的「剝奪感」，轉化為「分享資源、造福他人」的成就感，
              讓長者自發地改變生活習慣，將生活重心自然轉移至人際交流。
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

import { BookOpen, RefreshCw, MessageCircleHeart } from 'lucide-react'

const cards = [
  {
    icon: BookOpen,
    title: 'DSM-5 囤積症',
    description:
      '精神疾病診斷與統計手冊第五版（DSM-5）已將「囤積症（Hoarding Disorder）」列為獨立的精神疾病，指出囤積往往是為了填補情感空虛或應對創傷。',
    accent: 'bg-terracotta/10 text-terracotta',
    featured: false,
  },
  {
    icon: MessageCircleHeart,
    title: '物件依戀理論',
    description:
      '心理學家 Frost 和 Steketee 指出，患者將物品視為自我認同的延伸或情感的避風港。每件舊物都承載著回憶、身份與安全感。',
    accent: 'bg-wood-light text-terracotta-dark',
    featured: false,
  },
  {
    icon: RefreshCw,
    title: '從「囤積」到「交流」',
    description:
      '將失去物品的「剝奪感」，轉化為「分享資源、造福他人」的成就感，讓長者自發地改變生活習慣，將生活重心自然轉移至人際交流。',
    accent: 'bg-sage-light text-sage-dark',
    featured: true,
  },
] as const

export function HoardingSection() {
  return (
    <section id="hoarding" className="section-padding scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-label">囤積習慣的理解</p>
          <h2 className="section-title mt-3 text-3xl text-foreground sm:text-4xl">
            囤積不只是「捨唔得丟」
          </h2>
          <p className="mt-4 text-lg text-ink-muted">理解背後的心理需要，才能找到溫柔而有效的介入方式。</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cards.slice(0, 2).map(({ icon: Icon, title, description, accent }) => (
            <article key={title} className="rounded-2xl bg-page p-7 transition-shadow hover:shadow-warm">
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${accent}`}>
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{description}</p>
            </article>
          ))}

          <article className="rounded-2xl bg-sage-dark p-7 text-white shadow-warm-lg lg:col-span-2 lg:mx-16">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <RefreshCw className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{cards[2].title}</h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/85">{cards[2].description}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

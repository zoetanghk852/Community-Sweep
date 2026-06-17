import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { faqItems } from '@/lib/landingData'

export function FaqSection() {
  return (
    <section id="faq" className="section-padding scroll-mt-20 bg-page" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 id="faq-heading" className="section-title text-center text-3xl text-foreground sm:text-4xl">
            常見問題
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-center text-lg leading-relaxed text-ink-muted">
            關於換物市集、社區感謝積分與線上換物的常見疑問。
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={Math.min(index * 0.05, 0.2)}>
              <details className="group rounded-2xl border border-border-light bg-card shadow-warm open:border-sage/35 open:bg-sage-light/20">
                <summary className="interactive flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-lg font-semibold text-foreground marker:content-none sm:px-6 sm:py-6">
                  <span>{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-sage-dark transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-border-light/80 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <p className="text-base leading-relaxed text-ink-muted">{item.answer}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

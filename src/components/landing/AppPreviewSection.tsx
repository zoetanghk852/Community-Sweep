import Link from 'next/link'

import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { AppHallPreview } from '@/components/landing/AppHallPreview'

import { Reveal } from '@/components/motion/Reveal'

import { appPreviewHighlights } from '@/lib/landingData'



export function AppPreviewSection() {

  return (

    <section id="app-preview" className="section-padding scroll-mt-20 overflow-hidden bg-page">

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          <div className="lg:col-start-1 lg:row-start-1 lg:pr-4">

            <Reveal>

              <h2 className="section-title text-3xl text-foreground sm:text-4xl">長者友善的App端設計</h2>

              <p className="prose-width mt-5 text-lg leading-relaxed text-ink-muted">

                示範 App 採大字體、高對比、大按鈕設計，配合積分錢包及活動日程，

                讓長者（或義工代操作）輕鬆參與社區活動。

              </p>

            </Reveal>

          </div>



          <Reveal className="lg:col-start-2 lg:row-span-2 lg:row-start-1" delay={0.1}>

            <AppHallPreview />

          </Reveal>



          <div className="lg:col-start-1 lg:row-start-2 lg:pr-4">

            <Reveal>

              <ul className="space-y-5 lg:mt-0">

                {appPreviewHighlights.map(({ title, description }) => (

                  <li key={title} className="flex gap-4 border-l-2 border-sage/30 pl-4">

                    <div>

                      <p className="font-semibold text-foreground">{title}</p>

                      <p className="mt-1 text-base text-ink-muted">{description}</p>

                    </div>

                  </li>

                ))}

              </ul>



              <Link

                href="/hall"

                className="interactive mt-10 inline-flex min-h-[3.25rem] items-center gap-2 rounded-2xl bg-sage px-7 py-4 text-lg font-semibold text-white hover:bg-sage-dark hover:shadow-warm-lg"

              >

                體驗示範 App

                <ArrowRight className="h-5 w-5" weight="bold" />

              </Link>

            </Reveal>

          </div>

        </div>

      </div>

    </section>

  )

}



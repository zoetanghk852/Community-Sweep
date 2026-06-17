import { HeroSectionContent } from '@/components/landing/HeroSectionContent'



export function HeroSection() {

  return (

    <section className="relative overflow-hidden bg-page">

      <div

        className="absolute inset-0 bg-[url('https://picsum.photos/seed/community-hall/1920/1080')] bg-cover bg-center opacity-[0.07]"

        aria-hidden

      />

      <div

        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(77,122,100,0.14),transparent_55%)]"

        aria-hidden

      />

      <div

        className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-page"

        aria-hidden

      />

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-sage/8 blur-3xl" aria-hidden />

      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-terracotta/6 blur-3xl" aria-hidden />



      <div className="relative mx-auto flex min-h-[min(100dvh,52rem)] max-w-6xl flex-col justify-center px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20">

        <HeroSectionContent />

      </div>

    </section>

  )

}



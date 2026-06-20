import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

type SubPageIntroProps = {
  title: string
  description: string
}

export function SubPageIntro({ title, description }: SubPageIntroProps) {
  return (
    <div className="border-b border-border-warm bg-page py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/"
          className="interactive inline-flex items-center gap-2 text-base font-medium text-sage-dark hover:text-sage"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden />
          返回首頁
        </Link>
        <h1 className="section-title mt-6 text-3xl text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  )
}

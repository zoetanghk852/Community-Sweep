import { Leaf } from 'lucide-react'

interface SiteHeaderProps {
  title: string
  subtitle?: string
}

export function SiteHeader({ title, subtitle }: SiteHeaderProps) {
  return (
    <header className="mb-6 flex items-start gap-3">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-light"
        aria-hidden
      >
        <Leaf className="h-7 w-7 text-sage-dark" strokeWidth={2.25} />
      </div>
      <div>
        <p className="text-base font-medium text-sage-dark">社區交換與修繕平台</p>
        <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-base text-ink-muted">{subtitle}</p>
        )}
      </div>
    </header>
  )
}

import type { ReactNode } from 'react'

interface SectionCardProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  id?: string
}

export function SectionCard({ title, subtitle, children, className = '', id }: SectionCardProps) {
  return (
    <section
      id={id}
      className={`rounded-2xl border-2 border-border-warm bg-white p-5 shadow-sm ${className}`}
    >
      {(title || subtitle) && (
        <header className="mb-4">
          {title && (
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-1 text-base text-ink-muted">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}

import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'sage' | 'outline'

const variants: Record<Variant, string> = {
  primary:
    'bg-terracotta text-white hover:bg-terracotta-dark active:bg-terracotta-dark shadow-md shadow-terracotta/20',
  secondary:
    'bg-wood-light text-foreground hover:bg-wood/40 border-2 border-border-warm',
  sage: 'bg-sage text-white hover:bg-sage-dark active:bg-sage-dark shadow-md shadow-sage/20',
  outline:
    'bg-white text-foreground border-2 border-border-warm hover:border-terracotta hover:text-terracotta-dark',
}

interface LargeButtonProps {
  children: ReactNode
  icon?: LucideIcon
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  ariaLabel?: string
}

export function LargeButton({
  children,
  icon: Icon,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  ariaLabel,
}: LargeButtonProps) {
  const base =
    'inline-flex min-h-[3.25rem] w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:cursor-not-allowed disabled:opacity-50'

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="h-7 w-7 shrink-0" strokeWidth={2.25} aria-hidden />}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}

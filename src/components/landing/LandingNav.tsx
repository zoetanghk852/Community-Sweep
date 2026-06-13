'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { landingNavLinks } from '@/lib/landingData'

export function LandingNav() {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const sectionIds = landingNavLinks.map(({ href }) => href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border-warm/50 glass-panel">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="interactive flex items-center gap-2.5 rounded-xl p-1 hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light">
            <Leaf className="h-6 w-6 text-sage-dark" strokeWidth={2.25} />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-sage-dark">社區換物carousell</p>
            <p className="text-xs text-muted">香港</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="主要導覽">
          {landingNavLinks.map(({ href, label }) => {
            const isActive = activeHash === href
            return (
              <a
                key={href}
                href={href}
                className={[
                  'interactive rounded-lg px-3 py-2 text-sm font-medium',
                  isActive
                    ? 'bg-sage-light text-sage-dark'
                    : 'text-ink-muted hover:bg-sage-light/60 hover:text-sage-dark',
                ].join(' ')}
                aria-current={isActive ? 'true' : undefined}
              >
                {label}
              </a>
            )
          })}
          <Link
            href="/hall"
            className="interactive ml-3 rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark hover:shadow-warm"
          >
            體驗示範 App
          </Link>
        </nav>

        <button
          type="button"
          className="interactive rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          {...(open ? { 'aria-expanded': true as const } : {})}
          aria-label={open ? '關閉選單' : '開啟選單'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-warm bg-cream/98 px-4 py-3 lg:hidden" aria-label="手機導覽">
          <div className="flex flex-col gap-1">
            {landingNavLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="interactive rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-sage-light"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              href="/hall"
              className="interactive mt-2 rounded-xl bg-sage px-4 py-3 text-center text-base font-semibold text-white hover:bg-sage-dark"
              onClick={() => setOpen(false)}
            >
              體驗示範 App
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import { landingNavLinks } from '@/lib/landingData'

export function LandingNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-warm/60 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light">
            <Leaf className="h-6 w-6 text-sage-dark" strokeWidth={2.25} />
          </div>
          <div>
            <p className="text-sm font-semibold text-sage-dark">社區換物carousell</p>
            <p className="text-xs text-ink-muted">香港</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要導覽">
          {landingNavLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-sage-light hover:text-sage-dark"
            >
              {label}
            </a>
          ))}
          <Link
            href="/hall"
            className="ml-2 rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            體驗示範 App
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          {...(open ? { 'aria-expanded': true as const } : {})}
          aria-label={open ? '關閉選單' : '開啟選單'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-warm bg-cream px-4 py-3 lg:hidden" aria-label="手機導覽">
          <div className="flex flex-col gap-1">
            {landingNavLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              href="/hall"
              className="mt-2 rounded-xl bg-sage px-4 py-3 text-center text-base font-semibold text-white"
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

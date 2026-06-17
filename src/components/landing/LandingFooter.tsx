import Link from 'next/link'
import { Leaf } from 'lucide-react'

const footerLinks = [
  { href: '#features', label: '核心功能' },
  { href: '#app-preview', label: 'App 預覽' },
  { href: '#marketplace', label: '線上換物' },
  { href: '#join', label: '加入我們' },
  { href: '/hall', label: '示範 App', isRoute: true },
] as const

export function LandingFooter() {
  return (
    <footer className="border-t border-border-warm bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Leaf className="h-6 w-6 text-sage-dark" strokeWidth={2} />
              <span className="font-display text-lg font-bold">社區換物carousell</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              以每月換物市集（換物攤、維修攤、數碼義診攤），協助有囤積習慣的長者發掘舊物價值，重建社區連結。
            </p>
          </div>

          <nav aria-label="頁尾導覽">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted">
              {footerLinks.map(({ href, label, ...rest }) => (
                <li key={href}>
                  {'isRoute' in rest && rest.isRoute ? (
                    <Link href={href} className="interactive hover:text-sage-dark">
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="interactive hover:text-sage-dark">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-border-warm pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>社區換物carousell · 香港 · 規劃示範</p>
          <div className="flex gap-5">
            <a href="#join" className="interactive hover:text-sage-dark">
              私隱政策（示範）
            </a>
            <a href="#join" className="interactive hover:text-sage-dark">
              使用條款（示範）
            </a>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">
          資料處理符合《個人資料（私隱）條例》（PDPO）設計原則
        </p>
      </div>
    </footer>
  )
}

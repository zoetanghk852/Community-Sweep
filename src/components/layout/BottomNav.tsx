'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Filter, Home, User } from 'lucide-react'

const links = [
  { href: '/hall', label: '主頁', icon: Home },
  { href: '/marketplace', label: '物品篩選', icon: Filter },
  { href: '/schedule', label: '日程', icon: Calendar },
  { href: '/account', label: '帳戶', icon: User },
] as const

export function BottomNav() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activePath = mounted ? (pathname ?? '') : ''

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white"
      aria-label="主要導覽"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-around px-1 py-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = activePath === href || activePath.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              className={[
                'flex min-h-[3.25rem] min-w-[4rem] flex-1 flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-sm font-medium transition-colors',
                active ? 'text-terracotta' : 'text-slate-500 hover:text-slate-700',
              ].join(' ')}
              {...(active ? { 'aria-current': 'page' as const } : {})}
            >
              <Icon
                className="h-6 w-6"
                strokeWidth={active ? 2.5 : 2}
                aria-hidden
              />
              <span className="leading-tight">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

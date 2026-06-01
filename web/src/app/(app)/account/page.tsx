import Link from 'next/link'
import {
  ChevronRight,
  ClipboardList,
  Coins,
  Globe,
  History,
  Settings,
} from 'lucide-react'
import { RegistrationRecords } from '@/components/account/RegistrationRecords'
import { HomeBalance } from '@/components/home/HomeBalance'
import { mockMemberProfile, mockWallet } from '@/lib/mockData'

const menuItems = [
  {
    href: '/wallet',
    icon: Coins,
    label: '儲分與兌換',
    description: '賺分、換領禮物同修繕',
  },
  {
    href: '/wallet?tab=earn',
    icon: History,
    label: '積分紀錄',
    description: '查看最近流水',
  },
  {
    href: '/account/registrations',
    icon: ClipboardList,
    label: '活動報名紀錄',
    description: '已報名的社區活動',
  },
  {
    href: '/account/settings',
    icon: Settings,
    label: '設定',
    description: '查看帳戶資料同偏好',
  },
  {
    href: '/',
    icon: Globe,
    label: '返回平台首頁',
    description: '服務理念、報名與社區介紹',
  },
] as const

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-border-light bg-cream-dark text-5xl leading-none"
          role="img"
          aria-label={`${mockWallet.memberName}的頭像`}
        >
          😊
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{mockMemberProfile.memberName}</h1>
          <p className="text-base text-muted">社區編號 {mockMemberProfile.communityId}</p>
          <p className="text-base text-muted">{mockMemberProfile.phone}</p>
        </div>
      </header>

      <HomeBalance fallbackWallet={mockWallet} />

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">活動報名紀錄</h2>
          <Link
            href="/account/registrations"
            className="flex items-center gap-0.5 text-base font-medium text-terracotta"
          >
            全部
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <RegistrationRecords />
      </section>

      <nav aria-label="帳戶功能">
        <ul className="overflow-hidden rounded-2xl border border-border-light bg-card divide-y divide-border-light">
          {menuItems.map(({ href, icon: Icon, label, description }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-slate-50"
              >
                <div className="rounded-xl bg-cream-dark p-2.5">
                  <Icon className="h-6 w-6 text-terracotta" strokeWidth={2} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold text-foreground">{label}</p>
                  <p className="text-sm text-muted">{description}</p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-300" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

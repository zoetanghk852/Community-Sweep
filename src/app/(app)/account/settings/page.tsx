import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AccountSettings } from '@/components/account/AccountSettings'

export default function AccountSettingsPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-2">
        <Link
          href="/account"
          className="icon-btn"
          aria-label="返回帳戶"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={2.25} />
        </Link>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">設定</h1>
      </header>

      <AccountSettings />
    </div>
  )
}

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { RegistrationRecords } from '@/components/account/RegistrationRecords'

export default function RegistrationRecordsPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-2">
        <Link
          href="/account"
          className="rounded-lg p-1.5 text-foreground hover:bg-slate-100"
          aria-label="返回帳戶"
        >
          <ArrowLeft className="h-6 w-6" strokeWidth={2.25} />
        </Link>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">活動報名紀錄</h1>
      </header>

      <RegistrationRecords />
    </div>
  )
}

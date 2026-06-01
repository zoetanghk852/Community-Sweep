import { mockMemberProfile } from '@/lib/mockData'

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-border-light px-4 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <dt className="text-base font-medium text-muted">{label}</dt>
      <dd className="text-lg font-semibold text-foreground">{value}</dd>
    </div>
  )
}

function PreferenceRow({ label, enabled }: { label: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border-light px-4 py-4 last:border-b-0">
      <span className="text-base font-medium text-foreground">{label}</span>
      <span
        className={[
          'rounded-full px-3 py-1 text-sm font-semibold',
          enabled ? 'bg-sage-light text-sage-dark' : 'bg-slate-100 text-slate-600',
        ].join(' ')}
      >
        {enabled ? '已開啟' : '已關閉'}
      </span>
    </div>
  )
}

export function AccountSettings() {
  const profile = mockMemberProfile

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-2xl border border-border-light bg-card">
        <h2 className="border-b border-border-light bg-cream px-4 py-3 text-lg font-bold text-foreground">
          基本資料
        </h2>
        <dl>
          <InfoRow label="姓名" value={profile.memberName} />
          <InfoRow label="社區編號" value={profile.communityId} />
          <InfoRow label="手提電話" value={profile.phone} />
          <InfoRow label="紙本積分卡號" value={profile.paperCardNo} />
          <InfoRow label="居住地區" value={profile.district} />
          <InfoRow label="屋邨／屋苑" value={profile.estate} />
          <InfoRow label="電郵" value={profile.email} />
        </dl>
      </section>

      <section className="overflow-hidden rounded-2xl border border-border-light bg-card">
        <h2 className="border-b border-border-light bg-cream px-4 py-3 text-lg font-bold text-foreground">
          偏好設定（示範）
        </h2>
        <div>
          <PreferenceRow label="大字模式" enabled={profile.largeTextMode} />
          <PreferenceRow label="活動通知" enabled={profile.activityNotifications} />
          <PreferenceRow label="電話提醒" enabled={profile.phoneReminders} />
        </div>
      </section>

      <p className="text-center text-sm text-muted">
        以上為示範帳戶資料，實際服務將由社區中心協助登記及更新。
      </p>
    </div>
  )
}

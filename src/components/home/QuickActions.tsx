import { QrCode, Upload, Wrench } from 'lucide-react'
import { LargeButton } from '@/components/ui/LargeButton'

export function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading">
      <h2 id="quick-actions-heading" className="mb-4 text-xl font-bold text-foreground">
        快捷功能
      </h2>
      <div className="flex flex-col gap-3">
        <LargeButton href="/wallet?tab=earn" icon={QrCode} variant="primary" ariaLabel="掃碼賺分">
          掃碼賺分
        </LargeButton>
        <LargeButton href="/explore" icon={Wrench} variant="sage" ariaLabel="尋找修繕師傅">
          尋找修繕師傅
        </LargeButton>
        <LargeButton href="/marketplace" icon={Upload} variant="secondary" ariaLabel="上傳閒置物品">
          上傳閒置物品
        </LargeButton>
      </div>
    </section>
  )
}

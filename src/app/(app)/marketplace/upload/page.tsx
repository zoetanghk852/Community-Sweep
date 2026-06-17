import type { Metadata } from 'next'
import { UploadItemForm, UploadItemPageHeader } from '@/components/marketplace/UploadItemForm'

export const metadata: Metadata = {
  title: '上傳閒置物品｜社區換物carousell',
}

export default function MarketplaceUploadPage() {
  return (
    <div className="space-y-6">
      <UploadItemPageHeader />
      <UploadItemForm />
    </div>
  )
}

import { UploadItemForm, UploadItemPageHeader } from '@/components/marketplace/UploadItemForm'

export default function MarketplaceUploadPage() {
  return (
    <div className="space-y-6">
      <UploadItemPageHeader />
      <UploadItemForm />
    </div>
  )
}

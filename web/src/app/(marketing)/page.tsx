import { CoreFeaturesSection } from '@/components/landing/IdeaAndFeatures'
import { AppPreviewSection } from '@/components/landing/AppPreviewSection'
import { ItemMarketplace } from '@/components/landing/ItemMarketplace'
import { JoinSection } from '@/components/landing/JoinSection'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'

export default function LandingPage() {
  return (
    <>
      <CoreFeaturesSection />
      <AppPreviewSection />
      <ItemMarketplace />
      <JoinSection />
      <MockPaymentGateway />
    </>
  )
}

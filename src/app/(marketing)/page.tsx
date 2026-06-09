import { CoreFeaturesSection } from '@/components/landing/IdeaAndFeatures'
import { AppPreviewSection } from '@/components/landing/AppPreviewSection'
import { ItemMarketplace } from '@/components/landing/ItemMarketplace'
import { JoinSection } from '@/components/landing/JoinSection'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'
import { HeroSection } from '@/components/landing/HeroSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <CoreFeaturesSection />
      <AppPreviewSection />
      <ItemMarketplace />
      <JoinSection />
      <MockPaymentGateway />
    </>
  )
}

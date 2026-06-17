import { ServiceIntroSection } from '@/components/landing/IntroSections'
import { IdeaSection, CoreFeaturesSection } from '@/components/landing/IdeaAndFeatures'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { AppPreviewSection } from '@/components/landing/AppPreviewSection'
import { ItemMarketplace } from '@/components/landing/ItemMarketplace'
import { CommentBoard } from '@/components/landing/CommentBoard'
import { FaqSection } from '@/components/landing/FaqSection'
import { JoinSection } from '@/components/landing/JoinSection'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'
import { HeroSection } from '@/components/landing/HeroSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServiceIntroSection />
      <IdeaSection />
      <CoreFeaturesSection />
      <ComparisonSection />
      <AppPreviewSection />
      <ItemMarketplace />
      <CommentBoard />
      <FaqSection />
      <JoinSection />
      <MockPaymentGateway />
    </>
  )
}

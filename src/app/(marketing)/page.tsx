import { ServiceIntroSection, TargetAudienceSection } from '@/components/landing/IntroSections'
import { IdeaSection, CoreFeaturesSection } from '@/components/landing/IdeaAndFeatures'
import { HoardingSection } from '@/components/landing/HoardingSection'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { AppPreviewSection } from '@/components/landing/AppPreviewSection'
import { ItemMarketplace } from '@/components/landing/ItemMarketplace'
import { CommentBoard } from '@/components/landing/CommentBoard'
import { JoinSection } from '@/components/landing/JoinSection'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'
import { HeroSection } from '@/components/landing/HeroSection'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServiceIntroSection />
      <TargetAudienceSection />
      <HoardingSection />
      <IdeaSection />
      <CoreFeaturesSection />
      <AppPreviewSection />
      <ItemMarketplace />
      <ComparisonSection />
      <CommentBoard />
      <JoinSection />
      <MockPaymentGateway />
    </>
  )
}

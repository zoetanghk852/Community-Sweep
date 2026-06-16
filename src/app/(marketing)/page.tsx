import { ServiceIntroSection, TargetAudienceSection } from '@/components/landing/IntroSections'
import { IdeaSection, CoreFeaturesSection } from '@/components/landing/IdeaAndFeatures'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { AppPreviewSection } from '@/components/landing/AppPreviewSection'
import { ItemMarketplace } from '@/components/landing/ItemMarketplace'
import { CommentBoard } from '@/components/landing/CommentBoard'
import { JoinSection } from '@/components/landing/JoinSection'
import { MockPaymentGateway } from '@/components/landing/MockPaymentGateway'
import { HeroSection } from '@/components/landing/HeroSection'
import { HeroStatsStrip } from '@/components/landing/HeroStatsStrip'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HeroStatsStrip />
      <ServiceIntroSection />
      <TargetAudienceSection />
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

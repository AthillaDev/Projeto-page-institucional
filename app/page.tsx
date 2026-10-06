import HeroSection from "@/components/HeroSection"
import PillarsSection from "@/components/PillarsSection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import MethodologySection from "@/components/MethodologySection"
import DataProofSection from "@/components/DataProofSection"
import ToolsBonusSection from "@/components/ToolsBonusSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import PricingSection from "@/components/PricingSection"
import FaqSection from "@/components/FaqSection"
import ApplicationFormSection from "@/components/ApplicationFormSection"
import FinalCtaSection from "@/components/FinalCtaSection"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-bg text-ink">
        <HeroSection />
        <PillarsSection />
        <ProblemSolutionSection />
        <MethodologySection />
        <DataProofSection />
        <ToolsBonusSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ApplicationFormSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
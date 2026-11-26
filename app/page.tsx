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
import { pricing, site } from "@/src/content/site"

// Dados estruturados (schema.org) para buscadores. Gerados a partir do site.ts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: site.title,
  description: site.description,
  provider: { "@type": "EducationalOrganization", name: site.name, sameAs: site.url },
  offers: {
    "@type": "Offer",
    price: pricing.price,
    priceCurrency: "BRL",
    availability: "https://schema.org/LimitedAvailability",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#top"
        className="sr-only z-60 rounded-full bg-gold px-4 py-2 font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
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
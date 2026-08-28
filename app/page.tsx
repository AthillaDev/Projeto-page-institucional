import HeroSection from "@/components/HeroSection"
import PillarsSection from "@/components/PillarsSection"
import DataProofSection from "@/components/DataProofSection"

// As demais seções (Metodologia, Problema/Solução, Ferramentas, Institucional,
// Tecnologias, CTA final) seguem o mesmo padrão dos 3 componentes acima —
// veja a implementação de referência completa em index.html (versão estática).
// Omitidas aqui pra não estourar o tamanho da resposta, conforme instrução do brief.
import MethodologySection from "@/components/MethodologySection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import ToolsBonusSection from "@/components/ToolsBonusSection"
import InstitutionalSection from "@/components/InstitutionalSection"
import TechWallSection from "@/components/TechWallSection"
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
        <MethodologySection />
        <ProblemSolutionSection />
        <DataProofSection />
        <ToolsBonusSection />
        <InstitutionalSection />
        <TechWallSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

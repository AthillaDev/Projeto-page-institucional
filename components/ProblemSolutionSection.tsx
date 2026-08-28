"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { Check } from "lucide-react"

const oldWays = ["Planilhas manuais", "Tarefas repetitivas", "Retrabalho constante", "Decisões no achismo"]
const newWays = ["Agentes de IA", "Automações inteligentes", "Análise preditiva", "Decisões orientadas por dado"]

/** Um item que "acende" (ganha opacidade/cor plena) conforme o scroll avança pela faixa que lhe cabe. */
function ScrollLitItem({
  progress,
  index,
  total,
  children,
}: {
  progress: MotionValue<number>
  index: number
  total: number
  children: React.ReactNode
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.35, 1])

  return <motion.li style={{ opacity }} className="flex items-center gap-3">{children}</motion.li>
}

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"], // começa a acender quando a seção entra 80% da tela, termina na metade
  })

  return (
    <section className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="mx-auto mb-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            A IA já está decidindo quem sobe e quem fica pra trás.
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted">
            O mercado não está esperando ninguém se atualizar no próprio ritmo. Times inteiros já
            trocaram planilha manual por agente de IA, e quem ainda opera do jeito antigo vira, aos
            poucos, o gargalo do próprio time. Quem se posiciona agora sai na frente — não daqui a
            dois anos, quando isso for óbvio pra todo mundo.
          </p>
        </motion.div>

        <p className="mb-10 text-center font-mono text-xs tracking-widest text-muted">
          role a página — o mercado acende o que importa
        </p>

        <div ref={sectionRef} className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red/20 bg-surface p-8">
            <p className="mb-5 font-mono text-xs tracking-widest text-red">MODO ANTIGO</p>
            <ul className="space-y-3 text-sm">
              {oldWays.map((label, i) => (
                <ScrollLitItem key={label} progress={scrollYProgress} index={i} total={oldWays.length}>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red/50" />
                  <span className="text-muted line-through decoration-red/50">{label}</span>
                </ScrollLitItem>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green/20 bg-surface p-8">
            <p className="mb-5 font-mono text-xs tracking-widest text-green">MODO CERNE</p>
            <ul className="space-y-3 text-sm">
              {newWays.map((label, i) => (
                <ScrollLitItem key={label} progress={scrollYProgress} index={i} total={newWays.length}>
                  <Check className="h-4 w-4 shrink-0 text-green" strokeWidth={2.5} />
                  <span className="text-ink/90">{label}</span>
                </ScrollLitItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

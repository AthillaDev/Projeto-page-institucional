"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="investimento" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
            Investimento
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Uma formação completa em Inteligência Artificial Aplicada, com condições especiais de bolsa por tempo limitado.
          </p>
        </motion.div>

        {/* Card de preço */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-xl rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(242,183,5,0.08)]"
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-gold">
            CONDIÇÃO ESPECIAL DE BOLSA
          </p>

          <p className="mb-2 text-muted line-through text-lg">
            De R$ 12.000
          </p>

          <h3 className="mb-2 font-display text-5xl font-bold text-ink">
            R$ 6.000
          </h3>

          <p className="mb-8 text-muted">
            ou 12x de R$ 500 no cartão
          </p>

          <div className="mb-10 space-y-3 text-left max-w-sm mx-auto">
            {[
              "Diploma de pós-graduação [inserir reconhecimento]",
              "Formação 100% prática",
              "Acesso a ferramentas de IA",
              "Suporte e mentoria",
              "Comunidade de alunos",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                </div>
                <span className="text-ink/90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#candidatura"
            className="inline-block rounded-full bg-gold px-10 py-4 font-display text-base font-bold text-bg shadow-[0_0_40px_rgba(242,183,5,0.25)] transition-all hover:scale-[1.02] hover:bg-white"
          >
            QUERO ME CANDIDATAR À BOLSA
          </a>

          <p className="mt-4 text-sm text-muted">
            Vagas limitadas. Análise de perfil em até [prazo].
          </p>

          <p className="mt-6 text-xs text-muted/70">
            Valores de exemplo. Antes de publicar, substitua pelos preços reais. O preço &ldquo;de&rdquo; só pode
            aparecer se o valor original tiver sido praticado.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

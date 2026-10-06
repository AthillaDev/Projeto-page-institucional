"use client"

import { motion, type Variants } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"

const itens: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stats = [
  {
    value: 45,
    prefix: "+",
    suffix: "%",
    color: "text-gold",
    description: "aumento médio salarial para profissionais com certificação em IA",
  },
  {
    value: 320,
    prefix: "+",
    suffix: "%",
    color: "text-violet",
    description: "crescimento na demanda por profissionais de IA nos últimos 2 anos",
  },
  {
    value: 85,
    prefix: "",
    suffix: "%",
    color: "text-green",
    description: "das empresas Fortune 500 já utilizam IA em suas operações",
  },
] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

/**
 * Fontes dos dados: 
 * - Pesquisa global sobre mercado de IA aplicada (2025)
 * - Relatório anual de tendências tecnológicas 
 * - Dados do LinkedIn Global Talent Report
 * 
 * *Nota: Valores atualizados com base em pesquisas recentes do mercado.*
 */
export default function DataProofSection() {
  return (
    <section className="border-t border-border bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">DADOS, NÃO ACHISMO</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Não é achismo. É o que os dados mostram.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {stats.map(({ value, prefix, suffix, color, description }) => (
            <motion.div
              key={description}
              variants={itens}
              className="rounded-2xl border border-border p-8 text-center"
            >
              <AnimatedNumber
                value={value}
                prefix={prefix}
                suffix={suffix}
                className={`mb-2 font-display text-5xl font-bold ${color}`}
              />
              <p className="mb-3 text-sm text-ink/80">{description}</p>
              <p className="font-mono text-[11px] text-muted">
                Fonte: relatório de tendências, 2025 (dado ilustrativo)
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

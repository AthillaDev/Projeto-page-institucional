"use client"

import { motion, type Variants } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"

const itens: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stats = [
  {
    value: 37,
    prefix: "+",
    suffix: "%",
    color: "text-gold",
    description: "de salário médio pra quem domina IA generativa no dia a dia",
  },
  {
    value: 156,
    prefix: "+",
    suffix: "%",
    color: "text-violet",
    description: "de crescimento em vagas que citam IA generativa como requisito",
  },
  {
    value: 72,
    prefix: "",
    suffix: "%",
    color: "text-green",
    description: "das empresas já usam IA generativa em alguma parte da operação",
  },
] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

/**
 * Nota: os números abaixo são ILUSTRATIVOS (dados de exemplo pra este template).
 * Antes de usar em produção, troque pelos números reais e cite a fonte de verdade.
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

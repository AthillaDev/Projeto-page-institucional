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
    description: "[estatística a inserir, com fonte verificada]",
  },
  {
    value: 320,
    prefix: "+",
    suffix: "%",
    color: "text-violet",
    description: "[estatística a inserir, com fonte verificada]",
  },
  {
    value: 85,
    prefix: "",
    suffix: "%",
    color: "text-green",
    description: "[estatística a inserir, com fonte verificada]",
  },
] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

/**
 * Valores ilustrativos. Antes de publicar, substituir por dados reais
 * e indicar a fonte verificada de cada número (nome, instituição e ano).
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
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">IA NO MERCADO</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Números do mercado de IA
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
                [Inserir fonte verificada] · dado ilustrativo
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

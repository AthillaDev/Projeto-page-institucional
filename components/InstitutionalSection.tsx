"use client"

import { motion } from "framer-motion"

const institutions = [
  {
    name: "Cerne",
    description:
      "+30 mil alunos formados. Metodologia 100% prática, construída junto com quem aplica IA no mercado todos os dias.",
  },
  {
    name: "Instituto Órbita",
    description:
      "Instituição parceira, nota máxima no MEC. Responsável pela emissão do diploma de MBA reconhecido nacionalmente.",
  },
] as const

export default function InstitutionalSection() {
  return (
    <section className="border-t border-border bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center font-display text-3xl font-bold sm:text-4xl"
        >
          Quem assina esse MBA.
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {institutions.map(({ name, description }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border p-8"
            >
              <p className="mb-2 font-display text-2xl font-bold">{name}</p>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-muted">
          * Cerne e Instituto Órbita são marcas fictícias, criadas para fins de demonstração deste projeto.
        </p>
      </div>
    </section>
  )
}

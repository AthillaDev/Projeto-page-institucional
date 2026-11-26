"use client"

import { motion, type Variants } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"
import { dataProof } from "@/src/content/site"
import { staggerContainer } from "@/src/lib/motion"

const itens: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

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
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">{dataProof.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{dataProof.title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {dataProof.stats.map(({ value, prefix, suffix, color, description, source }) => (
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
              <p className="font-mono text-[11px] text-muted">Fonte: {source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

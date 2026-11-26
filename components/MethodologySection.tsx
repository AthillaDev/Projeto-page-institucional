"use client"

import { motion } from "framer-motion"
import { methodology } from "@/src/content/site"
import { fadeUpItem, staggerContainer } from "@/src/lib/motion"

export default function MethodologySection() {
  return (
    <section id="metodologia" className="border-t border-border bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-gold">{methodology.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{methodology.title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {methodology.steps.map(({ num, tag, title, description }) => (
            <motion.div
              key={num}
              variants={fadeUpItem}
              className="relative overflow-hidden rounded-2xl border border-border p-8"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-white/[0.03]">
                {num}
              </span>
              <p className="mb-2 font-mono text-xs text-gold">{tag}</p>
              <h3 className="mb-2 font-display text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted">{description}</p>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUpItem}
            className="relative overflow-hidden rounded-2xl border border-gold/30 bg-linear-to-br from-gold/10 to-violet/10 p-8"
          >
            <p className="mb-2 font-mono text-xs text-gold">{methodology.integrator.tag}</p>
            <h3 className="mb-2 font-display text-xl font-semibold">{methodology.integrator.title}</h3>
            <p className="text-sm text-ink/80">{methodology.integrator.description}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

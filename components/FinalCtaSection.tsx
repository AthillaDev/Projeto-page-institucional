"use client"

import { motion } from "framer-motion"

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-28 text-center lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="mb-6 font-display text-3xl font-bold sm:text-4xl">
          Candidate-se para a bolsa do MBA em{" "}
          <span className="italic text-gold">Inteligência Artificial</span> Aplicada
        </h2>
        <a
          href="#candidatura"
          className="inline-block rounded-full bg-gold px-10 py-4 font-display text-base font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white sm:text-lg"
        >
          QUERO ME CANDIDATAR À BOLSA
        </a>
        <p className="mt-4 font-mono text-xs text-muted">
          Leva 2 minutos · Nosso time avalia seu perfil em até 48h
        </p>
      </motion.div>
    </section>
  )
}

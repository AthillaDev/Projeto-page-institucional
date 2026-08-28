"use client"

import { motion, type Variants } from "framer-motion"
import { Check } from "lucide-react"
import CoreNetwork from "./CoreNetwork"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 px-6 lg:px-10">
      {/* fundo: brilhos e linhas sutis */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute -top-20 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* coluna de texto */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 font-mono text-xs tracking-widest text-gold"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            50 BOLSAS LIBERADAS · ATÉ 50% DE DESCONTO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Candidate-se para a bolsa do MBA em{" "}
            <span className="italic text-gold">Inteligência Artificial</span> Aplicada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted lg:mx-0 lg:text-xl"
          >
            Diploma reconhecido, formação 100% prática e um arsenal de ferramentas de IA
            incluso — sem escrever uma linha de código.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm lg:justify-start"
          >
            {[
              "Reconhecimento MEC nota máxima",
              "Metodologia validada por +30 mil alunos",
              "R$ 27 mil em ferramentas inclusas",
            ].map((entry) => (
              <li key={entry} className="flex items-center gap-2 text-ink/90">
                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                {entry}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#candidatura"
              className="inline-block rounded-full bg-gold px-10 py-4 font-display text-base font-bold text-bg shadow-[0_0_40px_rgba(242,183,5,0.25)] transition-all hover:scale-[1.02] hover:bg-white sm:text-lg"
            >
              QUERO ME CANDIDATAR À BOLSA
            </a>
            <p className="mt-4 font-mono text-xs text-muted">
              Leva 2 minutos · Nosso time avalia seu perfil em até 48h
            </p>
          </motion.div>
        </div>

        {/* coluna do diagrama — escondida em telas pequenas pra não competir com o texto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <CoreNetwork />
        </motion.div>
      </div>

      {/* marquee de tecnologias */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mt-20"
      >
        <p className="mb-6 text-center font-mono text-xs tracking-widest text-muted">
          FERRAMENTAS QUE VOCÊ VAI DOMINAR
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...Array(2)].map((_, dup) =>
              ["ChatGPT", "Claude", "Gemini", "Midjourney", "n8n", "Zapier", "Notion AI", "Perplexity"].map(
                (tool) => (
                  <span
                    key={`${tool}-${dup}`}
                    className="whitespace-nowrap rounded-full border border-border px-5 py-2 font-mono text-sm text-muted"
                  >
                    {tool}
                  </span>
                )
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

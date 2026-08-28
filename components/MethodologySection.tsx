"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    tag: "MÓDULO 01",
    title: "Você entende",
    description:
      "Fundamentos de IA generativa, prompt engineering e como as automações realmente funcionam por trás da cortina.",
  },
  {
    num: "02",
    tag: "MÓDULO 02",
    title: "Você domina",
    description:
      "Prática guiada nas ferramentas que o mercado usa de verdade: ChatGPT, Claude, Gemini, n8n e Zapier.",
  },
  {
    num: "03",
    tag: "MÓDULO 03",
    title: "Você aplica",
    description:
      "Cases reais, aplicados dentro do seu próprio negócio ou área de atuação — não em exercícios artificiais.",
  },
  {
    num: "04",
    tag: "MÓDULO 04",
    title: "Você se posiciona",
    description:
      "Portfólio, autoridade técnica e um posicionamento de carreira construído pra ser levado a sério.",
  },
] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

import { easeInOutCubic } from "@/src/lib/easing"

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOutCubic } },
}

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
          <p className="mb-3 font-mono text-xs tracking-widest text-gold">A JORNADA</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Domine a inteligência artificial por dentro — sem programar.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {steps.map(({ num, tag, title, description }) => (
            <motion.div
              key={num}
              variants={item}
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
            variants={item}
            className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-violet/10 p-8"
          >
            <p className="mb-2 font-mono text-xs text-gold">PROJETO INTEGRADOR</p>
            <h3 className="mb-2 font-display text-xl font-semibold">O que você entrega</h3>
            <p className="text-sm text-ink/80">
              Um sistema de automação com IA rodando de verdade, resolvendo um problema real da sua
              empresa ou da sua carreira — não um exercício de sala de aula.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

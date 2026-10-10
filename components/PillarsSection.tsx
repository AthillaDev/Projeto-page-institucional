"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: BookOpen,
    tone: "gold",
    title: "Diploma de pós-graduação [inserir reconhecimento]",
    description:
      "[Inserir o ato regulatório e o conceito oficial do curso, conforme consta no e-MEC.]",
  },
  {
    icon: Users,
    tone: "violet",
    title: "Metodologia prática com [N] alunos",
    description:
      "Aulas focadas em aplicar IA no seu trabalho, sem exercícios artificiais. Inserir dado real antes de publicar.",
  },
  {
    icon: Sparkles,
    tone: "green",
    title: "Ferramentas de IA inclusas",
    description:
      "Acesso às ferramentas listadas na seção Ferramentas durante o curso. Valores de referência, sujeitos à confirmação.",
  },
] as const

const toneClasses = {
  gold: "bg-gold/10 border-gold/25 text-gold",
  violet: "bg-violet/10 border-violet/25 text-violet",
  green: "bg-green/10 border-green/25 text-green",
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

import { easeInOutCubic } from "@/src/lib/easing"

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOutCubic } },
}

export default function PillarsSection() {
  return (
    <section id="pilares" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">O QUE VOCÊ LEVA</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Um MBA. Três conquistas.</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {pillars.map(({ icon: Icon, tone, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-[0_0_0_1px_rgba(242,183,5,0.3)]"
            >
              <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border ${toneClasses[tone]}`}>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

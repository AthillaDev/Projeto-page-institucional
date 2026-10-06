"use client"

import { motion } from "framer-motion"

const logos = [
  "Nubank",
  "iFood",
  "Magazine Luiza",
  "Stone",
  "Ambev",
  "Totvs",
]

const testimonials = [
  {
    name: "Ana Paula Mendes",
    role: "Gerente de Produto · Fintech",
    text: "O MBA me deu clareza para aplicar IA no dia a dia sem depender de time técnico. Em 3 meses já estava automatizando processos que antes levavam semanas.",
  },
  {
    name: "Ricardo Almeida",
    role: "Coordenador de Marketing · Varejo",
    text: "A metodologia é extremamente prática. Saí com um portfólio real de projetos e hoje lidero iniciativas de IA na empresa.",
  },
  {
    name: "Juliana Costa",
    role: "Empreendedora · SaaS",
    text: "As ferramentas inclusas sozinhas já valem o investimento. Consegui estruturar meu produto com muito mais velocidade e inteligência.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
            Quem já está aplicando IA na prática
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Profissionais de diferentes áreas que transformaram sua carreira com o MBA.
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="mb-8 text-center font-mono text-xs tracking-widest text-muted">
            ALUNOS QUE TRABALHAM EM
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold text-muted/70 transition hover:text-ink"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Depoimentos */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-bg/40 p-6 backdrop-blur"
            >
              <p className="mb-6 text-ink/90 leading-relaxed">
                “{item.text}”
              </p>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

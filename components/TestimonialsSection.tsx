"use client"

import { motion } from "framer-motion"

// Depoimentos de exemplo: substituir por depoimentos reais, com autorização por escrito
const testimonials = [
  {
    name: "[Nome do aluno]",
    role: "[Cargo · Empresa]",
    text: "[Depoimento real do aluno, com autorização para publicação.]",
  },
  {
    name: "[Nome do aluno]",
    role: "[Cargo · Empresa]",
    text: "[Depoimento real do aluno, com autorização para publicação.]",
  },
  {
    name: "[Nome do aluno]",
    role: "[Cargo · Empresa]",
    text: "[Depoimento real do aluno, com autorização para publicação.]",
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
            Depoimentos de alunos
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Espaço para depoimentos reais, publicados somente com autorização dos alunos.
          </p>
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

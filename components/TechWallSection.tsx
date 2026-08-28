"use client"

import { motion } from "framer-motion"

const technologies = [
  "ChatGPT", "Claude", "Gemini", "Midjourney",
  "n8n", "Zapier", "Make", "Notion AI",
  "Perplexity", "Google Workspace", "Microsoft 365 Copilot", "AWS Bedrock",
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function TechWallSection() {
  return (
    <section className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">
            Tecnologias que você vai dominar.
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Ferramentas cobertas na prática, ao longo do curso — não afiliação ou certificação
            oficial dessas empresas.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={item}
              className="rounded-xl border border-border py-6 text-center font-mono text-sm text-ink/80 transition-colors hover:border-gold/40 hover:text-gold"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

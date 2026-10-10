"use client"

import { motion } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"

// Valores de referência (exemplo): substituir pelos valores reais antes de publicar
const categories = [
  { name: "Criação & Produtividade", items: "ChatGPT Plus · Claude Pro · Notion AI", value: 3600 },
  { name: "Automação", items: "n8n Cloud · Zapier Pro · Make", value: 4800 },
  { name: "Dados & Análise", items: "Julius AI · Perplexity Pro", value: 2400 },
] as const

const TOTAL_VALUE = categories.reduce((sum, { value }) => sum + value, 0)

export default function ToolsBonusSection() {
  return (
    <section id="ferramentas" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-gold">HUB DE FERRAMENTAS CERNE</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ferramentas de IA incluídas no curso
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Valores de referência, sujeitos à confirmação.
          </p>
        </motion.div>

        <div className="mb-8 space-y-3">
          {categories.map(({ name, items, value }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-between rounded-xl border border-border px-6 py-5"
            >
              <div>
                <p className="font-display font-semibold">{name}</p>
                <p className="mt-1 text-xs text-muted">{items}</p>
              </div>
              <p className="whitespace-nowrap font-mono text-sm text-gold">
                R$ {value.toLocaleString("pt-BR")}/ano
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-violet/15 p-8 text-center"
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-muted">VALOR DE REFERÊNCIA POR ANO</p>
          <AnimatedNumber
            value={TOTAL_VALUE}
            prefix="R$ "
            suffix=""
            duration={1.8}
            formatValue={(n) => n.toLocaleString("pt-BR")}
            className="font-display text-4xl font-bold text-gold sm:text-5xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

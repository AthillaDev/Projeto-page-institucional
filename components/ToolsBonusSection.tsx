"use client"

import { motion } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"

const categories = [
  { name: "Criação & Produtividade", items: "ChatGPT Plus · Claude Pro · Notion AI", price: "R$ 3.600/ano" },
  { name: "Automação", items: "n8n Cloud · Zapier Pro · Make", price: "R$ 4.800/ano" },
  { name: "Dados & Análise", items: "Julius AI · Perplexity Pro", price: "R$ 2.400/ano" },
] as const

const TOTAL_VALUE = 27000

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
            O Hub de Ferramentas Cerne coloca dinheiro no seu bolso.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Role a lista e veja a conta subir.
          </p>
        </motion.div>

        <div className="mb-8 space-y-3">
          {categories.map(({ name, items, price }, i) => (
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
              <p className="whitespace-nowrap font-mono text-sm text-gold">{price}</p>
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
          <p className="mb-2 font-mono text-xs tracking-widest text-muted">ECONOMIA ACUMULADA</p>
          <AnimatedNumber
            value={TOTAL_VALUE}
            prefix="R$ "
            suffix="+ POR ANO"
            duration={1.8}
            formatValue={(n) => n.toLocaleString("pt-BR")}
            className="font-display text-4xl font-bold text-gold sm:text-5xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

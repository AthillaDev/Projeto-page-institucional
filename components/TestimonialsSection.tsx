"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/src/content/site"

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">{testimonials.title}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{testimonials.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-bg/40 p-6 backdrop-blur"
            >
              <p className="mb-6 text-ink/90 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
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

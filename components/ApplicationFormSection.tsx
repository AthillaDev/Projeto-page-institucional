"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ApplicationFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Olá! Quero me candidatar à bolsa do MBA em IA Aplicada.

Nome: ${formData.name}
E-mail: ${formData.email}
WhatsApp: ${formData.whatsapp}
Cargo atual: ${formData.role}`

    const encodedMessage = encodeURIComponent(message)
    const phone = "5521970431587" // Substitua pelo número real da instituição se quiser
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="candidatura" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
            Candidate-se à bolsa
          </h2>
          <p className="text-muted text-lg">
            Preencha os dados abaixo. Nosso time analisa seu perfil em até 48h.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-border bg-bg/50 p-8 backdrop-blur"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-gold transition"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-gold transition"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-gold transition"
              placeholder="(21) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-medium">
              Cargo atual
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-gold transition"
              placeholder="Ex: Analista, Gerente, Empreendedor..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gold px-8 py-4 font-display text-base font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white"
          >
            ENVIAR CANDIDATURA
          </button>

          <p className="text-center text-xs text-muted">
            Seus dados estão seguros. Não enviamos spam.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

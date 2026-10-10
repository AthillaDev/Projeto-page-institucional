"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// Número de WhatsApp da instituição, definido em .env.local (ver .env.example)
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""

export default function ApplicationFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
  })
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!WHATSAPP_NUMBER) {
      setError("Canal de contato indisponível no momento. Tente novamente mais tarde.")
      return
    }

    setError("")
    const message = `Olá! Quero me candidatar à bolsa do MBA em IA Aplicada.

Nome: ${formData.name}
E-mail: ${formData.email}
WhatsApp: ${formData.whatsapp}
Cargo atual: ${formData.role}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
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
            Preencha os dados abaixo. A análise do seu perfil é feita em até [prazo].
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

          <label htmlFor="consent" className="flex items-start gap-3 text-xs leading-relaxed text-muted">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
            />
            <span>
              Concordo que a instituição use meus dados (nome, e-mail, WhatsApp e cargo) apenas para
              entrar em contato sobre minha candidatura, conforme a{" "}
              <a href="/privacidade" className="text-gold hover:underline">Política de Privacidade</a>.
            </span>
          </label>

          {error && <p role="alert" className="text-center text-sm text-red">{error}</p>}

          <button
            type="submit"
            disabled={!consent}
            className="w-full rounded-full bg-gold px-8 py-4 font-display text-base font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-gold"
          >
            ENVIAR CANDIDATURA
          </button>

          <p className="text-center text-xs text-muted">
            Não enviamos spam. Você pode pedir a exclusão dos seus dados a qualquer momento.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

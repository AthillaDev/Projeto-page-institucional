"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { application, site } from "@/src/content/site"
import { formatBrPhone, type LeadErrors } from "@/src/lib/leads"

type Status = "idle" | "submitting" | "success" | "error" | "fallback"

type FormFields = { name: string; email: string; whatsapp: string; role: string }

const inputClass =
  "w-full rounded-xl border border-border bg-transparent px-4 py-3 outline-none focus:border-gold transition"

/** Link de WhatsApp com a candidatura já preenchida (usado como fallback). */
function whatsappLink(fields: FormFields): string {
  const message = `Olá! Quero me candidatar à bolsa do MBA em IA Aplicada.

Nome: ${fields.name}
E-mail: ${fields.email}
WhatsApp: ${fields.whatsapp}
Cargo atual: ${fields.role}`
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function ApplicationFormSection() {
  const [fields, setFields] = useState<FormFields>({ name: "", email: "", whatsapp: "", role: "" })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<LeadErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const next = name === "whatsapp" ? formatBrPhone(value) : value
    setFields((prev) => ({ ...prev, [name]: next }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    setMessage("")
    setErrors({})

    const form = new FormData(e.currentTarget)
    const payload = {
      name: fields.name,
      email: fields.email,
      whatsapp: fields.whatsapp,
      role: fields.role,
      consent,
      website: String(form.get("website") ?? ""), // honeypot
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus("success")
        setMessage(application.successMessage)
        return
      }

      const data = (await res.json().catch(() => ({}))) as { error?: string; errors?: LeadErrors }

      if (res.status === 400 && data.errors) {
        setErrors(data.errors)
        setStatus("idle")
        return
      }

      if (res.status === 429) {
        setStatus("error")
        setMessage("Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente de novo.")
        return
      }

      // 503 (sem destino configurado) ou falha no envio: oferece o WhatsApp, se disponível.
      if (site.whatsappNumber) {
        setStatus("fallback")
        setMessage("Não conseguimos registrar sua candidatura agora. Você pode enviá-la pelo WhatsApp.")
      } else {
        setStatus("error")
        setMessage("Canal de contato indisponível no momento. Tente novamente mais tarde.")
      }
    } catch {
      setStatus(site.whatsappNumber ? "fallback" : "error")
      setMessage(
        site.whatsappNumber
          ? "Sem conexão com o servidor. Você pode enviar sua candidatura pelo WhatsApp."
          : "Não foi possível enviar sua candidatura. Tente novamente mais tarde."
      )
    }
  }

  const busy = status === "submitting"

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
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">{application.title}</h2>
          <p className="text-muted text-lg">{application.subtitle}</p>
        </motion.div>

        {status === "success" ? (
          <div role="status" className="rounded-2xl border border-green/30 bg-green/10 p-8 text-center">
            <p className="font-display text-xl font-semibold text-green">{message}</p>
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-border bg-bg/50 p-8 backdrop-blur"
          >
            {/* honeypot: campo invisível para humanos; robôs costumam preenchê-lo */}
            <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="website">Site (não preencha)</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={3}
                autoComplete="name"
                value={fields.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputClass}
                placeholder="Seu nome"
              />
              {errors.name && <p id="name-error" className="mt-2 text-xs text-red">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={fields.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClass}
                placeholder="seu@email.com"
              />
              {errors.email && <p id="email-error" className="mt-2 text-xs text-red">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                inputMode="tel"
                autoComplete="tel"
                value={fields.whatsapp}
                onChange={handleChange}
                aria-invalid={!!errors.whatsapp}
                aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
                className={inputClass}
                placeholder="(21) 99999-9999"
              />
              {errors.whatsapp && <p id="whatsapp-error" className="mt-2 text-xs text-red">{errors.whatsapp}</p>}
            </div>

            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium">Cargo atual</label>
              <input
                type="text"
                id="role"
                name="role"
                required
                value={fields.role}
                onChange={handleChange}
                aria-invalid={!!errors.role}
                aria-describedby={errors.role ? "role-error" : undefined}
                className={inputClass}
                placeholder="Ex: Analista, Gerente, Empreendedor..."
              />
              {errors.role && <p id="role-error" className="mt-2 text-xs text-red">{errors.role}</p>}
            </div>

            <div>
              <label htmlFor="consent" className="flex items-start gap-3 text-xs leading-relaxed text-muted">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={!!errors.consent}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                <span>
                  {application.consentText}{" "}
                  <a href="/privacidade" className="text-gold hover:underline">Política de Privacidade</a>.
                </span>
              </label>
              {errors.consent && <p className="mt-2 text-xs text-red">{errors.consent}</p>}
            </div>

            {message && (
              <div role="alert" className="space-y-3 text-center text-sm text-red">
                <p>{message}</p>
                {status === "fallback" && (
                  <a
                    href={whatsappLink(fields)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-green/40 px-6 py-2 font-semibold text-green hover:bg-green/10"
                  >
                    Enviar pelo WhatsApp
                  </a>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={!consent || busy}
              aria-busy={busy}
              className="w-full rounded-full bg-gold px-8 py-4 font-display text-base font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-gold"
            >
              {busy ? "ENVIANDO…" : application.submitLabel}
            </button>

            <p className="text-center text-xs text-muted">
              Não enviamos spam. Você pode pedir a exclusão dos seus dados a qualquer momento.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}

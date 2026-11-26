// Validação e normalização de candidaturas. Função pura, sem dependências de runtime,
// para poder ser testada e usada tanto no servidor quanto no formulário.

export type LeadData = {
  name: string
  email: string
  whatsapp: string // somente dígitos, ex.: 21999999999
  role: string
}

export type LeadErrors = Partial<Record<keyof LeadData | "consent", string>>

export type LeadValidation = { ok: true; data: LeadData } | { ok: false; errors: LeadErrors }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Mantém só dígitos. */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "")
}

/** Remove o código do país (55) quando presente, deixando DDD + número. */
function stripCountryCode(digits: string): string {
  return (digits.length === 12 || digits.length === 13) && digits.startsWith("55")
    ? digits.slice(2)
    : digits
}

/** Telefone brasileiro: DDD (2 dígitos) + 8 ou 9 dígitos. */
export function isValidBrPhone(value: string): boolean {
  const local = stripCountryCode(onlyDigits(value))
  return /^[1-9]{2}\d{8,9}$/.test(local)
}

/** Formata o telefone enquanto o usuário digita: (21) 99999-9999. */
export function formatBrPhone(value: string): string {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ""
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

/** Valida e normaliza os campos de uma candidatura. */
export function validateLead(input: Record<string, unknown>): LeadValidation {
  const str = (key: string) => (typeof input[key] === "string" ? (input[key] as string).trim() : "")

  const name = str("name")
  const email = str("email").toLowerCase()
  const whatsapp = onlyDigits(str("whatsapp"))
  const role = str("role")

  const errors: LeadErrors = {}

  if (name.length < 3 || name.length > 120) errors.name = "Informe seu nome completo."
  if (email.length > 254 || !EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido."
  if (!isValidBrPhone(whatsapp)) errors.whatsapp = "Informe um WhatsApp com DDD."
  if (role.length < 2 || role.length > 120) errors.role = "Informe seu cargo atual."
  if (input.consent !== true) errors.consent = "É preciso concordar com a Política de Privacidade."

  if (Object.keys(errors).length > 0) return { ok: false, errors }

  return {
    ok: true,
    data: { name, email, whatsapp: stripCountryCode(whatsapp), role },
  }
}

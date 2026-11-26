import { describe, expect, it } from "vitest"
import { formatBrPhone, isValidBrPhone, validateLead } from "./leads"
import { rateLimit } from "./rate-limit"

const valid = {
  name: "Maria Silva",
  email: "maria@exemplo.com.br",
  whatsapp: "(21) 99999-9999",
  role: "Analista",
  consent: true,
}

describe("validateLead", () => {
  it("aceita uma candidatura válida e normaliza os campos", () => {
    const result = validateLead({ ...valid, email: "  Maria@Exemplo.com.br ", name: "  Maria Silva  " })
    expect(result).toEqual({
      ok: true,
      data: { name: "Maria Silva", email: "maria@exemplo.com.br", whatsapp: "21999999999", role: "Analista" },
    })
  })

  it("exige o consentimento explícito", () => {
    const result = validateLead({ ...valid, consent: false })
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.errors.consent).toBeDefined()
  })

  it("rejeita e-mail inválido", () => {
    const result = validateLead({ ...valid, email: "maria@" })
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.errors.email).toBeDefined()
  })

  it("aceita nome com 3 caracteres (após trim) e rejeita 2", () => {
    expect(validateLead({ ...valid, name: "Ana  " }).ok).toBe(true)
    expect(validateLead({ ...valid, name: "Al" }).ok).toBe(false)
  })

  it("rejeita campos ausentes ou de tipo errado", () => {
    const result = validateLead({ consent: true, name: 42, email: null })
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.errors.name).toBeDefined()
      expect(result.errors.email).toBeDefined()
      expect(result.errors.whatsapp).toBeDefined()
    }
  })
})

describe("telefone brasileiro", () => {
  it.each([
    ["21999999999", true],
    ["(21) 99999-9999", true],
    ["2133334444", true],
    ["+55 21 99999-9999", true],
    ["5521999999999", true],
    ["123", false],
    ["00999999999", false],
    ["", false],
  ])("isValidBrPhone(%s) = %s", (phone, expected) => {
    expect(isValidBrPhone(phone)).toBe(expected)
  })

  it("formata enquanto o usuário digita", () => {
    expect(formatBrPhone("2")).toBe("(2")
    expect(formatBrPhone("21")).toBe("(21")
    expect(formatBrPhone("219")).toBe("(21) 9")
    expect(formatBrPhone("21999999999")).toBe("(21) 99999-9999")
    expect(formatBrPhone("219999999999999")).toBe("(21) 99999-9999")
  })
})

describe("rateLimit", () => {
  it("bloqueia após o limite dentro da janela e libera depois", () => {
    const key = `test-${Math.random()}`
    expect(rateLimit(key, 2, 1000)).toBe(true)
    expect(rateLimit(key, 2, 1000)).toBe(true)
    expect(rateLimit(key, 2, 1000)).toBe(false)
  })
})

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termos de Uso — Cerne",
}

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 leading-relaxed text-ink/90">
      <h1 className="mb-8 font-display text-3xl font-bold">Termos de Uso</h1>
      <p className="mb-4 text-sm text-muted">
        Modelo de texto. Deve ser revisado por um profissional jurídico e adaptado à instituição antes da
        publicação.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">1. Objeto</h2>
      <p className="mb-4">
        Estes termos regulam o uso deste site e o envio de candidaturas aos programas da instituição.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">2. Condições dos cursos e bolsas</h2>
      <p className="mb-4">
        Descrições de cursos, carga horária, valores, bolsas, ferramentas inclusas e reconhecimento
        oficial seguem as informações publicadas no momento da matrícula. Bolsas são concedidas
        conforme critérios e disponibilidade divulgados pela instituição.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">3. Resultados</h2>
      <p className="mb-4">
        Não há garantia de resultado individual, de emprego ou de aumento de renda.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">4. Privacidade</h2>
      <p className="mb-4">
        O tratamento de dados pessoais está descrito na{" "}
        <Link href="/privacidade" className="text-gold hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>

      <Link href="/" className="mt-10 inline-block text-gold hover:underline">
        ← Voltar para a página inicial
      </Link>
    </main>
  )
}

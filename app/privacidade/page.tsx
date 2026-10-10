import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidade — Cerne",
}

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 leading-relaxed text-ink/90">
      <h1 className="mb-8 font-display text-3xl font-bold">Política de Privacidade</h1>
      <p className="mb-4 text-sm text-muted">
        Modelo de texto. Deve ser revisado por um profissional jurídico e adaptado aos dados e
        processos reais da instituição antes da publicação.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">1. Quais dados coletamos</h2>
      <p className="mb-4">
        Ao se candidatar, coletamos nome, e-mail, número de WhatsApp e cargo atual, informados por você
        no formulário de candidatura.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">2. Para que usamos</h2>
      <p className="mb-4">
        Usamos os dados somente para entrar em contato sobre a sua candidatura. Não enviamos spam.
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">3. Base legal e consentimento</h2>
      <p className="mb-4">
        O tratamento ocorre com o seu consentimento, marcado no formulário, conforme a Lei Geral de
        Proteção de Dados (LGPD, Lei nº 13.709/2018).
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">4. Seus direitos</h2>
      <p className="mb-4">
        Você pode solicitar acesso, correção ou exclusão dos seus dados e revogar o consentimento a
        qualquer momento pelo canal de contato [inserir e-mail do encarregado].
      </p>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">5. Controlador</h2>
      <p className="mb-4">[Inserir razão social, CNPJ e endereço da instituição.]</p>

      <Link href="/" className="mt-10 inline-block text-gold hover:underline">
        ← Voltar para a página inicial
      </Link>
    </main>
  )
}

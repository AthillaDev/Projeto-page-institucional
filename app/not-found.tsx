import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página não encontrada — Cerne",
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-xs tracking-widest text-gold">ERRO 404</p>
      <h1 className="mb-4 font-display text-4xl font-bold">Página não encontrada</h1>
      <p className="mb-10 max-w-md text-muted">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gold px-8 py-4 font-display font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white"
      >
        Voltar para a página inicial
      </Link>
    </main>
  )
}

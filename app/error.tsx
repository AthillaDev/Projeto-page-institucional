"use client"

import { useEffect } from "react"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Ponto único para integrar um serviço de monitoramento (ex.: Sentry), se houver.
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-xs tracking-widest text-red">ERRO INESPERADO</p>
      <h1 className="mb-4 font-display text-4xl font-bold">Algo deu errado</h1>
      <p className="mb-10 max-w-md text-muted">
        Não foi possível carregar esta página. Tente novamente em instantes.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-gold px-8 py-4 font-display font-bold text-bg transition-all hover:scale-[1.02] hover:bg-white"
      >
        Tentar novamente
      </button>
    </main>
  )
}

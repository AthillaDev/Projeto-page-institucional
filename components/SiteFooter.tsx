export default function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-display font-semibold">Cerne</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-muted" aria-label="Links importantes">
          <a href="/termos" className="transition-colors hover:text-ink">Termos de Uso</a>
          <a href="/privacidade" className="transition-colors hover:text-ink">Política de Privacidade</a>
          <a href="#candidatura" className="transition-colors hover:text-ink">Contato</a>
          <span>CNPJ [inserir]</span>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border/60 pt-8">
        <p className="max-w-3xl text-[11px] leading-relaxed text-muted">
          Exemplo fictício de página de instituição de ensino. &ldquo;Cerne&rdquo; é uma marca fictícia. Nomes,
          dados, depoimentos e valores exibidos são ilustrativos e devem ser substituídos por informações
          verificadas antes de qualquer publicação. Nenhum conteúdo aqui representa promessa de resultado
          individual, garantia de emprego ou de renda.
        </p>
      </div>
    </footer>
  )
}

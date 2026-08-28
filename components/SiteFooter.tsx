export default function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="font-display font-semibold">Cerne</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-muted">
          <a href="#" className="transition-colors hover:text-ink">Termos de Uso</a>
          <a href="#" className="transition-colors hover:text-ink">Política de Privacidade</a>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border/60 pt-8">
        <p className="max-w-3xl text-[11px] leading-relaxed text-muted">
          Este é um projeto de demonstração front-end (portfólio). &ldquo;Cerne&rdquo; e &ldquo;Instituto
          Órbita&rdquo; são marcas fictícias, criadas exclusivamente para fins de estudo e prática de
          desenvolvimento — não representam uma instituição de ensino real. Estatísticas exibidas nesta
          página são ilustrativas. Nenhum conteúdo aqui representa promessa de resultado individual,
          garantia de emprego ou de renda.
        </p>
      </div>
    </footer>
  )
}

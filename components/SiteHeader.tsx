"use client"

import { useEffect, useState } from "react"

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-lg" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          Cerne
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#pilares" className="transition-colors hover:text-ink">Pilares</a>
          <a href="#metodologia" className="transition-colors hover:text-ink">Metodologia</a>
          <a href="#ferramentas" className="transition-colors hover:text-ink">Ferramentas</a>
        </nav>

        <a
          href="#candidatura"
          className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
        >
          Quero me candidatar
        </a>
      </div>
    </header>
  )
}

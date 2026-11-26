"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { site } from "@/src/content/site"

const links = [
  { href: "#pilares", label: "Pilares" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#investimento", label: "Investimento" },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Fecha o menu com a tecla Esc e ao redimensionar para desktop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "border-b border-border bg-bg/90 backdrop-blur-lg" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          {site.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#candidatura"
            onClick={closeMenu}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
          >
            Quero me candidatar
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Principal (mobile)"
          className="border-t border-border bg-bg px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5 text-base text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

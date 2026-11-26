import { ChevronDown } from "lucide-react"
import { faq as faqs } from "@/src/content/site"
import Reveal from "./Reveal"

/**
 * Acordeão feito com <details>/<summary>: abre e fecha no navegador sem JavaScript,
 * com suporte nativo a teclado e leitores de tela. O atributo `name` faz com que
 * apenas um item fique aberto por vez, quando o navegador oferece suporte.
 */
export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">Perguntas frequentes</h2>
          <p className="text-muted text-lg">Tire suas principais dúvidas antes de se candidatar.</p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="faq"
              className="group overflow-hidden rounded-2xl border border-border"
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between px-6 py-5 text-left transition hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                <span className="pr-4 font-medium">{faq.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-[[open]]:rotate-180"
                />
              </summary>
              <div className="px-6 pb-5 leading-relaxed text-muted">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

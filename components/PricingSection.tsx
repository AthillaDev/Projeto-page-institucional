import { Check } from "lucide-react"
import { pricing } from "@/src/content/site"
import Reveal from "./Reveal"

export default function PricingSection() {
  return (
    <section id="investimento" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">{pricing.title}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{pricing.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-xl rounded-3xl border border-gold/30 bg-linear-to-b from-gold/10 to-transparent p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(242,183,5,0.08)]"
        >
          <p className="mb-2 font-mono text-xs tracking-widest text-gold">{pricing.label}</p>

          <p className="mb-2 text-muted line-through text-lg">
            De {pricing.originalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
          </p>

          <h3 className="mb-2 font-display text-5xl font-bold text-ink">
            {pricing.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
          </h3>

          <p className="mb-8 text-muted">
            ou {pricing.installments.count}x de{" "}
            {pricing.installments.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}{" "}
            no cartão
          </p>

          <div className="mb-10 space-y-3 text-left max-w-sm mx-auto">
            {pricing.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-3 w-3 text-gold" strokeWidth={3} />
                </div>
                <span className="text-ink/90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#candidatura"
            className="inline-block rounded-full bg-gold px-10 py-4 font-display text-base font-bold text-bg shadow-[0_0_40px_rgba(242,183,5,0.25)] transition-all hover:scale-[1.02] hover:bg-white"
          >
            QUERO ME CANDIDATAR À BOLSA
          </a>

          <p className="mt-4 text-sm text-muted">{pricing.note}</p>

          <p className="mt-6 text-xs text-muted/70">{pricing.disclaimer}</p>
        </Reveal>
      </div>
    </section>
  )
}

import { BookOpen, Users, Sparkles, type LucideIcon } from "lucide-react"
import { pillars } from "@/src/content/site"
import Reveal from "./Reveal"

const icons: Record<string, LucideIcon> = { book: BookOpen, users: Users, sparkles: Sparkles }

const toneClasses: Record<string, string> = {
  gold: "bg-gold/10 border-gold/25 text-gold",
  violet: "bg-violet/10 border-violet/25 text-violet",
  green: "bg-green/10 border-green/25 text-green",
}

export default function PillarsSection() {
  return (
    <section id="pilares" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal amount={0.4} className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">{pillars.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{pillars.title}</h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.items.map(({ icon, tone, title, description }, index) => {
            const Icon = icons[icon]
            return (
              <Reveal
                key={title}
                delay={index * 0.12}
                className="group relative rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-[0_0_0_1px_rgba(242,183,5,0.3)]"
              >
                <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border ${toneClasses[tone]}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

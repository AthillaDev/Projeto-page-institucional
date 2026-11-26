import AnimatedNumber from "./AnimatedNumber"
import Reveal from "./Reveal"
import { dataProof } from "@/src/content/site"

export default function DataProofSection() {
  return (
    <section className="border-t border-border bg-surface/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal amount={0.4} className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">{dataProof.eyebrow}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{dataProof.title}</h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {dataProof.stats.map(({ value, prefix, suffix, color, description, source }, index) => (
            <Reveal
              key={description}
              delay={index * 0.12}
              className="rounded-2xl border border-border p-8 text-center"
            >
              <AnimatedNumber
                value={value}
                prefix={prefix}
                suffix={suffix}
                className={`mb-2 font-display text-5xl font-bold ${color}`}
              />
              <p className="mb-3 text-sm text-ink/80">{description}</p>
              <p className="font-mono text-[11px] text-muted">Fonte: {source}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

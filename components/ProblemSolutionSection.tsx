"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { Check } from "lucide-react"
import { problemSolution } from "@/src/content/site"

const { oldWays, newWays } = problemSolution

/**
 * Um item que "acende" conforme o scroll avança. Só o marcador (ícone ou bolinha) muda de opacidade;
 * o texto fica sempre com contraste total, para não ficar ilegível enquanto o item está apagado.
 */
function ScrollLitItem({
  progress,
  index,
  total,
  marker,
  label,
}: {
  progress: MotionValue<number>
  index: number
  total: number
  marker: React.ReactNode
  label: React.ReactNode
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.35, 1])

  return (
    <li className="flex items-center gap-3">
      <motion.span style={{ opacity }} className="flex shrink-0 items-center">
        {marker}
      </motion.span>
      {label}
    </li>
  )
}

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"], // começa a acender quando a seção entra 80% da tela, termina na metade
  })

  return (
    <section className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="mx-auto mb-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            {problemSolution.title}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted">{problemSolution.body}</p>
        </motion.div>

        <p className="mb-10 text-center font-mono text-xs tracking-widest text-muted">
          {problemSolution.hint}
        </p>

        <div ref={sectionRef} className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red/20 bg-surface p-8">
            <p className="mb-5 font-mono text-xs tracking-widest text-red">MODO ANTIGO</p>
            <ul className="space-y-3 text-sm">
              {oldWays.map((label, i) => (
                <ScrollLitItem
                  key={label}
                  progress={scrollYProgress}
                  index={i}
                  total={oldWays.length}
                  marker={<span className="h-1.5 w-1.5 rounded-full bg-red/50" />}
                  label={<span className="text-muted line-through decoration-red/50">{label}</span>}
                />
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green/20 bg-surface p-8">
            <p className="mb-5 font-mono text-xs tracking-widest text-green">MODO CERNE</p>
            <ul className="space-y-3 text-sm">
              {newWays.map((label, i) => (
                <ScrollLitItem
                  key={label}
                  progress={scrollYProgress}
                  index={i}
                  total={newWays.length}
                  marker={<Check className="h-4 w-4 text-green" strokeWidth={2.5} />}
                  label={<span className="text-ink/90">{label}</span>}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

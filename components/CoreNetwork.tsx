"use client"

import { motion, useReducedMotion } from "framer-motion"

const nodes = [
  { label: "ChatGPT", angle: -35, radius: 150, color: "#10A37F" },
  { label: "Claude", angle: 20, radius: 175, color: "#D97757" },
  { label: "Gemini", angle: 70, radius: 135, color: "#6C63FF" },
  { label: "Notion AI", angle: -85, radius: 115, color: "#E7E7E2" },
  { label: "Perplexity", angle: 205, radius: 165, color: "#22B8CD" },
  { label: "n8n", angle: 150, radius: 130, color: "#F2B705" },
] as const

const ORBIT_DURATION = 90 // segundos por volta completa — bem lento e ambiente, não distrai do CTA

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

/**
 * Diagrama decorativo: núcleo brilhante fixo (referência ao nome "Cerne") com as
 * ferramentas de IA orbitando lentamente ao redor, conectadas por linhas com um
 * pulso de luz que viaja do centro até cada ícone. Labels ficam sempre na vertical
 * (contra-rotacionadas), só a posição orbita.
 */
export default function CoreNetwork() {
  const shouldReduceMotion = useReducedMotion()
  const orbitAnimation = shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }
  const orbitTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" as const }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      role="img"
      aria-label="Diagrama ilustrativo conectando o Cerne às principais ferramentas de IA do mercado"
    >
      {/* anéis de órbita decorativos — fixos, não giram */}
      {[105, 155, 205].map((r) => (
        <div
          key={r}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full border border-white/[0.06]"
          style={{ width: r * 2, height: r * 2, transform: "translate(-50%, -50%)" }}
        />
      ))}

      {/* núcleo brilhante — fixo, com respiração sutil (é o "sol", não orbita) */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        style={{ boxShadow: "0 0 70px 24px rgba(242,183,5,0.45)" }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* grupo que gira como um corpo rígido: linhas + pulsos + posição dos badges */}
      <motion.div
        className="absolute inset-0"
        animate={orbitAnimation}
        transition={orbitTransition}
        style={{ transformOrigin: "50% 50%" }}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" viewBox="-220 -220 440 440">
          {nodes.map(({ label, angle, radius, color }, i) => {
            const { x, y } = polar(angle, radius)
            return (
              <g key={label}>
                <line x1={0} y1={0} x2={x} y2={y} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />
                <motion.circle
                  r={3}
                  fill={color}
                  initial={{ opacity: 0 }}
                  animate={{ cx: [0, x], cy: [0, y], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: i * 0.35,
                    ease: "easeOut",
                  }}
                />
              </g>
            )
          })}
        </svg>

        {/* badges: a posição gira junto com o grupo, mas o conteúdo é contra-rotacionado
            pra ficar sempre legível e na vertical, como no vídeo de referência */}
        {nodes.map(({ label, angle, radius, color }, i) => {
          const { x, y } = polar(angle, radius)
          return (
            <div
              key={label}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 1, scale: 1, rotate: -360 }
                }
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 + i * 0.08 },
                  scale: { duration: 0.5, delay: 0.3 + i * 0.08 },
                  rotate: orbitTransition,
                }}
                className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-surface/90 px-3 py-1.5 text-xs font-medium text-ink shadow-lg backdrop-blur-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                {label}
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, animate } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  formatValue?: (n: number) => string
  className?: string
}

/**
 * Anima um número de 0 até `value` quando o elemento entra na viewport.
 * Dispara só uma vez (não reanima se sair e voltar a entrar na tela).
 */
export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  formatValue,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })

    return () => controls.stop()
  }, [inView, value, duration])

  const formatted = formatValue ? formatValue(display) : display.toLocaleString("pt-BR")

  return (
    <p ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </p>
  )
}
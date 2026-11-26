"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Atraso da animação, em segundos. */
  delay?: number
  /** Duração da animação, em segundos. */
  duration?: number
  /** Fração do elemento visível para disparar a animação (0 a 1). */
  amount?: number
}

/**
 * Wrapper cliente que faz o conteúdo subir e aparecer ao entrar na tela.
 * Permite que seções inteiras sejam Server Components, enviando ao navegador
 * só este pequeno componente em vez de cada seção com Framer Motion.
 */
export default function Reveal({ children, className, delay = 0, duration = 0.6, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

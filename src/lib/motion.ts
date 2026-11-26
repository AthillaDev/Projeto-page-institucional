import type { Variants } from "framer-motion"
import { easeInOutCubic } from "./easing"

/** Container que anima os filhos em sequência (stagger). */
export const staggerContainer = (stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})

/** Item que sobe e aparece, usado dentro de um `staggerContainer`. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOutCubic } },
}

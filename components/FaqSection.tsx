"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Preciso saber programar para fazer o MBA?",
    answer:
      "Não. O MBA é focado em aplicação prática de Inteligência Artificial sem necessidade de escrever código. Você vai aprender a usar ferramentas avançadas de forma estratégica.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Sim. O curso possui reconhecimento do MEC com nota máxima, o que garante validade nacional do diploma.",
  },
  {
    question: "Quanto tempo dura o MBA?",
    answer:
      "A formação tem duração de 12 meses, com encontros online e conteúdos gravados para você estudar no seu ritmo.",
  },
  {
    question: "As bolsas são limitadas?",
    answer:
      "Sim. Temos um número limitado de bolsas com até 50% de desconto. A análise de perfil é feita em até 48 horas após a candidatura.",
  },
  {
    question: "Quais ferramentas estão inclusas?",
    answer:
      "Você recebe acesso a um pacote de ferramentas de IA avaliadas em mais de R$ 27 mil, incluindo soluções de produtividade, automação e geração de conteúdo.",
  },
  {
    question: "Posso parcelar o investimento?",
    answer:
      "Sim. Oferecemos opções de parcelamento. Os detalhes são apresentados após a análise da sua candidatura.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="border-t border-border px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted text-lg">
            Tire suas principais dúvidas antes de se candidatar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/5"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

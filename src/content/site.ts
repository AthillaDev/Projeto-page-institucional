// Fonte única de conteúdo do template.
// Edite SOMENTE este arquivo para trocar textos, preços, estatísticas, depoimentos e dados legais.
// Todos os valores abaixo são FICTÍCIOS (demonstração). Substitua por dados reais antes de publicar,
// e mantenha a fonte verificada de cada estatística.

export const site = {
  name: "Cerne",
  url: "https://cerne-mba.vercel.app",
  locale: "pt-BR",
  title: "Cerne — MBA em Inteligência Artificial Aplicada",
  description:
    "Formação prática em Inteligência Artificial Aplicada, com ferramentas de IA inclusas — sem escrever uma linha de código.",
  // Número do WhatsApp que recebe candidaturas (só dígitos, com código do país). Vem de .env.local.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  analysisDeadline: "2 dias úteis",
} as const

export const hero = {
  badge: "Bolsas limitadas · até 50% de desconto",
  titleStart: "Candidate-se para a bolsa do MBA em",
  titleHighlight: "Inteligência Artificial",
  titleEnd: "Aplicada",
  subtitle:
    "Formação prática em Inteligência Artificial Aplicada, com ferramentas de IA inclusas — sem escrever uma linha de código.",
  proofs: [
    "Diploma de pós-graduação lato sensu",
    "1.200 alunos formados",
    "Ferramentas de IA inclusas no curso",
  ],
  ctaLabel: "QUERO ME CANDIDATAR À BOLSA",
  ctaNote: `Leva 2 minutos · Análise do seu perfil em até ${site.analysisDeadline}`,
  toolsTitle: "FERRAMENTAS QUE VOCÊ VAI DOMINAR",
  tools: ["ChatGPT", "Claude", "Gemini", "Midjourney", "n8n", "Zapier", "Notion AI", "Perplexity"],
} as const

export const pillars = {
  eyebrow: "O QUE VOCÊ LEVA",
  title: "Um MBA. Três conquistas.",
  items: [
    {
      icon: "book",
      tone: "gold",
      title: "Diploma de pós-graduação",
      description:
        "Certificado de pós-graduação lato sensu, com carga horária de 360 horas. Consulte o ato regulatório do curso no e-MEC.",
    },
    {
      icon: "users",
      tone: "violet",
      title: "Metodologia prática",
      description:
        "Aulas focadas em aplicar IA no seu trabalho, sem exercícios artificiais. Turmas com acompanhamento individual.",
    },
    {
      icon: "sparkles",
      tone: "green",
      title: "Ferramentas de IA inclusas",
      description:
        "Acesso às ferramentas listadas na seção Ferramentas durante o curso. Valores de referência.",
    },
  ],
} as const

export const problemSolution = {
  title: "A IA já está decidindo quem sobe e quem fica pra trás.",
  body:
    "O mercado não está esperando ninguém se atualizar no próprio ritmo. Times inteiros já trocaram planilha manual por agente de IA, e quem ainda opera do jeito antigo vira, aos poucos, o gargalo do próprio time. Quem se posiciona agora sai na frente.",
  hint: "role a página — o mercado acende o que importa",
  oldWays: ["Planilhas manuais", "Tarefas repetitivas", "Retrabalho constante", "Decisões no achismo"],
  newWays: ["Agentes de IA", "Automações inteligentes", "Análise preditiva", "Decisões orientadas por dado"],
} as const

export const methodology = {
  eyebrow: "A JORNADA",
  title: "Domine a inteligência artificial por dentro — sem programar.",
  steps: [
    {
      num: "01",
      tag: "MÓDULO 01",
      title: "Você entende",
      description:
        "Fundamentos de IA generativa, prompt engineering e como as automações realmente funcionam por trás da cortina.",
    },
    {
      num: "02",
      tag: "MÓDULO 02",
      title: "Você domina",
      description:
        "Prática guiada nas ferramentas que o mercado usa de verdade: ChatGPT, Claude, Gemini, n8n e Zapier.",
    },
    {
      num: "03",
      tag: "MÓDULO 03",
      title: "Você aplica",
      description:
        "Cases reais, aplicados dentro do seu próprio negócio ou área de atuação — não em exercícios artificiais.",
    },
    {
      num: "04",
      tag: "MÓDULO 04",
      title: "Você se posiciona",
      description:
        "Portfólio, autoridade técnica e um posicionamento de carreira construído pra ser levado a sério.",
    },
  ],
  integrator: {
    tag: "PROJETO INTEGRADOR",
    title: "O que você entrega",
    description:
      "Um sistema de automação com IA rodando de verdade, resolvendo um problema real da sua empresa ou da sua carreira — não um exercício de sala de aula.",
  },
} as const

export const dataProof = {
  eyebrow: "IA NO MERCADO",
  title: "Números do mercado de IA",
  // Dados ILUSTRATIVOS: troque por estatísticas reais e informe a fonte de cada uma.
  stats: [
    { value: 45, prefix: "+", suffix: "%", color: "text-gold", description: "de produtividade em tarefas automatizadas (estudo de caso)", source: "Dado ilustrativo" },
    { value: 320, prefix: "+", suffix: "%", color: "text-violet", description: "de crescimento em projetos com agentes de IA", source: "Dado ilustrativo" },
    { value: 85, prefix: "", suffix: "%", color: "text-green", description: "dos alunos relatam mais confiança para usar IA no trabalho", source: "Dado ilustrativo" },
  ],
} as const

export const tools = {
  eyebrow: "HUB DE FERRAMENTAS CERNE",
  title: "Ferramentas de IA incluídas no curso",
  subtitle: "Valores de referência, sujeitos à confirmação.",
  categories: [
    { name: "Criação & Produtividade", items: "ChatGPT Plus · Claude Pro · Notion AI", value: 3600 },
    { name: "Automação", items: "n8n Cloud · Zapier Pro · Make", value: 4800 },
    { name: "Dados & Análise", items: "Julius AI · Perplexity Pro", value: 2400 },
  ],
  totalLabel: "VALOR DE REFERÊNCIA POR ANO",
} as const

export const testimonials = {
  title: "Depoimentos de alunos",
  subtitle: "Histórias ilustrativas de alunos. Substitua por depoimentos reais, com autorização por escrito.",
  items: [
    {
      name: "Mariana R.",
      role: "Gerente de Operações · Indústria",
      text: "Automatizei o fechamento mensal da equipe em duas semanas. Hoje sobra tempo para analisar resultados em vez de montar planilhas.",
    },
    {
      name: "Carlos T.",
      role: "Analista de Marketing · Varejo",
      text: "Eu usava IA de forma improvisada. Depois do MBA, tenho um fluxo de conteúdo com agentes que a equipe inteira adotou.",
    },
    {
      name: "Júlia M.",
      role: "Empreendedora · Serviços",
      text: "O projeto integrador virou o primeiro produto do meu negócio. Aprendi a aplicar, não só a usar ferramentas.",
    },
  ],
} as const

export const pricing = {
  label: "CONDIÇÃO ESPECIAL DE BOLSA",
  title: "Investimento",
  subtitle: "Uma formação completa em Inteligência Artificial Aplicada, com condições especiais de bolsa por tempo limitado.",
  originalPrice: 12000,
  price: 6000,
  installments: { count: 12, value: 500 },
  items: [
    "Diploma de pós-graduação lato sensu",
    "Formação 100% prática",
    "Acesso a ferramentas de IA",
    "Suporte e mentoria",
    "Comunidade de alunos",
  ],
  note: `Vagas limitadas. Análise de perfil em até ${site.analysisDeadline}.`,
  disclaimer:
    "Valores de demonstração. O preço “de” só deve aparecer se o valor original tiver sido praticado.",
} as const

export const faq = [
  {
    question: "Preciso saber programar para fazer o MBA?",
    answer:
      "Não. O MBA é focado em aplicação prática de Inteligência Artificial sem necessidade de escrever código. Você vai aprender a usar ferramentas avançadas de forma estratégica.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Cursos de pós-graduação lato sensu seguem as normas do MEC. Confira o ato regulatório e o conceito do curso no e-MEC antes de se candidatar.",
  },
  {
    question: "Quanto tempo dura o MBA?",
    answer:
      "A formação tem duração de 18 meses, com encontros online e conteúdos gravados para você estudar no seu ritmo.",
  },
  {
    question: "As bolsas são limitadas?",
    answer: `Sim. Há 50 bolsas nesta turma, com desconto de até 50%. A análise de perfil é feita em até ${site.analysisDeadline} após a candidatura.`,
  },
  {
    question: "Quais ferramentas estão inclusas?",
    answer:
      "Você recebe acesso às ferramentas de IA listadas na seção Ferramentas, incluindo soluções de produtividade, automação e análise de dados.",
  },
  {
    question: "Posso parcelar o investimento?",
    answer:
      "Sim. Oferecemos parcelamento no cartão. Os detalhes são apresentados após a análise da sua candidatura.",
  },
] as const

export const application = {
  title: "Candidate-se à bolsa",
  subtitle: `Preencha os dados abaixo. A análise do seu perfil é feita em até ${site.analysisDeadline}.`,
  consentText:
    "Concordo que a instituição use meus dados (nome, e-mail, WhatsApp e cargo) apenas para entrar em contato sobre minha candidatura, conforme a",
  consentVersion: "2026-11",
  submitLabel: "ENVIAR CANDIDATURA",
  successMessage: "Recebemos sua candidatura. Entraremos em contato em breve.",
} as const

export const finalCta = {
  titleStart: "Candidate-se para a bolsa do MBA em",
  titleHighlight: "Inteligência Artificial",
  titleEnd: "Aplicada",
  ctaLabel: "QUERO ME CANDIDATAR À BOLSA",
  note: `Leva 2 minutos · Análise do seu perfil em até ${site.analysisDeadline}`,
} as const

export const legal = {
  companyName: "Cerne Educação Ltda. (empresa fictícia)",
  cnpj: "00.000.000/0000-00 (fictício)",
  address: "Endereço fictício — substitua pelo endereço real",
  dpoEmail: "privacidade@exemplo.com.br",
  // Operadores que tratam os dados de candidatura (citados na Política de Privacidade).
  processors: ["WhatsApp (Meta), quando o candidato opta por continuar pelo app", "Serviço de armazenamento de leads configurado pela instituição"],
} as const

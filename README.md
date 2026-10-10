# Cerne — Landing page de MBA em IA Aplicada

Landing page de uma instituição de ensino **fictícia** ("Cerne"), feita para prática de front-end e possível uso como modelo. Todos os nomes, dados, depoimentos e valores são ilustrativos e devem ser substituídos por informações reais antes de qualquer publicação.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animações)
- Lucide (ícones)
- Fontes via `next/font/google`: Space Grotesk, Plus Jakarta Sans e IBM Plex Mono

## Requisitos

- Node.js **20.9 ou superior** (exigido pelo Next 16)

## Como rodar

```bash
cd cerne-mba
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                  |
| `npm run start` | Serve o build de produção          |
| `npm run lint`  | Verifica o código com ESLint       |

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável                       | Descrição                                                                                 |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | Número do WhatsApp que recebe as candidaturas (código do país + DDD + número, só dígitos). Sem ele, o formulário mostra "canal indisponível". |

## Estrutura

```
app/
  layout.tsx        metadados, fontes e HTML base
  page.tsx          composição das seções da home
  globals.css       tokens de cor e fonte (@theme do Tailwind)
  termos/           Termos de Uso (modelo)
  privacidade/      Política de Privacidade (modelo)
components/         uma seção por arquivo (Hero, Pillars, Pricing, FAQ, formulário...)
src/lib/            utilitários (easing)
public/             imagens, ícone e og-image
```

As seções da home, na ordem em que aparecem: Hero, Pilares, Problema/Solução, Metodologia, Prova de dados, Ferramentas, Depoimentos, Investimento, FAQ, Formulário de candidatura e CTA final.

## Antes de publicar

Os seguintes pontos estão marcados com `[...]` no código e precisam ser preenchidos ou revisados:

- Reconhecimento oficial do curso e do diploma (com número do ato regulatório, conforme e-MEC)
- Número de alunos, bolsas, percentuais de desconto e prazos de análise
- Preços e valores de referência das ferramentas inclusas
- Estatísticas de mercado, com fonte verificada para cada número
- Depoimentos reais, com autorização por escrito
- Razão social, CNPJ e contato do encarregado nas páginas legais
- Revisão jurídica de **Termos de Uso** e **Política de Privacidade**, que são apenas modelos

## Deploy

O projeto é compatível com a Vercel. A URL de referência nos metadados está em `app/layout.tsx` (`siteUrl`) e deve ser ajustada para o domínio final.

## CI

O workflow em `.github/workflows/ci.yml` roda `npm ci`, `npm run build` e `npm run lint` a cada push e pull request, com Node 20.

## Notas para quem edita

Este projeto usa uma versão do Next.js com mudanças em relação a versões anteriores. Consulte a documentação incluída em `node_modules/next/dist/docs/` antes de alterar APIs, conforme descrito em [AGENTS.md](AGENTS.md).

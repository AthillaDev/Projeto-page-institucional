# Contexto do projeto

Documento de referência para quem for retomar o projeto. Descreve o objetivo, as decisões tomadas, a arquitetura e o que ainda falta.

## Objetivo

Transformar a landing page de um MBA fictício em um **template vendável**, que também serve como **peça de portfólio**.

- **Para venda**: um cliente troca o conteúdo, as cores e o webhook de leads sem mexer nos componentes.
- **Para portfólio**: a demo ao vivo mostra desempenho, acessibilidade, SEO e segurança, com notas verificadas.

A marca "Cerne" é fictícia e serve de demonstração. Os dados, estatísticas e depoimentos são ilustrativos.

## Estado atual

| Área | Situação |
| --- | --- |
| Conteúdo centralizado | Feito. Tudo em `src/content/site.ts` |
| Captura de candidaturas | Feita. Endpoint `POST /api/leads` com validação, honeypot, limite de taxa e registro de consentimento |
| Formulário | Feito. Estados de erro e sucesso, máscara de telefone, fallback para WhatsApp |
| Acessibilidade | Lighthouse em 100 no site ao vivo. Foco visível global, contraste verificado, menu mobile |
| SEO | Feito. Sitemap, robots, JSON-LD, Open Graph |
| Segurança | Headers em `next.config.ts` (CSP, `X-Frame-Options`, HSTS etc.). Auditoria sem vulnerabilidades |
| Desempenho | Performance desktop 84 a 100 e mobile 78 a 88, com ruído alto entre rodadas. LCP mobile em torno de 1 s |
| Testes | Vitest com 15 testes unitários (validação e limite de taxa). Sem testes E2E ainda |
| Licença | MIT |
| Deploy | Vercel, com deploy automático a cada push em `main` |
| Analytics | Não há, por decisão |

## Pendências

- **Variáveis de ambiente na Vercel**: `LEADS_WEBHOOK_URL` e `NEXT_PUBLIC_WHATSAPP_NUMBER` ainda não estão configuradas. Sem a primeira, nenhuma candidatura é salva.
- **Desempenho mobile**: falta trocar o Framer Motion por CSS nas animações simples, para reduzir o JavaScript no carregamento. Isso mexe na animação e precisa de decisão.
- **Playwright** (testes E2E): adiado a pedido.
- **Capturas do portfólio**: a tela inicial já está em `docs/screenshots/`. Faltam as capturas de seções e uma página de case.
- **Componentes ainda no cliente**: Hero, Methodology, ProblemSolution, ToolsBonus, Formulário e Header. Parte precisa de estado, então o ganho de converter é pequeno.

## Decisões importantes

- **Conteúdo fictício, mas trocável.** Os componentes não têm dados embutidos. Trocar a marca é editar `site.ts`.
- **Leads por webhook, não por banco de dados.** O endpoint repassa a candidatura para um destino configurado (Zapier, Make, n8n, planilha ou CRM). Assim, cada cliente escolhe onde os dados ficam, sem o template precisar de banco.
- **Consentimento registrado.** Cada candidatura guarda o texto do consentimento, a versão, a data e um hash do IP (nunca o IP em texto puro).
- **Sem analytics e sem cookies.** Mantém a Política de Privacidade simples.
- **Licença MIT.** Permite uso e venda, com a exigência de manter o aviso de copyright. O conteúdo de demonstração não está coberto por essa licença.
- **Server Components sempre que possível.** Só as partes com estado ou interação ficam no cliente. A animação de entrada usa o componente `Reveal`.
- **O herói não tem animação no título.** O título é o elemento LCP, então precisa aparecer já no HTML.
- **Diagrama do herói só no desktop.** No celular ele não é montado, para não gastar processamento.
- **Identidade git com e-mail `noreply`.** Os commits novos não expõem o e-mail pessoal. Os commits antigos ainda têm o e-mail, porque reescrever o histórico exigiria force-push.

## Arquitetura

```
app/
  layout.tsx              metadados, fontes e HTML base
  page.tsx                composição da home e JSON-LD
  api/leads/route.ts      endpoint de candidaturas
  termos/, privacidade/   páginas legais (modelos)
  sitemap.ts, robots.ts, not-found.tsx, error.tsx
components/               seções da home (Reveal, Hero, FAQ, Formulário...)
src/
  content/site.ts         fonte única de conteúdo
  lib/leads.ts            validação e formatação de telefone
  lib/rate-limit.ts       limite de requisições por IP (em memória)
  lib/motion.ts           variants compartilhados do Framer Motion
  lib/easing.ts           função de easing
docs/
  PERSONALIZACAO.md       guia para adaptar o template
  CONTEXTO.md             este arquivo
  screenshots/            imagens usadas no README
```

## Como verificar

```bash
cd cerne-mba
npm install
npm run lint
npx tsc --noEmit
npm test
npm run build
```

Em produção, `npm run build && npm start` sobe o site local para testes com Lighthouse. Medições de desempenho no Lighthouse variam bastante de uma rodada para outra. Para comparar mudanças, faça várias rodadas e use a mediana.

## Histórico relevante

- Correções iniciais: chaves duplicadas, acessibilidade do FAQ, Next atualizado para 16.4.6.
- Centralização do conteúdo em `site.ts`, sem placeholders visíveis.
- Captura de candidaturas com webhook e consentimento.
- Headers de segurança, sitemap, JSON-LD, menu mobile e CI com typecheck e testes.
- Server Components, correção do LCP, remoção de erros de console e foco visível.

## Repositório raiz

A pasta `projeto-page-institucinal/` é um repositório git local que contém `cerne-mba/` como gitlink, sem `.gitmodules`. O projeto de verdade é o `cerne-mba/`, publicado em `github.com/AthillaDev/Projeto-page-institucional`. O repositório raiz não tem remoto e não é usado para publicar.

# Guia de personalização

Este guia mostra como adaptar a landing page a um novo cliente. Não é preciso alterar os componentes em `components/`.

## 1. Conteúdo

Edite `src/content/site.ts`. Ele contém:

| Bloco | O que controla |
| --- | --- |
| `site` | Nome da marca, URL do site, título e descrição para buscadores |
| `hero` | Selo, título, subtítulo, provas e ferramentas do topo |
| `pillars`, `problemSolution`, `methodology` | Seções de benefícios, problema/solução e módulos |
| `dataProof` | Estatísticas. **Cada uma precisa de uma fonte real** no campo `source` |
| `tools` | Ferramentas incluídas e seus valores de referência |
| `testimonials` | Depoimentos. **Só use depoimentos reais, com autorização por escrito** |
| `pricing` | Preço "de", preço "por", parcelamento e itens inclusos |
| `faq` | Perguntas e respostas |
| `application` | Textos do formulário e o texto do consentimento |
| `finalCta` | Chamada final |
| `legal` | Razão social, CNPJ, endereço e e-mail do encarregado de dados |

Depois de editar, rode `npm run dev` e confira a página.

**Atenção ao preço "de"**: ele só deve aparecer se o valor original tiver sido praticado. Caso contrário, remova `originalPrice` do bloco `pricing` e ajuste o componente `PricingSection`.

## 2. Cores e fontes

- Cores: bloco `@theme` em `app/globals.css` (`--color-gold`, `--color-violet`, `--color-bg` etc.).
- Fontes: em `app/layout.tsx`, via `next/font/google`. Troque a família e mantenha as variáveis `--font-*`.
- Logo e imagens: substitua os arquivos em `public/` (`icon-512.png`, `apple-touch-icon.png`, `og-image.png`), mantendo os nomes.

## 3. Formulário e captura de leads

O formulário envia as candidaturas para o endpoint `POST /api/leads`. Configure o destino no `.env.local`:

```bash
LEADS_WEBHOOK_URL=https://seu-webhook.exemplo   # Zapier, Make, n8n, Google Sheets, CRM...
NEXT_PUBLIC_WHATSAPP_NUMBER=5521999999999        # fallback caso o envio falhe
LEADS_IP_SALT=uma-string-aleatoria               # opcional
```

O webhook recebe JSON com `name`, `email`, `whatsapp`, `role`, `source` e `consent` (aceite, texto, versão, data e hash do IP).

Sem `LEADS_WEBHOOK_URL`, o formulário mostra o aviso e oferece o envio pelo WhatsApp.

## 4. Textos legais

As páginas `/termos` e `/privacidade` são **modelos**. Antes de usar com clientes reais:

- Revise com um profissional jurídico.
- Confirme os operadores listados em `legal.processors`.
- Preencha o e-mail do encarregado em `legal.dpoEmail`.

## 5. Checklist antes de entregar

- [ ] Todos os dados de `src/content/site.ts` foram substituídos.
- [ ] Nenhuma estatística ou depoimento ilustrativo ficou na página.
- [ ] `grep -rnE '\[(N|X|prazo|inserir)' app components src` não retorna nada.
- [ ] `LEADS_WEBHOOK_URL` configurado e testado com uma candidatura real.
- [ ] `url` em `src/content/site.ts` aponta para o domínio final.
- [ ] Variáveis de ambiente configuradas no provedor de deploy (ex.: Vercel).
- [ ] Textos legais revisados.
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm test` e `npm run build` passam.

## 6. Deploy

Publique na Vercel ou em outro provedor compatível com Next.js. Configure as variáveis de ambiente antes do primeiro build e ajuste o domínio em `site.url`.

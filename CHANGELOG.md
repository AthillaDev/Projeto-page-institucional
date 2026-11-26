# Changelog

## Não lançado

### Adicionado
- Endpoint `POST /api/leads` com validação, honeypot, limite de taxa e registro de consentimento.
- Formulário com estados de carregamento, sucesso e erro, máscara de telefone e fallback para WhatsApp.
- Menu mobile acessível, link "pular para o conteúdo", página 404 e página de erro.
- `sitemap.xml`, `robots.txt` e dados estruturados (schema.org) na home.
- Headers de segurança (CSP, `X-Frame-Options`, HSTS, `Referrer-Policy` etc.).
- Testes unitários com Vitest e etapas de typecheck e testes no CI.
- Guia de personalização em `docs/PERSONALIZACAO.md`.

### Alterado
- Todo o conteúdo foi centralizado em `src/content/site.ts`.
- Placeholders (`[N]`, `[X]`, `[prazo]`, `[inserir]`) substituídos por dados de demonstração.
- Next.js atualizado para 16.4.6, corrigindo vulnerabilidades críticas.
- Política de Privacidade inclui operadores e canal de exclusão de dados.

### Corrigido
- Chaves React duplicadas em depoimentos e estatísticas.
- Botão do FAQ sem `aria-expanded` e `aria-controls`.
- Classes de gradiente antigas do Tailwind v4.

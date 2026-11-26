// Limite de requisições por chave (ex.: IP) em memória.
// Limitação conhecida: em serverless (Vercel) cada instância tem seu próprio mapa. Para um limite
// global, troque por um armazenamento compartilhado (Redis/Upstash) mantendo esta mesma assinatura.

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

/**
 * Retorna true se a chave ainda pode fazer requisições dentro da janela.
 * @param key identificador (ex.: IP do cliente)
 * @param limit máximo de requisições por janela
 * @param windowMs tamanho da janela em milissegundos
 */
export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now()
  const current = buckets.get(key)

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    pruneExpired(now)
    return true
  }

  if (current.count >= limit) return false
  current.count += 1
  return true
}

/** Evita crescimento indefinido do mapa removendo janelas expiradas. */
function pruneExpired(now: number) {
  if (buckets.size < 1000) return
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
}

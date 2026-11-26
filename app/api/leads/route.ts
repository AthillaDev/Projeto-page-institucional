import { createHash } from "node:crypto"
import { NextResponse } from "next/server"
import { application } from "@/src/content/site"
import { validateLead } from "@/src/lib/leads"
import { rateLimit } from "@/src/lib/rate-limit"

export const runtime = "nodejs"

const MAX_BODY_BYTES = 4 * 1024

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
}

/** Guarda só um hash do IP (com sal opcional), nunca o IP em texto puro. */
function hashIp(ip: string): string {
  return createHash("sha256")
    .update(`${process.env.LEADS_IP_SALT ?? ""}${ip}`)
    .digest("hex")
    .slice(0, 16)
}

export async function POST(request: Request) {
  const ip = clientIp(request)

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 })
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const fields = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {}

  // Honeypot: campo oculto que só robôs preenchem. Responde OK sem processar nada.
  if (typeof fields.website === "string" && fields.website.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  const result = validateLead(fields)
  if (!result.ok) {
    return NextResponse.json({ error: "validation", errors: result.errors }, { status: 400 })
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  if (!webhookUrl) {
    // Sem destino configurado: o cliente usa o fallback do WhatsApp, se houver.
    return NextResponse.json({ error: "unconfigured" }, { status: 503 })
  }

  const payload = {
    ...result.data,
    source: "landing-page",
    consent: {
      accepted: true,
      text: `${application.consentText} Política de Privacidade.`,
      version: application.consentVersion,
      acceptedAt: new Date().toISOString(),
      ipHash: hashIp(ip),
    },
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    })
    if (!upstream.ok) {
      return NextResponse.json({ error: "upstream" }, { status: 502 })
    }
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

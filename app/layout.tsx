import type { Metadata } from "next"
import { Space_Grotesk, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cerne — MBA em Inteligência Artificial Aplicada",
  description:
    "Diploma reconhecido, formação 100% prática e um arsenal de ferramentas de IA incluso — sem escrever uma linha de código.",
  // Sugestão: ajustar os valores reais antes de publicar
  openGraph: {
    title: "Cerne — MBA em Inteligência Artificial Aplicada",
    description:
      "Diploma reconhecido, formação 100% prática e um arsenal de ferramentas de IA incluso.",
    url: "https://seu-dominio.exemplo/",
    siteName: "Cerne",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt-BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-bg font-body text-ink antialiased">{children}</body>
    </html>
  )
}

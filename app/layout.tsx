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

const siteUrl = "https://cerne-mba.vercel.app/"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cerne — MBA em Inteligência Artificial Aplicada",
  description:
    "Formação prática em Inteligência Artificial Aplicada, com ferramentas de IA inclusas — sem escrever uma linha de código.",
  // Exemplo fictício: substituir pelos dados reais da instituição antes de publicar
  openGraph: {
    title: "Cerne — MBA em Inteligência Artificial Aplicada",
    description:
      "Formação prática em Inteligência Artificial Aplicada, com ferramentas de IA inclusas.",
    url: siteUrl,
    siteName: "Cerne",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt-BR",
    type: "website",
  },
  icons: {
    icon: "/icon-512.png",
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

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScoreClick - O Sistema de Replay de Lances.",
  description: "O sistema de replay de lances mais completo do mercado. Capture a jogada completa, com total flexibilidade para ajustar a duração conforme a necessidade do clube.",
  keywords: ["scoreclick", "replay", "lance", "jogada"],
  authors: [{ name: "ScoreClick Team" }],
  creator: "ScoreClick",
  publisher: "ScoreClick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scoreclick.com"),
  openGraph: {
    title: "ScoreClick - O Sistema de Replay de Lances.",
    description: "O sistema de replay de lances mais completo do mercado. Capture a jogada completa, com total flexibilidade para ajustar a duração conforme a necessidade do clube.",
    url: "https://scoreclick.com",
    siteName: "ScoreClick",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

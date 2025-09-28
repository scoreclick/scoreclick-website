import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScoreClick - Plataforma de Gestão Esportiva",
  description: "A plataforma completa para gestão de times, jogadores e competições esportivas. Organize, gerencie e acompanhe o desempenho do seu time.",
  keywords: ["esporte", "gestão", "times", "competições", "scoreclick"],
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
    title: "ScoreClick - Plataforma de Gestão Esportiva",
    description: "A plataforma completa para gestão de times, jogadores e competições esportivas.",
    url: "https://scoreclick.com",
    siteName: "ScoreClick",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScoreClick - Plataforma de Gestão Esportiva",
    description: "A plataforma completa para gestão de times, jogadores e competições esportivas.",
    creator: "@scoreclick",
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

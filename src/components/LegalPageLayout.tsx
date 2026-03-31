import Link from 'next/link'
import NavBar from '@/components/NavBar'

type LegalPageLayoutProps = {
  title: string
  children: React.ReactNode
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex flex-col">
      <NavBar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-10 md:py-14 pb-16 default-text-colors">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#181717] font-[var(--font-primary)] mb-2">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground font-[var(--font-secondary)]">
            ScoreClick — última atualização: 31 de março de 2026
          </p>
        </header>
        <div className="font-[var(--font-secondary)] text-foreground space-y-4 text-[var(--font-size-body)] leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[#181717] [&_h2]:font-[var(--font-primary)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:pt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_a]:text-[#04a668] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#068258]">
          {children}
        </div>
        <nav
          className="mt-14 pt-8 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm font-[var(--font-secondary)]"
          aria-label="Documentos legais"
        >
          <Link href="/" className="text-[#04a668] hover:text-[#068258]">
            Início
          </Link>
          <Link href="/politica-de-privacidade" className="text-[#04a668] hover:text-[#068258]">
            Política de Privacidade
          </Link>
          <Link href="/termos-de-servico" className="text-[#04a668] hover:text-[#068258]">
            Termos de Serviço
          </Link>
        </nav>
      </main>
    </div>
  )
}

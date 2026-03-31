'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="relative w-full h-20 shadow-lg shadow-black/30 overflow-hidden">
      {/* Gradiente animado de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#068258] via-[#00dd81] to-[#04a668] animate-gradient-diagonal"></div>
      
      {/* Conteúdo da navbar: links legais à esquerda, logo centralizado */}
      <div className="relative z-10 flex items-center justify-between h-full px-3 sm:px-4 w-full max-w-7xl mx-auto">
        <nav
          className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/90 font-[var(--font-secondary)] z-20 max-w-[42%] sm:max-w-none"
          aria-label="Documentos legais"
        >
          <Link
            href="/politica-de-privacidade"
            className="hover:text-white hover:underline underline-offset-2 leading-tight"
          >
            <span className="sm:hidden">Privacidade</span>
            <span className="hidden sm:inline">Política de Privacidade</span>
          </Link>
          <span className="text-white/40 select-none" aria-hidden>
            ·
          </span>
          <Link
            href="/termos-de-servico"
            className="hover:text-white hover:underline underline-offset-2 whitespace-nowrap"
          >
            <span className="sm:hidden">Termos</span>
            <span className="hidden sm:inline">Termos de Serviço</span>
          </Link>
        </nav>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pointer-events-none">
          <Link
            href="/"
            className="pointer-events-auto flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/assets/imgs/logo-horizontal-white.png"
              alt="Score Click"
              width={200}
              height={60}
              className="h-12 sm:h-15 w-auto max-w-[min(200px,50vw)] object-contain"
              priority
            />
          </Link>
        </div>
        <div className="w-[42%] sm:w-[180px] flex-shrink-0" aria-hidden />
      </div>
    </nav>
  )
}

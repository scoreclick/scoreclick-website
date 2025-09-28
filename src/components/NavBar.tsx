'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="relative w-full h-20 shadow-lg shadow-black/30 overflow-hidden">
      {/* Gradiente animado de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#068258] via-[#00dd81] to-[#04a668] animate-gradient-diagonal"></div>
      
      {/* Conteúdo da navbar */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <Link 
          href="/" 
          className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/assets/imgs/logo-horizontal-white.png"
            alt="ScoreClick Logo"
            width={200}
            height={60}
            className="h-15 w-auto object-contain"
            priority
          />
        </Link>
      </div>
    </nav>
  )
}

'use client'

import React from 'react'
import { Camera, Award, RotateCcw, Palette, Smartphone } from 'lucide-react'

const FeaturesSection = () => {
  const features = [

    {
      title: "Replay Personalizável",
      description: "Não perca nenhum lance decisivo: o recurso de replay permite capturar a jogada completa, com total flexibilidade para ajustar a duração conforme a necessidade do clube.",
      bgColor: "bg-[#04a668]", // Verde médio
      textColor: "text-white",
      indicatorColor: "bg-white/30",
      icon: RotateCcw
    },
    {
      title: "Plataforma Sob Medida",
      description: "Oferecemos uma plataforma personalizada com identidade visual do seu clube, incluindo logotipo, paleta de cores e espaço para inserção de anúncios de patrocinadores.",
      bgColor: "bg-[#181717]", // Preto
      textColor: "text-white",
      indicatorColor: "bg-white/30",
      icon: Palette
    },
    {
        title: "Excelência em Qualidade",
        description: "Nosso sistema prioriza a máxima definição de imagem, extraindo de cada câmera Full HD todo o seu potencial, garantindo transmissões e gravações de altíssima nitidez.",
        bgColor: "bg-[#e5edea]", // Cinza claro
        textColor: "text-[#181717]",
        indicatorColor: "bg-[#181717]/30",
        icon: Award
      },
    {
      title: "Criador de Stories",
      description: "Nossa ferramenta converte vídeos horizontais em formatos verticais ideais para redes sociais, facilitando a produção de conteúdos dinâmicos e prontos para publicação.",
      bgColor: "bg-[#00dd81]", // Verde claro
      textColor: "text-[#181717]",
      indicatorColor: "bg-[#181717]/30",
      icon: Smartphone
    },
    {
        title: "Gravador ScoreClick",
        description: "Desenvolvemos e fabricamos nosso próprio gravador, o que nos confere total autonomia tecnológica para implementar soluções inovadoras e exclusivos recursos que se destacam no mercado.",
        bgColor: "bg-[#068258]", // Verde escuro
        textColor: "!text-white",
        indicatorColor: "bg-white/30",
        icon: Camera
      }
  ]

  const handleContactClick = () => {
    // Navegar para a seção de contato com scroll suave
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="w-full bg-[#181717] py-16 px-4 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Layout Mobile: Stack Vertical */}
        <div className="block md:hidden">
          {/* Header da Seção - Mobile */}
          <div className="text-center mb-16">
            <h2 className="text-white font-[var(--font-primary)] font-bold text-lg mb-6">
              Confira o que a ScoreClick oferece de melhor
            </h2>
            <p className="text-white/90 font-[var(--font-secondary)] text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Estes são os diferenciais que nos tornam únicos no mercado e a melhor opção para o seu clube.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-[#068258] text-white inline-flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Entrar em Contato
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>

          {/* Grid de Features - Mobile */}
          <div className="grid grid-cols-1 gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} ${feature.textColor} p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-md shadow-black/60`}
              >
                {/* Ícone no topo à esquerda */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-transparent backdrop-blur-sm">
                    <feature.icon className="w-10 h-10" />
                  </div>
                  {/* Indicador visual no topo à direita */}
                  <div className={`w-3 h-3 rounded-full ${feature.indicatorColor} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-[var(--font-primary)] font-bold text-xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="font-[var(--font-secondary)] text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Desktop: Duas Colunas (md+) */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-12 lg:gap-16 md:items-start">
          {/* Header da Seção - Desktop (Coluna Esquerda) */}
          <div className="md:col-span-5 lg:col-span-5 translate-y-20">
            <div className="text-left">
              <h2 className="text-white font-[var(--font-primary)] font-bold text-lg mb-6 leading-tight">
                Confira o que a ScoreClick oferece de melhor
              </h2>
              <p className="text-white/90 font-[var(--font-secondary)] text-lg lg:text-xl mb-8 leading-relaxed">
                Estes são os diferenciais que nos tornam únicos no mercado e a melhor opção para o seu clube.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-[#068258] text-white inline-flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Entrar em Contato
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Grid de Features - Desktop (Coluna Direita) */}
          <div className="md:col-span-7 lg:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.textColor} p-6 lg:p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl group shadow-md shadow-black/60`}
                >
                  {/* Ícone no topo à esquerda */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-transparent backdrop-blur-sm">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    {/* Indicador visual no topo à direita */}
                    <div className={`w-3 h-3 rounded-full ${feature.indicatorColor} group-hover:scale-125 transition-transform duration-300`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-[var(--font-primary)] !font-bold !text-xl leading-tight">
                      {feature.title}
                    </h3>
                    <p className="font-[var(--font-secondary)] text-sm lg:text-md leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

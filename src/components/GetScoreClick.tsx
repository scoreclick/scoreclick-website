'use client'

export default function GetScoreClick() {
  const handleClick = () => {
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
    <section className="w-full h-auto bg-black relative overflow-hidden cursor-pointer group" onClick={handleClick}>
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center justify-center !p-4 hover:cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Título Principal */}
          <h2 className="!text-lg md:!text-md !font-normal !text-white !m-0" style={{ fontFamily: 'var(--font-primary)' }}>
            Clique aqui para ter a <strong>ScoreClick</strong> no seu clube
          </h2>
        </div>
      </div>
    </section>
  )
}

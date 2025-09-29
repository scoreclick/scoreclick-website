'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Phone, Instagram, Youtube, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const whatsappMessage = "Olá, quero falar com a ScoreClick, vim através do Website!"
  const whatsappUrl = `https://wa.me/5547999803969?text=${encodeURIComponent(whatsappMessage)}`

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@scoreclick.com.br',
      href: 'mailto:contato@scoreclick.com.br',
      bgColor: 'bg-[#04a668]', // Verde médio
      textColor: 'text-white',
      iconBgColor: 'bg-white/30',
      iconColor: 'text-white'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 47 99980-3969',
      href: whatsappUrl,
      bgColor: 'bg-[#181717]', // Preto
      textColor: 'text-white',
      iconBgColor: 'bg-white/30',
      iconColor: 'text-white'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@scoreclick',
      href: 'https://instagram.com/scoreclick',
      bgColor: 'bg-[#e5edea]', // Cinza claro
      textColor: 'text-[#181717]',
      iconBgColor: 'bg-[#181717]/30',
      iconColor: 'text-[#181717]'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: 'ScoreClickTV',
      href: 'https://www.youtube.com/@ScoreClickTV',
      bgColor: 'bg-[#00dd81]', // Verde claro
      textColor: 'text-[#181717]',
      iconBgColor: 'bg-[#181717]/30',
      iconColor: 'text-[#181717]'
    }
  ]

  return (
    <section id="contact-section" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#181717] mb-4 font-[var(--font-primary)]">
            Entre em Contato
          </h2>
          <p className="text-lg text-[#068258] font-[var(--font-secondary)] max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo ou envie uma mensagem direta no WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          

          {/* Botão WhatsApp */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Card className="w-[600px] max-w-[90vw] p-8 text-center bg-gradient-to-br from-[#e5edea] to-[#f0f5f3] border-[#e5edea] shadow-lg rounded-none">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#181717] mb-2 font-[var(--font-primary)]">
                  Fale Conosco
                </h3>
                <p className="text-[#068258] font-[var(--font-secondary)]">
                  Envie uma mensagem direta no WhatsApp e receba uma resposta rápida!
                </p>
              </div>
              
              <Button
                asChild
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-[var(--font-primary)]"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Mensagem no WhatsApp</span>
                </a>
              </Button>
              
              <p className="text-sm text-gray-600 mt-4 font-[var(--font-secondary)]">
                Clique no botão para abrir o WhatsApp com uma mensagem pré-definida
              </p>
            </Card>

            {/* Informação adicional */}
            <div className="text-center">
              <p className="text-[#068258] font-[var(--font-secondary)] text-sm">
                Horário de atendimento: Segunda a Sexta, 9h às 18h
              </p>
            </div>
          </div>
          {/* Informações de Contato */}
          <div className="space-y-6">            
            <div className="grid gap-0 w-[600px] max-w-[90vw] mx-auto">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${contact.bgColor} ${contact.textColor} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group rounded-none block cursor-pointer`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${contact.iconBgColor}`}>
                        <IconComponent className={`w-6 h-6 ${contact.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium font-[var(--font-primary)]">
                          {contact.label}
                        </p>
                        <p className={`${contact.textColor} font-[var(--font-secondary)]`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

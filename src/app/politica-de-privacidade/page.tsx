import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Score Click',
  description:
    'Como a Score Click trata dados pessoais no site e canais de contato, em conformidade com a LGPD.',
  openGraph: {
    title: 'Política de Privacidade | Score Click',
    description:
      'Como a Score Click trata dados pessoais no site e canais de contato, em conformidade com a LGPD.',
    url: 'https://scoreclick.com.br/politica-de-privacidade',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: '/politica-de-privacidade',
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPageLayout title="Política de Privacidade">
      <p>
        Esta Política de Privacidade descreve como a Score Click (&quot;nós&quot;, &quot;nosso&quot; ou
        &quot;empresa&quot;) trata dados pessoais quando você utiliza nosso site institucional,
        funcionalidades como busca de clubes e canais de contato. Ao utilizar o site, você declara
        ter lido e compreendido esta política.
      </p>

      <h2>1. Controlador dos dados</h2>
      <p>
        O controlador dos dados pessoais tratados neste contexto é a Score Click. Para exercer seus
        direitos ou esclarecer dúvidas sobre privacidade, utilize o e-mail{' '}
        <a href="mailto:contato@scoreclick.com.br">contato@scoreclick.com.br</a>.
      </p>

      <h2>2. Quais dados podemos tratar</h2>
      <ul>
        <li>
          <strong>Dados de navegação e dispositivo:</strong> informações técnicas comuns a sites na
          internet, como endereço IP, tipo de navegador, páginas acessadas, data e hora de acesso e
          identificadores gerados por cookies ou tecnologias similares, quando aplicável.
        </li>
        <li>
          <strong>Dados informados por você:</strong> conteúdo que você nos envia ao entrar em
          contato por e-mail, WhatsApp ou outros meios (por exemplo, nome, telefone, e-mail e
          mensagem).
        </li>
        <li>
          <strong>Dados de uso da busca de clubes:</strong> termos de pesquisa e filtros utilizados na
          funcionalidade de busca do site, necessários para exibir resultados e manter o serviço.
        </li>
      </ul>

      <h2>3. Finalidades do tratamento</h2>
      <ul>
        <li>Operar, manter e melhorar o site e a experiência do usuário.</li>
        <li>Responder solicitações e prestar suporte por meio dos canais de contato.</li>
        <li>Garantir segurança, prevenir fraudes e abusos.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
        <li>
          Com base em legítimo interesse, realizar métricas agregadas e análises que não identifiquem
          você de forma individual, quando possível.
        </li>
      </ul>

      <h2>4. Bases legais (LGPD)</h2>
      <p>
        O tratamento poderá se basear em execução de contrato ou procedimentos preliminares,
        cumprimento de obrigação legal, legítimo interesse (sempre observando seus direitos e
        expectativas) ou consentimento, quando exigido para finalidade específica.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Podemos compartilhar dados com provedores que nos auxiliam na hospedagem, infraestrutura,
        análise de tráfego ou comunicação, sempre sob contratos e medidas de segurança compatíveis
        com a legislação. Não vendemos seus dados pessoais. Dados poderão ser divulgados se exigido
        por lei ou ordem competente.
      </p>

      <h2>6. Transferência internacional</h2>
      <p>
        Caso utilizemos serviços com sede fora do Brasil, adotaremos salvaguardas previstas na LGPD,
        como cláusulas contratuais adequadas, quando aplicável.
      </p>

      <h2>7. Retenção</h2>
      <p>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas, respeitar
        prazos legais e resolver disputas. Após isso, poderão ser anonimizados ou eliminados de
        forma segura.
      </p>

      <h2>8. Seus direitos</h2>
      <p>
        Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
        anonimização, portabilidade, eliminação de dados desnecessários ou tratados em desconformidade,
        informação sobre compartilhamentos e revogação de consentimento, quando a base for o
        consentimento. Também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados
        (ANPD).
      </p>

      <h2>9. Cookies e preferências</h2>
      <p>
        Utilizamos cookies ou tecnologias similares quando necessário ao funcionamento do site ou
        para métricas. Você pode gerenciar preferências no próprio navegador. O bloqueio de cookies
        pode afetar parte das funcionalidades.
      </p>

      <h2>10. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acessos
        não autorizados, perda ou alteração indevida. Nenhum sistema é totalmente isento de riscos.
      </p>

      <h2>11. Alterações</h2>
      <p>
        Esta política pode ser atualizada. A data da última revisão aparece no topo da página.
        Recomendamos consultá-la periodicamente.
      </p>

      <h2>12. Contato</h2>
      <p>
        Dúvidas sobre privacidade:{' '}
        <a href="mailto:contato@scoreclick.com.br">contato@scoreclick.com.br</a>. Consulte também os{' '}
        <a href="/termos-de-servico">Termos de Serviço</a>.
      </p>
    </LegalPageLayout>
  )
}

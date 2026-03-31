import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Termos de Serviço | Score Click',
  description:
    'Condições de uso do site Score Click, serviços de informação e canais de contato.',
  openGraph: {
    title: 'Termos de Serviço | Score Click',
    description:
      'Condições de uso do site Score Click, serviços de informação e canais de contato.',
    url: 'https://scoreclick.com.br/termos-de-servico',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: '/termos-de-servico',
  },
}

export default function TermosDeServicoPage() {
  return (
    <LegalPageLayout title="Termos de Serviço">
      <p>
        Estes Termos de Serviço regem o uso do site institucional da Score Click e das
        funcionalidades disponibilizadas por meio dele. Ao acessar ou utilizar o site, você concorda
        com estes termos. Se não concordar, interrompa o uso.
      </p>

      <h2>1. Definições</h2>
      <p>
        &quot;Score Click&quot;, &quot;nós&quot; ou &quot;empresa&quot; refere-se à titular do site e
        da marca. &quot;Usuário&quot; ou &quot;você&quot; é qualquer pessoa que acesse o site.
      </p>

      <h2>2. Natureza do site</h2>
      <p>
        O site tem caráter informativo e de divulgação de produtos e serviços relacionados ao
        ecossistema Score Click (por exemplo, sistema de replay de lances). A disponibilização de
        informações sobre clubes ou links para ambientes de terceiros não constitui endosso
        automático nem garantia de disponibilidade contínua de serviços externos.
      </p>

      <h2>3. Uso permitido</h2>
      <ul>
        <li>Utilizar o site de forma lícita e de acordo com estes Termos e a legislação aplicável.</li>
        <li>
          Não realizar engenharia reversa, scraping abusivo, sobrecarga de sistemas, disseminação de
          malware ou qualquer atividade que comprometa segurança ou o bom funcionamento do site.
        </li>
        <li>
          Não utilizar o site para transmitir conteúdo ilícito, ofensivo ou que viole direitos de
          terceiros.
        </li>
      </ul>

      <h2>4. Conta, contratos e produtos</h2>
      <p>
        Contratos comerciais, licenças de software, termos específicos de produtos ou ambientes
        logados podem ser regidos por documentos separados. Em caso de conflito entre estes Termos e
        um contrato específico assinado entre as partes, prevalece o contrato específico naquilo que
        lhe for próprio.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Marcas, logotipos, textos, imagens, layout e demais conteúdos do site são de titularidade da
        Score Click ou de licenciantes, salvo indicação em contrário. É vedada a reprodução sem
        autorização prévia, exceto uso pessoal e não comercial que não prejudique os titulares.
      </p>

      <h2>6. Links de terceiros</h2>
      <p>
        O site pode conter links para sites ou aplicativos de terceiros (redes sociais, WhatsApp,
        páginas de clubes etc.). Não controlamos esses ambientes; o uso deles está sujeito aos
        respectivos termos e políticas de privacidade.
      </p>

      <h2>7. Isenções e limitação de responsabilidade</h2>
      <p>
        O site e seu conteúdo são fornecidos &quot;no estado em que se encontram&quot;. Empregamos
        esforços razoáveis para manter informações atualizadas, mas não garantimos ausência de erros
        ou interrupções. Na máxima extensão permitida pela lei aplicável, a Score Click não se
        responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes do uso ou
        impossibilidade de uso do site, salvo dolo ou culpa grave comprovados.
      </p>

      <h2>8. Privacidade</h2>
      <p>
        O tratamento de dados pessoais é descrito na{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>, parte integrante desta
        relação na medida em que complementa estes Termos.
      </p>

      <h2>9. Alterações</h2>
      <p>
        Podemos alterar estes Termos a qualquer momento. A data da última atualização consta no topo
        da página. O uso continuado após alterações constitui aceitação, salvo quando a lei exigir
        consentimento adicional.
      </p>

      <h2>10. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
        comarca do domicílio do consumidor, quando aplicável o Código de Defesa do Consumidor; nos
        demais casos, competirá o foro da comarca de Florianópolis, Estado de Santa Catarina, salvo
        disposição legal imperativa em contrário.
      </p>

      <h2>11. Contato</h2>
      <p>
        Para assuntos relacionados a estes Termos:{' '}
        <a href="mailto:contato@scoreclick.com.br">contato@scoreclick.com.br</a>.
      </p>
    </LegalPageLayout>
  )
}

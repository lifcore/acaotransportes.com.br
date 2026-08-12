import Link from 'next/link';
import { siteConfig } from '@/config/site';

const pilares = [
  'Compromisso & Pontualidade',
  'Segurança em Cada Etapa',
  'Atendimento Humanizado',
  'Flexibilidade Operacional',
  'Tradição & Experiência',
  'Relações de Longo Prazo',
];

const segmentos = ['Indústrias', 'Alimentício', 'Químico', 'Autopeças', 'Farmacêutico', 'Distribuição', 'Comércio'];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative bg-[#071B2D] py-24 lg:py-32 text-white border-b border-[#123B57] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.jpg"
            alt="Caminhão da Ação Transportes na estrada ao entardecer"
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[#071B2D]/45" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="max-w-[800px]">
            <span className="inline-block rounded bg-[#123B57] px-3.5 py-1.5 text-xs font-semibold text-[#C5A15A] uppercase tracking-wider mb-6 border border-[#C5A15A]/30">
              Mais de 30 anos de experiência • Uma nova fase
            </span>
            <h1 className="mb-6 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Transporte que acompanha a sua operação.
            </h1>
            <p className="mb-4 text-lg text-[#F1EDE3] font-light leading-relaxed">
              Há mais de 30 anos, a Ação Transportes conecta empresas a seus destinos com segurança, agilidade e soluções sob medida para cada operação.
            </p>
            <p className="mb-8 text-sm text-gray-200 leading-relaxed">
              Cargas gerais, refrigeradas e congeladas, produtos químicos e perigosos, coletas, entregas e veículos dedicados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cotacao"
                className="rounded bg-[#C5A15A] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#071B2D] transition-colors hover:bg-white"
              >
                Solicitar Contato
              </Link>
              <Link
                href="/solucoes"
                className="rounded border border-[#7894A8] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#123B57]"
              >
                Conhecer Nossas Soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIS DO QUE TRANSPORTAR */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[800px] px-5 text-center">
          <h2 className="text-3xl font-bold mb-6">Mais do que transportar. Entender a operação.</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cada carga possui suas próprias exigências. Origem, destino, prazo, volume, temperatura, tipo de veículo e características do produto influenciam diretamente na solução. A Ação Transportes analisa cada operação para encontrar a melhor forma de atender seus clientes.
          </p>
          <Link href="/solucoes" className="text-sm font-bold text-[#123B57] hover:underline">
            Conheça nossas soluções →
          </Link>
        </div>
      </section>

      {/* 3. 30+ ANOS DE EXPERIÊNCIA */}
      <section className="py-14 bg-[#071B2D] text-white border-y border-[#123B57]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-[#C5A15A]">30+</div>
              <div className="text-sm text-gray-300 mt-1">anos de atuação</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#C5A15A]">4</div>
              <div className="text-sm text-gray-300 mt-1">estados atendidos (SP, MG, PR, SC)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPACIDADE OPERACIONAL / SOLUÇÕES */}
      <section className="py-20 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Capacidade Operacional</span>
              <h2 className="text-3xl font-bold mt-1">Cada operação exige uma solução diferente</h2>
            </div>
            <Link href="/solucoes" className="text-sm font-bold text-[#123B57] hover:underline">
              Ver soluções →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
              <h3 className="text-base font-bold text-[#071B2D] mb-2">Cargas Gerais</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Coletas, transferências e entregas.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
              <h3 className="text-base font-bold text-[#071B2D] mb-2">Refrigerados & Congelados</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Controle de temperatura conforme a necessidade.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
              <h3 className="text-base font-bold text-[#071B2D] mb-2">Químicos & Perigosos</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Maior controle, documentação e conformidade.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
              <h3 className="text-base font-bold text-[#071B2D] mb-2">Veículos Dedicados</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Direcionados exclusivamente para sua operação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONFORMIDADE E SEGURANÇA */}
      <section className="relative py-20 bg-[#071B2D] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/empresa-conformidade.jpg"
            alt="Aperto de mãos entre profissionais em área de contêineres, com EPI"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#071B2D]/60" />
        </div>
        <div className="relative mx-auto max-w-[800px] px-5 text-center">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Conformidade & Segurança</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Operações regulamentadas exigem responsabilidade redobrada</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Contamos com autorizações emitidas por órgãos competentes, incluindo Polícia Civil e Polícia Federal, para o transporte regulamentado de produtos químicos e perigosos elegíveis.
          </p>
          <Link href="/empresa" className="text-sm font-bold text-[#C5A15A] hover:underline">
            Conheça nossa estrutura →
          </Link>
        </div>
      </section>

      {/* 6. PARCERIA DE NEGÓCIOS */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[800px] px-5 text-center">
          <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Parceria de Negócios</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Mais que um transportador: um parceiro fixo na sua operação</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Empresas com operações recorrentes precisam de mais do que um fornecedor de transporte. Trabalhamos próximos ao cliente para entender rotina, prazos e restrições, avaliar rotas, adequar veículos e construir uma parceria de longo prazo.
          </p>
          <a
            href={siteConfig.contato.whatsappLink('Olá, gostaria de falar com o comercial da Ação Transportes.')}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-[#123B57] hover:underline"
          >
            Fale com nosso comercial →
          </a>
        </div>
      </section>

      {/* 7. TECNOLOGIA & GESTÃO */}
      <section className="py-20 bg-[#123B57] text-white">
        <div className="mx-auto max-w-[800px] px-5 text-center">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Tecnologia & Gestão</span>
          <h2 className="text-3xl font-bold mt-2 mb-6 text-white">Tecnologia para controlar. Gestão para decidir. Experiência para executar.</h2>
          <p className="text-[#F1EDE3] leading-relaxed mb-6">
            A tecnologia não substitui nossa experiência. Ela aumenta nossa capacidade de controlar a operação — de gestão de frota a monitoramento em tempo real e gestão de risco.
          </p>
          <Link href="/tecnologia-e-gestao" className="text-sm font-bold text-[#C5A15A] hover:underline">
            Conhecer Tecnologia & Gestão →
          </Link>
        </div>
      </section>

      {/* 8. PILARES DA OPERAÇÃO */}
      <section className="py-16 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <h3 className="text-2xl font-bold mb-8 text-center">Pilares da Nossa Operação</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {pilares.map((item) => (
              <div key={item} className="bg-white py-4 px-3 rounded text-center text-sm font-semibold border border-gray-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SEGMENTOS ATENDIDOS */}
      <section className="py-16 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <h3 className="text-2xl font-bold mb-8 text-center">Segmentos Atendidos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {segmentos.map((item) => (
              <div key={item} className="bg-white py-4 px-3 rounded text-center text-sm font-semibold border border-gray-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-20 bg-[#071B2D] text-white text-center">
        <div className="mx-auto max-w-[800px] px-5">
          <h2 className="text-3xl font-bold mb-4">Vamos conversar sobre sua operação?</h2>
          <p className="text-gray-300 text-sm mb-8">
            Conte para a Ação Transportes o que você precisa transportar. Nossos especialistas analisarão sua demanda para apresentar a solução ideal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cotacao"
              className="inline-block rounded bg-[#C5A15A] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#071B2D] transition-colors hover:bg-white"
            >
              Solicitar Contato
            </Link>
            <Link
              href="/trabalhe-conosco"
              className="inline-block rounded border border-[#7894A8] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#123B57]"
            >
              Trabalhe conosco →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

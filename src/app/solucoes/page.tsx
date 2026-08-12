import { siteConfig } from '@/config/site';

const solucoesList = [
  {
    title: 'Cargas Gerais',
    desc: 'Coletas, transferências e entregas para operações corporativas recorrentes ou sob demanda com alto padrão de pontualidade.',
  },
  {
    title: 'Refrigerados & Congelados',
    desc: 'Transporte com rigoroso controle de temperatura para produtos que exigem condições térmicas específicas e monitoramento contínuo.',
  },
  {
    title: 'Produtos Químicos & Perigosos',
    desc: 'Operações especializadas com devidas licenças da Polícia Civil e Polícia Federal para cargas que exigem controle rigoroso de segurança e conformidade.',
  },
  {
    title: 'Veículos Dedicados',
    desc: 'Frota direcionada exclusivamente para a operação, rota ou necessidade específica do cliente, garantindo prioridade e personalização.',
  },
  {
    title: 'Coletas e Entregas',
    desc: 'Operações programadas com acompanhamento de ponta a ponta e gestão em tempo real.',
  },
];

const segmentosList = [
  'Indústrias',
  'Alimentício',
  'Químico',
  'Autopeças',
  'Farmacêutico',
  'Distribuição',
  'Comércio',
  'Outros Segmentos Corporativos',
];

export default function SolucoesPage() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="relative py-16 bg-[#071B2D] text-white text-center border-b border-[#123B57] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/solucoes-hero.jpg"
            alt="Frota de caminhões da Ação Transportes"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#071B2D]/70" />
        </div>
        <div className="relative mx-auto max-w-[800px] px-5">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">O que fazemos</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Soluções Logísticas</h1>
        </div>
      </section>

      {/* PARCERIA ESTRATÉGICA */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-md order-2 lg:order-1">
              <img
                src="/images/solucoes-parceria.jpg"
                alt="Mãos unindo peças de quebra-cabeça, representando parceria"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Nosso Modelo de Atuação</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Mais que um transportador: um parceiro fixo na sua operação.</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não trabalhamos como um fornecedor eventual. A Ação Transportes se posiciona como parte da operação logística do cliente, com contratação fixa e acompanhamento contínuo — entendendo a rotina, as exigências e o ritmo de cada empresa parceira.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Esse modelo de parceria estratégica permite planejamento de longo prazo, previsibilidade de custos e uma relação de confiança que cresce junto com a operação do cliente.
              </p>
              <a
                href={siteConfig.contato.whatsappLink('Olá, gostaria de saber mais sobre parceria estratégica com a Ação Transportes.')}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded bg-[#7894A8] px-8 py-3.5 text-sm font-bold text-[#071B2D] transition-colors hover:bg-[#123B57] hover:text-white"
              >
                Parceria Estratégica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-20 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Especialidades</span>
              <h2 className="text-3xl font-bold mt-1">Soluções sob medida para sua carga</h2>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/solucoes-especialidades.jpg"
                alt="Equipe descarregando caixas de uma van de entrega"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solucoesList.map((sol) => (
              <div key={sol.title} className="bg-white p-6 rounded shadow-sm border border-gray-200 hover:border-[#7894A8] transition-colors">
                <h3 className="text-xl font-bold text-[#071B2D] mb-3">{sol.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEM TODA OPERAÇÃO É IGUAL */}
      <section className="py-20 bg-[#123B57] text-white">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Nem toda operação é igual.</h2>
          <p className="text-[#F1EDE3] max-w-[700px] mx-auto mb-12 text-sm sm:text-base">
            Avaliamos rigorosamente cada detalhe técnico da demanda para definir o veículo, a rota e a logística mais adequada.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-semibold">
            {['Origem', 'Carga', 'Volume', 'Destino', 'Prazo', 'Veículo', 'Entrega'].map((step, idx, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="bg-[#071B2D] px-4 py-2 rounded border border-[#7894A8] text-[#F1EDE3]">
                  {step}
                </span>
                {idx < arr.length - 1 && <span className="text-[#C5A15A]">➔</span>}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <span className="inline-block text-lg font-bold text-[#C5A15A] border-b border-[#C5A15A] pb-1">
              Nós encontramos a solução.
            </span>
            <a
              href={siteConfig.contato.whatsappLink('Olá, gostaria de falar com um Executivo de Contas.')}
              target="_blank"
              rel="noreferrer"
              className="rounded bg-[#7894A8] px-7 py-3.5 text-sm font-semibold text-[#071B2D] transition-colors hover:bg-white"
            >
              Executivo de Contas
            </a>
          </div>
        </div>
      </section>

      {/* SEGMENTOS ATENDIDOS */}
      <section className="py-16 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <h3 className="text-2xl font-bold mb-8 text-center">Segmentos Atendidos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {segmentosList.map((item) => (
              <div key={item} className="bg-white py-4 px-3 rounded text-center text-sm font-semibold border border-gray-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

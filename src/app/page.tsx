import Link from 'next/link';

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

const pilaresList = [
  {
    title: 'Compromisso & Pontualidade',
    desc: 'Cumprimento rigoroso dos prazos acordados, alinhando planejamento e execução para manter a cadeia de suprimentos de sua empresa em perfeito fluxo.',
  },
  {
    title: 'Segurança em Cada Etapa',
    desc: 'Processos rigorosos de gerenciamento de risco e monitoramento para garantir a integridade total de cargas secas, refrigeradas ou perigosas.',
  },
  {
    title: 'Atendimento Humanizado',
    desc: 'Comunicação direta com quem resolve. Transparência total e proximidade para que você acompanhe a sua operação com total tranquilidade.',
  },
  {
    title: 'Flexibilidade Operacional',
    desc: 'Adaptabilidade para responder às dinâmicas do mercado e ajustar soluções conforme a complexidade da necessidade do cliente.',
  },
  {
    title: 'Tradição & Experiência',
    desc: 'Mais de 30 anos de atuação consolidada, aliando o know-how de mercado com métodos modernos de gestão e execução.',
  },
  {
    title: 'Relações de Longo Prazo',
    desc: 'Foco na construção de parcerias duradouras fundadas em transparência, integridade e resultados consistentes.',
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

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#071B2D] py-24 lg:py-32 text-white border-b border-[#123B57]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="max-w-[800px]">
            <span className="inline-block rounded bg-[#123B57] px-3.5 py-1.5 text-xs font-semibold text-[#C5A15A] uppercase tracking-wider mb-6 border border-[#C5A15A]/30">
              Mais de 30 anos de experiência • Desde 1995
            </span>
            <h1 className="mb-6 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Transporte que acompanha a sua operação.
            </h1>
            <p className="mb-4 text-lg text-[#F1EDE3] font-light leading-relaxed">
              Há mais de 30 anos, a Ação Transportes conecta empresas a seus destinos com segurança, agilidade e soluções sob medida para cada operação.
            </p>
            <p className="mb-8 text-sm text-gray-300 leading-relaxed">
              Atuação estratégica no Sul e Sudeste (São Paulo, Minas Gerais, Paraná e Santa Catarina), com estrutura preparada para ajustar operações conforme a necessidade do cliente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cotacao"
                className="rounded bg-[#7894A8] px-7 py-3.5 text-sm font-semibold text-[#071B2D] transition-colors hover:bg-white"
              >
                Solicitar Cotação
              </Link>
              <Link
                href="/solucoes"
                className="rounded border border-[#7894A8] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#123B57]"
              >
                Conhecer Nossas Soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 30 ANOS DE EXPERIÊNCIA / HISTÓRIA */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Tradição & Evolução</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Uma história construída na estrada. Uma nova fase pela frente.</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Desde 1995, a Ação Transportes atua no transporte rodoviário de cargas, construindo sólida reputação, parcerias duradouras e um profundo conhecimento das exigências operacionais do mercado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoje, vivemos uma importante etapa de modernização: processos aprimorados, gestão orientada a indicadores, tecnologia aplicada à operação e um atendimento ainda mais próximo de nossos clientes.
              </p>
            </div>
            <div className="bg-[#071B2D] p-8 rounded-lg text-white border-l-4 border-[#C5A15A]">
              <div className="text-4xl font-extrabold text-[#7894A8] mb-2">1995 ➔ 2026</div>
              <div className="text-xl font-semibold mb-4 text-[#F1EDE3]">+30 anos de atuação consolidada</div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Combinamos a bagagem de três décadas com novas ferramentas de controle, rastreabilidade e gestão de risco para entregar soluções eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÕES DE TRANSPORTE */}
      <section className="py-20 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12">
            <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Especialidades</span>
            <h2 className="text-3xl font-bold mt-1">Soluções sob medida para sua carga</h2>
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

      {/* 4. OPERAÇÕES ESPECÍFICAS */}
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

          <div className="mt-12">
            <span className="inline-block text-lg font-bold text-[#C5A15A] border-b border-[#C5A15A] pb-1">
              Nós encontramos a solução.
            </span>
          </div>
        </div>
      </section>

      {/* 5. TECNOLOGIA & GESTÃO A SERVIÇO DO TRANSPORTE */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12">
            <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Inovação Aplicada</span>
            <h2 className="text-3xl font-bold mt-1">Tecnologia a serviço do transporte</h2>
            <p className="text-gray-600 text-sm mt-2">A tecnologia entra como suporte à operação para assegurar controle e pontualidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded border border-gray-200">
              <div className="text-[#123B57] font-extrabold text-2xl mb-2">TMS</div>
              <h4 className="font-bold mb-2">Gestão Operacional</h4>
              <p className="text-xs text-gray-600">Controle completo de frotas, rotas e rotinas logísticas.</p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <div className="text-[#123B57] font-extrabold text-2xl mb-2">DMS</div>
              <h4 className="font-bold mb-2">Acompanhamento</h4>
              <p className="text-xs text-gray-600">Gestão detalhada do fluxo e das etapas de entrega.</p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <div className="text-[#123B57] font-extrabold text-2xl mb-2">Monitoramento</div>
              <h4 className="font-bold mb-2">Tempo Real</h4>
              <p className="text-xs text-gray-600">Visibilidade constante da carga durante todo o trajeto.</p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <div className="text-[#123B57] font-extrabold text-2xl mb-2">Gestão de Risco</div>
              <h4 className="font-bold mb-2">Segurança Ativa</h4>
              <p className="text-xs text-gray-600">Processos estruturados para mitigação de riscos na estrada.</p>
            </div>
          </div>

          <p className="text-center font-semibold text-sm text-[#123B57] mt-10">
            &quot;30 anos de experiência não significam uma empresa parada no tempo.&quot;
          </p>
        </div>
      </section>

      {/* 6. SEGURANÇA & LICENCIAMENTO */}
      <section className="py-16 bg-[#071B2D] text-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="max-w-[800px]">
            <h3 className="text-2xl font-bold text-[#7894A8] mb-4">Conformidade e Licenciamento</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Possuímos certificações e autorizações emitidas por órgãos competentes, incluindo Polícia Civil e Polícia Federal, para o transporte regulamentado de produtos químicos e perigosos elegíveis.
            </p>
            <p className="text-xs text-[#C5A15A]">
              *Avaliação técnica prévia realizada para confirmação da classe de produto e especificação do veículo.
            </p>
          </div>
        </div>
      </section>

      {/* 7. PILARES DA OPERAÇÃO */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#071B2D]">Pilares da Nossa Operação</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilaresList.map((p) => (
              <div key={p.title} className="bg-white p-6 rounded shadow-sm border-t-2 border-[#7894A8]">
                <h3 className="font-bold text-[#071B2D] mb-2">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEGMENTOS ATENDIDOS */}
      <section className="py-16 bg-[#F1EDE3] text-[#071B2D]">
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

      {/* 8.5 CALCULADORA DE FRETE — ESPAÇO RESERVADO
          A calculadora já existe (feita à parte); aqui só fica o espaço e a chamada.
          Quando o ajuste dela estiver pronto, substituir o bloco tracejado abaixo pelo embed real. */}
      <section className="py-20 bg-white text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Ferramenta Exclusiva</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Calculadora de Frete</h2>
          <p className="text-gray-600 text-sm max-w-[600px] mx-auto mb-10">
            Em breve, calcule uma estimativa de frete diretamente aqui no site, com base na origem, destino e tipo de carga.
          </p>
          <div className="mx-auto max-w-[700px] rounded-lg border-2 border-dashed border-[#7894A8]/40 bg-[#FAF9F6] py-16 px-6">
            <p className="text-sm font-semibold text-[#7894A8]">Calculadora de Frete — em breve</p>
          </div>
          <button
            disabled
            className="mt-6 cursor-not-allowed rounded bg-[#7894A8]/40 px-8 py-3.5 text-sm font-bold text-white"
          >
            Abrir Calculadora (em breve)
          </button>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-20 bg-[#071B2D] text-white text-center">
        <div className="mx-auto max-w-[800px] px-5">
          <h2 className="text-3xl font-bold mb-4">Sua próxima operação começa aqui.</h2>
          <p className="text-gray-300 text-sm mb-8">
            Conte para a Ação Transportes o que você precisa transportar. Nossos especialistas analisarão sua demanda para apresentar a solução ideal.
          </p>
          <Link
            href="/cotacao"
            className="inline-block rounded bg-[#7894A8] px-8 py-4 text-sm font-bold text-[#071B2D] transition-colors hover:bg-white"
          >
            Solicitar Cotação
          </Link>
        </div>
      </section>
    </>
  );
}

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

export default function EmpresaPage() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="py-16 bg-[#071B2D] text-white text-center border-b border-[#123B57]">
        <div className="mx-auto max-w-[800px] px-5">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Institucional</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">A Empresa</h1>
        </div>
      </section>

      {/* TRADIÇÃO & EVOLUÇÃO */}
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

      {/* CONFORMIDADE E LICENCIAMENTO */}
      <section className="relative py-20 bg-[#071B2D] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/empresa-conformidade.jpg"
            alt="Aperto de mãos entre profissionais em área de contêineres, com EPI"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#071B2D]/70" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5">
          <div className="max-w-[800px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#7894A8] mb-4">Conformidade e Licenciamento</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Possuímos certificações e autorizações emitidas por órgãos competentes, incluindo Polícia Civil e Polícia Federal, para o transporte regulamentado de produtos químicos e perigosos elegíveis.
            </p>
            <p className="text-xs text-[#C5A15A]">
              *Avaliação técnica prévia realizada para confirmação da classe de produto e especificação do veículo.
            </p>
          </div>
        </div>
      </section>

      {/* PILARES DA OPERAÇÃO */}
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

      {/* NOSSOS CLIENTES — RESERVADO, aguardando autorização dos parceiros */}
      <section className="py-16 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <h3 className="text-2xl font-bold mb-4">Nossos Clientes</h3>
          <p className="text-sm text-gray-600 max-w-[600px] mx-auto mb-8">
            Em breve, os logotipos de nossas empresas parceiras, assim que recebermos a autorização de divulgação de cada uma.
          </p>
          <div className="rounded-lg border-2 border-dashed border-[#7894A8]/40 bg-white py-10 px-6">
            <p className="text-sm font-semibold text-[#7894A8]">Logos das empresas parceiras — em breve</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function TecnologiaEGestaoPage() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="py-16 bg-[#071B2D] text-white text-center border-b border-[#123B57]">
        <div className="mx-auto max-w-[800px] px-5">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Inovação Aplicada</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Tecnologia & Gestão</h1>
        </div>
      </section>

      {/* INOVAÇÃO APLICADA */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Inovação Aplicada</span>
              <h2 className="text-3xl font-bold mt-1">Tecnologia a serviço do transporte</h2>
              <p className="text-gray-600 text-sm mt-2">A tecnologia entra como suporte à operação para assegurar controle e pontualidade.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/tecnologia-inovacao.jpg"
                alt="Operador com EPI utilizando empilhadeira em armazém"
                className="w-full h-auto object-cover"
              />
            </div>
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

      {/* APP DO MOTORISTA */}
      <section className="py-20 bg-[#123B57] text-white">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Gestão de Frota</span>
              <h2 className="text-3xl font-bold mt-2 mb-6 text-white">App do Motorista</h2>
              <p className="text-[#F1EDE3] leading-relaxed mb-4">
                Hoje contamos com um aplicativo próprio de gestão de frota, que permite o monitoramento em tempo real das operações em andamento.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Mais detalhes sobre os recursos do app serão publicados em breve nesta página.
              </p>
            </div>
            {/* IMAGEM/MOCKUP DO APP — aguardando material real (print de tela ou foto do app em uso) */}
            <div className="rounded-lg border-2 border-dashed border-[#7894A8]/40 bg-[#071B2D] py-16 px-6 text-center">
              <p className="text-sm font-semibold text-[#7894A8]">Imagem/print do App do Motorista — em breve</p>
            </div>
          </div>
        </div>
      </section>

      {/* FERRAMENTA EXCLUSIVA — SIMULADOR DE FRETE (RESERVADO) */}
      <section id="calculadora" className="py-20 bg-white text-[#071B2D] scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Ferramenta Exclusiva</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Simulador de Frete</h2>
          <p className="text-gray-600 text-sm max-w-[600px] mx-auto mb-10">
            Em breve, calcule uma estimativa de frete diretamente aqui no site, com base na origem, destino e tipo de carga.
          </p>
          {/* ESPAÇO RESERVADO — embed da calculadora entra aqui quando o ajuste dela estiver pronto */}
          <div className="mx-auto max-w-[700px] rounded-lg border-2 border-dashed border-[#7894A8]/40 bg-[#FAF9F6] py-16 px-6">
            <p className="text-sm font-semibold text-[#7894A8]">Simulador de Frete — em breve</p>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS DE TRANSPORTE (RESERVADO) */}
      <section className="py-20 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Fique por Dentro</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Notícias de Transporte</h2>
          <p className="text-gray-600 text-sm max-w-[600px] mx-auto mb-10">
            Em breve, notícias e novidades do setor de transporte e logística direto aqui.
          </p>
          {/* ESPAÇO RESERVADO — aguardando conteúdo real (artigos/notícias) para publicar */}
          <div className="mx-auto max-w-[700px] rounded-lg border-2 border-dashed border-[#7894A8]/40 bg-white py-16 px-6">
            <p className="text-sm font-semibold text-[#7894A8]">Notícias de Transporte — em breve</p>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

const especialidadesPreview = [
  { title: 'Cargas Gerais', desc: 'Coletas e entregas recorrentes com alto padrão de pontualidade.' },
  { title: 'Refrigerados & Congelados', desc: 'Controle de temperatura e monitoramento contínuo.' },
  { title: 'Produtos Químicos & Perigosos', desc: 'Operações licenciadas junto à Polícia Civil e Federal.' },
  { title: 'Veículos Dedicados', desc: 'Frota exclusiva para a operação do cliente.' },
];

const destaques = [
  { numero: '30+', label: 'anos de atuação' },
  { numero: '4', label: 'estados atendidos (SP, MG, PR, SC)' },
  { numero: '100%', label: 'licenciado para cargas perigosas' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative bg-[#071B2D] py-24 lg:py-32 text-white border-b border-[#123B57] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.jpg"
            alt="Caminhão da Ação Transportes na estrada ao entardecer"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#071B2D]/60" />
        </div>
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
                href="/tecnologia-e-gestao#calculadora"
                className="rounded bg-[#7894A8] px-7 py-3.5 text-sm font-semibold text-[#071B2D] transition-colors hover:bg-white"
              >
                Simulador de Frete
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

      {/* 2. DESTAQUES RÁPIDOS */}
      <section className="py-14 bg-[#FAF9F6] border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {destaques.map((d) => (
              <div key={d.label}>
                <div className="text-4xl font-extrabold text-[#123B57]">{d.numero}</div>
                <div className="text-sm text-gray-600 mt-1">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRÉVIA DE ESPECIALIDADES */}
      <section className="py-20 bg-[#F1EDE3] text-[#071B2D]">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-[#123B57] uppercase tracking-wider">Especialidades</span>
              <h2 className="text-3xl font-bold mt-1">Soluções sob medida para sua carga</h2>
            </div>
            <Link href="/solucoes" className="text-sm font-bold text-[#123B57] hover:underline">
              Ver todas as soluções →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especialidadesPreview.map((sol) => (
              <div key={sol.title} className="bg-white p-6 rounded shadow-sm border border-gray-200 hover:border-[#7894A8] transition-colors">
                <h3 className="text-base font-bold text-[#071B2D] mb-2">{sol.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-20 bg-[#071B2D] text-white text-center">
        <div className="mx-auto max-w-[800px] px-5">
          <h2 className="text-3xl font-bold mb-4">Sua próxima operação começa aqui.</h2>
          <p className="text-gray-300 text-sm mb-8">
            Conte para a Ação Transportes o que você precisa transportar. Nossos especialistas analisarão sua demanda para apresentar a solução ideal.
          </p>
          <Link
            href="/contato"
            className="inline-block rounded bg-[#7894A8] px-8 py-4 text-sm font-bold text-[#071B2D] transition-colors hover:bg-white"
          >
            Realizar Contato
          </Link>
        </div>
      </section>
    </>
  );
}

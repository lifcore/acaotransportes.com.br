import { siteConfig } from '@/config/site';

const targetItems = [
  'Indústrias',
  'Supply Chain & Logística',
  'Médias e Grandes Empresas',
  'Comércio Exterior',
  'Compradores e Suprimentos',
  'Distribuidores',
];

const values = [
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative bg-[linear-gradient(rgba(28,28,28,0.85),rgba(28,28,28,0.85)),url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center py-[100px] text-white sm:py-[120px]"
      >
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="max-w-[800px]">
            <h1 className="mb-5 text-[2rem] leading-tight text-white sm:text-[2.8rem]">
              Sua operação logística merece um parceiro em quem você possa confiar.
            </h1>
            <p className="mb-[25px] text-[1.15rem] font-light text-[#e0e0e0]">
              Há mais de três décadas oferecendo soluções logísticas para empresas que valorizam segurança, agilidade e compromisso.
            </p>
            <p className="mb-[35px] text-[0.95rem] leading-[1.7] text-[#cccccc]">
              Soluções logísticas personalizadas para cargas secas, refrigeradas, congeladas e produtos perigosos, atendendo empresas em todo o Brasil com qualidade, pontualidade e atendimento próximo.
            </p>
            <div className="flex flex-wrap gap-[15px]">
              <a
                href={siteConfig.contato.whatsappLink('Olá, gostaria de falar com o Depto. Comercial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-at-secondary bg-at-secondary px-7 py-3.5 font-title text-[0.95rem] font-semibold text-at-primary transition-colors hover:border-at-secondary-hover hover:bg-at-secondary-hover hover:text-white"
              >
                Falar com Especialista
              </a>
              <a
                href="#posicionamento"
                className="rounded border border-white px-7 py-3.5 font-title text-[0.95rem] font-semibold text-white transition-colors hover:bg-white hover:text-at-primary"
              >
                Conhecer Nossa Estrutura
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section id="posicionamento" className="py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-[2rem]">Mais que transporte, inteligência e gestão logística.</h2>
              <p className="mb-[15px] text-at-text-light">
                A <strong className="text-at-primary">Ação Transportes</strong> não atua apenas como uma prestadora de serviços convencional. Nosso objetivo é ser percebido como uma parceira estratégica especializada em soluções logísticas, capaz de compreender a necessidade de cada cliente e oferecer um atendimento próximo, transparente e eficiente.
              </p>
              <p className="mb-5 text-at-text-light">
                Construímos relações de confiança e longo prazo para operações corporativas críticas que exigem precisão.
              </p>
              <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2">
                {targetItems.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 font-semibold text-at-primary">
                    <span className="text-at-secondary">✔</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Frota Ação Transportes - Operação Corporativa"
                className="rounded shadow-[0_5px_20px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section id="solucoes" className="bg-at-bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mb-[50px] text-center">
            <h2 className="relative inline-block pb-2.5 text-[2rem] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[50px] after:-translate-x-1/2 after:bg-at-secondary after:content-['']">
              Pilares da Nossa Operação
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((val) => (
              <div
                key={val.title}
                className="rounded border-t-[3px] border-at-secondary bg-white p-[35px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
              >
                <h3 className="mb-[15px] text-[1.2rem]">{val.title}</h3>
                <p className="text-[0.95rem] text-at-text-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

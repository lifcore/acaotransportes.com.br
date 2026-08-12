import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-[#071B2D] text-[#FAF9F6] border-t border-[#123B57] pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* COLUNA 1: EMPRESA */}
          <div>
            <img src="/images/logo.png" alt="Ação Transportes" className="h-[100px] w-auto mb-4" />
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Mais de 30 anos de experiência conectando empresas com inteligência, gestão, segurança e eficiência operacional.
            </p>
            <p className="text-xs text-[#C5A15A] font-semibold">
              Atuação destacada em SP, MG, PR e SC.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO INSTITUCIONAL */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4 border-b border-[#123B57] pb-2">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/empresa" className="hover:text-[#7894A8]">Nossa História</Link></li>
              <li><Link href="/empresa#pilares" className="hover:text-[#7894A8]">Pilares da Operação</Link></li>
              <li><Link href="/trabalhe-conosco" className="hover:text-[#7894A8]">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: SOLUÇÕES & TECNOLOGIA */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4 border-b border-[#123B57] pb-2">Soluções & Tecnologia</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/solucoes" className="hover:text-[#7894A8]">Cargas Gerais, Refrigeradas e Perigosas</Link></li>
              <li><Link href="/solucoes#dedicados" className="hover:text-[#7894A8]">Veículos Dedicados</Link></li>
              <li><Link href="/tecnologia-e-gestao" className="hover:text-[#7894A8]">TMS, DMS & Gestão de Risco</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: ATENDIMENTO */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4 border-b border-[#123B57] pb-2">Atendimento</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/cotacao" className="text-[#C5A15A] font-bold hover:underline">Solicitar Contato</Link></li>
              <li><Link href="/contato" className="hover:text-[#7894A8]">Canais de Contato</Link></li>
              <li>
                <a href={siteConfig.contato.whatsappLink('Atendimento comercial via site')} target="_blank" rel="noreferrer" className="hover:text-[#7894A8]">
                  WhatsApp: {siteConfig.contato.telefone}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contato.telefone.replace(/\D/g, '')}`} className="hover:text-[#7894A8]">
                  Telefone: {siteConfig.contato.telefone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contato.email}`} className="hover:text-[#7894A8] break-all">
                  {siteConfig.contato.email}
                </a>
              </li>
              <li className="text-xs text-gray-400 pt-1">{siteConfig.contato.endereco}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#123B57] pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.razaoSocial} — CNPJ: {siteConfig.cnpj}. Todos os direitos reservados.</p>
          <p className="text-gray-500">Operações estruturadas conforme a necessidade de cada cliente.</p>
        </div>
      </div>
    </footer>
  );
}

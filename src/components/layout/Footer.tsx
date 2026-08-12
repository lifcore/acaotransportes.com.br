import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer id="contato" className="border-t-[3px] border-at-secondary bg-at-primary pt-[60px] text-white">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid grid-cols-1 gap-10 border-b border-[#333333] pb-10 md:grid-cols-[2fr_1fr_1.5fr]">
          <div>
            {/* LOGO — aguardando arquivo de imagem do cliente */}
            <h4 className="mb-5 text-lg font-semibold text-white">{siteConfig.nome}</h4>
            <p className="text-sm leading-loose text-[#aaaaaa]">
              Soluções logísticas personalizadas focadas em segurança, pontualidade e transparência.
              Conectando negócios e integrando cadeias operacionais em todo o Brasil desde {siteConfig.fundacao}.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-sm text-[#aaaaaa] hover:text-at-secondary">Início</a></li>
              <li><a href="/#posicionamento" className="text-sm text-[#aaaaaa] hover:text-at-secondary">A Empresa</a></li>
              <li><a href="/#solucoes" className="text-sm text-[#aaaaaa] hover:text-at-secondary">Soluções Logísticas</a></li>
              <li>
                <a
                  href={siteConfig.contato.whatsappLink('Olá, gostaria de falar com o Depto. Comercial.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#aaaaaa] hover:text-at-secondary"
                >
                  Atendimento Comercial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Contato Comercial</h4>
            <ul className="space-y-2.5 text-sm text-[#aaaaaa]">
              <li>
                <strong className="text-white">Telefone / WhatsApp:</strong>{' '}
                <a href={siteConfig.contato.telefoneLink} className="hover:text-at-secondary">
                  {siteConfig.contato.telefone}
                </a>
              </li>
              <li>
                <strong className="text-white">E-mail Comercial:</strong>{' '}
                <a href={`mailto:${siteConfig.contato.email}`} className="hover:text-at-secondary">
                  {siteConfig.contato.email}
                </a>
              </li>
              <li>
                <strong className="text-white">Endereço:</strong> {siteConfig.endereco.completo}
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 text-center text-[0.85rem] text-[#777777]">
          <p>
            &copy; {siteConfig.nome}. Todos os direitos reservados. CNPJ: {siteConfig.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}

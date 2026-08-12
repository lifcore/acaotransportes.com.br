export const siteConfig = {
  name: 'Ação Transportes',
  razaoSocial: 'Ação Transportes de Jundiaí Ltda',
  description:
    'Há mais de 30 anos oferecendo soluções logísticas com segurança, agilidade e inteligência operacional.',
  url: 'https://acaotransportes.com.br',
  cnpj: '00.628.191/0001-30',
  contato: {
    telefone: '(11) 4587-9840',
    whatsapp: '551145879840',
    email: 'comercial@acaotransportes.com.br',
    endereco:
      'Rua Prof. Bruno Rezende de Camargo, 99 - Sala 2, Vila Jundiainópolis, Jundiaí - SP, CEP 13206-630',
    enderecoResumo: 'Sul e Sudeste - Atuação principal em SP, MG, PR e SC',
    whatsappLink: (mensagem: string) =>
      `https://wa.me/551145879840?text=${encodeURIComponent(mensagem)}`,
  },
  navMenu: [
    { label: 'A Empresa', href: '/empresa' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Tecnologia & Gestão', href: '/tecnologia-e-gestao' },
    { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
    { label: 'Contato', href: '/contato' },
  ],
};

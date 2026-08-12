export const siteConfig = {
  nome: 'Ação Transportes',
  descricao: 'Soluções logísticas personalizadas para cargas secas, refrigeradas, congeladas e produtos perigosos, atendendo empresas em todo o Brasil.',
  fundacao: 1995,
  contato: {
    telefone: '(11) 4587-9840',
    telefoneLink: 'tel:1145879840',
    whatsapp: '551145879840',
    whatsappLink: (mensagem: string) =>
      `https://wa.me/551145879840?text=${encodeURIComponent(mensagem)}`,
    email: 'comercial@acaotransportes.com.br',
  },
  endereco: {
    completo: 'R. Prof. Bruno Rezende de Camargo, 99 - Vila Jundiainópolis, Jundiaí - SP, 13206-630',
  },
  cnpj: '00.628.191/0001-30',
} as const;

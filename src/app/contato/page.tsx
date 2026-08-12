import { siteConfig } from '@/config/site';

export default function ContatoPage() {
  return (
    <>
      {/* HERO DA PÁGINA */}
      <section className="py-16 bg-[#071B2D] text-white text-center border-b border-[#123B57]">
        <div className="mx-auto max-w-[800px] px-5">
          <span className="text-sm font-bold text-[#7894A8] uppercase tracking-wider">Fale Conosco</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Canais de Contato</h1>
        </div>
      </section>

      {/* CANAIS DE CONTATO */}
      <section className="py-20 bg-[#FAF9F6] text-[#071B2D]">
        <div className="mx-auto max-w-[900px] px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href={siteConfig.contato.whatsappLink('Olá, gostaria de falar com o Depto. Comercial.')}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded border border-gray-200 hover:border-[#7894A8] transition-colors"
            >
              <div className="text-xs font-bold text-[#7894A8] uppercase mb-1">WhatsApp Comercial</div>
              <div className="text-lg font-semibold">{siteConfig.contato.telefone}</div>
            </a>

            <a
              href={`tel:${siteConfig.contato.telefone.replace(/\D/g, '')}`}
              className="bg-white p-6 rounded border border-gray-200 hover:border-[#7894A8] transition-colors"
            >
              <div className="text-xs font-bold text-[#7894A8] uppercase mb-1">Telefone</div>
              <div className="text-lg font-semibold">{siteConfig.contato.telefone}</div>
            </a>

            <a
              href={`mailto:${siteConfig.contato.email}`}
              className="bg-white p-6 rounded border border-gray-200 hover:border-[#7894A8] transition-colors sm:col-span-2"
            >
              <div className="text-xs font-bold text-[#7894A8] uppercase mb-1">E-mail Comercial</div>
              <div className="text-lg font-semibold break-all">{siteConfig.contato.email}</div>
            </a>

            <div className="bg-white p-6 rounded border border-gray-200 sm:col-span-2">
              <div className="text-xs font-bold text-[#7894A8] uppercase mb-1">Endereço</div>
              <div className="text-base font-semibold">{siteConfig.contato.endereco}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

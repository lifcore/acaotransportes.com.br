import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#071B2D] text-white shadow-md border-b border-[#123B57]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4">
        {/* LOGO — aguardando arquivo de imagem do cliente. Substituir por <Image src="/logo.svg" ... /> */}
        <Link
          href="/"
          className="flex h-10 w-40 items-center justify-center rounded border border-dashed border-[#7894A8]/40 text-[10px] uppercase tracking-wide text-[#7894A8]/60"
        >
          logo aqui
        </Link>

        {/* NAVEGAÇÃO PRINCIPAL */}
        <nav className="hidden md:flex items-center gap-6 text-[0.95rem] font-medium text-[#FAF9F6]">
          {siteConfig.navMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#7894A8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA SOLICITAR COTAÇÃO */}
        <div className="flex items-center gap-4">
          <Link
            href="/cotacao"
            className="rounded bg-[#7894A8] px-5 py-2.5 text-sm font-semibold text-[#071B2D] transition-all hover:bg-white hover:shadow-lg"
          >
            Solicitar Cotação
          </Link>
        </div>
      </div>
    </header>
  );
}

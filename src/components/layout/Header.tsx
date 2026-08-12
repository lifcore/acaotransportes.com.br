import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#071B2D] text-white shadow-md border-b border-[#123B57]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-2">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Ação Transportes" className="h-[68px] w-auto" />
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

        {/* CTA PRIMÁRIO — SOLICITAR COTAÇÃO */}
        <div className="flex items-center gap-4">
          <Link
            href="/cotacao"
            className="rounded bg-[#C5A15A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#071B2D] transition-all hover:bg-white hover:shadow-lg"
          >
            Solicitar Contato
          </Link>
        </div>
      </div>
    </header>
  );
}

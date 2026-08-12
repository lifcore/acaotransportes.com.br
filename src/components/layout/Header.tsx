'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  const whatsappHref = siteConfig.contato.whatsappLink(
    'Olá, gostaria de falar com o Depto. Comercial da Ação Transportes.'
  );

  return (
    <header className="sticky top-0 z-50 bg-[#071B2D] text-white shadow-md border-b border-[#123B57]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-2">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Ação Transportes" className="h-[56px] sm:h-[68px] w-auto" />
        </Link>

        {/* NAVEGAÇÃO PRINCIPAL — DESKTOP */}
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

        {/* CTA PRIMÁRIO — DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-[#C5A15A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#071B2D] transition-all hover:bg-white hover:shadow-lg"
          >
            Solicitar Contato
          </a>
        </div>

        {/* BOTÃO HAMBÚRGUER — SÓ MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MENU MOBILE — abre/fecha */}
      {open && (
        <div className="md:hidden bg-[#0A2338] border-t border-[#123B57] px-5 py-5">
          <nav className="flex flex-col gap-1 text-base font-medium text-[#FAF9F6]">
            {siteConfig.navMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-[#123B57]/60 last:border-b-0 transition-colors hover:text-[#7894A8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center rounded bg-[#C5A15A] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#071B2D] transition-all hover:bg-white"
          >
            Solicitar Contato
          </a>
        </div>
      )}
    </header>
  );
}

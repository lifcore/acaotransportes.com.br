import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-at-secondary bg-at-primary">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5">
        {/* LOGO — aguardando arquivo de imagem do cliente. Substituir por <Image src="/logo.svg" ... /> */}
        <Link href="/" className="flex h-10 w-40 items-center justify-center rounded border border-dashed border-at-secondary/40 text-[10px] uppercase tracking-wide text-at-secondary/60">
          logo aqui
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center gap-[30px]">
            <li>
              <Link href="/#home" className="text-sm font-medium text-white transition-colors hover:text-at-secondary">
                Início
              </Link>
            </li>
            <li>
              <Link href="/#posicionamento" className="text-sm font-medium text-white transition-colors hover:text-at-secondary">
                A Empresa
              </Link>
            </li>
            <li>
              <Link href="/#solucoes" className="text-sm font-medium text-white transition-colors hover:text-at-secondary">
                Soluções Logísticas
              </Link>
            </li>
            <li>
              <Link href="/#contato" className="text-sm font-medium text-white transition-colors hover:text-at-secondary">
                Contato
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.contato.whatsappLink('Olá, gostaria de solicitar uma cotação para minha operação.')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-at-secondary bg-at-secondary px-4 py-2 font-title text-[0.85rem] font-semibold text-at-primary transition-colors hover:border-at-secondary-hover hover:bg-at-secondary-hover hover:text-white"
              >
                Atendimento Comercial
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

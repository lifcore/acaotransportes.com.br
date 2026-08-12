import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-title',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Ação Transportes | Soluções Logísticas de Alta Performance',
  description:
    'Há mais de 30 anos oferecendo soluções logísticas com segurança, agilidade e inteligência operacional.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

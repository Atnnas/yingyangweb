import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';
import NextAuthWrapper from '@/context/NextAuthWrapper';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAuthModal from '@/components/auth/GoogleAuthModal';
import { siteConfig } from '@/config/site';

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-zen-kaku',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: siteConfig.brand.description,
  keywords: [
    'karate',
    'dojo',
    siteConfig.brand.name.toLowerCase(),
    'artes marciales',
    'defensa personal',
    'kata',
    'kumite',
    'wkf',
  ],
  openGraph: {
    title: siteConfig.brand.name,
    description: siteConfig.brand.description,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={zenKaku.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NextAuthWrapper>
          <AuthProvider>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <GoogleAuthModal />
          </AuthProvider>
        </NextAuthWrapper>
      </body>
    </html>
  );
}

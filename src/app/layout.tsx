import type { Metadata } from 'next';
import { Bebas_Neue, Ubuntu, Montserrat } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

const montserrat = Montserrat({
  weight: ['400', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Yamaguchi',
  description: 'тестовое задание',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${bebas.variable} ${ubuntu.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

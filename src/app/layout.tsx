import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// components
import NavBar from '@/components/NavBar';
// ------------------------------------------------ //

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tim Ionescu | Frontend Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} light`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

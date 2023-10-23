import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// providers
import ThemeProvider from '@/providers/ThemeProvider';
import ScreenSizeProvider from '@/providers/ScreenSizeProvider';
// ------------------------------------------------ //

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tim Ionescu | Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <ScreenSizeProvider>
          <body className={`${inter.className}`}>{children}</body>
        </ScreenSizeProvider>
      </ThemeProvider>
    </html>
  );
}

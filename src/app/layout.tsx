import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import StoreProvider from '@/providers/StoreProvider';
import ThemeProvider from '@/providers/ThemeProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacker News',
  description: 'Hacker News reader app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-light-bg dark:bg-dark-bg')}>
          <ThemeProvider>
            <main className="flex min-h-screen flex-col px-24 py-11 border-t-4 border-orange">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

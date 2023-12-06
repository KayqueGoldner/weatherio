import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Overlay from '@/components/overlay';

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
  fallback: ['arial'],
});

export const metadata: Metadata = {
  title: 'Weatherio',
  description: 'Weather application developed by Kayque Goldner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body 
        className={`relative flex flex-col justify-start min-h-screen bg-primary ${poppins.className} text-on-background max-w-[1400px] mx-auto`}
      >
        <NextTopLoader 
          color='#fff'
          height={2}
          speed={500}
          showSpinner={false}
          shadow="0 0 10px #ddd,0 0 5px #fff"
        />
        <Header />
        {children}
        <Footer />
        <Overlay />
      </body>
    </html>
  )
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AOSInitializer from '@/components/AOSInitializer';
import RootLayoutClient from '@/components/RootLayoutClient';

import './globals.css';

declare global {
  interface Window {
    AOS: {
      init: (config: {
        duration: number;
        easing: string;
        once: boolean;
        offset: number;
        delay: number;
        startEvent: string;
        initClassName: string;
        animatedClassName: string;
        useClassNames: boolean;
        disableMutationObserver: boolean;
        debounceDelay: number;
        throttleDelay: number;
      }) => void;
    };
  }
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://beliquid.fun/'),
  title: 'Liquid - Decentralized Exchange Protocol',
  description:
    'Liquid is a decentralized exchange protocol built on Ethereum, offering secure and efficient trading of digital assets.',
  openGraph: {
    title: 'Liquid - The final piece of the Hyperliquid ecosystem',
    description:
      'Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.',
    url: 'https://liquid-landing-eta.vercel.app/',
    siteName: 'Liquid',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Liquid Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liquid - The final piece of the Hyperliquid ecosystem',
    description:
      'Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.',
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body
        className={`${inter.className} bg-[var(--color-deep-ocean)] text-[var(--color-off-white)] min-h-screen antialiased`}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
        <AOSInitializer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liquid - Decentralized Exchange Protocol",
  description: "Liquid is a decentralized exchange protocol built on Ethereum, offering secure and efficient trading of digital assets.",
  openGraph: {
    title: "Liquid - The final piece of the Hyperliquid ecosystem",
    description: "Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.",
    url: "https://liquid-landing-eta.vercel.app/",
    siteName: "Liquid",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Liquid Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid - The final piece of the Hyperliquid ecosystem",
    description: "Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.",
    images: ["/twitter-image.png"],
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
        <meta name="description" content="Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 1000,
                easing: 'ease-out',
                once: true,
                offset: 100,
                delay: 0,
                startEvent: 'load',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate',
                useClassNames: true,
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
              });
            });
          `
        }} />
      </head>
      <body className={`${inter.className} bg-[var(--color-deep-ocean)] text-[var(--color-off-white)] min-h-screen antialiased`}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

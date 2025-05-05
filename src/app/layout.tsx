import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liquid",
  description: "The final piece of the Hyperliquid ecosystem — a pure store of value.",
  openGraph: {
    title: "Liquid - The final piece of the Hyperliquid ecosystem",
    description: "Liquid is a store of value designed to reward long-term conviction. It is trustless, transparent, and intentionally under-engineered.",
    url: "https://liquid-landing-eta.vercel.app/",
    siteName: "Liquid",
    images: [
      {
        url: "https://i.imgur.com/gR06Bjt.png",
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
    images: ["https://i.imgur.com/gR06Bjt.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Background />
        <div className="relative z-10">
          <main role="main" id="main-content" tabIndex={-1} aria-label="Main content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

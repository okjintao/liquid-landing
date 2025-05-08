'use client';

import { ReactNode, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import Header from './Header';
import LiquidModeWarning from './LiquidModeWarning';
import { LiquidModeContext } from './LiquidModeContext';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith('/docs');
  const [liquidMode, setLiquidMode] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Keyboard toggle for liquid mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'l' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setLiquidMode((prev) => {
          if (!prev) setShowWarning(true);
          return !prev;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LiquidModeContext.Provider
        value={{ enabled: liquidMode, toggle: () => setLiquidMode((v) => !v) }}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          {!isDocsPage && <Footer />}
          <LiquidModeWarning
            show={liquidMode && showWarning}
            onClose={() => setShowWarning(false)}
          />
        </div>
      </LiquidModeContext.Provider>
    </ThemeProvider>
  );
}

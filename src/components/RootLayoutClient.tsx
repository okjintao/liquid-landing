"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect, createContext } from "react";

// LiquidMode context
export const LiquidModeContext = createContext({
  enabled: false,
  toggle: () => {},
});

function LiquidModeWarning({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#0ea5e9] text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in flex items-center gap-2">
      <span className="font-bold">Liquid Mode:</span>
      Intense visuals enabled. Press{" "}
      <kbd className="px-1 bg-white/20 rounded">L</kbd> to toggle.
      <button onClick={onClose} className="ml-2 text-white/70 hover:text-white">
        &times;
      </button>
    </div>
  );
}

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith("/docs");
  const [liquidMode, setLiquidMode] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Keyboard toggle for liquid mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "l" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey
      ) {
        setLiquidMode((prev) => {
          if (!prev) setShowWarning(true);
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

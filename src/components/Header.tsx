'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/hyperliquid', icon: 'telegram' },
  { name: 'Twitter', href: 'https://twitter.com/hyperliquid', icon: 'twitter' },
  { name: 'Medium', href: 'https://medium.com/@hyperliquid', icon: 'medium' },
];

const docsNavItems = [
  { name: 'Intro', href: '/docs/introduction', icon: '🌊' },
  { name: 'Quick Start', href: '/docs/quick-start', icon: '⚡' },
  { name: 'Protocol', href: '/docs/protocol-overview', icon: '🔍' },
  { name: 'Tokenomics', href: '/docs/tokenomics', icon: '💰' },
  { name: 'Tax', href: '/docs/tax-system', icon: '📊' },
  { name: 'Valve', href: '/docs/valve-controllers', icon: '🎛️' },
  { name: 'Fees', href: '/docs/fee-distribution', icon: '💎' },
  { name: 'Contracts', href: '/docs/deployed-contracts', icon: '📜' },
  { name: 'Be Liquid', href: '/docs/get-started', icon: '🚀' },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const isDocsPage = pathname.startsWith('/docs');

  useEffect(() => {
    if (!isLandingPage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLandingPage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible || isDocsPage ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-header-dark)]/95 backdrop-blur-md" />
        </div>

        {/* Wave animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path
                d="M0,5 C20,0 40,10 60,5 C80,0 100,10 100,5 L100,10 L0,10 Z"
                className="fill-[var(--color-liquid-blue)]/40 animate-wave-slow"
              />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="section-container">
            <div className="px-4 sm:px-[5%] py-4">
              <div className="flex items-center justify-between">
                {/* Logo - Always visible */}
                <Link href="/" className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-[var(--color-liquid-blue)]"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-liquid-blue)] to-cyan-200 bg-clip-text text-transparent font-playfair">
                    LIQUID
                  </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                  <Link
                    href="/docs/introduction"
                    className={`text-sm font-medium transition-all duration-300 px-1 ${
                      isDocsPage
                        ? 'font-bold border-b-2 border-[var(--color-liquid-blue)]'
                        : 'text-white/80 hover:text-[var(--color-liquid-blue)]'
                    }`}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/faq"
                    className={`text-sm font-medium transition-all duration-300 px-1 ${
                      pathname === '/faq'
                        ? 'font-bold border-b-2 border-[var(--color-liquid-blue)]'
                        : 'text-white/80 hover:text-[var(--color-liquid-blue)]'
                    }`}
                  >
                    FAQ
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setIsSocialsOpen(!isSocialsOpen)}
                      className="text-white/80 hover:text-[var(--color-liquid-blue)] transition-colors flex items-center gap-1"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isSocialsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full right-0 mt-2 w-48 bg-[var(--color-header-dark)]/95 backdrop-blur-md border border-[var(--color-liquid-blue)]/20 rounded-lg shadow-lg transition-all duration-300 ${
                        isSocialsOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="py-2">
                        {socialLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-white/80 hover:text-[var(--color-liquid-blue)] hover:bg-[var(--color-liquid-blue)]/10 transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Mobile Menu Button - Always visible */}
                <button
                  className="md:hidden text-white/80 hover:text-[var(--color-liquid-blue)] transition-colors"
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Tray */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden fixed left-0 right-0 top-[64px] z-40 bg-[#141E2A] border-b border-[var(--color-liquid-blue)]/30 shadow-xl overflow-hidden"
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          >
            <div className="flex flex-col items-stretch px-4 py-4 gap-3">
              <Link
                href="/docs/introduction"
                className="text-lg font-medium text-white/90 py-2 px-2 rounded hover:bg-[var(--color-liquid-blue)]/10 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/faq"
                className="text-lg font-medium text-white/90 py-2 px-2 rounded hover:bg-[var(--color-liquid-blue)]/10 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex flex-row items-center justify-center gap-6 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[var(--color-liquid-blue)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={link.name}
                  >
                    {link.icon === 'telegram' && (
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    )}
                    {link.icon === 'twitter' && (
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {link.icon === 'medium' && (
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 .38-.16.85-.44 1.12l-3.13 3.7a1.6 1.6 0 01-1.13.52 1.6 1.6 0 01-1.13-.52l-3.13-3.7a1.6 1.6 0 01-.44-1.12c0-.38.16-.85.44-1.12l3.13-3.7a1.6 1.6 0 011.13-.52 1.6 1.6 0 011.13.52l3.13 3.7c.28.27.44.74.44 1.12z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation for Docs Pages */}
      {isDocsPage && (
        <div className="fixed inset-x-0 bottom-0 bg-[var(--color-liquid-blue)]/5 backdrop-blur-xl border-t border-[var(--color-liquid-blue)]/20 md:hidden z-50">
          <div className="overflow-x-auto [&::-webkit-scrollbar:horizontal]:h-0 [&::-webkit-scrollbar:horizontal]:w-0 [&::-webkit-scrollbar:horizontal]:hidden [&::-webkit-scrollbar-thumb:horizontal]:hidden">
            <div className="flex items-center justify-start px-2 py-1.5 space-x-2 min-w-max">
              {docsNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center justify-center min-w-[3.5rem] px-1.5 py-0.5 rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-[var(--color-liquid-blue)]/20 text-white'
                      : 'text-white/80 hover:bg-[var(--color-liquid-blue)]/10 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[10px] font-medium leading-tight">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

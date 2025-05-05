'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/hyperliquid', icon: 'telegram' },
  { name: 'Twitter', href: 'https://twitter.com/hyperliquid', icon: 'twitter' },
  { name: 'Medium', href: 'https://medium.com/@hyperliquid', icon: 'medium' },
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-cyan-400/5 to-cyan-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,211,238,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-lg" />
      </div>

      {/* Wave animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path
              d="M0,5 C20,0 40,10 60,5 C80,0 100,10 100,5 L100,10 L0,10 Z"
              className="fill-cyan-400/30 animate-wave-slow"
            />
          </svg>
        </div>
      </div>

      <div className="relative">
        <div className="section-container">
          <div className="px-4 sm:px-[5%] py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link 
                href="/" 
                className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent font-playfair"
              >
                LIQUID
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link 
                  href="/docs/introduction" 
                  className={`text-sm font-medium transition-all duration-300 ${
                    isDocsPage 
                      ? 'text-cyan-300 border-b border-cyan-300/30' 
                      : 'text-gray-400 hover:text-cyan-300 hover:border-b hover:border-cyan-300/30'
                  }`}
                >
                  Documentation
                </Link>
                <Link 
                  href="/faq" 
                  className={`text-sm font-medium transition-all duration-300 ${
                    pathname === '/faq'
                      ? 'text-cyan-300 border-b border-cyan-300/30'
                      : 'text-gray-400 hover:text-cyan-300 hover:border-b hover:border-cyan-300/30'
                  }`}
                >
                  FAQ
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsSocialsOpen(!isSocialsOpen)}
                    className="text-gray-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${isSocialsOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`absolute top-full right-0 mt-2 w-48 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg transition-all duration-300 ${
                      isSocialsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-300 hover:bg-slate-700/30 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-400 hover:text-cyan-300 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="pt-20 px-4">
          <nav className="flex flex-col gap-4">
            <Link 
              href="/docs/introduction" 
              className={`text-lg font-medium transition-all duration-300 ${
                isDocsPage 
                  ? 'text-cyan-300 border-b border-cyan-300/30' 
                  : 'text-gray-400 hover:text-cyan-300 hover:border-b hover:border-cyan-300/30'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              href="/faq" 
              className={`text-lg font-medium transition-all duration-300 ${
                pathname === '/faq'
                  ? 'text-cyan-300 border-b border-cyan-300/30'
                  : 'text-gray-400 hover:text-cyan-300 hover:border-b hover:border-cyan-300/30'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <div className="text-lg font-medium text-gray-400 mb-2">Socials</div>
              <div className="pl-4 flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-400 hover:text-cyan-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
} 
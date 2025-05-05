'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'Introduction', href: '/docs/introduction' },
  { name: 'Quick Start', href: '/docs/quick-start' },
  { name: 'Protocol Overview', href: '/docs/protocol-overview' },
  { name: 'Tokenomics', href: '/docs/tokenomics' },
  { name: 'Tax System', href: '/docs/tax-system' },
  { name: 'Valve Controllers', href: '/docs/valve-controllers' },
  { name: 'Fee Distribution', href: '/docs/fee-distribution' },
  { name: 'Deployed Contracts', href: '/docs/deployed-contracts' },
  { name: 'Be Liquid', href: '/docs/get-started' },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-deep-ocean)]">
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg card-bg gradient-border hover-glow"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 card-bg gradient-border transition-all duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-[var(--color-slate-blue)]/30">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="LIQUID"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold gradient-text">LIQUID</span>
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto pt-4">
            <div className="px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-[var(--color-slate-blue)]/30 text-[var(--color-liquid-glow)]'
                      : 'text-[var(--color-muted-blue)] hover:bg-[var(--color-slate-blue)]/20 hover:text-[var(--color-liquid-glow)]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-[var(--color-slate-blue)]/30 text-xs text-[var(--color-muted-blue)]">
            <p>© 2024 LIQUID Protocol</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        <div className="min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
} 
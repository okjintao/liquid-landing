'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Background from '@/components/Background';

const navigation = [
  {
    name: 'Intro',
    href: '/docs/introduction',
    emoji: '🌊',
    description: 'Welcome',
  },
  {
    name: 'Quick Start',
    href: '/docs/quick-start',
    emoji: '⚡',
    description: 'Get started',
  },
  {
    name: 'Protocol',
    href: '/docs/protocol-overview',
    emoji: '🔍',
    description: 'How it works',
  },
  {
    name: 'Tokenomics',
    href: '/docs/tokenomics',
    emoji: '💰',
    description: 'Economics',
  },
  {
    name: 'Tax',
    href: '/docs/tax-system',
    emoji: '📊',
    description: 'Tax rates',
  },
  {
    name: 'Valve',
    href: '/docs/valve-controllers',
    emoji: '🎛️',
    description: 'Controllers',
  },
  {
    name: 'Fees',
    href: '/docs/fee-distribution',
    emoji: '💎',
    description: 'Rewards',
  },
  {
    name: 'Contracts',
    href: '/docs/deployed-contracts',
    emoji: '📜',
    description: 'Smart contracts',
  },
  {
    name: 'Be Liquid',
    href: '/docs/get-started',
    emoji: '🚀',
    description: 'Join us',
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Redirect to introduction if we're at the docs root
  useEffect(() => {
    if (pathname === '/docs') {
      router.push('/docs/introduction');
    }
  }, [pathname, router]);

  return (
    <div className="min-h-screen">
      <Background />

      {/* Main content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block fixed w-64 h-screen border-r border-[var(--color-liquid-blue)]/20 bg-[var(--color-liquid-blue)]/5 backdrop-blur-xl p-6 pt-24">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[var(--color-liquid-blue)]/20 text-white'
                      : 'text-gray-300 hover:bg-[var(--color-liquid-blue)]/10 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{item.emoji}</span>
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Logo and Copyright */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-3 mb-4">
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
            <div className="text-xs text-gray-400">© 2025 Liquid Protocol</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 lg:ml-64">
          <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-24">
              <div className="bg-[var(--color-liquid-blue)]/5 backdrop-blur-xl border border-[var(--color-liquid-blue)]/20 rounded-2xl p-8 shadow-2xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: var(--color-liquid-blue);
          border-radius: 4px;
          opacity: 0.2;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--color-liquid-blue);
          opacity: 0.3;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        * {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: var(--color-liquid-blue) transparent; /* Firefox */
        }
      `}</style>
    </div>
  );
}

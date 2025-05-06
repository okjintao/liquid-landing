'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Introduction', href: '/docs/introduction' },
  { name: 'Quick Start', href: '/docs/quick-start' },
  { name: 'Protocol Overview', href: '/docs/protocol-overview' },
  { name: 'Tokenomics', href: '/docs/tokenomics' },
  { name: 'Tax System', href: '/docs/tax-system' },
  { name: 'Valve Controllers', href: '/docs/valve-controllers' },
  { name: 'Fee Distribution', href: '/docs/fee-distribution' },
  { name: 'Deployed Contracts', href: '/docs/deployed-contracts' },
];

export default function DocsNavigation() {
  const pathname = usePathname();
  const currentIndex = navigation.findIndex(item => item.href === pathname);
  const prevPage = currentIndex > 0 ? navigation[currentIndex - 1] : null;
  const nextPage = currentIndex < navigation.length - 1 ? navigation[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-8 border-t border-cyan-500/20">
      <div className="flex items-center justify-between">
        {prevPage ? (
          <Link
            href={prevPage.href}
            className="group flex items-center text-sm font-medium text-neutral-300 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {prevPage.name}
          </Link>
        ) : (
          <div />
        )}
        {nextPage ? (
          <Link
            href={nextPage.href}
            className="group flex items-center text-sm font-medium text-neutral-300 hover:text-cyan-300 transition-colors"
          >
            {nextPage.name}
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
} 
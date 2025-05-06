'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DocsPageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function DocsPageTemplate({ title, children }: DocsPageTemplateProps) {
  const pathname = usePathname();

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-[var(--color-deep-ocean)] mb-8">{title}</h1>
      <div className="text-[var(--color-deep-ocean)]/90 space-y-6">
        {children}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-6 border-t border-[var(--color-liquid-blue)]/20">
        <div className="flex justify-between items-center">
          <Link
            href="/docs"
            className="text-[var(--color-deep-ocean)] hover:text-[var(--color-liquid-blue)] transition-colors"
          >
            ← Back to Docs
          </Link>
          <Link
            href="/faq"
            className="text-[var(--color-deep-ocean)] hover:text-[var(--color-liquid-blue)] transition-colors"
          >
            FAQ →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Tip component for important information
export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-4 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-[var(--color-liquid-blue)]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-[var(--color-deep-ocean)]">{children}</p>
        </div>
      </div>
    </div>
  );
}

// Highlight component for key concepts
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-4 bg-gradient-to-r from-[var(--color-liquid-blue)]/10 to-cyan-500/10 border border-[var(--color-liquid-blue)]/20 rounded-xl">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-[var(--color-liquid-blue)]" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-[var(--color-deep-ocean)]">{children}</p>
        </div>
      </div>
    </div>
  );
} 
'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import React, { ReactElement } from 'react';

interface NavLink {
  name: string;
  href: string;
  external: boolean;
  icon?: ReactElement<any, any>;
}

interface NavSection {
  heading: string;
  links: NavLink[];
}

const navigation: NavSection[] = [
  {
    heading: 'Protocol',
    links: [
      { name: 'About', href: '/about', external: false },
      { name: 'Docs', href: '/docs', external: false },
      { name: 'FAQ', href: '/faq', external: false },
    ],
  },
  {
    heading: 'Community',
    links: [
      { 
        name: 'Telegram', 
        href: 'https://t.me/hyperliquid', 
        external: true,
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        )
      },
      { 
        name: 'Twitter', 
        href: 'https://twitter.com/hyperliquid', 
        external: true,
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      },
      { 
        name: 'GitHub', 
        href: 'https://github.com/hyperliquid-dex', 
        external: true,
        icon: (
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        )
      },
    ],
  },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="relative bg-[#141E2A] text-neutral-200 mt-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand and Description Section */}
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[var(--color-liquid-blue)]" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-liquid-blue)] to-cyan-200 bg-clip-text text-transparent font-playfair">
                LIQUID
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              LIQUID is a pure store of value token within the Hyperliquid ecosystem, designed for long-term holding and protocol rewards. Together with HYPE and PURR, it forms a complete token ecosystem for value preservation and growth.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-12 md:ml-auto">
            {navigation.map((section) => (
              <div key={section.heading} className="text-right">
                <h4 className="font-bold mb-4 text-lg text-white">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-neutral-300 hover:text-[var(--color-liquid-blue)] transition-colors inline-flex items-center gap-2"
                      >
                        <span>{link.name}</span>
                        {link.icon && (
                          <span className="ml-1 flex items-center">{React.cloneElement(link.icon, { className: 'h-4 w-4' })}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
          <span>&copy; {new Date().getFullYear()} Liquid Protocol. All rights reserved.</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-[var(--color-liquid-blue)]">Terms</Link>
            <Link href="/privacy" className="hover:text-[var(--color-liquid-blue)]">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-[var(--color-liquid-blue)]">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-10" />
      
      {/* Ring accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="140" stroke="rgb(var(--color-primary))" strokeWidth="8" />
          <circle cx="160" cy="160" r="80" stroke="rgb(var(--color-primary))" strokeWidth="4" />
          <circle cx="160" cy="160" r="40" stroke="rgb(var(--color-primary))" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="px-4 sm:px-[5%] py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 font-playfair text-neutral-100">LIQUID</h3>
              <p className="text-neutral-400 mb-6 max-w-md">
                A pure store of value token within the Hyperliquid ecosystem, designed for long-term value preservation and protocol stability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-neutral-100">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-neutral-400 hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-neutral-400 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-neutral-100">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="https://twitter.com/hyperliquid" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://t.me/hyperliquid" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.341c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.72 5.18-4.686c.217-.19-.047-.297-.335-.107l-6.4 4.03-2.76-.918c-.6-.2-.613-.6.126-.89l10.77-4.16c.5-.19.94.12.78.89z"/>
                    </svg>
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://github.com/hyperliquid" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-400 text-sm">
                © 2025 LIQUID Protocol. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
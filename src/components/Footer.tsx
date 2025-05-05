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
                A revolutionary protocol that enables sustainable rewards through Valve Controller Modules.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-neutral-100">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-neutral-100">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-primary transition-colors">
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
import Link from 'next/link';

export default function Footer() {
  return (
    <footer role="contentinfo" className="relative bg-gradient-to-t from-black via-[#0a2323] to-transparent border-t border-cyan-900/30 pt-16 pb-12 mt-24 overflow-hidden">
      {/* Faint Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="140" stroke="#67e8f9" strokeWidth="8" />
          <circle cx="160" cy="160" r="80" stroke="#67e8f9" strokeWidth="4" />
          <circle cx="160" cy="160" r="40" stroke="#67e8f9" strokeWidth="2" />
        </svg>
      </div>
      <div className="section-container px-[5%] relative z-10 flex flex-col items-center gap-10">
        {/* Brand/Tagline */}
        <div className="text-3xl md:text-4xl font-bold font-playfair text-cyan-200 mb-2 text-center drop-shadow-lg">Liquid</div>
        <div className="text-lg md:text-xl text-gray-300 font-playfair text-center mb-6">The final piece of the Hyperliquid ecosystem — a pure store of value.</div>
        {/* Social Icons */}
        <div className="flex gap-8 mb-4">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram community" className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300 transition-colors text-2xl drop-shadow-lg hover:drop-shadow-[0_0_8px_#67e8f9]">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21.944 4.667a1.5 1.5 0 0 0-1.7-1.1c-3.6.8-14.1 3.2-17.7 4a1.5 1.5 0 0 0-.2 2.9l4.1 1.3 1.5 4.7a1.5 1.5 0 0 0 2.4.7l2.2-2.1 3.7 2.7a1.5 1.5 0 0 0 2.4-.8l3-12.4a1.5 1.5 0 0 0-.5-1.2zM9.7 15.2l-1.3-4.1 7.7-5.7-6.4 9.8zm2.2-2.1l-1.2 1.1-1.1-3.3 2.3 2.2zm6.2 2.2l-3.7-2.7 5.2-3.8-1.5 6.5z" fill="currentColor"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300 transition-colors text-2xl drop-shadow-lg hover:drop-shadow-[0_0_8px_#67e8f9]">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300 transition-colors text-2xl drop-shadow-lg hover:drop-shadow-[0_0_8px_#67e8f9]">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 2-4.29 4.44 0 .35.04.7.11 1.03-3.57-.18-6.74-1.97-8.86-4.68a4.6 4.6 0 0 0-.58 2.23c0 1.54.76 2.9 1.92 3.7-.7-.02-1.36-.22-1.94-.54v.05c0 2.15 1.48 3.94 3.44 4.34-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.77 2.12 3.06 3.99 3.1A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.1 12.1 0 0 0 8.29 21.5c7.55 0 11.68-6.5 11.68-12.13 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" fill="currentColor"/></svg>
          </a>
        </div>
        {/* Footer Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 justify-center text-lg font-playfair mb-6">
          <Link href="#get" className="px-5 py-2 rounded-full bg-cyan-900/20 border border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300">Get Liquid</Link>
          <Link href="#" className="px-5 py-2 rounded-full bg-cyan-900/20 border border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300">Open a Valve</Link>
          <Link href="#docs" className="px-5 py-2 rounded-full bg-cyan-900/20 border border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-black transition-colors focus-visible:ring-2 focus-visible:ring-cyan-300">Read the Docs</Link>
        </nav>
        {/* Copyright */}
        <div className="text-gray-500 text-sm font-playfair text-center">&copy; {new Date().getFullYear()} Liquid. All rights reserved.</div>
      </div>
    </footer>
  );
} 
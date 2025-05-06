'use client';

import Link from 'next/link';

export default function DocsCTA() {
  return (
    <div className="mt-16 p-8 bg-gradient-to-r from-cyan-950/50 to-blue-950/50 rounded-2xl border border-cyan-500/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold font-playfair bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-neutral-300 mb-8">
          Experience the power of LIQUID Protocol firsthand. Join our community and start 
          exploring the future of DeFi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://app.liquidprotocol.io"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-200 shadow-lg hover:from-cyan-200 hover:to-blue-100 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Launch App
            <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="https://t.me/hyperliquid"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-cyan-300 text-cyan-300 bg-transparent hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105 font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Join Community
            <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 
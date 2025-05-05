'use client';

import Link from 'next/link'
import { useState } from 'react'
import LiquidBlob3D from './LiquidBlob3D'

interface Tooltips {
  hype: string;
  purr: string;
  liquid: string;
  ecosystem: string;
}

export default function Hero() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  
  const tooltips: Tooltips = {
    hype: "HYPE is the governance token of the Hyperliquid ecosystem",
    purr: "PURR is the utility token powering the ecosystem",
    liquid: "LIQUID is the pure store of value, designed for long-term holding",
    ecosystem: "Part of the Hyperliquid ecosystem, providing stability and value preservation"
  };

  return (
    <section className="py-12 sm:py-24">
      {/* Hero Section Container */}
      <div className="section-container">
        <div className="px-4 sm:px-[5%] text-center flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh]">
          {/* 3D Liquid Blob */}
          <div className="relative w-48 h-48 sm:w-80 sm:h-80 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <LiquidBlob3D />
          </div>
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight font-playfair">
            There&apos;s{' '}
            <span 
              className="cursor-help hover:text-cyan-300 transition-colors"
              onMouseEnter={() => setShowTooltip('hype')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              Hype
            </span>
            <br />
            There&apos;s{' '}
            <span 
              className="cursor-help hover:text-cyan-300 transition-colors"
              onMouseEnter={() => setShowTooltip('purr')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              Purr
            </span>
            <br />
            Here&apos;s{' '}
            <span 
              className="text-cyan-300 cursor-help"
              onMouseEnter={() => setShowTooltip('liquid')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              Liquid
            </span>
          </h1>
          {/* Subheading */}
          <p 
            className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed font-playfair px-4 cursor-help"
            onMouseEnter={() => setShowTooltip('ecosystem')}
            onMouseLeave={() => setShowTooltip(null)}
          >
            The final piece of the Hyperliquid ecosystem — a pure store of value.
          </p>
          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="/docs"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-200 shadow-lg hover:from-cyan-200 hover:to-blue-100 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              Read the Docs
            </Link>
            <Link
              href="#get"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold border border-cyan-300 text-cyan-300 bg-transparent hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105 font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Liquid
            </Link>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-cyan-900/90 text-white px-6 py-3 rounded-lg shadow-lg max-w-sm text-center z-50 animate-fade-in">
          {tooltips[showTooltip as keyof typeof tooltips]}
        </div>
      )}
    </section>
  )
} 
'use client';

import { useState } from 'react';

interface Tokenomic {
  title: string;
  description: string;
}

const tokenomics: Tokenomic[] = [
  {
    title: "Initial Distribution",
    description: "100% of supply seeded to Uniswap v3 LIQUID/HYPE pool"
  },
  {
    title: "Tax Structure",
    description: "Dynamic sell tax that increases on sells and decreases on buys"
  },
  {
    title: "Fee Distribution",
    description: "Initial 100% burned, then 90% burned and 10% to VCMs"
  }
];

export default function Tokenomics() {
  const [activeTokenomic, setActiveTokenomic] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Tokenomics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tokenomics.map((tokenomic, index) => (
              <div
                key={index}
                className="group relative p-6 transition-all duration-300"
                onMouseEnter={() => setActiveTokenomic(index)}
                onMouseLeave={() => setActiveTokenomic(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 font-playfair text-cyan-200">
                    {tokenomic.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tokenomic.description}
                  </p>
                </div>
                
                {/* Subtle hover effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-300/5 to-blue-300/5 rounded-lg transition-opacity duration-300 ${
                    activeTokenomic === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
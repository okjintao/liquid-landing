'use client';

import { useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Immutable Supply",
    description: "Fixed total supply with no minting capability. Initial distribution 100% seeded to Uniswap v3 LIQUID/HYPE pool."
  },
  {
    title: "Dynamic Sell Tax",
    description: "Adaptive tax system that increases on sells and decreases on buys, with throttled adjustments and cooldown periods."
  },
  {
    title: "Fluid Management Unit",
    description: "Immutable contract managing protocol liquidity, fee claiming, and tax routing. All LP tokens are locked."
  },
  {
    title: "Valve Controller Modules",
    description: "NFT-based access to create and manage reward streams. Earn HYPE rewards while maintaining protocol stability."
  },
  {
    title: "Tax-Free Exit Queue",
    description: "FIFO-based exit system allowing users to convert LIQUID to HYPE tax-free, with delays based on exit size."
  },
  {
    title: "Fee Distribution",
    description: "Initial 100% LIQUID fees burned. After benchmark: 90% burned, 10% distributed as HYPE to VCMs."
  }
];

export default function ProtocolFeatures() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Protocol <span className="text-cyan-300">Architecture</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 transition-all duration-300"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 font-playfair text-cyan-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Subtle hover effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-300/5 to-blue-300/5 rounded-lg transition-opacity duration-300 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0'
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
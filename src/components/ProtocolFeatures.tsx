'use client';

import { useState, useEffect } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('protocol-features-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="protocol-features-section" className="py-32 relative overflow-hidden">
      {/* Section separator line */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />

      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <div className={`space-y-4 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Protocol <span className="text-cyan-300">Architecture</span>
            </h2>
            <div className={`w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-black/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 font-playfair text-cyan-200 group-hover:text-cyan-100 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Enhanced hover effect with proper containment */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl transition-all duration-300 overflow-hidden ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl transition-transform duration-300 ${
                    activeFeature === index ? 'scale-105' : 'scale-100'
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section separator */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
    </section>
  );
} 
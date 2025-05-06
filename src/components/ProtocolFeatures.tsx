'use client';

import { useEffect, useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Immutable Supply',
    description:
      'Fixed total supply with no minting capability. Initial distribution 100% seeded to Uniswap v3 LIQUID/HYPE pool.',
  },
  {
    title: 'Dynamic Sell Tax',
    description:
      'Adaptive tax system that increases on sells and decreases on buys, with throttled adjustments and cooldown periods.',
  },
  {
    title: 'Fluid Management Unit',
    description:
      'Immutable contract managing protocol liquidity, fee claiming, and tax routing. All LP tokens are locked.',
  },
  {
    title: 'Valve Controller Modules',
    description:
      'NFT-based access to create and manage reward streams. Earn HYPE rewards while maintaining protocol stability.',
  },
  {
    title: 'Tax-Free Exit Queue',
    description:
      'FIFO-based exit system allowing users to convert LIQUID to HYPE tax-free, with delays based on exit size.',
  },
  {
    title: 'Fee Distribution',
    description:
      'Initial 100% LIQUID fees burned. After benchmark: 90% burned, 10% distributed as HYPE to VCMs.',
  },
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
      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <div
            className={`space-y-4 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Protocol <span className="text-[var(--color-liquid-blue)]">Architecture</span>
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              A robust and innovative protocol design focused on stability, sustainability, and user
              rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-[#16202A]/80 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_24px_0_rgba(255,255,255,0.1)] hover:border-white/20 hover:bg-[#1B2736]/90 hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 font-playfair text-white group-hover:text-[var(--color-liquid-blue)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced hover effect with proper containment */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl transition-all duration-300 overflow-hidden ${
                    activeFeature === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl transition-transform duration-300 ${
                    activeFeature === index ? 'scale-105' : 'scale-100'
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

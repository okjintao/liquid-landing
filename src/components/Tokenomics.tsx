'use client';

import { useState, useEffect } from 'react';

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

    const element = document.getElementById('tokenomics-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="tokenomics-section" className="py-32 relative overflow-hidden">
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
              Tokenomics
            </h2>
            <div className={`w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {tokenomics.map((tokenomic, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-[#16202A] border border-[var(--color-liquid-blue)]/20 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_24px_0_var(--color-liquid-blue)] hover:border-[var(--color-liquid-blue)]/40 hover:bg-[#1B2736] hover:scale-[1.03] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveTokenomic(index)}
                onMouseLeave={() => setActiveTokenomic(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 font-playfair text-[var(--color-liquid-blue)] group-hover:text-white transition-colors">
                    {tokenomic.title}
                  </h3>
                  <p className="text-neutral-200 text-sm leading-relaxed">
                    {tokenomic.description}
                  </p>
                </div>
                
                {/* Enhanced hover effect with proper containment */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[var(--color-liquid-blue)]/5 to-cyan-200/5 rounded-xl transition-all duration-300 overflow-hidden ${
                    activeTokenomic === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-[var(--color-liquid-blue)]/5 to-cyan-200/5 rounded-xl transition-transform duration-300 ${
                    activeTokenomic === index ? 'scale-105' : 'scale-100'
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
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Benefit {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Pure Store of Value",
    description: "Designed for long-term holding with no minting capability",
    details: "LIQUID's fixed supply and burn mechanism ensure it becomes increasingly scarce over time, making it an ideal store of value.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Protocol Rewards",
    description: "Earn HYPE rewards through Valve Controller Modules",
    details: "Valve Controllers create reward streams while maintaining protocol stability through dynamic tax adjustments.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Ecosystem Integration",
    description: "Seamlessly integrated with the Hyperliquid ecosystem",
    details: "Built to work harmoniously with HYPE and PURR, creating a complete token ecosystem for value preservation and growth.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }
];

export default function WhyLiquid() {
  const [showDetails, setShowDetails] = useState<number | null>(null);
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

    const element = document.getElementById('why-liquid-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="why-liquid-section"
      className="py-32 relative overflow-hidden"
    >
      {/* Animated section separator line */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
      
      {/* Background with OpenGraph image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/opengraph-image.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

      <div className="section-container relative">
        <div className="px-4 sm:px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Content */}
          <div className={`space-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair">
                Why <span className="text-cyan-300">Liquid</span>
              </h2>
              <div className={`w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent transition-all duration-1000 delay-300 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`group bg-[#16202A] border border-[var(--color-liquid-blue)]/10 rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-[0_0_24px_0_var(--color-liquid-blue)] hover:border-[var(--color-liquid-blue)]/40 hover:bg-[#1B2736] hover:scale-[1.03] ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setShowDetails(index)}
                  onMouseLeave={() => setShowDetails(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[var(--color-liquid-blue)]/20 text-[var(--color-liquid-blue)] group-hover:bg-[var(--color-liquid-blue)]/40 transition-colors">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-playfair text-[var(--color-liquid-blue)] group-hover:text-white transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-200 mb-2">
                        {benefit.description}
                      </p>
                      {showDetails === index && (
                        <p className="text-neutral-300 text-sm leading-relaxed animate-fade-in">
                          {benefit.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* App Preview and CTA */}
          <div className={`flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 text-center">
                {/* App Preview Image */}
                <div className="relative w-full aspect-[4/3] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src="/img/liquid-app.png"
                    alt="Liquid App Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <Link
                  href="/app"
                  className="inline-block px-12 py-4 bg-[var(--color-liquid-blue)]/90 hover:bg-[var(--color-liquid-blue)] text-white rounded-lg text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-liquid-blue)]/20"
                >
                  Launch App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom section separator */}
      <div 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      />
    </section>
  );
} 
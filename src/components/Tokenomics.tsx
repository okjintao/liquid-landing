"use client";

import { useState, useEffect } from "react";

interface Tokenomic {
  title: string;
  description: string;
}

const tokenomics: Tokenomic[] = [
  {
    title: "Initial Distribution",
    description: "100% of supply seeded to Uniswap v3 LIQUID/HYPE pool",
  },
  {
    title: "Tax Structure",
    description:
      "Dynamic sell tax that increases on sells and decreases on buys",
  },
  {
    title: "Fee Distribution",
    description: "Initial 100% burned, then 90% burned and 10% to VCMs",
  },
  {
    title: "Exit Queue",
    description:
      "Tax-free exit system with FIFO-based queue for converting LIQUID to HYPE",
  },
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
      { threshold: 0.1 },
    );

    const element = document.getElementById("tokenomics-section");
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
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />

      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <div
            className={`space-y-4 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Tokenomics
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              A carefully designed token economy focused on long-term value
              preservation and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {tokenomics.map((tokenomic, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-[#16202A]/80 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_24px_0_rgba(255,255,255,0.1)] hover:border-white/20 hover:bg-[#1B2736]/90 hover:scale-[1.02] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveTokenomic(index)}
                onMouseLeave={() => setActiveTokenomic(null)}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-3 font-playfair text-white group-hover:text-[var(--color-liquid-blue)] transition-colors">
                    {tokenomic.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed flex-grow">
                    {tokenomic.description}
                  </p>
                </div>

                {/* Enhanced hover effect with proper containment */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl transition-all duration-300 overflow-hidden ${
                    activeTokenomic === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl transition-transform duration-300 ${
                    activeTokenomic === index ? "scale-105" : "scale-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section separator */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />
    </section>
  );
}

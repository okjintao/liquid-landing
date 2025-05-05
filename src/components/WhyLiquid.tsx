'use client';

import { useState } from 'react';
import Image from 'next/image'

interface Benefit {
  title: string;
  description: string;
  details: string;
}

const benefits: Benefit[] = [
  {
    title: "Pure Store of Value",
    description: "Designed for long-term holding with no minting capability",
    details: "LIQUID's fixed supply and burn mechanism ensure it becomes increasingly scarce over time, making it an ideal store of value."
  },
  {
    title: "Sustainable Rewards",
    description: "Earn HYPE rewards through Valve Controller Modules",
    details: "Valve Controllers create sustainable reward streams while maintaining protocol stability through dynamic tax adjustments."
  },
  {
    title: "Exit Protection",
    description: "Tax-free exit queue for large holders",
    details: "Large holders can exit tax-free through a FIFO-based queue system, with delays based on exit size to prevent market impact."
  }
];

export default function WhyLiquid() {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="px-4 sm:px-[5%] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <div className="flex justify-center items-center">
            <Image
              src="https://i.imgur.com/S9Fxd79.png"
              alt="Why Liquid Illustration"
              width={280}
              height={280}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">
              Why <span className="text-cyan-300">Liquid</span>
            </h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group"
                  onMouseEnter={() => setShowDetails(index)}
                  onMouseLeave={() => setShowDetails(null)}
                >
                  <h3 className="text-xl font-bold mb-2 font-playfair text-cyan-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {benefit.description}
                  </p>
                  {showDetails === index && (
                    <p className="text-gray-400 text-sm leading-relaxed animate-fade-in">
                      {benefit.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
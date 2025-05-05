'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BurnIcon, CommissionIcon, RewardIcon } from './icons/ValveIcons';

interface Step {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Burn to Create",
    description: "Burn 1% of current LIQUID supply to mint an NFT",
    details: "The NFT grants control over a Valve Controller Module (VCM), allowing you to create and manage reward streams.",
    icon: <BurnIcon className="w-10 h-10" />
  },
  {
    title: "Set Commission",
    description: "Choose your commission rate on HYPE rewards",
    details: "Set your commission rate between 0-100% on rewards earned by your VCM's depositors.",
    icon: <CommissionIcon className="w-10 h-10" />
  },
  {
    title: "Earn Rewards",
    description: "Earn HYPE rewards from protocol fees",
    details: "Your VCM's capacity grows with deposits, creating sustainable reward streams while maintaining protocol stability.",
    icon: <RewardIcon className="w-10 h-10" />
  }
];

export default function ValveController() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="section-container">
        <div className="px-4 sm:px-[5%]">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-playfair">
            Become a <span className="text-primary">Valve Controller</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.05)]"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="relative z-10">
                  <div className="mb-4 animate-float">
                    {step.icon}
                  </div>
                  <div className="text-neutral-400 text-sm font-medium mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair text-neutral-100">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Glow effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl transition-opacity duration-300 ${
                    activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Valve Controllers are the backbone of the LIQUID ecosystem, providing sustainable rewards while maintaining protocol stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-4 rounded-full font-bold text-black bg-gradient-primary shadow-lg hover:shadow-[0_0_20px_rgba(var(--color-primary),0.2)] transition-all duration-300 font-playfair focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Open a Valve
              </Link>
              <Link
                href="#docs"
                className="px-8 py-4 rounded-full font-bold border border-white/20 text-neutral-100 bg-transparent hover:bg-white/5 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.1)] transition-all duration-300 font-playfair focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
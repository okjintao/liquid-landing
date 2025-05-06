'use client';

import { motion } from 'framer-motion';

import React, { useState } from 'react';

import Image from 'next/image';

interface Benefit {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: 'Pure Store of Value',
    description: 'Designed for long-term holding with no minting capability',
    details:
      "LIQUID's fixed supply and burn mechanism ensure it becomes increasingly scarce over time, making it an ideal store of value.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Protocol Rewards',
    description: 'Earn HYPE rewards through Valve Controller Modules',
    details:
      'Valve Controllers create reward streams while maintaining protocol stability through dynamic tax adjustments.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: 'Ecosystem Integration',
    description: 'Seamlessly integrated with the Hyperliquid ecosystem',
    details:
      'Built to work harmoniously with HYPE and PURR, creating a complete token ecosystem for value preservation and growth.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function WhyLiquid() {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  return (
    <section id="why-liquid-section" className="py-24 relative overflow-hidden">
      {/* Background with OpenGraph image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <Image src="/opengraph-image.png" alt="Background" fill className="object-cover" priority />
      </div>
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Heading, subtitle, and vertical cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <div className="text-center md:text-left mb-10 w-full">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Why <span className="text-[var(--color-liquid-blue)]">Liquid</span>
            </h2>
            <p className="text-neutral-300 max-w-xl mt-4 mx-auto md:mx-0">
              A revolutionary token designed for long-term value preservation and sustainable growth
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                className="group bg-[#16202A]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-500 ease-out shadow-md hover:shadow-[0_0_24px_0_rgba(46,196,241,0.2)] hover:border-[var(--color-liquid-blue)]/40 hover:bg-[#1B2736]/90 hover:scale-[1.03]"
                onMouseEnter={() => setShowDetails(index)}
                onMouseLeave={() => setShowDetails(null)}
              >
                <div className="p-2 rounded-lg bg-white/10 text-white mb-3 group-hover:bg-[var(--color-liquid-blue)]/20 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 font-playfair text-white group-hover:text-[var(--color-liquid-blue)] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-200 mb-2">{benefit.description}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    showDetails === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-neutral-300 text-sm leading-relaxed">{benefit.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Logo and Launch App button, visually matched in height */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center justify-center min-h-[420px]"
        >
          <div className="bg-[#16202A]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center w-full max-w-xs mx-auto">
            <Image
              src="/img/liquid-logo-glow.png"
              alt="Liquid Logo"
              width={192}
              height={192}
              className="mx-auto mb-8 drop-shadow-[0_0_32px_var(--color-liquid-blue)]"
              style={{ objectFit: 'contain' }}
              priority
            />
            <a
              href="/app"
              className="mt-4 inline-block px-10 py-4 rounded-full bg-[var(--color-liquid-blue)] text-white text-xl font-bold shadow-lg hover:scale-105 hover:bg-cyan-400 transition-all duration-300"
            >
              Launch App
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

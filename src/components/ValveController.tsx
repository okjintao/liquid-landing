"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Step {
  title: string;
  description: string;
  details: string;
}

const steps: Step[] = [
  {
    title: "Burn to Create",
    description: "Burn 1% of current LIQUID supply to mint an NFT",
    details:
      "The NFT grants control over a Valve Controller Module (VCM), allowing you to create and manage reward streams.",
  },
  {
    title: "Set Commission",
    description: "Choose your commission rate on HYPE rewards",
    details:
      "Set your commission rate between 0-100% on rewards earned by your VCM's depositors.",
  },
  {
    title: "Earn Rewards",
    description: "Earn HYPE rewards from protocol fees",
    details:
      "Your VCM's capacity grows with deposits, creating sustainable reward streams while maintaining protocol stability.",
  },
];

export default function ValveController() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
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

    const element = document.getElementById("valve-controller-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="valve-controller-section"
      className="py-32 relative overflow-hidden"
    >
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
              Become a <span className="text-cyan-300">Valve Controller</span>
            </h2>
            <div
              className={`w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-black/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="relative z-10">
                  <div className="text-cyan-500/70 text-sm font-medium mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-playfair text-cyan-200 group-hover:text-cyan-100 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {activeStep === index && (
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed animate-fade-in">
                      {step.details}
                    </p>
                  )}
                </div>

                {/* Enhanced hover effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? "opacity-100 scale-105"
                      : "opacity-0 scale-100"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="px-8 py-4 rounded-full font-bold text-white bg-[var(--color-liquid-blue)]/90 hover:bg-[var(--color-liquid-blue)] shadow-lg hover:shadow-[var(--color-liquid-blue)]/20 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-[var(--color-liquid-blue)] focus:ring-offset-2 focus:ring-offset-black"
              >
                Open a Valve
              </Link>
              <Link
                href="#docs"
                className="px-8 py-4 rounded-full font-bold border border-[var(--color-liquid-blue)] text-[var(--color-liquid-blue)] bg-transparent hover:bg-[var(--color-liquid-blue)]/10 transition-all duration-300 font-playfair focus:outline-none focus:ring-2 focus:ring-[var(--color-liquid-blue)] focus:ring-offset-2 focus:ring-offset-black"
              >
                Learn More
              </Link>
            </div>
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

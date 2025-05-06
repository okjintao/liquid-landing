"use client";

import { useState } from "react";
import Link from "next/link";
import Background from "@/components/Background";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is LIQUID?",
    answer:
      "LIQUID is a pure store of value token within the Hyperliquid ecosystem. It's designed to maintain long-term value through a combination of fixed supply, dynamic tax mechanisms, and protocol-controlled liquidity.",
  },
  {
    question: "How does the dynamic sell tax work?",
    answer:
      "The sell tax adjusts based on market conditions. It increases on sells and decreases on buys, with throttled adjustments and cooldown periods to prevent manipulation. This mechanism helps maintain price stability while discouraging excessive selling.",
  },
  {
    question: "What is the Fluid Management Unit (FMU)?",
    answer:
      "The FMU is an immutable contract that manages protocol liquidity, fee claiming, and tax routing. All LP tokens are locked within this unit, ensuring that liquidity remains secure and controlled by the protocol.",
  },
  {
    question: "How do Valve Controller Modules (VCMs) work?",
    answer:
      "VCMs are NFT-based access points that allow holders to create and manage reward streams. They earn HYPE rewards while helping maintain protocol stability through their management of liquidity flows.",
  },
  {
    question: "What is the tax-free exit queue?",
    answer:
      "The exit queue is a FIFO-based system that allows users to convert LIQUID to HYPE tax-free. The delay period is based on the size of the exit, with larger exits requiring longer waiting periods to maintain protocol stability.",
  },
  {
    question: "How are fees distributed?",
    answer:
      "Initially, 100% of LIQUID fees are burned. After reaching a benchmark, 90% of fees continue to be burned while 10% are distributed as HYPE rewards to VCM holders.",
  },
  {
    question: "What is the total supply of LIQUID?",
    answer:
      "LIQUID has a fixed total supply with no minting capability. The initial distribution was 100% seeded to the Uniswap v3 LIQUID/HYPE pool.",
  },
  {
    question: "How can I participate in the protocol?",
    answer:
      "You can participate by holding LIQUID tokens, becoming a VCM holder to earn rewards, or providing liquidity to the LIQUID/HYPE pool. Each role contributes to the protocol's stability and growth.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Background />
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden z-10">
        <div className="section-container relative z-10">
          <div className="px-4 sm:px-[5%]">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-liquid-off-white mb-4 sm:mb-6">
                Frequently Asked{" "}
                <span className="relative inline-block text-liquid-blue">
                  Questions
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-liquid-blue via-cyan-400 to-transparent rounded-full animate-pulse"
                    style={{ opacity: 0.5 }}
                  />
                </span>
              </h1>
              <p className="text-neutral-200/70 text-sm sm:text-base font-sans font-medium mb-2">
                Everything you need to know about the LIQUID Protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-6 sm:py-8 z-10">
        <div className="section-container">
          <div className="px-4 sm:px-[5%]">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group border border-cyan-500/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/20 bg-gradient-to-b from-cyan-950/50 to-cyan-950/30"
                  >
                    <button
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none hover:bg-cyan-950/40 transition-colors duration-200"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <div className="flex justify-between items-center gap-3 sm:gap-4">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold font-playfair text-neutral-200 group-hover:text-cyan-100 transition-colors duration-200">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 transition-all duration-300 ${
                            openIndex === index ? "rotate-180 scale-110" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`px-4 sm:px-6 transition-all duration-300 ${
                        openIndex === index
                          ? "max-h-96 pb-6 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="pt-4 border-t border-cyan-500/10">
                        <p className="text-neutral-300 font-sans text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 z-10">
        <div className="section-container">
          <div className="px-4 sm:px-[5%]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold font-playfair text-liquid-off-white mb-3 sm:mb-4">
                Still have questions?
              </h2>
              <p className="text-neutral-200/70 font-sans mb-6 sm:mb-8">
                Check out our detailed documentation or join our community for
                more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-200 shadow-lg hover:from-cyan-200 hover:to-blue-100 transition-colors font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Read Documentation
                </Link>
                <Link
                  href="https://t.me/hyperliquid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-cyan-300 text-cyan-300 bg-transparent hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105 font-playfair focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

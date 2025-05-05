'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
  category: 'basics' | 'protocol' | 'tokens' | 'technical';
}

const faqs: FAQ[] = [
  {
    category: 'basics',
    question: "What is LIQUID?",
    answer: "LIQUID is a token designed to reward long-term conviction. Unlike stablecoins, its price may fluctuate based on market conditions. It's intentionally under-engineered, focusing on trustlessness and transparency."
  },
  {
    category: 'basics',
    question: "How is LIQUID different from other tokens?",
    answer: "LIQUID is designed for long-term holding, not as a stablecoin. Its price can change, but it's built with mechanisms to protect long-term holders. The token has a fixed supply that can never be increased, and its price is determined by market dynamics."
  },
  {
    category: 'protocol',
    question: "What are the key features of LIQUID?",
    answer: "LIQUID features a fixed supply, transparent mechanics, and trustless protocol design. It's built to reward those who hold long-term, with mechanisms that protect against short-term speculation and market manipulation."
  },
  {
    category: 'protocol',
    question: "What are Valve Controllers?",
    answer: "Valve Controllers are special tokens that give holders governance rights in the protocol. They help maintain the system's balance and can participate in protocol decisions, making them an integral part of LIQUID's ecosystem."
  },
  {
    category: 'tokens',
    question: "How does LIQUID relate to HYPE and PURR?",
    answer: "HYPE is the governance token of the Hyperliquid ecosystem, while PURR is a meme token. LIQUID serves as the ecosystem's long-term holding token. Each token has its distinct purpose: HYPE for governance, PURR for community engagement, and LIQUID for long-term holding."
  },
  {
    category: 'tokens',
    question: "Can I convert LIQUID to other tokens?",
    answer: "Yes, there's a special system that allows you to convert LIQUID to HYPE without paying taxes. This system uses a queue to ensure large conversions don't disrupt the market. However, remember that LIQUID is designed for long-term holding."
  },
  {
    category: 'technical',
    question: "How does the tax system work?",
    answer: "The tax system automatically adjusts based on market activity. When there's more selling, the tax increases to protect long-term holders. When there's more buying, it decreases to encourage participation. This helps maintain LIQUID's long-term holding proposition."
  },
  {
    category: 'technical',
    question: "What happens to the fees collected?",
    answer: "Initially, all fees are burned, reducing the total supply. After certain conditions are met, most fees continue to be burned while a small portion goes to Valve Controller holders. This mechanism helps maintain LIQUID's long-term holding characteristics."
  }
];

export default function FAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());
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

    const element = document.getElementById('faq-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <section id="faq-section" className="relative overflow-hidden">
        {/* Section separator line */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        <div className="section-container pt-32 pb-24">
          <div className="px-4 sm:px-[5%]">
            <div className={`space-y-4 text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair">
                Frequently Asked <span className="text-cyan-300">Questions</span>
              </h1>
              <div className={`w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`group relative p-6 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-black/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between"
                    >
                      <h3 className="text-xl font-bold font-playfair text-cyan-200 group-hover:text-cyan-100 transition-colors">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                          expandedFaqs.has(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`mt-4 transition-all duration-300 ease-in-out ${
                        expandedFaqs.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-gray-400 mb-6">
                  Still have questions? Check out our detailed documentation or join our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/docs"
                    className="px-6 py-3 rounded-lg font-medium bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
                  >
                    Read Documentation
                  </Link>
                  <a
                    href="https://t.me/hyperliquid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg font-medium border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    Join Telegram
                  </a>
                </div>
              </div>
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
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

interface DocSection {
  title: string;
  items: {
    title: string;
    id: string;
  }[];
}

const sections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", id: "introduction" },
      { title: "Quick Start", id: "quick-start" },
      { title: "Tokenomics", id: "tokenomics" },
    ]
  },
  {
    title: "Protocol",
    items: [
      { title: "Overview", id: "protocol-overview" },
      { title: "Tax System", id: "tax-system" },
      { title: "Valve Controllers", id: "valve-controllers" },
      { title: "Fee Distribution", id: "fee-distribution" },
    ]
  },
  {
    title: "Token Ecosystem",
    items: [
      { title: "LIQUID", id: "liquid" },
      { title: "HYPE", id: "hype" },
      { title: "PURR", id: "purr" },
      { title: "Token Interactions", id: "token-interactions" },
    ]
  },
  {
    title: "Technical",
    items: [
      { title: "Smart Contracts", id: "smart-contracts" },
      { title: "Security", id: "security" },
      { title: "Audits", id: "audits" },
    ]
  }
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Handle initial hash navigation
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24">
        <div className="flex">
          {/* Sidebar */}
          <aside className="fixed top-24 left-0 w-64 h-[calc(100vh-6rem)] overflow-y-auto bg-black/20 backdrop-blur-lg border-r border-white/10">
            <nav className="p-4">
              {sections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-400 mb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            activeSection === item.id
                              ? 'text-cyan-300 bg-white/10'
                              : 'text-neutral-300 hover:text-cyan-300 hover:bg-white/5'
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ml-64">
            <div className="max-w-4xl mx-auto px-8 py-12">
              <div className="prose prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-8">Documentation</h1>
                
                <section id="introduction" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    LIQUID is a token designed to reward long-term conviction. Unlike stablecoins, its price may fluctuate based on market conditions. It's intentionally under-engineered, focusing on trustlessness and transparency.
                  </p>
                </section>

                <section id="quick-start" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Get started with LIQUID in a few simple steps...
                  </p>
                </section>

                <section id="tokenomics" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    LIQUID has a fixed supply that can never be increased. The token is designed for long-term holding, with mechanisms to protect holders against short-term speculation.
                  </p>
                </section>

                <section id="protocol-overview" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Protocol Overview</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    The LIQUID protocol is built on trustless and transparent mechanics, designed to reward long-term holders.
                  </p>
                </section>

                <section id="tax-system" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Tax System</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    The tax system automatically adjusts based on market activity, protecting long-term holders while encouraging participation.
                  </p>
                </section>

                <section id="valve-controllers" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Valve Controllers</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Valve Controllers are special tokens that give holders governance rights in the protocol, helping maintain system balance.
                  </p>
                </section>

                <section id="fee-distribution" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Fee Distribution</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Fees are primarily burned to reduce supply, with a portion going to Valve Controller holders after certain conditions are met.
                  </p>
                </section>

                <section id="liquid" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">LIQUID</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    LIQUID is the ecosystem's long-term holding token, designed to reward conviction and protect against short-term speculation.
                  </p>
                </section>

                <section id="hype" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">HYPE</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    HYPE is the governance token of the Hyperliquid ecosystem, allowing holders to participate in protocol decisions.
                  </p>
                </section>

                <section id="purr" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">PURR</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    PURR is a meme token designed for community engagement and fun within the ecosystem.
                  </p>
                </section>

                <section id="token-interactions" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Token Interactions</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Learn how LIQUID, HYPE, and PURR work together in the ecosystem.
                  </p>
                </section>

                <section id="smart-contracts" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Smart Contracts</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Technical details about the smart contracts powering the LIQUID protocol.
                  </p>
                </section>

                <section id="security" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Security</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Security measures and best practices for interacting with the protocol.
                  </p>
                </section>

                <section id="audits" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-4">Audits</h2>
                  <p className="text-lg text-neutral-300 mb-4">
                    Information about security audits and verification of the protocol.
                  </p>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
} 
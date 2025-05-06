'use client';

import DocsPageTemplate, { Highlight, Tip } from '@/components/DocsPageTemplate';

export default function IntroductionPage() {
  return (
    <DocsPageTemplate title="Introduction">
      <p className="text-lg text-white/90 leading-relaxed">
        Welcome to the LIQUID Protocol documentation. This guide will help you understand the core
        concepts, features, and implementation details of the protocol.
      </p>

      <Tip>
        LIQUID Protocol is designed to be a sustainable and efficient DeFi ecosystem, focusing on
        long-term value creation and fair distribution of rewards.
      </Tip>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is LIQUID?</h2>
      <p className="text-white/90">
        LIQUID is a decentralized protocol that introduces a novel approach to token economics and
        liquidity management. It combines advanced tokenomics with innovative features to create a
        sustainable and efficient DeFi ecosystem.
      </p>

      <Highlight>
        The protocol&apos;s name &quot;LIQUID&quot; reflects its core mission: to provide liquid,
        efficient, and sustainable token economics for the DeFi ecosystem.
      </Highlight>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Valve Controllers</h3>
          <p className="text-white/80">
            Advanced token flow control mechanisms that enable precise management of token
            distribution and liquidity.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Dynamic Tax System</h3>
          <p className="text-white/80">
            Adaptive tax rates that respond to market conditions and protocol needs, ensuring
            sustainable growth.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Fair Distribution</h3>
          <p className="text-white/80">
            Equitable reward distribution system that benefits all protocol participants based on
            their contribution.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Governance</h3>
          <p className="text-white/80">
            Community-driven decision-making process that allows token holders to shape the
            protocol&apos;s future.
          </p>
        </div>
      </div>

      <Tip>
        The protocol is designed to be modular and upgradeable, allowing for continuous improvement
        and adaptation to changing market conditions.
      </Tip>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started</h2>
      <p className="text-white/90">To start using the LIQUID Protocol, you&apos;ll need to:</p>
      <ol className="list-decimal list-inside space-y-2 text-white/90 mt-4">
        <li>Set up a Web3 wallet (MetaMask recommended)</li>
        <li>Connect to the Ethereum network</li>
        <li>Acquire LIQUID tokens</li>
        <li>Explore the protocol features</li>
      </ol>

      <Highlight>
        For detailed instructions on each step, please refer to the Quick Start guide in the
        documentation.
      </Highlight>
    </DocsPageTemplate>
  );
}

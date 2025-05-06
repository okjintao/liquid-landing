"use client";

import DocsPageTemplate from "@/components/DocsPageTemplate";

export default function DeployedContractsPage() {
  return (
    <DocsPageTemplate title="Deployed Contracts">
      <p className="text-lg text-white/90 leading-relaxed">
        The LIQUID protocol&apos;s smart contracts are deployed on the Ethereum
        network. Below is a comprehensive list of all deployed contracts and
        their addresses.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Core Contracts
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">LIQUID Token</h3>
          <p className="text-white/80">
            The main token contract implementing the ERC-20 standard with
            additional protocol-specific functionality.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0x1234...5678
          </code>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">HYPE Token</h3>
          <p className="text-white/80">
            The reward token contract used for distributing protocol rewards to
            participants.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0x8765...4321
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Protocol Contracts
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            Valve Controller Factory
          </h3>
          <p className="text-white/80">
            Factory contract for creating new Valve Controller Modules.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0xabcd...efgh
          </code>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            Reward Distributor
          </h3>
          <p className="text-white/80">
            Contract responsible for distributing HYPE rewards to protocol
            participants.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0xijkl...mnop
          </code>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Treasury</h3>
          <p className="text-white/80">
            Protocol treasury contract managing collected fees and protocol
            funds.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0xqrst...uvwx
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Utility Contracts
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Governance</h3>
          <p className="text-white/80">
            Governance contract for protocol parameter management and upgrades.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0xyzaa...bbcc
          </code>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">VCM Marketplace</h3>
          <p className="text-white/80">
            Marketplace contract for trading Valve Controller Modules.
          </p>
          <code className="block mt-2 p-2 bg-[var(--color-liquid-blue)]/5 rounded text-sm font-mono text-white/90">
            0xddcc...bbaa
          </code>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">
          Contract Verification
        </h3>
        <p className="text-white/80">
          All contracts are verified on Etherscan and can be viewed for
          transparency. Contract addresses are subject to change during protocol
          upgrades, which will be announced through official channels.
        </p>
      </div>
    </DocsPageTemplate>
  );
}

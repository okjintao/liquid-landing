'use client';

import DocsPageTemplate from '@/components/DocsPageTemplate';

export default function ValveControllersPage() {
  return (
    <DocsPageTemplate title="Valve Controllers">
      <p className="text-lg text-white/90 leading-relaxed">
        Valve Controller Modules (VCMs) are the core innovation of the LIQUID protocol, enabling
        holders to create and manage reward streams with customizable parameters.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">VCM Overview</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">What are VCMs?</h3>
          <p className="text-white/80">
            Valve Controller Modules are NFT-based control mechanisms that allow holders to create
            and manage reward streams within the LIQUID ecosystem. Each VCM can be configured with
            custom parameters for commission rates and reward distribution.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Customizable commission rates</li>
            <li>Flexible reward distribution</li>
            <li>NFT-based ownership</li>
            <li>Transferable and tradeable</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Creating a VCM</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>LIQUID tokens for creation fee</li>
            <li>ETH for gas fees</li>
            <li>Connected Web3 wallet</li>
          </ul>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Configuration</h3>
          <p className="text-white/80">When creating a VCM, you can set:</p>
          <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
            <li>Commission rate (1-10%)</li>
            <li>Reward distribution parameters</li>
            <li>Target reward pools</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Managing Your VCM</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Commission Collection</h3>
          <p className="text-white/80">
            VCM holders can collect their commissions at any time. The commission rate is applied to
            all transactions processed through the VCM.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Parameter Updates</h3>
          <p className="text-white/80">VCM parameters can be updated by the owner, including:</p>
          <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
            <li>Commission rate adjustments</li>
            <li>Reward distribution changes</li>
            <li>Target pool modifications</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">VCM Marketplace</h3>
        <p className="text-white/80">VCMs can be traded on the marketplace, allowing holders to:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
          <li>Buy and sell VCMs</li>
          <li>Transfer ownership</li>
          <li>View VCM statistics and performance</li>
        </ul>
      </div>
    </DocsPageTemplate>
  );
}

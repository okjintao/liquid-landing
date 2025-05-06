'use client';

import DocsPageTemplate from '@/components/DocsPageTemplate';

export default function TokenomicsPage() {
  return (
    <DocsPageTemplate title="Tokenomics">
      <p className="text-lg text-white/90 leading-relaxed">
        LIQUID&apos;s tokenomics are designed to create a sustainable and deflationary ecosystem
        that benefits all participants while ensuring long-term protocol viability.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Token Distribution</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Initial Supply</h3>
          <p className="text-white/80">
            The total initial supply of LIQUID tokens is distributed across various categories to
            ensure balanced ecosystem growth and development.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Allocation Breakdown</h3>
          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Community Rewards: 40%</li>
            <li>Development Fund: 20%</li>
            <li>Liquidity Pool: 15%</li>
            <li>Team & Advisors: 15%</li>
            <li>Marketing: 10%</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Deflationary Mechanisms</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Token Burning</h3>
          <p className="text-white/80">
            A portion of tokens from each transaction is permanently burned, reducing the total
            supply over time and increasing the value of remaining tokens.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">VCM Creation</h3>
          <p className="text-white/80">
            Creating new Valve Controller Modules requires burning LIQUID tokens, further
            contributing to the deflationary mechanism.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Reward Distribution</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">HYPE Token Emissions</h3>
          <p className="text-white/80">
            HYPE tokens are distributed to protocol participants based on their contribution and
            engagement level, with emission rates adjusted to maintain sustainable rewards.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Staking Rewards</h3>
          <p className="text-white/80">
            Users can stake their LIQUID tokens to earn additional rewards and participate in
            protocol governance.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">Economic Model</h3>
        <p className="text-white/80">
          The LIQUID economic model is designed to create a self-sustaining ecosystem where token
          value appreciation is driven by utility, scarcity, and protocol growth. The combination of
          deflationary mechanisms and reward distribution ensures long-term sustainability.
        </p>
      </div>
    </DocsPageTemplate>
  );
}

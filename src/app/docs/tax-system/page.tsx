"use client";

import DocsPageTemplate from "@/components/DocsPageTemplate";

export default function TaxSystemPage() {
  return (
    <DocsPageTemplate title="Tax System">
      <p className="text-lg text-white/90 leading-relaxed">
        The LIQUID tax system is designed to create sustainable value for all
        participants while maintaining protocol stability and growth.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Transaction Taxes
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Buy Tax</h3>
          <p className="text-white/80">
            A 5% tax is applied to all buy transactions, distributed as follows:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
            <li>3% to HYPE rewards pool</li>
            <li>1% to protocol treasury</li>
            <li>1% to liquidity pool</li>
          </ul>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Sell Tax</h3>
          <p className="text-white/80">
            A 7% tax is applied to all sell transactions, distributed as
            follows:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
            <li>4% to HYPE rewards pool</li>
            <li>2% to protocol treasury</li>
            <li>1% to liquidity pool</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Tax Distribution
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            HYPE Rewards Pool
          </h3>
          <p className="text-white/80">
            The largest portion of collected taxes goes to the HYPE rewards
            pool, which is distributed to protocol participants based on their
            contribution and engagement.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            Protocol Treasury
          </h3>
          <p className="text-white/80">
            Treasury funds are used for protocol development, marketing, and
            strategic initiatives to ensure long-term growth and sustainability.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Liquidity Pool</h3>
          <p className="text-white/80">
            A portion of taxes is automatically added to the liquidity pool,
            ensuring stable trading conditions and reducing price impact.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">Tax Exemptions</h3>
        <p className="text-white/80">
          Certain transactions may be exempt from taxes, including:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mt-2">
          <li>Transfers between whitelisted addresses</li>
          <li>Protocol-owned liquidity operations</li>
          <li>Emergency protocol functions</li>
        </ul>
      </div>
    </DocsPageTemplate>
  );
}

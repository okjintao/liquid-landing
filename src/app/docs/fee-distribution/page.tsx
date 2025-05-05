'use client';

import DocsPageTemplate from '@/components/DocsPageTemplate';

export default function FeeDistributionPage() {
  return (
    <DocsPageTemplate title="Fee Distribution">
      <p className="text-lg text-slate-600 leading-relaxed">
        The LIQUID protocol implements a sophisticated fee distribution system that ensures fair 
        and sustainable rewards for all participants while maintaining protocol stability.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Fee Sources</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Transaction Fees</h3>
          <p className="text-slate-600">
            Fees collected from buy and sell transactions are distributed across multiple categories 
            to ensure balanced ecosystem growth.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">VCM Commissions</h3>
          <p className="text-slate-600">
            Commissions earned by Valve Controller Modules are distributed to their holders based 
            on configured parameters.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Distribution Channels</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">HYPE Rewards Pool</h3>
          <p className="text-slate-600">
            The majority of collected fees are allocated to the HYPE rewards pool, which is 
            distributed to protocol participants based on their contribution and engagement.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Protocol Treasury</h3>
          <p className="text-slate-600">
            A portion of fees is directed to the protocol treasury for development, marketing, 
            and strategic initiatives.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Liquidity Pool</h3>
          <p className="text-slate-600">
            Fees are automatically added to the liquidity pool to ensure stable trading conditions 
            and reduce price impact.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Distribution Parameters</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Allocation Ratios</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>HYPE Rewards Pool: 60%</li>
            <li>Protocol Treasury: 20%</li>
            <li>Liquidity Pool: 20%</li>
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Dynamic Adjustment</h3>
          <p className="text-slate-600">
            Distribution ratios can be adjusted through governance proposals to optimize protocol 
            performance and sustainability.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Fee Collection</h3>
        <p className="text-slate-600">
          Fees are collected automatically through smart contracts and distributed according to 
          the configured parameters. All transactions are transparent and verifiable on-chain.
        </p>
      </div>
    </DocsPageTemplate>
  );
} 
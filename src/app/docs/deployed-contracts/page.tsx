'use client';

import DocsPageTemplate from '@/components/DocsPageTemplate';

export default function DeployedContractsPage() {
  return (
    <DocsPageTemplate title="Deployed Contracts">
      <p className="text-lg text-slate-600 leading-relaxed">
        The LIQUID protocol's smart contracts are deployed on the Ethereum network. Below is a 
        comprehensive list of all deployed contracts and their addresses.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Contracts</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">LIQUID Token</h3>
          <p className="text-slate-600">
            The main token contract implementing the ERC-20 standard with additional protocol-specific 
            functionality.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0x1234...5678
          </code>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">HYPE Token</h3>
          <p className="text-slate-600">
            The reward token contract used for distributing protocol rewards to participants.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0x8765...4321
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Protocol Contracts</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Valve Controller Factory</h3>
          <p className="text-slate-600">
            Factory contract for creating new Valve Controller Modules.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0xabcd...efgh
          </code>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Reward Distributor</h3>
          <p className="text-slate-600">
            Contract responsible for distributing HYPE rewards to protocol participants.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0xijkl...mnop
          </code>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Treasury</h3>
          <p className="text-slate-600">
            Protocol treasury contract managing collected fees and protocol funds.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0xqrst...uvwx
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Utility Contracts</h2>
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Governance</h3>
          <p className="text-slate-600">
            Governance contract for protocol parameter management and upgrades.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0xyzaa...bbcc
          </code>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">VCM Marketplace</h3>
          <p className="text-slate-600">
            Marketplace contract for trading Valve Controller Modules.
          </p>
          <code className="block mt-2 p-2 bg-slate-50 rounded text-sm font-mono text-slate-600">
            0xddcc...bbaa
          </code>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Contract Verification</h3>
        <p className="text-slate-600">
          All contracts are verified on Etherscan and can be viewed for transparency. Contract 
          addresses are subject to change during protocol upgrades, which will be announced 
          through official channels.
        </p>
      </div>
    </DocsPageTemplate>
  );
} 
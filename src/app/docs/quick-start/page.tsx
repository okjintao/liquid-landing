'use client';

import DocsPageTemplate from '@/components/DocsPageTemplate';

export default function QuickStartPage() {
  return (
    <DocsPageTemplate title="Quick Start Guide">
      <p className="text-lg text-white/90 leading-relaxed">
        Get started with LIQUID in just a few simple steps. This guide will walk you through the essential 
        processes to begin participating in the ecosystem.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prerequisites</h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">Wallet Setup</h3>
          <p className="text-white/80">
            Ensure you have a compatible Web3 wallet (MetaMask, WalletConnect, etc.) installed and connected 
            to the Ethereum network.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">ETH Balance</h3>
          <p className="text-white/80">
            Have sufficient ETH in your wallet to cover gas fees for transactions and contract interactions.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Getting Started Steps</h2>
      <ol className="list-decimal list-inside text-white/90 space-y-4">
        <li className="pl-2">
          <span className="font-medium text-white">Purchase LIQUID Tokens</span>
          <p className="mt-1">Acquire LIQUID tokens from supported DEXs or centralized exchanges.</p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">Set Up Valve Controller</span>
          <p className="mt-1">Create or acquire a Valve Controller Module to start managing reward streams.</p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">Configure Parameters</span>
          <p className="mt-1">Set your desired commission rates and distribution parameters.</p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">Start Earning</span>
          <p className="mt-1">Begin earning HYPE rewards through protocol participation.</p>
        </li>
      </ol>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
        <p className="text-white/80">
          If you encounter any issues or have questions, check out our detailed documentation or reach out to 
          our community support channels.
        </p>
      </div>
    </DocsPageTemplate>
  );
} 
"use client";

import DocsPageTemplate from "@/components/DocsPageTemplate";

export default function ProtocolOverviewPage() {
  return (
    <DocsPageTemplate title="Protocol Overview">
      <p className="text-lg text-white/90 leading-relaxed">
        LIQUID is a decentralized protocol that revolutionizes token economics
        through its innovative Valve Controller Module system and sustainable
        reward distribution mechanism.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Key Components
      </h2>
      <div className="space-y-6">
        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">LIQUID Token</h3>
          <p className="text-white/80">
            The native token of the protocol, designed with a deflationary
            mechanism and sustainable tokenomics to ensure long-term value
            appreciation.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">
            Valve Controller Modules
          </h3>
          <p className="text-white/80">
            NFT-based control mechanisms that enable holders to create and
            manage reward streams, with customizable parameters for commission
            rates and distribution.
          </p>
        </div>

        <div className="bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl p-6 hover:bg-[var(--color-liquid-blue)]/20 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">HYPE Token</h3>
          <p className="text-white/80">
            The reward token distributed through VCMs, incentivizing protocol
            participation and ecosystem growth.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Protocol Features
      </h2>
      <ul className="list-disc list-inside text-white/90 space-y-4">
        <li className="pl-2">
          <span className="font-medium text-white">Deflationary Mechanism</span>
          <p className="mt-1">
            Built-in token burning through VCM creation and transaction taxes.
          </p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">Sustainable Rewards</span>
          <p className="mt-1">
            Balanced reward distribution system ensuring long-term protocol
            viability.
          </p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">
            Customizable Parameters
          </span>
          <p className="mt-1">
            Flexible configuration options for VCM holders to optimize their
            strategies.
          </p>
        </li>
        <li className="pl-2">
          <span className="font-medium text-white">Community Governance</span>
          <p className="mt-1">
            Protocol parameters and upgrades controlled by token holders.
          </p>
        </li>
      </ul>

      <div className="mt-8 p-6 bg-[var(--color-liquid-blue)]/10 border border-[var(--color-liquid-blue)]/20 rounded-xl">
        <h3 className="text-xl font-bold text-white mb-2">
          Technical Architecture
        </h3>
        <p className="text-white/80">
          The protocol is built on Ethereum, utilizing smart contracts for
          automated execution of all core functions. Each component is designed
          with security and efficiency in mind, ensuring reliable operation and
          optimal gas usage.
        </p>
      </div>
    </DocsPageTemplate>
  );
}

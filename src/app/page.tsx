'use client';

import Background from '@/components/Background';
import Hero from '@/components/Hero';
import ProtocolFeatures from '@/components/ProtocolFeatures';
import Tokenomics from '@/components/Tokenomics';
import ValveController from '@/components/ValveController';
import WhyLiquid from '@/components/WhyLiquid';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Hero />
        <WhyLiquid />
        <ProtocolFeatures />
        <Tokenomics />
        <ValveController />
      </div>
    </main>
  );
}

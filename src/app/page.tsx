'use client'

import { useEffect, useRef, useState } from 'react';
import Background from '@/components/Background';
import Hero from '@/components/Hero'
import WhyLiquid from '@/components/WhyLiquid'
import Tokenomics from '@/components/Tokenomics'
import ValveController from '@/components/ValveController'
import ProtocolFeatures from '@/components/ProtocolFeatures'
import Footer from '@/components/Footer'

export default function Home() {
  const fadeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '-40% 0px', threshold: 0 }
    );
    if (fadeRef.current) observer.observe(fadeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Hero />
        <WhyLiquid />
        <ProtocolFeatures />
        <Tokenomics />
        <ValveController />
        <Footer />
      </div>
    </main>
  );
}

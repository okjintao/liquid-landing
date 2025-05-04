'use client'

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero'
import WhyLiquid from '@/components/WhyLiquid'
import Tokenomics from '@/components/Tokenomics'
import ValveController from '@/components/ValveController'
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
    <main>
      <Hero />
      <div
        ref={fadeRef}
        className={`transition-opacity duration-1000 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        <WhyLiquid />
        <Tokenomics />
        <ValveController />
      </div>
      <Footer />
    </main>
  );
}

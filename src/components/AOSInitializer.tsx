'use client';

import Script from 'next/script';

export default function AOSInitializer() {
  return (
    <Script
      src="https://unpkg.com/aos@next/dist/aos.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          window.AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
            offset: 100,
            delay: 0,
            startEvent: 'load',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: true,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
          });
        }
      }}
    />
  );
}

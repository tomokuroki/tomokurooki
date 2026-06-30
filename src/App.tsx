/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Work } from './components/Work';
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -80 });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Stack />
          <Work />
          <Info />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

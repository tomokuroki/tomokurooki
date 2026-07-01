/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stack } from './components/Stack';
import { Work } from './components/Work';
import { LearnSection } from './components/LearnSection';
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { HSKPage } from './components/HSKPage';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'hsk'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Ensure we start at top when component/page updates
    lenis.scrollTo(0, { immediate: true });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

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
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [currentPage]);

  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen">
        <Header onNavigate={setCurrentPage} />
        <main>
          {currentPage === 'home' ? (
            <>
              <Hero />
              <About />
              <Stack />
              <Work />
              <LearnSection onNavigate={setCurrentPage} />
              <Info />
            </>
          ) : (
            <HSKPage onBack={() => setCurrentPage('home')} />
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}


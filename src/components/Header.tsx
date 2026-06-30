import { useEffect, useState } from 'react';
import { useLanguage, Language } from '../i18n/LanguageContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-5' : 'py-7'
      }`}
    >
      {/* Stylish gradient & blur background that fades smoothly at the bottom */}
      <div 
        className={`absolute inset-0 -bottom-10 pointer-events-none transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.6) 60%, rgba(5,5,5,0) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 flex justify-between items-center text-[12px] md:text-[14px] tracking-[0.02em] uppercase">
        <a href="#top" className="text-white no-underline font-bold">tomokuroki</a>
        <div className="flex items-center gap-6 md:gap-12">
          <nav className="flex gap-3 sm:gap-4 md:gap-9 text-[11px] sm:text-[12px] md:text-[14px]">
            <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">{t.nav.about}</a>
            <a href="#stack" className="text-white opacity-70 hover:opacity-100 transition-opacity">{t.nav.stack}</a>
            <a href="#work" className="text-white opacity-70 hover:opacity-100 transition-opacity">{t.nav.work}</a>
            <a href="#info" className="text-white opacity-70 hover:opacity-100 transition-opacity">{t.nav.info}</a>
          </nav>
          <div className="flex gap-2 text-[10px] md:text-[12px]">
            <button 
              onClick={() => setLanguage('zh')} 
              className={`transition-opacity ${language === 'zh' ? 'text-white opacity-100 font-bold' : 'text-muted opacity-70 hover:opacity-100'}`}
            >ZH</button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`transition-opacity ${language === 'en' ? 'text-white opacity-100 font-bold' : 'text-muted opacity-70 hover:opacity-100'}`}
            >EN</button>
            <button 
              onClick={() => setLanguage('ru')} 
              className={`transition-opacity ${language === 'ru' ? 'text-white opacity-100 font-bold' : 'text-muted opacity-70 hover:opacity-100'}`}
            >RU</button>
          </div>
        </div>
      </div>
    </header>
  );
}

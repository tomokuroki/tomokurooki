import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { hsk1Words } from '../data/hsk1';
import { FadeIn } from './FadeIn';

export function HSKPage({ onBack }: { onBack: () => void }) {
  const { t, language } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [activeLevel]);

  const levels = [
    { num: 1, label: t.learn.hsk1, active: true },
    { num: 2, label: t.learn.hsk2, active: false },
    { num: 3, label: t.learn.hsk3, active: false },
    { num: 4, label: t.learn.hsk4, active: false },
    { num: 5, label: t.learn.hsk5, active: false },
    { num: 6, label: t.learn.hsk6, active: false },
  ];

  function getTones(pinyin: string): string {
    const tones: string[] = [];
    for (const char of pinyin) {
      if (/[āōēīūǖ]/i.test(char)) tones.push('1');
      else if (/[áóéíúǘ]/i.test(char)) tones.push('2');
      else if (/[ǎǒěǐǔǚ]/i.test(char)) tones.push('3');
      else if (/[àòèìùǜ]/i.test(char)) tones.push('4');
    }
    return tones.length > 0 ? tones.join(', ') : '5';
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn>
          <h1 className="text-[clamp(40px,8vw,120px)] font-normal leading-[0.92] tracking-[-0.04em] mb-12">
            {t.learn.title.replace('\n', ' ')}
          </h1>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-4 mb-20 border-b border-line pb-12">
          {levels.map((lvl) => (
            <button
              key={lvl.num}
              onClick={() => lvl.active && setActiveLevel(lvl.num)}
              className={`px-5 py-2 rounded-full font-mono text-[13px] uppercase tracking-wider transition-all ${
                lvl.active 
                  ? activeLevel === lvl.num 
                    ? 'bg-white text-black' 
                    : 'bg-transparent border border-white/20 hover:border-white text-white'
                  : 'bg-transparent border border-line text-muted cursor-not-allowed'
              }`}
              title={!lvl.active ? t.learn.comingSoon : ''}
            >
              {lvl.label} {!lvl.active && <span className="ml-2 text-[10px] opacity-60">({t.learn.comingSoon})</span>}
            </button>
          ))}
        </FadeIn>

        {activeLevel === 1 && (
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-10 mb-12">
              <div className="font-mono text-[13px] text-muted uppercase">/ {t.learn.hsk1} {t.learn.vocab}</div>
              <p className="text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] text-muted">
                {t.learn.levelDesc}
              </p>
            </div>
            
            <div className="w-full mt-4 md:mt-8 border border-line rounded-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[30px_60px_1fr_40px_1.5fr] md:grid-cols-[50px_1fr_1fr_1fr_2fr] gap-4 py-4 px-4 md:px-6 border-b border-line font-bold text-[14px] md:text-[15px] text-white">
                <div className="text-white">№</div>
                <div>{t.learn.tableHeaders.char}</div>
                <div>{t.learn.tableHeaders.pinyin}</div>
                <div>{t.learn.tableHeaders.tone}</div>
                <div>{t.learn.tableHeaders.meaning}</div>
              </div>
              
              {/* Rows */}
              <div className="flex flex-col">
                {isLoading ? (
                  Array.from({ length: 15 }).map((_, idx) => (
                    <div key={`skeleton-${idx}`} className="grid grid-cols-[30px_60px_1fr_40px_1.5fr] md:grid-cols-[50px_1fr_1fr_1fr_2fr] gap-4 py-4 px-4 md:px-6 border-b border-line last:border-0 items-center">
                      <div className="h-4 bg-white/5 rounded w-4 animate-pulse"></div>
                      <div className="h-5 bg-white/5 rounded w-8 animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded w-20 animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded w-4 animate-pulse"></div>
                      <div className="h-4 bg-white/5 rounded w-32 animate-pulse"></div>
                    </div>
                  ))
                ) : (
                  hsk1Words.map((word, idx) => (
                    <FadeIn key={idx} delay={(idx % 10) * 0.02} className="grid grid-cols-[30px_60px_1fr_40px_1.5fr] md:grid-cols-[50px_1fr_1fr_1fr_2fr] gap-4 py-4 px-4 md:px-6 border-b border-line last:border-0 items-center text-[14px] md:text-[15px] text-[#e0e0e0] hover:bg-white/[0.03] transition-colors">
                      <div className="font-mono text-[12px] md:text-[13px] text-white">{idx + 1}</div>
                      <div className="text-[16px] md:text-[18px] font-normal text-white">{word.char}</div>
                      <div className="font-sans">{word.pinyin}</div>
                      <div className="font-sans text-muted">{getTones(word.pinyin)}</div>
                      <div className="text-white/90">
                        {language === 'ru' ? word.ru : language === 'zh' ? word.en : word.en}
                      </div>
                    </FadeIn>
                  ))
                )}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

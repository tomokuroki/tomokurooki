import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function LearnSection({ onNavigate }: { onNavigate: (page: 'home' | 'hsk') => void }) {
  const { t } = useLanguage();

  return (
    <section id="learn" className="py-20 md:py-[120px] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-10 mb-12 md:mb-20">
          <div className="font-mono text-[13px] text-muted">/ 05</div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-normal tracking-[-0.03em] leading-none whitespace-pre-line">
            {t.learn.title}
          </h2>
        </FadeIn>

        <FadeIn>
          <button 
            onClick={() => onNavigate('hsk')}
            className="w-full text-left group grid grid-cols-[30px_1fr_auto] sm:grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1.2fr_1fr_120px] items-center gap-3 sm:gap-4 md:gap-8 py-5 sm:py-7 md:py-11 border-t border-line transition-all duration-550 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:md:translate-x-[18px] hover:text-white"
          >
            <div className="font-mono text-[12px] md:text-[13px] text-muted">CH</div>
            <div className="text-[clamp(18px,4vw,42px)] md:text-[clamp(22px,3vw,42px)] font-normal tracking-[-0.025em] leading-[1.1] md:leading-[1.05]">
              HSK 1-6 Course <span className="inline-block ml-2.5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:opacity-100">↗</span>
            </div>
            <div className="text-[14px] text-muted transition-colors duration-300 group-hover:text-[#bbb] hidden md:block">
              {t.learn.desc}
            </div>
            <div className="font-mono text-[12px] text-muted text-right">
              {t.learn.btn}
            </div>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

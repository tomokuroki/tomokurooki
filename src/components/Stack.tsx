import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function Stack() {
  const { t } = useLanguage();

  const stackData = [
    { d: t.stack.categories.system, t: t.stack.items.system },
    { d: t.stack.categories.backend, t: t.stack.items.backend },
    { d: t.stack.categories.data, t: t.stack.items.data },
    { d: t.stack.categories.mobile, t: t.stack.items.mobile },
    { d: t.stack.categories.devops, t: t.stack.items.devops },
    { d: t.stack.categories.scripting, t: t.stack.items.scripting },
    { d: t.stack.categories.web, t: t.stack.items.web },
    { d: t.stack.categories.achievements, t: t.stack.items.achievements },
  ];

  return (
    <section id="stack" className="py-20 md:py-[120px] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-10 mb-12 md:mb-20">
          <div className="font-mono text-[13px] text-muted">/ 02</div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-normal tracking-[-0.03em] leading-none">
            {t.stack.title}
          </h2>
        </FadeIn>
        
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
          {stackData.map((item, i) => (
            <div key={i} className="py-5 sm:py-7 md:py-9 pr-4 md:pr-6 border-b border-line">
              <div className="text-[12px] tracking-[0.15em] uppercase text-muted mb-3.5">{item.d}</div>
              <div className="text-[17px] md:text-[20px] tracking-[-0.01em] whitespace-pre-line">{item.t}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

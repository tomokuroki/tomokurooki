import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-end pt-40 pb-20 border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 w-full">
        <FadeIn className="text-[13px] tracking-[0.2em] uppercase text-muted mb-10">
          {t.hero.kicker}
        </FadeIn>
        <FadeIn>
          <h1 className="text-[clamp(40px,11vw,180px)] font-normal leading-[0.92] tracking-[-0.04em] break-words">
            tomokuroki<br />
            <span className="text-muted whitespace-pre-line">{t.hero.subtitle}</span>
          </h1>
        </FadeIn>
        <FadeIn className="mt-10 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-[clamp(14px,1.2vw,18px)] text-muted max-w-[900px]">
          <div>
            <strong className="text-fg font-medium">{t.hero.stats.repos}</strong>{t.hero.stats.reposLabel} · <strong className="text-fg font-medium">{t.hero.stats.stars}</strong>{t.hero.stats.starsLabel} ·
            <strong className="text-fg font-medium">{t.hero.stats.followers}</strong>{t.hero.stats.followersLabel} · {t.hero.stats.locationLabel}<strong className="text-fg font-medium">{t.hero.stats.location}</strong>
          </div>
          <div>
            {t.hero.desc}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

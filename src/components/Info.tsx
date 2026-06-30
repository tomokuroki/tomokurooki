import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function Info() {
  const { t } = useLanguage();

  return (
    <section id="info" className="py-20 md:py-[120px] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-10 mb-12 md:mb-20">
          <div className="font-mono text-[13px] text-muted">/ 04</div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-normal tracking-[-0.03em] leading-none">
            {t.info.title}
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">{t.info.location}</div>
            <div>{t.info.locationValue}</div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">{t.info.orgs}</div>
            <div>@FriendsChad · @HSS-TEAM</div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">GitHub</div>
            <div className="break-all sm:break-normal"><a href="https://github.com/tomokuroki" target="_blank" rel="noreferrer" className="hover:underline hover:underline-offset-4">github.com/tomokuroki ↗</a></div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">Website</div>
            <div className="break-all sm:break-normal"><a href="https://tomokuroki.github.io" target="_blank" rel="noreferrer" className="hover:underline hover:underline-offset-4">tomokuroki.github.io ↗</a></div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">{t.info.social}</div>
            <div>{t.info.socialValue}</div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 border-t border-line py-5 md:py-[30px] text-[16px] md:text-[clamp(16px,1.6vw,24px)] tracking-[-0.01em] gap-1 sm:gap-0">
            <div className="text-muted pr-4">{t.info.status}</div>
            <div>{t.info.statusValue}</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

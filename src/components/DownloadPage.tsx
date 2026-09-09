import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowDown, ArrowLeft, BookOpen, Search, Smartphone, Tablet, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import appScreenshot from '../Apps/previous/screenshot_2.png';

export function DownloadPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors font-mono text-[13px] uppercase">
            <ArrowLeft size={15} /> {t.app.back}
          </Link>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center border-b border-line pb-20">
          <FadeIn>
            <div className="font-mono text-[13px] text-muted uppercase mb-8">/ {t.app.kicker}</div>
            <h1 className="text-[clamp(48px,9vw,132px)] font-normal leading-[0.88] tracking-[-0.055em] whitespace-pre-line">
              {t.app.title}
            </h1>
            <p className="text-[clamp(17px,2vw,25px)] leading-[1.35] text-muted max-w-[600px] mt-10">
              {t.app.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <button disabled className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-mono text-[12px] uppercase opacity-90 cursor-not-allowed">
                <ArrowDown size={15} /> {t.app.android}
              </button>
              <button disabled className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white/60 font-mono text-[12px] uppercase cursor-not-allowed">
                <Smartphone size={15} /> {t.app.play}
              </button>
            </div>
            <div className="font-mono text-[11px] text-muted uppercase mt-4">{t.app.comingSoon}</div>
          </FadeIn>

          <FadeIn>
            <div className="relative mx-auto max-w-[390px] w-full px-4">
              <div className="absolute -inset-5 border border-line rounded-[48px] rotate-3 opacity-50" />
              <div className="relative rounded-[44px] border-[6px] border-[#262626] bg-[#090909] p-2 shadow-2xl">
                <div className="absolute z-10 top-4 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[#090909]" />
                <div className="rounded-[34px] overflow-hidden bg-[#eee]">
                  <img
                    src={appScreenshot}
                    alt={t.app.screenshotAlt}
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="grid md:grid-cols-[260px_1fr] gap-3 md:gap-10 pt-20">
          <div className="font-mono text-[13px] text-muted">/ {t.app.featuresLabel}</div>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <Feature icon={<PenLine size={20} />} title={t.app.features.trace.title} text={t.app.features.trace.text} />
            <Feature icon={<BookOpen size={20} />} title={t.app.features.learn.title} text={t.app.features.learn.text} />
            <Feature icon={<Search size={20} />} title={t.app.features.dictionary.title} text={t.app.features.dictionary.text} />
            <Feature icon={<Tablet size={20} />} title={t.app.features.devices.title} text={t.app.features.devices.text} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="border-t border-line py-7">
      <div className="flex items-center gap-3 mb-3">{icon}<h2 className="text-[20px] tracking-[-0.02em]">{title}</h2></div>
      <p className="text-[15px] leading-relaxed text-muted max-w-[360px]">{text}</p>
    </div>
  );
}

import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function Work() {
  const { t } = useLanguage();

  const projects = [
    {
      n: '01',
      name: 'InfoSpaceten-Telegram-Bot',
      desc: t.work.projects[0].desc,
      tag: 'JavaScript',
      url: 'https://github.com/tomokuroki/InfoSpaceten-Telegram-Bot'
    },
    {
      n: '02',
      name: 'SpacetenDesktop',
      desc: t.work.projects[1].desc,
      tag: 'C++',
      url: 'https://github.com/tomokuroki/SpacetenDesktop'
    },
    {
      n: '03',
      name: 'femboylang',
      desc: t.work.projects[2].desc,
      tag: 'Python',
      url: 'https://github.com/tomokuroki/femboylang'
    },
    {
      n: '04',
      name: 'mcs_pfp',
      desc: t.work.projects[3].desc,
      tag: 'C++',
      url: 'https://github.com/tomokuroki/mcs_pfp'
    },
    {
      n: '05',
      name: 'GitHub-Customizer',
      desc: t.work.projects[4].desc,
      tag: 'CSS',
      url: 'https://github.com/tomokuroki/GitHub-Customizer-Fidget-Mod'
    },
    {
      n: '06',
      name: 'SpaceHeyMods',
      desc: t.work.projects[5].desc,
      tag: 'JS',
      url: 'https://github.com/tomokuroki/SpaceHeyMods'
    },
    {
      n: '07',
      name: 'Stylus Artist Pro',
      desc: t.work.projects[6].desc,
      tag: 'Python',
      url: 'https://github.com/tomokuroki/Stylus-Artist-Pro'
    },
    {
      n: '08',
      name: 'Tor + Apache + PHP + MySQL',
      desc: t.work.projects[7].desc,
      tag: 'PHP / Docker',
      url: 'https://github.com/tomokuroki/Tor-Apache-PHP-Mysql-Docker'
    }
  ];

  return (
    <section id="work" className="py-20 md:py-[120px] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-10 mb-12 md:mb-20">
          <div className="font-mono text-[13px] text-muted">/ 03</div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-normal tracking-[-0.03em] leading-none whitespace-pre-line">
            {t.work.title}
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <FadeIn key={i}>
              <a 
                href={p.url} 
                target="_blank" 
                rel="noreferrer"
                className="group grid grid-cols-[30px_1fr_auto] sm:grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1.2fr_1fr_120px] items-center gap-3 sm:gap-4 md:gap-8 py-5 sm:py-7 md:py-11 border-t border-line last:border-b transition-all duration-550 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:md:translate-x-[18px] hover:text-white"
              >
                <div className="font-mono text-[12px] md:text-[13px] text-muted">{p.n}</div>
                <div className="text-[clamp(18px,4vw,42px)] md:text-[clamp(22px,3vw,42px)] font-normal tracking-[-0.025em] leading-[1.1] md:leading-[1.05]">
                  {p.name} <span className="inline-block ml-2.5 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:opacity-100">↗</span>
                </div>
                <div className="text-[14px] text-muted transition-colors duration-300 group-hover:text-[#bbb] hidden md:block">
                  {p.desc}
                </div>
                <div className="font-mono text-[12px] text-muted text-right">
                  {p.tag}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

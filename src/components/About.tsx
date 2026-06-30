import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-[120px] border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-10 mb-12 md:mb-20">
          <div className="font-mono text-[13px] text-muted">/ 01</div>
          <h2 className="text-[clamp(32px,4.5vw,64px)] font-normal tracking-[-0.03em] leading-none">
            {t.about.title}
          </h2>
        </FadeIn>
        
        <FadeIn className="font-mono text-[10px] sm:text-[11px] md:text-[clamp(12px,1.1vw,15px)] leading-[1.6] md:leading-[1.75] text-[#cfcfcf] whitespace-pre overflow-x-auto pb-4">
          <span className="text-white">&gt; whoami</span>{'\n\n'}
          {`╔╦╗ ╔═╗ ╔╗╔╗ ╔═╗ ╦ ╦ ╦ ╦ ╦═╗ ╔═╗ ╦ ╦ ╦
 ║  ║ ║ ║╚╝║ ║ ║ ╠╩╗ ║ ║ ╠╦╝ ║ ║ ╠╩╗ ║
 ╩  ╚═╝ ╩  ╩ ╚═╝ ╩ ╩ ╚═╝ ╩╚═ ╚═╝ ╩ ╩ ╩`}{'\n\n'}
          <span className="text-muted">https://tomokuroki.github.io</span>{'\n\n'}
          <span className="text-white">&gt; neofetch</span>{'\n'}
          <span className="text-[#8ab4f8]">noctis</span>        tomokuroki@fedora{'\n'}
          ──────────────────────────────────────────{'\n'}
          <span className="text-[#8ab4f8]">OS</span>      ▸ Fedora Linux 40 (Workstation){'\n'}
          <span className="text-[#8ab4f8]">Kernel</span>  ▸ 6.8.10-300.fc40.x86_64{'\n'}
          <span className="text-[#8ab4f8]">Shell</span>   ▸ fish{'\n'}
          <span className="text-[#8ab4f8]">Editor</span>  ▸ nvim  /  vscode{'\n'}
          ──────────────────────────────────────────{'\n'}
          <span className="text-[#8ab4f8]">CPU</span>     ▸ Intel i9-13900HX (24C) @ 5.4 GHz{'\n'}
          <span className="text-[#8ab4f8]">GPU</span>     ▸ NVIDIA RTX 4070 · 8 GB GDDR6{'\n'}
          <span className="text-[#8ab4f8]">RAM</span>     ▸ 32 GB DDR5 @ 4800 MHz{'\n'}
          <span className="text-[#8ab4f8]">Disk</span>    ▸ 1 TB NVMe M.2 SSD{'\n'}
          ──────────────────────────────────────────{'\n'}
          <span className="text-[#8ab4f8]">Display</span> ▸ 16.0" IPS · 240 Hz{'\n'}
          <span className="text-[#8ab4f8]">{(t.about.loc || "Loc").padEnd(7)}</span> ▸ {t.about.locValue}{'\n'}
          <span className="text-[#8ab4f8]">{(t.about.student || "Edu").padEnd(7)}</span> ▸ {t.about.studentValue}{'\n'}
          <span className="text-[#8ab4f8]">{(t.about.skills || "Skills").padEnd(7)}</span> ▸ {t.about.skillsValue}{'\n\n'}
          <span className="text-white">&gt; echo "Built with ☕ and love for low-level code"</span>{'\n'}
          Built with ☕ and love for low-level code{'\n'}
          <span className="text-muted">$ _</span>
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/LanguageContext';
import { useState, useRef } from 'react';
import { Volume2, VolumeX, Video, VideoOff } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-40 pb-20 border-b border-line overflow-hidden">
      {/* Background Video */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isVideoVisible ? 'opacity-40' : 'opacity-0'}`}>
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted} 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://raw.githubusercontent.com/tomokuroki/web-assets/main/tomokurooki/oEfGDneG4QTEjcUI1gkuqheoGCLAJIBBLgJ7IA.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20 pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 w-full relative z-10">
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

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 flex items-center gap-3">
        <button 
          onClick={toggleVideo}
          className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#050505] hover:bg-[#111] transition-colors border border-line text-white/70 hover:text-white"
          title={isVideoVisible ? "Hide video" : "Show video"}
        >
          {isVideoVisible ? <Video size={14} /> : <VideoOff size={14} />}
          <span className="hidden md:inline text-[13px] font-medium tracking-tight">{isVideoVisible ? 'ON' : 'OFF'}</span>
        </button>
        <button 
          onClick={toggleMute}
          className={`flex items-center gap-2 px-4 py-2 rounded-[10px] transition-colors border border-line text-white/70 hover:text-white ${!isMuted ? 'bg-[#111]' : 'bg-[#050505] hover:bg-[#111]'}`}
          title={isMuted ? "Unmute video" : "Mute video"}
          disabled={!isVideoVisible}
          style={{ opacity: isVideoVisible ? 1 : 0.5 }}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          <span className="hidden md:inline text-[13px] font-medium tracking-tight">{isMuted ? 'MUTED' : 'UNMUTED'}</span>
        </button>
      </div>
    </section>
  );
}

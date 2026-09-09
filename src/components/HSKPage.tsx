import { useLanguage } from '../i18n/LanguageContext';
import { FadeIn } from './FadeIn';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import hsk1Pdf from '../HSK 1-6 Course/HSK1_vocab_RU.pdf';
import hsk2Pdf from '../HSK 1-6 Course/HSK2_vocab_RU.pdf';
import hsk3Pdf from '../HSK 1-6 Course/HSK3_vocab_RU.pdf';
import hsk4Pdf from '../HSK 1-6 Course/HSK4_vocab_RU.pdf';
import hsk5Pdf from '../HSK 1-6 Course/HSK5_vocab_RU.pdf';
import hsk6Pdf from '../HSK 1-6 Course/HSK6_vocab_RU.pdf';

const pdfs = {
  1: hsk1Pdf,
  2: hsk2Pdf,
  3: hsk3Pdf,
  4: hsk4Pdf,
  5: hsk5Pdf,
  6: hsk6Pdf,
} as const;

export function HSKPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { level } = useParams<{ level?: string }>();
  const parsedLevel = Number(level?.replace('hsk-', ''));
  const activeLevel = parsedLevel >= 1 && parsedLevel <= 6 ? parsedLevel : 1;
  const pdfUrl = pdfs[activeLevel as keyof typeof pdfs];
  const levelLabel = t.learn[`hsk${activeLevel}` as 'hsk1'];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors font-mono text-[13px] uppercase">
            <ArrowLeft size={15} /> {t.learn.back}
          </Link>
        </FadeIn>

        <FadeIn>
          <h1 className="text-[clamp(40px,8vw,120px)] font-normal leading-[0.92] tracking-[-0.04em] mb-12">
            {t.learn.title.replace('\n', ' ')}
          </h1>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-4 mb-10 border-b border-line pb-12">
          {Array.from({ length: 6 }, (_, index) => index + 1).map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/learn/chinese/hsk-${item}`)}
              className={`px-5 py-2 rounded-full font-mono text-[13px] uppercase tracking-wider transition-all ${
                activeLevel === item
                  ? 'bg-white text-black'
                  : 'bg-transparent border border-white/20 hover:border-white text-white'
              }`}
            >
              {t.learn[`hsk${item}` as 'hsk1']}
            </button>
          ))}
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
            <div>
              <div className="font-mono text-[13px] text-muted uppercase">/ {levelLabel} {t.learn.vocab}</div>
              <p className="text-muted mt-2">{t.learn.pdfDescription}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={pdfUrl} download={`HSK${activeLevel}_vocab_RU.pdf`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white transition-colors font-mono text-[12px] uppercase">
                <Download size={15} /> {t.learn.download}
              </a>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-white transition-colors font-mono text-[12px] uppercase">
                <ExternalLink size={15} /> {t.learn.open}
              </a>
            </div>
          </div>
          <iframe
            src={pdfUrl}
            title={`${levelLabel} PDF`}
            className="w-full h-[70vh] min-h-[560px] border border-line rounded-xl bg-white"
          />
        </FadeIn>
      </div>
    </div>
  );
}

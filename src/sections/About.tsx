import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { History, Award, BookOpen } from 'lucide-react';
import { aboutConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  History, Award, BookOpen,
};

export function About() {
  const { t } = useTranslation();

  // Null check: if config is empty, render nothing
  if (!aboutConfig.mainTitle) return null;

  const [activeTab, setActiveTab] = useState(aboutConfig.tabs[0]?.id || '');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeTabData = aboutConfig.tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />

      <div className="container-custom relative max-w-4xl mx-auto">
        {/* Section Header — Centered */}
        <div className="fade-up text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">{t('about.script')}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('about.subtitle')}
          </span>
          <h2 className="font-serif text-h1 text-[#2C2417] whitespace-pre-line">
            {t('about.title')}
          </h2>
        </div>

        {/* Introduction */}
        {aboutConfig.introText && (
          <p className="fade-up text-[#2C2417]/75 leading-relaxed text-center text-lg mb-12 max-w-3xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            {t('about.intro')}
          </p>
        )}

        {/* Tabs */}
        {aboutConfig.tabs.length > 0 && (
          <div className="fade-up flex flex-wrap justify-center gap-3 mb-10" style={{ transitionDelay: '0.15s' }}>
            {aboutConfig.tabs.map((tab) => {
              const IconComponent = iconMap[tab.icon];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                  className={`flex items-center gap-2 px-5 py-3 rounded-sm text-sm transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gold-500 text-white'
                    : 'bg-[#EDE6DA] text-[#6B5D4D] hover:bg-[#D4C9B8] border border-[#D4C9B8]'
                    }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {t(`about.tabs.${tab.id}.name`)}
                </button>
              );
            })}
          </div>
        )}

        {/* Tab Content */}
        <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
          {activeTabData && (
            <div className="p-8 bg-[#EDE6DA] rounded-lg border border-[#D4C9B8] transition-all duration-300">
              <h3 className="font-serif text-h4 text-[#2C2417] mb-4">
                {t(`about.tabs.${activeTab}.title`)}
              </h3>
              <p className="text-[#2C2417]/75 leading-relaxed mb-6 text-base">
                {t(`about.tabs.${activeTab}.desc`)}
              </p>
              <div className="flex items-center gap-3 text-gold-500">
                <div className="w-10 h-px bg-gold-500" />
                <span className="text-sm font-medium italic">
                  {t(`about.tabs.${activeTab}.highlight`)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Horizontal Timeline */}
        {aboutConfig.timeline.length > 0 && (
          <div className="fade-up mt-12" style={{ transitionDelay: '0.25s' }}>
            <div className="relative">
              <div className="absolute top-3 left-0 right-0 h-px bg-gold-500/30" />
              <div className="flex justify-between overflow-x-auto gap-2">
                {aboutConfig.timeline.map((event) => (
                  <div key={event.year} className="relative flex flex-col items-center flex-shrink-0 min-w-[70px]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FDFBF7] border-2 border-gold-500 z-10" />
                    <span className="font-serif text-sm text-gold-500 mt-2">{event.year}</span>
                    <span className="text-[11px] text-[#6B5D4D] mt-0.5 text-center whitespace-nowrap">{t(`about.timeline.${event.year}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quote */}
        {aboutConfig.quote.text && (
          <div className="fade-up mt-12 p-8 bg-[#EDE6DA] rounded-lg border border-[#D4C9B8] text-center" style={{ transitionDelay: '0.3s' }}>
            {aboutConfig.quote.prefix && (
              <p className="font-script text-2xl text-gold-400 mb-2">
                {aboutConfig.quote.prefix}
              </p>
            )}
            <p className="text-[#2C2417]/80 text-base italic leading-relaxed max-w-2xl mx-auto">
              "{t('about.quote')}"
            </p>
            {aboutConfig.quote.attribution && (
              <p className="text-gold-500 text-sm mt-3 font-medium">
                — {aboutConfig.quote.attribution}
              </p>
            )}
          </div>
        )}

        {/* CTA Row with Years Badge */}
        <div className="fade-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transitionDelay: '0.35s' }}>
          {aboutConfig.yearBadge && (
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#EDE6DA] border-2 border-gold-500/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl text-gold-500">{aboutConfig.yearBadge}</div>
                  <div className="text-[9px] text-[#6B5D4D] uppercase tracking-wider">{aboutConfig.yearBadgeLabel}</div>
                </div>
              </div>
              {aboutConfig.openingHours && (
                <div>
                  <p className="text-[#6B5D4D] text-xs uppercase tracking-wider">{t('about.hoursLabel')}</p>
                  <p className="text-[#2C2417] font-medium">{t('about.hours')}</p>
                </div>
              )}
            </div>
          )}
          {aboutConfig.ctaButtonText && (
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary rounded-sm px-8 py-3"
              aria-label={t('about.cta')}
            >
              {t('about.cta')}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Wine, Sparkles, Thermometer, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { experienceShowcaseConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wine, Sparkles, Thermometer, Clock,
};

export function ExperienceShowcase() {
  const { t } = useTranslation();

  // Null check: if config is empty, render nothing
  if (!experienceShowcaseConfig.mainTitle || experienceShowcaseConfig.experiences.length === 0) return null;

  const [activeExperience, setActiveExperience] = useState(0);
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

  const experiences = experienceShowcaseConfig.experiences;
  const features = experienceShowcaseConfig.features;
  const quote = experienceShowcaseConfig.quote;
  const experience = experiences[activeExperience];

  const nextExperience = () => setActiveExperience((prev) => (prev + 1) % experiences.length);
  const prevExperience = () => setActiveExperience((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="pb-[4rem] md:pb-[7.5rem] pt-12 md:pt-20 relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d2a855 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-gold-400 block mb-2">{t('experiences.script')}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('experiences.subtitle')}
          </span>
          <h2 className="font-serif text-h1 text-[#2C2417] whitespace-pre-line">{t('experiences.title')}</h2>
        </div>

        {/* Experience Tabs */}
        <div className="fade-up flex justify-center gap-2 mb-16" style={{ transitionDelay: '0.1s' }}>
          {experiences.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperience(i)}
              className={`px-6 py-3 rounded-sm text-sm transition-all duration-300 ${i === activeExperience
                ? 'bg-gold-500 text-white'
                : 'bg-[#EDE6DA] text-[#6B5D4D] hover:bg-[#D4C9B8] border border-[#D4C9B8]'
                }`}
            >
              {t(`experiences.items.${exp.id === 'food-wine' ? 'foodWine' : exp.id}.name`)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Experience Info */}
          <div className="slide-in-left lg:col-span-2 order-2 lg:order-1">
            {/* Duration + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-serif text-5xl lg:text-6xl text-gold-500/30 leading-none">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.duration`)}</span>
                <div>
                  <h2 className="font-serif text-h3 text-[#2C2417] leading-tight">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.name`)}</h2>
                  <span className="font-script text-xl text-gold-400">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.subtitle`)}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-gold-500 mt-4" />
            </div>

            {/* Description */}
            <p className="text-[#2C2417]/85 leading-relaxed mb-4">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.desc`)}</p>
            <p className="text-[#6B5D4D] leading-relaxed text-sm mb-8">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.notes`)}</p>

            {/* Experience Details */}
            <div className="flex gap-6 mb-8">
              <div>
                <div className="font-serif text-xl text-gold-500">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.alcohol`)}</div>
                <div className="text-[11px] text-[#6B5D4D] uppercase tracking-wider mt-1">Highlights</div>
              </div>
              <div className="w-px bg-[#D4C9B8]" />
              <div>
                <div className="font-serif text-xl text-gold-500">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.temp`)}</div>
                <div className="text-[11px] text-[#6B5D4D] uppercase tracking-wider mt-1">Experiences</div>
              </div>
              <div className="w-px bg-[#D4C9B8]" />
              <div>
                <div className="font-serif text-xl text-gold-500">{t(`experiences.items.${experience.id === 'food-wine' ? 'foodWine' : experience.id}.aging`)}</div>
                <div className="text-[11px] text-[#6B5D4D] uppercase tracking-wider mt-1">Price</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary rounded-sm flex items-center gap-2 group"
              aria-label="Book this experience"
            >
              {t('nav.bookNow')}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center: Experience Image */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
            <div className="relative" style={{ width: '320px', height: '480px' }}>
              {/* Glow */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                <div className={`w-56 h-56 ${experience.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Images */}
              {experiences.map((exp, i) => (
                <img
                  key={exp.id}
                  src={exp.image}
                  alt={`${exp.name} - ${exp.subtitle} ${exp.year}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={exp.filter ? { filter: exp.filter } : undefined}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg z-10 drop-shadow-2xl transition-all duration-700 ${i === activeExperience
                    ? 'opacity-100 scale-100 translate-y-0'
                    : i < activeExperience
                      ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                      : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                    }`}
                />
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevExperience}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Previous experience"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-[#6B5D4D] font-serif tabular-nums whitespace-nowrap">
                  {activeExperience + 1} / {experiences.length}
                </span>
                <button
                  onClick={nextExperience}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                  aria-label="Next experience"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features + Quote */}
          <div className="slide-in-right lg:col-span-2 order-3">
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Wine;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#EDE6DA] border border-[#D4C9B8] flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#2C2417] mb-1">{t(`experiences.features.${feature.icon === 'Wine' ? 'expertise' : feature.icon === 'Thermometer' ? 'personal' : feature.icon === 'Clock' ? 'flexible' : 'authentic'}.title`)}</h3>
                      <p className="text-sm text-[#6B5D4D] leading-relaxed">{t(`experiences.features.${feature.icon === 'Wine' ? 'expertise' : feature.icon === 'Thermometer' ? 'personal' : feature.icon === 'Clock' ? 'flexible' : 'authentic'}.desc`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            {quote.text && (
              <div className="mt-10 p-6 bg-[#EDE6DA] rounded-lg border-l-2 border-gold-500/50">
                {quote.prefix && <p className="font-script text-2xl text-gold-400 mb-2">{quote.prefix}</p>}
                <p className="text-[#6B5D4D] text-sm italic leading-relaxed">
                  "{t('experiences.quote')}"
                </p>
                {quote.attribution && <p className="text-gold-500 text-xs mt-3">— {quote.attribution}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

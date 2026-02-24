import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight } from 'lucide-react';
import { dayToursConfig } from '../config';

// Map tour IDs to translation keys
const tourKeys: Record<string, string> = {
  'paestum-temples': 'paestum',
  'amalfi-drive': 'amalfi',
  'ebike-vineyard': 'ebike',
  'coastal-kayak': 'coastal',
};

export function DayTours() {
  const { t } = useTranslation();

  // Null check: if config is empty, render nothing
  if (!dayToursConfig.mainTitle || dayToursConfig.tours.length === 0) return null;

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tours = dayToursConfig.tours;

  return (
    <section
      id="tours"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up text-center mb-12">
          <span className="font-script text-3xl text-gold-400 block mb-2">{t('dayTours.script')}</span>
          <span className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {t('dayTours.subtitle')}
          </span>
          <h2 className="font-serif text-h1 text-white whitespace-pre-line">
            {t('dayTours.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-6">
            {t('dayTours.intro')}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="scale-in group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-gold-500/30 transition-all duration-500"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image}
                  alt={t(`dayTours.items.${tourKeys[tour.id] || tour.id}.name`)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-xs text-white/90">{t(`dayTours.items.${tourKeys[tour.id] || tour.id}.duration`)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {t(`dayTours.items.${tourKeys[tour.id] || tour.id}.name`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {t(`dayTours.items.${tourKeys[tour.id] || tour.id}.desc`)}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-gold-500">{t(`dayTours.items.${tourKeys[tour.id] || tour.id}.price`)}</span>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 text-sm text-white/70 hover:text-gold-400 transition-colors group/btn"
                  >
                    {t('nav.bookNow')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

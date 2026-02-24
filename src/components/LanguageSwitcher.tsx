import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'it', label: 'IT', name: 'Italiano' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'es', label: 'ES', name: 'Español' },
];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languages.find(lang => lang.code === i18n.resolvedLanguage) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-sm text-white/80 hover:text-gold-400 transition-colors duration-300 py-2"
                aria-label="Change language"
            >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{currentLang.label}</span>
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`absolute right-0 top-full mt-2 w-36 rounded-md bg-wine-800/95 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden transition-all duration-300 transform origin-top-right ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    }`}
            >
                <div className="py-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 flex items-center justify-between ${i18n.resolvedLanguage === lang.code
                                    ? 'bg-gold-500/20 text-gold-400 font-medium'
                                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {lang.name}
                            {i18n.resolvedLanguage === lang.code && (
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

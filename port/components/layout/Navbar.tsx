
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../../data/constants';
import { Language } from '../../types/index';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, language, setLanguage, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[language];
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Use a slightly larger threshold and check scroll position
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavClick) {
      onNavClick(e, href);
    } else {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const languages: { id: Language; label: string }[] = [
    { id: 'en', label: 'EN' },
    { id: 'zh', label: '简' },
    { id: 'zhTW', label: '繁' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-sage-50/90 dark:bg-black/90 backdrop-blur-md py-4 border-b border-sage-200/50 dark:border-white/5' 
        : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between relative">
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="text-xl font-black tracking-tighter text-sage-900 dark:text-sage-50"
          >
            {PERSONAL_INFO.name}<span className="text-sage-400">.</span>
          </a>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[9px] font-bold text-sage-400 dark:text-sage-500 hover:text-sage-900 dark:hover:text-sage-50 transition-colors uppercase tracking-[0.3em]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sage-100/50 dark:bg-sage-900/50 text-sage-400 dark:text-sage-500 text-[9px] font-black hover:bg-sage-200 dark:hover:bg-sage-800 transition-all uppercase"
            >
              {languages.find(l => l.id === language)?.label}
            </button>
            
            <div className={`absolute top-full mt-3 right-0 bg-white dark:bg-sage-900 border border-sage-100 dark:border-sage-800 rounded-2xl p-2 shadow-xl transition-all duration-300 origin-top-right flex flex-col gap-1 ${
              isLangMenuOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-90 pointer-events-none'
            }`}>
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => {
                    setLanguage(lang.id);
                    setIsLangMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-[10px] font-black uppercase rounded-xl transition-colors ${
                    language === lang.id 
                      ? 'bg-sage-400 text-white' 
                      : 'hover:bg-sage-100 dark:hover:bg-sage-800 text-sage-400'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-sage-100/50 dark:bg-sage-900/50 text-sage-400 dark:text-sage-500 hover:bg-sage-200 dark:hover:bg-sage-800 transition-all"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

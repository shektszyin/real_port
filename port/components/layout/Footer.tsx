
import React from 'react';
import { PERSONAL_INFO, UI_TRANSLATIONS } from '../../data/constants';
import { Language } from '../../types/index';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  
  return (
    <footer className="bg-sage-50 dark:bg-black border-t border-sage-200 dark:border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-black tracking-tighter text-sage-900 dark:text-sage-50 mb-4">
            Tommy<span className="text-sage-400">.</span>
          </a>
          <p className="text-sage-400 dark:text-sage-500 text-sm font-medium">
            © {new Date().getFullYear()} {t.footerText}
          </p>
        </div>
        
        <div className="flex gap-10">
          <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-sage-600 transition-colors uppercase tracking-widest text-xs font-black">
            LinkedIn
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-sage-600 transition-colors uppercase tracking-widest text-xs font-black">
            GitHub
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sage-400 hover:text-sage-600 transition-colors uppercase tracking-widest text-xs font-black">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

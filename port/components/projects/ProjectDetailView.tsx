
import React, { useEffect, useRef } from 'react';
import { Project, Language } from '../../types/index';
import { UI_TRANSLATIONS } from '../../data/constants';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  language: Language;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack, language }) => {
  const t = UI_TRANSLATIONS[language];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.6; // Scroll 60% of view width
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="flex-grow pt-24 pb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 bg-sage-50 dark:bg-black text-sage-900 dark:text-sage-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
         {/* 0. RETURN BUTTON */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-4 text-sage-400 hover:text-sage-900 dark:hover:text-white transition-all"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-sage-200 dark:border-white/10 flex items-center justify-center group-hover:bg-sage-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              {language === 'en' ? 'Return to Work' : (language === 'zh' ? '返回项目' : '返回項目')}
            </span>
          </button>
        </div>
        {/* 1. BIG TITLE SECTION */}
        <div className="flex flex-col items-center justify-center min-h-[30vh] mb-8">
           <h1 className="text-[12vw] md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-center text-sage-900 dark:text-white">
             {project.title[language]}
           </h1>
        </div>

        {/* 2. OVERVIEW & BUTTONS */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-t border-sage-200 dark:border-white/10 pt-10 mb-12">
           <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-semibold text-sage-900 dark:text-white">Project Overview</h2>
              <p className="text-xl md:text-2xl text-sage-600 dark:text-sage-400 leading-relaxed font-medium">
                {project.overview[language]}
              </p>
           </div>
           
           <div className="flex items-center gap-4 shrink-0">
             {project.liveLink && (
               <a 
                 href={project.liveLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 rounded-full bg-sage-900 dark:bg-white text-sage-50 dark:text-black font-bold text-sm transition-transform hover:scale-105"
               >
                 {t.liveDemo}
               </a>
             )}
             <button 
               onClick={onBack}
               className="px-8 py-3 rounded-full border border-sage-300 dark:border-white/20 text-sage-900 dark:text-white font-bold text-sm hover:bg-sage-100 dark:hover:bg-white/10 transition-colors"
             >
               See all work
             </button>
           </div>
        </div>

        {/* 3. METADATA ROW (ICONS) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-10 border-y border-sage-200 dark:border-white/10 mb-12">
           {/* Industry */}
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center text-sage-900 dark:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-lg md:text-xl font-bold text-sage-900 dark:text-white">{project.industry[language]}</span>
                 <span className="text-xs uppercase tracking-widest text-sage-500 dark:text-sage-400">{t.industry}</span>
              </div>
           </div>

           {/* Year */}
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center text-sage-900 dark:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                   <circle cx="12" cy="12" r="10" />
                   <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-lg md:text-xl font-bold text-sage-900 dark:text-white">{project.year}</span>
                 <span className="text-xs uppercase tracking-widest text-sage-500 dark:text-sage-400">Created</span>
              </div>
           </div>

           {/* Scope */}
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center text-sage-900 dark:text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                   <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                   <polyline points="14 2 14 8 20 8"></polyline>
                   <line x1="16" y1="13" x2="8" y2="13"></line>
                   <line x1="16" y1="17" x2="8" y2="17"></line>
                   <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-lg md:text-xl font-bold text-sage-900 dark:text-white">{project.scope[language]}</span>
                 <span className="text-xs uppercase tracking-widest text-sage-500 dark:text-sage-400">Scope</span>
              </div>
           </div>

           {/* Platform/Stack */}
           <div className="flex flex-col items-center text-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center text-sage-900 dark:text-white">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                   <line x1="8" y1="21" x2="16" y2="21"></line>
                   <line x1="12" y1="17" x2="12" y2="21"></line>
                 </svg>
              </div>
              <div className="flex flex-col gap-1">
                 <span className="text-lg md:text-xl font-bold text-sage-900 dark:text-white">{project.techStack[0]}</span>
                 <span className="text-xs uppercase tracking-widest text-sage-500 dark:text-sage-400">Platform</span>
              </div>
           </div>
        </div>

        {/* 4. PHOTO SHOWCASE CAROUSEL (Updated) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="w-full mt-12 relative">
             <div className="flex items-end justify-between mb-8">
               <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-sage-400 dark:text-sage-500">
                 Project Preview
               </h3>
               
               {/* Navigation Buttons */}
               <div className="flex gap-4">
                 <button 
                   onClick={() => scroll('left')}
                   className="w-12 h-12 rounded-full border border-sage-200 dark:border-white/20 flex items-center justify-center hover:bg-sage-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                   aria-label="Scroll left"
                 >
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                   </svg>
                 </button>
                 <button 
                   onClick={() => scroll('right')}
                   className="w-12 h-12 rounded-full border border-sage-200 dark:border-white/20 flex items-center justify-center hover:bg-sage-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                   aria-label="Scroll right"
                 >
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </button>
               </div>
             </div>

             {/* Scrollable Container */}
             <div 
               ref={scrollContainerRef}
               className="flex overflow-x-auto gap-6 md:gap-10 pb-10 snap-x snap-mandatory no-scrollbar"
             >
               {project.screenshots.map((shot, index) => (
                 <div 
  key={index}
  className="min-w-[70%] md:min-w-[40%] h-96 md:h-[28rem] 
             rounded-3xl overflow-hidden shadow-xl snap-center shrink-0 
             border border-sage-100 dark:border-white/10 relative group"
>
  <img
    src={shot}
    alt={`Screenshot ${index + 1}`}
    className="w-full h-full object-cover"
  />
</div>

               ))}
             </div>
          </div>
        )}

      </div>
    </main>
  );
};

export default ProjectDetailView;

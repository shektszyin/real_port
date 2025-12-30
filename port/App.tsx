
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProjectCard from './components/projects/ProjectCard';
import ProjectDetailView from './components/projects/ProjectDetailView';
import { Project, Language } from './types/index';
import { PERSONAL_INFO, PROJECTS, UI_TRANSLATIONS } from './data/constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Language) || 'en';
    }
    return 'en';
  });
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode); 
  const t = UI_TRANSLATIONS[language];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'auto' });
      }
    }, 10);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    if (selectedProject) {
      setSelectedProject(null);
    }
    
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-sage-50 dark:bg-black text-sage-900 dark:text-sage-50 transition-colors duration-500 overflow-x-hidden selection:bg-sage-400 selection:text-white flex flex-col font-sans">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        language={language} 
        setLanguage={setLanguage}
        onNavClick={scrollToSection}
      />

      {selectedProject ? (
        <ProjectDetailView 
          project={selectedProject} 
          onBack={handleCloseProject} 
          language={language} 
        />
      ) : (
        <div className="flex flex-col">
          {/* Hero Section */}
          <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center pt-20">
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
               <div className="absolute -top-[20%] left-[10%] w-[70vw] h-[70vw] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-[160px] animate-pulse-slow"></div>
               <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-orange-600/15 dark:bg-orange-600/5 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto space-y-10 relative z-10">
              <div className="inline-flex items-center px-6 py-2 rounded-full border border-sage-200/40 dark:border-sage-800/40 bg-white/30 dark:bg-sage-900/10 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-sage-500 dark:text-sage-300">
                  {PERSONAL_INFO.name} • {PERSONAL_INFO.role[language]}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-[7.5rem] font-black text-sage-900 dark:text-white tracking-[-0.04em] leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 uppercase">
                UX-FOCUSED<span className="text-sage-400">.</span><br />
                <span className="font-serif italic font-normal text-sage-400/70 tracking-tight lowercase">developer</span>-built
              </h1>

              <p className="max-w-xl mx-auto text-lg md:text-xl text-sage-600 dark:text-sage-400/60 font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 leading-relaxed">
                {PERSONAL_INFO.intro[language]}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 pt-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                <button 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="px-14 py-5 bg-sage-900 dark:bg-sage-50 text-sage-50 dark:text-sage-950 font-black rounded-full hover:scale-105 transition-all text-[11px] uppercase tracking-widest shadow-xl shadow-amber-900/10 dark:shadow-none"
                >
                  {t.talk}
                </button>
                <button 
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="px-14 py-5 bg-white/40 dark:bg-sage-900/20 backdrop-blur-2xl text-sage-900 dark:text-sage-50 border border-white/20 dark:border-white/5 font-black rounded-full hover:bg-white/60 dark:hover:bg-sage-800/40 transition-all text-[11px] uppercase tracking-widest"
                >
                  {t.explore}
                </button>
              </div>
            </div>
          </section>

          {/* About Section - Redesigned to match the second screenshot */}
          <section id="about" className="py-40 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-7xl font-black text-sage-900 dark:text-white tracking-tighter leading-[1.05]">
                    Design with purpose.<br />
                    Results with impact.
                  </h2>
                </div>
                
                <p className="text-lg md:text-xl text-sage-600 dark:text-sage-400/70 leading-relaxed font-medium max-w-lg">
                  {PERSONAL_INFO.name.split(' ')[0]} crafts focused digital experiences that captivate audiences and drive growth. Combining bold design with smart strategy, we elevate your brand to win and convert—seamlessly.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button 
                    onClick={(e) => scrollToSection(e, '#about')}
                    className="px-10 py-4 bg-sage-200 dark:bg-sage-100/90 text-sage-900 dark:text-black font-bold rounded-xl transition-all hover:scale-105 text-[13px]"
                  >
                    About Us
                  </button>
                  <button 
                    onClick={(e) => scrollToSection(e, '#projects')}
                    className="px-10 py-4 bg-sage-900/10 dark:bg-sage-800/60 border border-sage-200/50 dark:border-white/10 text-sage-900 dark:text-white font-bold rounded-xl transition-all hover:bg-sage-200 dark:hover:bg-sage-800 text-[13px]"
                  >
                    See my work
                  </button>
                </div>
              </div>

              {/* Right Collage - Inspired by the screenshot */}
              <div className="relative h-[600px] w-full hidden md:block">
                <div className="absolute inset-0 pointer-events-none -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sage-400/5 dark:bg-sage-900/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="absolute top-[5%] right-[0%] w-[60%] aspect-video rounded-2xl overflow-hidden shadow-2xl rotate-2 border border-white/10 z-20 transition-transform hover:rotate-0 duration-500">
                   <img src="/skyline/1.png" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute top-[25%] left-[5%] w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl -rotate-3 border border-white/10 z-30 transition-transform hover:rotate-0 duration-500">
                   <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-[10%] right-[10%] w-[50%] aspect-video rounded-2xl overflow-hidden shadow-2xl rotate-6 border border-white/10 z-10 transition-transform hover:rotate-0 duration-500">
                   <img src="/aurora/1.png" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section - Minimal and Tight */}
          <section id="projects" className="relative z-10 pt-20 pb-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[40vh] bg-sage-400/5 dark:bg-sage-900/10 blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col w-full">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} onViewDetails={handleOpenProject} language={language} />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-40 px-6 flex flex-col items-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-sage-400/5 dark:bg-sage-900/10 rounded-full blur-[180px] pointer-events-none"></div>
            
            <div className="w-full max-w-4xl relative z-10 text-center">
              <span className="text-sage-400 dark:text-sage-500 font-black tracking-[0.8em] uppercase text-[10px] mb-8 block">{t.contact}</span>
              
              <h2 className="text-4xl md:text-[4.5rem] font-black text-sage-900 dark:text-white tracking-tighter leading-tight mb-8">
                Let's discuss{' '}
                <span className="italic font-serif font-normal text-sage-400/60">together.</span>
              </h2>
              
              <p className="text-sage-500 dark:text-sage-400/60 text-lg md:text-xl font-medium mb-16">
                {t.ctaDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-14 py-4 bg-sage-900 dark:bg-white text-sage-50 dark:text-black font-black rounded-full hover:scale-105 transition-all text-xs uppercase tracking-widest min-w-[180px]"
                >
                  {t.emailMe}
                </a>
                <a 
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  className="px-14 py-4 bg-transparent border border-sage-200 dark:border-sage-800 text-sage-900 dark:text-white font-black rounded-full hover:bg-sage-100 dark:hover:bg-sage-900 transition-all text-xs uppercase tracking-widest min-w-[180px]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      <Footer language={language} />
    </div>
  );
};

export default App;

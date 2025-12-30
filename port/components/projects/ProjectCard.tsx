
import React from 'react';
import { Project, Language } from '../../types/index';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  language: Language;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, language }) => {
  const title = project.title[language];

  return (
    <div 
      className="group relative w-full cursor-pointer overflow-hidden transition-all duration-500"
      onClick={() => onViewDetails(project)}
    >
      {/* Default State - Compact Padding */}
      <div className="py-6 md:py-10 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
        <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-sage-900 dark:text-sage-50 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            {title}
            </h3>
            <p className="mt-2 text-xs md:text-sm text-sage-500 dark:text-sage-400 font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.shortSummary[language]}
            </p>
        </div>
      </div>

      {/* Hover State: Flowing Marquee with Soft Background */}
      <div className="absolute inset-0 flex items-center bg-sage-100/30 dark:bg-sage-900/40 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-sage-900 dark:text-sage-50">
                {title}
              </span>
              <div className="w-20 md:w-28 h-8 md:h-12 rounded-full overflow-hidden shrink-0 border border-white/20">
                <img 
                  src={project.imageUrl} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

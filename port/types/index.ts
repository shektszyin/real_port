
export interface MultilingualString {
  en: string;
  zh: string;
  zhTW: string;
}

export interface Project {
  id: string;
  title: MultilingualString;
  shortSummary: MultilingualString; // For the card view
  overview: MultilingualString; // For the detail view top section
  industry: MultilingualString;
  year: string;
  scope: MultilingualString;
  techStack: string[];
  
  problemStatement: MultilingualString;
  solution: MultilingualString;
  hidden?:boolean
  myRole: {
    en: string[];
    zh: string[];
    zhTW: string[];
  };
  
  highlights: {
    en: string[];
    zh: string[];
    zhTW: string[];
  };
  
  futureImprovements: {
    en: string[];
    zh: string[];
    zhTW: string[];
  };
  
  imageUrl: string;
  screenshots?: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface Skill {
  category: MultilingualString;
  items: string[];
}

export type Language = 'en' | 'zh' | 'zhTW';

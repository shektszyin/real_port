
export interface MultilingualString {
  en: string;
  zh: string;
  zhTW: string;
}

export interface Project {
  id: string;
  title: MultilingualString;

  oneLineDescription: MultilingualString;
  problemStatement: MultilingualString;
  solution: MultilingualString;
  uxDecisions?: MultilingualString;
  features: {
    en: string[];
    zh: string[];
    zhTW: string[];
  };
  techStack: string[];
  imageUrl: string;
  screenshots?: string[];
  liveLink?: string;
  githubLink?: string;
   hidden?: boolean;
}

export interface Skill {
  category: MultilingualString;
  items: string[];
}

export type Language = 'en' | 'zh' | 'zhTW';
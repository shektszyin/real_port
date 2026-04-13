
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Tommy",
  role: {
    en: "Web Designer & Developer",
    zh: "网页设计师 & 开发工程师",
    zhTW: "網頁設計師 & 開發工程師"
  },
  intro: {
    en: "I build websites that function as clear tools for communication.",
    zh: "我构建作为清晰沟通工具的网站。",
    zhTW: "我構建作為清晰溝通工具的網站。"
  },
  aboutShort: {
    en: "I build websites that help people understand who you are and what you sell. My focus is on making your message clear, precise, and visually elegant.",
    zh: "我构建网站来帮助人们了解您是谁以及您在销售什么。我的重点是让您的信息清晰、准确且视觉雅致。",
    zhTW: "我構建網站來幫助人們了解您是誰以及您在銷售什麼。我的重點是讓您的信息清晰、準確且視覺雅致。"
  },
  email: "hello@tommyshek.design",
  linkedIn: "https://linkedin.com/in/tommyshek",
  github: "https://github.com/tommyshek",
};

export const UI_TRANSLATIONS = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    available: "Available",
    explore: "View Projects",
    talk: "Contact",
    selectedWorks: "Showcase",
    selectedWorksDesc: "A collection of recent web design and development projects.",
    portfolioYear: "2024",
    aboutTitle: "About",
    aboutHeadline: "Design as clear communication.",
    whoIAm: "Profile",
    ready: "Contact",
    extraordinary: "projects",
    ctaDesc: "I am available for new projects. Let's discuss your requirements.",
    emailMe: "Email",
    viewCaseStudy: "View Project",
    challenge: "Objective",
    solution: "Implementation",
    coreFeatures: "Features",
    techStack: "Tech Stack",
    liveDemo: "Live Demo",
    footerText: "Web design and development.",
    prototypeTitle: "Mobile Experience",
    uxFocus: "UX Decisions"
  },
  zh: {
    home: "首页",
    projects: "项目",
    about: "关于",
    contact: "联系",
    available: "开放合作",
    explore: "查看作品",
    talk: "联系我",
    selectedWorks: "作品展示",
    selectedWorksDesc: "近期网页设计与开发项目集。",
    portfolioYear: "2024",
    aboutTitle: "关于",
    aboutHeadline: "设计即清晰的沟通。",
    whoIAm: "简介",
    ready: "联系",
    extraordinary: "项目",
    ctaDesc: "目前开放新项目合作。欢迎讨论您的需求。",
    emailMe: "邮件联系",
    viewCaseStudy: "查看项目",
    challenge: "目标",
    solution: "实现",
    coreFeatures: "功能",
    techStack: "技术栈",
    liveDemo: "在线演示",
    footerText: "网页设计与开发。",
    prototypeTitle: "移动端体验",
    uxFocus: "UX 决策"
  },
  zhTW: {
    home: "首頁",
    projects: "項目",
    about: "關於",
    contact: "聯繫",
    available: "開放合作",
    explore: "查看作品",
    talk: "聯繫我",
    selectedWorks: "作品展示",
    selectedWorksDesc: "近期網頁設計與開發項目集。",
    portfolioYear: "2024",
    aboutTitle: "關於",
    aboutHeadline: "設計即清晰的溝通。",
    whoIAm: "簡介",
    ready: "聯繫",
    extraordinary: "項目",
    ctaDesc: "目前開放新項目合作。歡迎討論您的需求。",
    emailMe: "郵件聯繫",
    viewCaseStudy: "查看項目",
    challenge: "目標",
    solution: "實現",
    coreFeatures: "功能",
    techStack: "技術棧",
    liveDemo: "在線演示",
    footerText: "網頁設計與開發。",
    prototypeTitle: "移動端體驗",
    uxFocus: "UX 決策"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: { en: "Sportholic", zh: "Sportholic", zhTW: "Sportholic" },
    oneLineDescription: { 
      en: "A community-based sports platform that helps people organize, join, and manage local games easily.", 
      zh: "一个帮助人们轻松组织、加入和管理当地比赛的社区体育平台。",
      zhTW: "一個幫助人們輕鬆組織、加入和管理當地比賽的社區體育平台。"
    },
    problemStatement: {
      en: "Local sports enthusiasts struggle with scattered information. Organizing 'runs' (pickup games) requires a centralized hub that communicates status, availability, and squad details instantly.",
      zh: "当地体育爱好者在零散的信息中挣扎。组织“比赛”（即兴比赛）需要一个集中的中心，能够即时传达状态、可用性和队伍详情。",
      zhTW: "當地體育愛好者在零散的信息中掙扎。組織「比賽」（即興比賽）需要一個集中的中心，能夠即時傳達狀態、可用性和隊伍詳情。"
    },
    solution: {
      en: "The app features a 'Performance-First' UI using high-contrast neon accents. It provides real-time availability tracking, one-tap squad creation, and integrated map locations for the Toronto sports scene.",
      zh: "该应用程序采用“性能优先”的 UI，并使用高对比度的霓虹点缀。它提供实时可用性跟踪、一键式队伍创建以及多伦多体育场景的集成地图位置。",
      zhTW: "該應用程序採用「性能優先」的 UI，並使用高對比度的霓虹點綴。它提供實時可用性跟踪、一鍵式隊伍創建以及多倫多體育場景的集成地圖位置。"
    },
    uxDecisions: {
      en: "Designed for high intensity and outdoor readability. I chose #DFFF00 (Lime Green) as the primary action color to drive 'Join Now' conversions. The dark mode 'Night Forest' theme reduces glare during evening game organization.",
      zh: "专为高强度和户外易读性而设计。我选择 #DFFF00（柠檬绿）作为主要的动作颜色，以推动“立即加入”转化。深色模式“森林之夜”主题减少了在晚间组织比赛时的眩光。",
      zhTW: "專為高強度和戶外易讀性而設計。我選擇 #DFFF00（檸檬綠）作為主要的動作顏色，以推動「立即加入」轉化。深色模式「森林之夜」主題減少了在晚間組織比賽時的眩光。"
    },
    features: {
      en: [
        "Live local runs discovery",
        "Secure slot reservation system",
        "Squad management with avatar status",
        "Dynamic field notes & location maps"
      ],
      zh: [
        "实时本地比赛发现",
        "安全的空位预订系统",
        "带头像状态的队伍管理",
        "动态场地说明和位置地图"
      ],
      zhTW: [
        "實時本地比賽發現",
        "安全的空位預訂系統",
        "帶頭像狀態的隊伍管理",
        "動態場地說明和位置地圖"
      ]
    },
    techStack: ["React Native", "TypeScript", "Tailwind CSS", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "2",
    title: { en: "CulinaryCanvas", zh: "CulinaryCanvas", zhTW: "CulinaryCanvas" },
    oneLineDescription: { 
      en: "A search tool for dietary-specific recipes.", 
      zh: "一个针对特定饮食需求的食谱搜索工具。",
      zhTW: "一個針對特定飲食需求的食譜搜索工具。"
    },
    problemStatement: {
      en: "The goal was to remove visual noise and ads to help users find recipes efficiently.",
      zh: "目标是去除视觉噪音和广告，帮助用户高效查找食谱。",
      zhTW: "目標是去除視覺噪音和廣告，幫助用戶高效查找食譜。"
    },
    solution: {
      en: "A precise search engine with a focus on high-quality imagery and minimal layout.",
      zh: "一个精确的搜索引擎，专注于高质量图像和极简布局。",
      zhTW: "一個精確的搜索引擎，專注於高質量圖像和極簡佈局。"
    },
    features: {
      en: [
        "Dietary filters",
        "Cook mode",
        "Ingredient scaling"
      ],
      zh: [
        "饮食过滤",
        "烹饪模式",
        "配料缩放"
      ],
      zhTW: [
        "飲食過濾",
        "烹飪模式",
        "配料縮放"
      ]
    },
    techStack: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200",
    liveLink: "#",
    githubLink: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Design", zh: "设计", zhTW: "設計" },
    items: ["UI Design", "Figma", "Prototyping"]
  },
  {
    category: { en: "Development", zh: "开发", zhTW: "開發" },
    items: ["React", "TypeScript", "Tailwind CSS"]
  }
];

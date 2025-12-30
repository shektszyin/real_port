
import { Project, Skill } from '../types/index';

export const PERSONAL_INFO = {
  name: "Tommy Shek",
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
  email: "shek011713@gmail.com",
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
    challenge: "The Problem",
    solution: "The Solution",
    coreFeatures: "Features",
    techStack: "Platform / Stack",
    liveDemo: "Live Demo",
    footerText: "Web design and development.",
    prototypeTitle: "Mobile Experience",
    uxFocus: "UX Decisions",
    industry: "Industry",
    year: "Year Created",
    scope: "Pages / Scope",
    myRole: "My Role",
    highlights: "Key Highlights",
    future: "Future Improvements"
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
    challenge: "问题",
    solution: "解决方案",
    coreFeatures: "功能",
    techStack: "平台 / 技术栈",
    liveDemo: "在线演示",
    footerText: "网页设计与开发。",
    prototypeTitle: "移动端体验",
    uxFocus: "UX 决策",
    industry: "行业",
    year: "年份",
    scope: "范围",
    myRole: "我的角色",
    highlights: "设计亮点",
    future: "未来规划"
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
    challenge: "問題",
    solution: "解決方案",
    coreFeatures: "功能",
    techStack: "平台 / 技術棧",
    liveDemo: "在線演示",
    footerText: "網頁設計與開發。",
    prototypeTitle: "移動端體驗",
    uxFocus: "UX 決策",
    industry: "行業",
    year: "年份",
    scope: "範圍",
    myRole: "我的角色",
    highlights: "設計亮點",
    future: "未來規劃"
  }
};

export const PROJECTS: Project[] = [
  // {
  //   id: "1",
  //   title: { en: "Sportholic", zh: "Sportholic", zhTW: "Sportholic" },
  //   hidden: true,
  //   shortSummary: {
  //     en: "A platform for organizing community sports games.",
  //     zh: "一个用于组织社区体育比赛的平台。",
  //     zhTW: "一個用於組織社區體育比賽的平台。"
  //   },
  //   overview: {
  //     en: "A community platform designed to simplify how local sports games are organized and discovered. It addresses the fragmentation of pickup sports by providing a centralized hub for players to join games, manage teams, and track availability in real-time.",
  //     zh: "一个旨在简化本地体育比赛组织和发现方式的社区平台。它通过为玩家提供一个加入比赛、管理团队和实时跟踪可用性的集中中心，解决了即兴体育活动的碎片化问题。",
  //     zhTW: "一個旨在簡化本地體育比賽組織和發現方式的社區平台。它通過為玩家提供一個加入比賽、管理團隊和實時跟蹤可用性的集中中心，解決了即興體育活動的碎片化問題。"
  //   },
  //   industry: { en: "Sports & Recreation", zh: "体育与娱乐", zhTW: "體育與娛樂" },
  //   year: "2024",
  //   scope: { en: "Mobile App Concept", zh: "移动应用概念", zhTW: "移動應用概念" },
  //   techStack: ["React Native", "Firebase", "Figma"],
  //   problemStatement: {
  //     en: "Local sports enthusiasts often struggle to find reliable players and consistent games. Information is scattered across various messaging apps, leading to miscommunication and cancelled games.",
  //     zh: "当地体育爱好者经常难以找到可靠的队友和稳定的比赛。信息分散在各种即时通讯应用中，导致沟通不畅和比赛取消。",
  //     zhTW: "當地體育愛好者經常難以找到可靠的隊友和穩定的比賽。信息分散在各種即時通訊應用中，導致溝通不暢和比賽取消。"
  //   },
  //   solution: {
  //     en: "A dedicated mobile application that streamlines game discovery and team management. The interface provides clear status updates, location mapping, and one-tap joining to reduce friction.",
  //     zh: "一个简化比赛发现和团队管理的专用移动应用程序。界面提供清晰的状态更新、位置映射和一键加入，以减少摩擦。",
  //     zhTW: "一個簡化比賽發現和團隊管理的專用移動應用程序。界面提供清晰的狀態更新、位置映射和一鍵加入，以減少摩擦。"
  //   },
  //   myRole: {
  //     en: ["UX design", "User flow planning", "UI direction"],
  //     zh: ["UX 设计", "用户流程规划", "UI 指导"],
  //     zhTW: ["UX 設計", "用戶流程規劃", "UI 指導"]
  //   },
  //   highlights: {
  //     en: [
  //       "Prioritized high-contrast UI for outdoor visibility",
  //       "Simplified sign-up flow to maximize conversion",
  //       "Designed 'Squad' system for recurring teams"
  //     ],
  //     zh: [
  //       "优先考虑户外可视性的高对比度 UI",
  //       "简化注册流程以最大化转化率",
  //       "为常驻团队设计了“小队”系统"
  //     ],
  //     zhTW: [
  //       "優先考慮戶外可視性的高對比度 UI",
  //       "簡化註冊流程以最大化轉化率",
  //       "為常駐團隊設計了「小隊」系統"
  //     ]
  //   },
  //   futureImprovements: {
  //     en: [
  //       "Venue booking API integration",
  //       "Player reputation/rating system",
  //       "Tournament bracket generator"
  //     ],
  //     zh: [
  //       "场地预订 API 集成",
  //       "玩家声誉/评分系统",
  //       "锦标赛对阵表生成器"
  //     ],
  //     zhTW: [
  //       "場地預訂 API 集成",
  //       "玩家聲譽/評分系統",
  //       "錦標賽對陣表生成器"
  //     ]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
  //   screenshots: [
  //     "/image/sportholic/1.png",
  //     "/image/sportholic/2.png",
  //     "/image/sportholic/3.png",
  //     "/image/sportholic/4.png"
  //   ],
  //   liveLink: "#",
  //   githubLink: "#"
  // },
  {
    id: "2",
    title: { en: "Skyline Digital Solutions", zh: "Skyline Digital Solutions", zhTW: "Skyline Digital Solutions" },
    shortSummary: {
      en: "A modern digital agency website focused on clarity.",
      zh: "一个专注于清晰度的现代数字代理机构网站。",
      zhTW: "一個專注於清晰度的現代數字代理機構網站。"
    },
    overview: {
      en: "A modern digital agency website designed to communicate professionalism, clarity, and trust. The site serves as a portfolio and lead generation tool for businesses seeking high-end web and branding services.",
      zh: "一个旨在传达专业性、清晰度和信任感的现代数字代理机构网站。该网站作为寻求高端网络和品牌服务的企业的作品集和潜在客户生成工具。",
      zhTW: "一個旨在傳達專業性、清晰度和信任感的現代數字代理機構網站。該網站作為尋求高端網絡和品牌服務的企業的作品集和潛在客戶生成工具。"
    },
    industry: { en: "Design Agency", zh: "设计机构", zhTW: "設計機構" },
    year: "2024",
    scope: { en: "Agency Website", zh: "代理机构网站", zhTW: "代理機構網站" },
    techStack: ["React", "Tailwind", "Framer Motion"],
    problemStatement: {
      en: "Many agency websites are cluttered with jargon, making it difficult for potential clients to quickly understand the service value and brand identity.",
      zh: "许多代理机构的网站充斥着行话，使得潜在客户难以迅速理解服务价值和品牌形象。",
      zhTW: "許多代理機構的網站充斥著行話，使得潛在客戶難以迅速理解服務價值和品牌形象。"
    },
    solution: {
      en: "A minimalist, content-first approach that uses whitespace and strong typography to guide the user. The layout builds trust through transparency and clear value propositions.",
      zh: "一种极简主义、内容优先的方法，利用留白和强有力的排版来引导用户。该布局通过透明度和清晰的价值主张建立信任。",
      zhTW: "一種極簡主義、內容優先的方法，利用留白和強有力的排版來引導用戶。該佈局通過透明度和清晰的價值主張建立信任。"
    },
    myRole: {
      en: ["Web design", "Brand tone development", "Layout planning"],
      zh: ["网页设计", "品牌基调开发", "布局规划"],
      zhTW: ["網頁設計", "品牌基調開發", "佈局規劃"]
    },
    highlights: {
      en: [
        "Monochromatic palette to highlight portfolio work",
        "Guided consultation form for lead qualification",
        "Micro-interactions to enhance professional feel"
      ],
      zh: [
        "单色调色板以突出作品集",
        "用于潜在客户资格审查的引导式咨询表单",
        "增强专业感的微交互"
      ],
      zhTW: [
        "單色調色板以突出作品集",
        "用於潛在客戶資格審查的引導式咨詢表單",
        "增強專業感的微交互"
      ]
    },
    futureImprovements: {
      en: [
        "Client portal for project tracking",
        "CMS integration for case studies",
        "Dark mode toggle"
      ],
      zh: [
        "用于项目跟踪的客户门户",
        "用于案例研究的 CMS 集成",
        "深色模式切换"
      ],
      zhTW: [
        "用於項目跟蹤的客戶門戶",
        "用於案例研究的 CMS 集成",
        "深色模式切換"
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
       "/skyline/1.png",
       "/skyline/2.png",
       "/skyline/3.png",
       "/skyline/4.png"
       
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "3",
    title: { en: "Medical Clinic Website", zh: "医疗诊所网站", zhTW: "醫療診所網站" },
    shortSummary: {
      en: "A professional site designed for trust and accessibility.",
      zh: "一个为信任和无障碍设计的专业网站。",
      zhTW: "一個為信任和無障礙設計的專業網站。"
    },
    overview: {
      en: "A professional website for a medical clinic, focused on ethical design and patient trust. It provides clear access to services, doctor profiles, and health information in a calm, reassuring digital environment.",
      zh: "一个专注于伦理设计和患者信任的医疗诊所专业网站。它在一个平静、令人放心的数字环境中提供对服务、医生简介和健康信息的清晰访问。",
      zhTW: "一個專注於倫理設計和患者信任的醫療診所專業網站。它在一個平靜、令人放心的數字環境中提供對服務、醫生簡介和健康信息的清晰訪問。"
    },
    industry: { en: "Healthcare", zh: "医疗保健", zhTW: "醫療保健" },
    year: "2024",
    scope: { en: "Informational Website", zh: "信息网站", zhTW: "信息網站" },
    techStack: ["Next.js", "WCAG Guidelines", "CMS"],
    problemStatement: {
      en: "Patients often feel anxious when seeking medical help. Complex or aggressive web designs can increase stress and reduce trust in the healthcare provider.",
      zh: "患者在寻求医疗帮助时常感到焦虑。复杂或激进的网页设计会增加压力并降低对医疗提供者的信任。",
      zhTW: "患者在尋求醫療幫助時常感到焦慮。複雜或激進的網頁設計會增加壓力並降低對醫療提供者的信任。"
    },
    solution: {
      en: "A calm, accessible interface designed with soft colors and clear typography. The site prioritizes patient needs, offering easy navigation to appointments and doctor credentials.",
      zh: "一个设计有柔和色彩和清晰排版的平静、无障碍界面。该网站优先考虑患者需求，提供前往预约和医生资质的便捷导航。",
      zhTW: "一個設計有柔和色彩和清晰排版的平靜、無障礙界面。該網站優先考慮患者需求，提供前往預約和醫生資質的便捷導航。"
    },
    myRole: {
      en: ["UX layout", "Tone & UI direction", "Accessibility check"],
      zh: ["UX 布局", "基调 & UI 指导", "无障碍检查"],
      zhTW: ["UX 佈局", "基調 & UI 指導", "無障礙檢查"]
    },
    highlights: {
      en: [
        "Strict adherence to WCAG 2.1 standards",
        "Calm color psychology (Sage/Blue/White)",
        "Clear typography hierarchy for readability"
      ],
      zh: [
        "严格遵守 WCAG 2.1 标准",
        "平静的色彩心理学（鼠尾草绿/蓝/白）",
        "用于易读性的清晰排版层级"
      ],
      zhTW: [
        "嚴格遵守 WCAG 2.1 標準",
        "平靜的色彩心理學（鼠尾草綠/藍/白）",
        "用於易讀性的清晰排版層級"
      ]
    },
    futureImprovements: {
      en: [
        "Telehealth video integration",
        "Secure patient portal",
        "Multi-language support toggle"
      ],
      zh: [
        "远程医疗视频集成",
        "安全患者门户",
        "多语言支持切换"
      ],
      zhTW: [
        "遠程醫療視頻集成",
        "安全患者門戶",
        "多語言支持切換"
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
        "/medical/1.png",
        "/medical/2.png",
        "/medical/3.png",
        "/medical/4.png"
        
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: "4",
    title: { en: "Aurora & Co.", zh: "Aurora & Co.", zhTW: "Aurora & Co." },
    shortSummary: {
      en: "A premium lifestyle e-commerce experience.",
      zh: "高端生活方式电子商务体验。",
      zhTW: "高端生活方式電子商務體驗。"
    },
    overview: {
      en: "A premium lifestyle e-commerce experience dedicated to high-end home goods. The design focuses on storytelling and a frictionless shopping journey to reflect the brand's luxury positioning.",
      zh: "致力于高端家居用品的优质生活方式电子商务体验。设计侧重于叙事和无摩擦的购物旅程，以反映品牌的奢侈定位。",
      zhTW: "致力於高端家居用品的優質生活方式電子商務體驗。設計側重於敘事和無摩擦的購物旅程，以反映品牌的奢侈定位。"
    },
    industry: { en: "E-Commerce", zh: "电子商务", zhTW: "電子商務" },
    year: "2024",
    scope: { en: "Online Store", zh: "在线商店", zhTW: "在線商店" },
    techStack: ["Shopify", "Liquid", "SCSS"],
    problemStatement: {
      en: "Standard e-commerce templates often feel transactional and cluttered, failing to convey the exclusivity and narrative required for luxury products.",
      zh: "标准的电子商务模板通常感觉交易化且杂乱，无法传达奢侈产品所需的排他性和叙事性。",
      zhTW: "標準的電子商務模板通常感覺交易化且雜亂，無法傳達奢侈產品所需的排他性和敘事性。"
    },
    solution: {
      en: "An editorial-style layout that blends product storytelling with commerce. The interface uses generous negative space and high-quality imagery to create a browsing experience akin to a fashion magazine.",
      zh: "一种将产品叙事与商业融合的编辑风格布局。界面使用大量的负空间和高质量图像，创造出类似于时尚杂志的浏览体验。",
      zhTW: "一種將產品敘事與商業融合的編輯風格佈局。界面使用大量的負空間和高質量圖像，創造出類似於時尚雜誌的瀏覽體驗。"
    },
    myRole: {
      en: ["UX/UI design", "Brand tone design", "Flow optimization"],
      zh: ["UX/UI 设计", "品牌基调设计", "流程优化"],
      zhTW: ["UX/UI 設計", "品牌基調設計", "流程優化"]
    },
    highlights: {
      en: [
        "Editorial product layouts with rich media",
        "Distraction-free checkout process",
        "Elegant micro-animations for interactions"
      ],
      zh: [
        "具有丰富媒体的编辑产品布局",
        "无干扰的结账流程",
        "用于交互的优雅微动画"
      ],
      zhTW: [
        "具有豐富媒體的編輯產品佈局",
        "無干擾的結賬流程",
        "用於交互的優雅微動畫"
      ]
    },
    futureImprovements: {
      en: [
        "Augmented Reality (AR) product preview",
        "AI-driven product recommendations",
        "Loyalty membership dashboard"
      ],
      zh: [
        "增强现实 (AR) 产品预览",
        "AI 驱动的产品推荐",
        "忠诚度会员仪表板"
      ],
      zhTW: [
        "增強現實 (AR) 產品預覽",
        "AI 驅動的產品推薦",
        "忠誠度會員儀表板"
      ]
    },
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
        "aurora/1.png",
        "aurora/2.png",
        "aurora/3.png",
        "aurora/4.png",
        "aurora/5.png"

    ],
    liveLink: "#",
    githubLink: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    category: { en: "Design", zh: "设计", zhTW: "設計" },
    items: ["UI Design", "Figma", "Prototyping", "Wireframing"]
  },
  {
    category: { en: "Development", zh: "开发", zhTW: "開發" },
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  }
];

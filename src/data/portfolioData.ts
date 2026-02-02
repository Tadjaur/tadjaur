// ============================================
// CENTRALIZED PORTFOLIO DATA STORE
// ============================================
// All portfolio information is stored here.
// Modify this file to update your portfolio content.

export interface Skill {
  name: string;
  years: number;
  category:
    | "frontend"
    | "backend"
    | "mobile"
    | "devops"
    | "database"
    | "tools"
    | "other";
  icon?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  playStoreLink?: string;
  appStoreLink?: string;
  githubLink?: string;
  image?: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string[];
  achievements: string[];
  technologies: string[];
  projects: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

export interface Certification {
  name: string;
  year: number;
  certificateId?: string;
}

export interface PersonalInfo {
  name: string;
  surname: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  timezone: string;
  availability: string;
  totalYearsExperience: number;
  bio: string;
  shortBio: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

// ============================================
// PERSONAL INFORMATION
// ============================================
const personalInfo: PersonalInfo = {
  name: "Tadjening Aurelien",
  surname: "Tadjaur",
  firstName: "Aurelien",
  lastName: "Tadjening",
  title: "Fullstack Lead Developer",
  email: "tadjaur@tas-groups.com",
  linkedin: "https://linkedin.com/in/tadjaur",
  github: "https://github.com/tadjaur",
  location: "Cameroon",
  timezone: "4 hrs overlap (PST or EST)",
  availability: "Ready to start immediately",
  totalYearsExperience: 5,
  bio: `Fullstack Lead with 5 years of experience in software development. 
Proficient in React, Node.js, TypeScript, Golang, Docker, AWS, Firebase, and Git. 
Skilled in project management, team leadership, and problem-solving. 
Experienced in e-learning, logistics, and restaurant industries.`,
  shortBio:
    "Fullstack Lead Developer crafting scalable web and mobile applications",
};

// ============================================
// TECHNICAL SKILLS
// ============================================
const skills: Skill[] = [
  // Frontend
  { name: "TypeScript/JavaScript", years: 5, category: "frontend" },
  { name: "React", years: 5, category: "frontend" },
  { name: "Angular", years: 1, category: "frontend" },
  { name: "Next.js", years: 1, category: "frontend" },

  // Backend
  { name: "Node.js", years: 4, category: "backend" },
  { name: "Express.js", years: 4, category: "backend" },
  { name: "Nest.js", years: 2, category: "backend" },
  { name: "Golang", years: 2, category: "backend" },
  { name: "REST/RESTful APIs", years: 4, category: "backend" },
  { name: "Python", years: 1, category: "backend" },
  { name: "Flask", years: 1, category: "backend" },

  // Mobile
  { name: "Flutter", years: 2, category: "mobile" },
  { name: "Dart", years: 2, category: "mobile" },
  { name: "React Native", years: 1, category: "mobile" },

  // DevOps
  { name: "Docker", years: 1, category: "devops" },
  { name: "AWS", years: 1, category: "devops" },
  { name: "CI/CD", years: 1, category: "devops" },
  { name: "Cloud", years: 1, category: "devops" },

  // Database
  { name: "Firebase", years: 3, category: "database" },
  { name: "MongoDB", years: 1, category: "database" },

  // Tools
  { name: "Git", years: 5, category: "tools" },
  { name: "GitHub", years: 2, category: "tools" },
  { name: "Figma", years: 1, category: "tools" },
  { name: "Jira", years: 1, category: "tools" },
];

// ============================================
// WORK EXPERIENCE
// ============================================
const experiences: Experience[] = [
  {
    title: "Lead Architect",
    company: "Vimex SARL",
    companyUrl: "https://vimex-sarl.com",
    startDate: "May 2025",
    endDate: "January 2026",
    duration: "8 mos",
    description: [
      "Architected and engineered a comprehensive 3-app logistics ecosystem handling real-time delivery and stock management",
      "Developed an internal automation engine (WhatsApp Bot) in Golang using ConnectRPC to minimize payload size and enforce strictly typed contracts",
      "Implemented advanced backend patterns including Idempotency and Transactional Integrity to ensure data consistency in unstable network conditions",
      "Designed a multi-tenant PostgreSQL schema to manage independent e-commerce partners, delivery zones, and stock centers",
      "Engineered real-time driver tracking and earnings management systems using a hybrid of WebSockets and event-driven architecture"
    ],
    achievements: [
      "Launched a fully integrated logistics platform currently supporting multiple e-commerce partners",
      "Achieved sub-second latency for real-time tracking updates across the mobile ecosystem",
      "Established a reliable automation engine that handles hundreds of daily WhatsApp-based customer inquiries with a consistent error model"
    ],
    technologies: [
      "React",
      "React Native",
      "Golang",
      "Node.js",
      "Hono",
      "Firebase",
      "GCP",
      "Github",
      "Git",
    ],
    projects: [
      {
        name: "Vimex Marketing Website",
        description:
          "Public-facing website used to present the company, services, and product offerings",
        technologies: ["React", "TypeScript"],
        link: "https://vimex-sarl.com",
      },
      {
        name: "Vimex Admin Web",
        link: "https://admin-vimex.web.app",
        description:
          "Internal admin dashboard for managing users, orders, and operational data",
        technologies: [
          "Vite",
          "React",
          "Firebase",
          "Tamagui",
          "Redux Toolkit",
          "TanStack Query",
          "Up-fetch",
        ],
      },
      {
        name: "Vimex Client Mobile App",
        link: "https://vimex-coursier.web.app",
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.vimex.coursier",
        appStoreLink:
          "https://apps.apple.com/cm/app/vimex-coursier/id6757327099",
        description:
          "Mobile application allowing clients to place orders, track status, and manage their accounts",
        technologies: [
          "React Native",
          "Expo",
          "Firebase",
          "Tamagui",
          "Redux Toolkit",
          "TanStack Query",
          "Up-fetch",
        ],
      },
      {
        name: "Vimex Driver Mobile App",
        description:
          "Mobile application for drivers to receive tasks, update delivery status, and manage workflows",
        technologies: [
          "React Native",
          "Expo",
          "Firebase",
          "Tamagui",
          "Redux Toolkit",
          "TanStack Query",
          "Up-fetch",
        ],
      },
      {
        name: "Vimex WhatsApp Bot",
        description:
          "Internal automation engine built in Golang using ConnectRPC for strongly typed, high-performance messaging with reduced payload size.",
        technologies: [
          "Golang",
          "ConnectRPC",
          "WhatsApp Business API",
          "PostgreSQL",
        ],
      },
    ],
  },
  {
    title: "Fullstack Lead",
    company: "Amazethu",
    companyUrl: "https://amazethu.com",
    startDate: "October 2023",
    endDate: "January 2025",
    duration: "1 yr 3 mos",
    description: [
      "Consolidated three separate projects into a unified repository for streamlined collaboration",
      "Configured Docker Compose for multi-service applications ensuring consistent development environments",
      "Designed and implemented GitHub Actions workflows for automated deployment",
      "Deployed frontend using AWS Amplify with CI/CD pipelines",
      "Established Docker containerization with AWS ECR and ECS integration",
      "Deployed Flask-based API on AWS ECS with MongoDB Atlas integration",
      "Created comprehensive onboarding documentation and internship program",
      "Developed modern landing page using React and Node.js",
    ],
    achievements: [
      "Streamlined development workflows by consolidating three codebases into one",
      "Significantly reduced deployment times through automated CI/CD pipelines",
      "Established scalable infrastructure using AWS services",
      "Created isolated production and staging environments for reliable testing",
    ],
    technologies: [
      "React",
      "Node.js",
      "GitHub",
      "AWS Amplify",
      "AWS",
      "Docker",
      "CI/CD",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Express.js",
      "Flask",
      "Git",
      "React Native",
      "REST/RESTful APIs",
    ],
    projects: [
      {
        name: "Amazethu Platform",
        description:
          "Unified development platform with automated CI/CD and scalable AWS infrastructure",
        technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB", "Flask"],
        link: "https://amazethu.com",
      },
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Spreeloop",
    companyUrl: "https://spreeloop.com",
    startDate: "January 2022",
    endDate: "January 2023",
    duration: "1 yr",
    description: [
      "Led sprint reviews ensuring clear communication of project progress",
      "Mentored junior developers in debugging, tool usage, and unit testing",
      "Implemented improvements including refactoring and forward-thinking features",
      "Led on-call rotation for production monitoring and incident response",
      "Implemented alerting systems for application crashes and backend errors",
      "Balanced leadership with active development contributions",
    ],
    achievements: [
      "Improved team productivity through streamlined processes",
      "Reduced application crashes and backend errors through rigorous testing",
      "Successfully mentored junior developers to contribute effectively",
      "Enhanced customer satisfaction through feature improvements",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "JavaScript",
      "TypeScript",
      "Express.js",
      "Node.js",
      "Firebase",
      "GitHub",
      "Git",
      "REST/RESTful APIs",
    ],
    projects: [
      {
        name: "Spreeloop Place",
        description:
          "High-quality meal ordering application with Firebase backend",
        technologies: [
          "Flutter",
          "Dart",
          "Firebase",
          "Express.js",
          "TypeScript",
        ],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.place.prod",
      },
      {
        name: "Spreeloop Courier",
        description:
          "Application enabling users to earn money through delivery tasks",
        technologies: [
          "Flutter",
          "Dart",
          "Firebase",
          "Express.js",
          "JavaScript",
        ],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.courier.prod",
      },
      {
        name: "Spreeloop Partners",
        description:
          "Application for restaurant managers to register businesses online",
        technologies: [
          "Flutter",
          "Dart",
          "Node.js",
          "Express.js",
          "TypeScript",
        ],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.placepartners.prod",
      },
    ],
  },
  {
    title: "Fullstack Developer (Part-time)",
    company: "Meta Express",
    startDate: "January 2022",
    endDate: "April 2022",
    duration: "3 mos",
    description: [
      "Designed and developed presentation website for parcel delivery company",
      "Used React for multi-platform availability",
      "Employed Node.js with Express.js for backend route management",
    ],
    achievements: [
      "Successfully launched website promoting parcel delivery services",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "TypeScript",
      "Express.js",
      "React",
      "REST/RESTful APIs",
    ],
    projects: [
      {
        name: "Meta Express Website",
        description: "Presentation website for parcel delivery company",
        technologies: ["React", "Node.js", "Express.js", "TypeScript"],
      },
    ],
  },
  {
    title: "Software Developer",
    company: "Spreeloop",
    companyUrl: "https://spreeloop.com",
    startDate: "April 2021",
    endDate: "December 2021",
    duration: "8 mos",
    description: [
      "Created high-quality applications for meal ordering and delivery services",
      "Utilized Flutter (Dart) for mobile and web application development",
      "Leveraged Firebase tools including authentication, Firestore, Cloud Functions",
      "Implemented user interface designs from Figma",
      "Added bug reporting functionality using Crashlytics",
      "Conducted code reviews and suggested improvements",
    ],
    achievements: [
      "Delivered three production-ready mobile applications",
      "Implemented comprehensive Firebase integration",
      "Established code review practices improving code quality",
    ],
    technologies: [
      "Firebase",
      "Git",
      "Express.js",
      "JavaScript",
      "Flutter",
      "Dart",
      "TypeScript",
      "Figma",
      "Cloud",
      "GitHub",
      "REST/RESTful APIs",
    ],
    projects: [
      {
        name: "Spreeloop Place",
        description: "Application for booking and ordering meals",
        technologies: ["Flutter", "Firebase", "Express.js", "TypeScript"],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.place.prod",
      },
      {
        name: "Spreeloop Courier",
        description:
          "Application for earning money by performing delivery tasks",
        technologies: ["Flutter", "Firebase", "Express.js", "JavaScript"],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.courier.prod",
      },
      {
        name: "Spreeloop Partners",
        description: "Application for restaurant managers",
        technologies: ["Flutter", "Node.js", "Express.js", "TypeScript"],
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.spreeloop.placepartners.prod",
      },
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Mba&Mba",
    startDate: "September 2020",
    endDate: "December 2020",
    duration: "3 mos",
    description: [
      "Designed and developed presentation websites for clients",
      "Used React for multi-platform availability",
      "Employed Node.js with Express.js for backend development",
    ],
    achievements: [
      "Launched website promoting the first French book on Jira",
      "Developed shipping services platform for France to Gabon route",
    ],
    technologies: [
      "REST/RESTful APIs",
      "JavaScript",
      "Node.js",
      "Express.js",
      "TypeScript",
      "React",
      "Jira",
    ],
    projects: [
      {
        name: "Comprendre Jira",
        description: "Presentation website promoting a book on Jira",
        technologies: ["React", "Node.js", "Express.js", "TypeScript"],
      },
      {
        name: "Mel Service",
        description:
          "Website facilitating package shipping from France to Gabon",
        technologies: ["React", "Node.js", "Express.js", "TypeScript"],
      },
    ],
  },
  {
    title: "Fullstack Developer",
    company: "SmartedAfrica",
    startDate: "June 2020",
    endDate: "November 2020",
    duration: "5 mos",
    description: [
      "Migrated e-learning platform from Ionic 3 to Ionic (Angular) v5",
      "Optimized heavy requests to improve application performance",
      "Added notification features using Node.js with Firebase Admin",
      "Implemented forum chat with media upload capability",
    ],
    achievements: [
      "Successfully migrated platform to modern framework",
      "Improved user experience significantly",
      "Introduced paid extra features",
    ],
    technologies: [
      "Firebase",
      "Ionic",
      "Angular",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Git",
    ],
    projects: [
      {
        name: "SmartEdAfrica e-Learning",
        description: "E-learning platform with chat and notification features",
        technologies: ["Ionic", "Angular", "Firebase", "Node.js", "TypeScript"],
      },
    ],
  },
];

// ============================================
// EDUCATION
// ============================================
const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University Of Yaounde 1",
    startYear: 2016,
    endYear: 2019,
  },
  {
    degree: "Baccalaureate",
    institution: "Bilingual High School Of Mendong",
    startYear: 2014,
    endYear: 2015,
  },
];

// ============================================
// CERTIFICATIONS
// ============================================
const certifications: Certification[] = [
  {
    name: "Machine Learning with Python - From Linear Models to Deep Learning",
    year: 2021,
    certificateId: "8e85b9986b5e4a0585310f631db062c9",
  },
];

// ============================================
// EXPORTED PORTFOLIO DATA
// ============================================
export const portfolioData: PortfolioData = {
  personalInfo,
  skills,
  experiences,
  education,
  certifications,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get skills sorted by years of experience (descending)
 */
export const getSkillsByExperience = (): Skill[] => {
  return [...skills].sort((a, b) => b.years - a.years);
};

/**
 * Get skills filtered by category
 */
export const getSkillsByCategory = (category: Skill["category"]): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

/**
 * Get the top N most experienced skills
 */
export const getTopSkills = (n: number = 5): Skill[] => {
  return getSkillsByExperience().slice(0, n);
};

/**
 * Get all unique technologies used across all experiences
 */
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  experiences.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

/**
 * Get all projects across all experiences
 */
export const getAllProjects = (): Project[] => {
  return experiences.flatMap((exp) => exp.projects);
};

/**
 * Get total count of projects
 */
export const getTotalProjectsCount = (): number => {
  return getAllProjects().length;
};

/**
 * Get experiences with their projects count
 */
export const getExperiencesWithProjectCount = () => {
  return experiences.map((exp) => ({
    ...exp,
    projectCount: exp.projects.length,
  }));
};

/**
 * Get skill categories with their skills
 */
export const getSkillCategories = () => {
  const categories: { [key in Skill["category"]]: Skill[] } = {
    frontend: [],
    backend: [],
    mobile: [],
    devops: [],
    database: [],
    tools: [],
    other: [],
  };

  skills.forEach((skill) => {
    categories[skill.category].push(skill);
  });

  return categories;
};

/**
 * Calculate total years of experience in a specific technology
 */
export const getTechExperience = (techName: string): number | undefined => {
  const skill = skills.find(
    (s) => s.name.toLowerCase() === techName.toLowerCase()
  );
  return skill?.years;
};

export default portfolioData;

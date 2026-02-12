export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  dateRange: string;
  bullets: string[];
};

export type AboutIntro = {
  heading: string;
  paragraphs: string[];
};

export const aboutIntro: AboutIntro = {
  heading: "Software Developer Focused on Solving Problems Efficiently",
  paragraphs: [
    "I’m Ryan Kutella from Elk Grove Village, IL, and a senior studying Computer Science at the University of Alabama.",
    "I’ve been programming for 7+ years since my freshman year of high school, and I enjoy turning complex ideas into real-world software solutions.",
    "At Mercedes-Benz U.S. International, I helped build and maintain internal applications that improved plant operations. I worked with C#, Microsoft SQL Server, Azure Functions, and Power BI to automate workflows, improve data visibility, and support faster, data-driven decisions.",
    "At Abbott Rubber Co., I contributed to designing, building, and optimizing customer-facing web solutions, including a new eCommerce site. I also supported day-to-day IT operations, including troubleshooting software issues, resolving hardware problems, and assisting employees with technical support needs across teams.",
    "Outside of work, I like building personal projects that help simplify and organize my own life. I also enjoy spending time playing sports, weight-lifting, and exploring new topics across tech and beyond.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    items: ["Nuxt", "Vue", "React", "React Native", "Node.js", "Angular"],
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Firebase", "MongoDB", "Oracle SQL", "Figma", "Unity"],
  },
];

const experienceItems: Omit<Experience, "dateRange">[] = [
  {
    role: "Software Engineer Co-op",
    company: "Mercedes Benz U.S. International",
    startDate: "May 2024",
    endDate: "Present",
    bullets: [
      "Developed internal plant applications with C#, .NET, Azure Functions, and SQL Server, automating workflows and reducing manual reporting.",
      "Designed and optimized SQL queries, increasing data accuracy and reducing query run times.",
      "Built Power BI dashboards to track KPIs and visualize production/quality metrics, improving decision-making for managers.",
      "Collaborated with cross-functional teams to deliver scalable, cloud-integrated technical solutions.",
    ],
  },
  {
    role: "Software Developer / IT Intern",
    company: "Abbott Rubber Co.",
    startDate: "May 2024",
    endDate: "Present",
    bullets: [
      "Designed and developed major parts of a new ecommerce website used for B2B and B2C customer flows.",
      "Improved usability and conversion paths through cleaner interfaces and stronger information architecture.",
      "Supported internal systems with tooling and platform work across Azure and Epicor Prophet 21.",
      "Helped modernize day-to-day technical workflows to improve team productivity.",
    ],
  },
];

export const experiences: Experience[] = experienceItems.map((item) => ({
  ...item,
  dateRange: `${item.startDate} - ${item.endDate}`,
}));

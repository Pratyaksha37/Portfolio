export const personalInfo = {
  name: "Pratyaksha Shastri",
  title: "AI Engineer | Full-Stack Developer",
  prompt: "dev@pratyaksha_003:~$",
};

export const welcomeLines = [
  `Hi, I'm Pratyaksha Shastri, an AI Engineer & Full-Stack Developer. Welcome to my interactive portfolio terminal! Type 'help' to see available commands.`,
];

export const aboutLines = [
  `👋 Hey, I'm Pratyaksha Shastri!`,
  ``,
  `I'm an AI Engineer & Full-Stack Developer who likes building things that sit right at the edge of "does this actually work" — agentic systems, RAG pipelines with guardrails, and full-stack products people can actually use.`,
  ``,
  `When I'm not coding, I'm probably deep in a game I should've stopped playing three hours ago, hunting down a movie that nobody's heard of, or losing an afternoon to sketching / doodling something that'll never see daylight.`,
  ``,
  `Feel free to explore more using the 'projects', 'skills', or 'contact' commands!`,
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Agroedge",
    location: "Remote",
    period: "Apr 2025 – Jul 2025",
    details: [
      "Designed and developed a business analytics dashboard visualizing revenue, profit, and EMI data",
      "Resolved existing system bugs and optimized RESTful APIs, cutting response times by 25%",
      "Collaborated in an Agile environment",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Legal Advisory RAG Agent",
    date: "May 2026",
    github: "https://github.com/Pratyaksha37/Legal-Advisory-RAG-Agent",
    demo: "https://legal-advisory-rag-agent.vercel.app/",
    description:
      "Production-grade RAG platform using hybrid FAISS + BM25 retrieval with Reciprocal Rank Fusion (RRF) across major Indian legal corpora, served via FastAPI + Docker. Includes 4-layer guardrails: prompt-injection detection, Indian law scope enforcement, citation verification, confidence-based validation. Observability via LangSmith tracing, LLM-as-Judge evaluation, and session-based PDF ingestion.",
    tech: "Python, FastAPI, FAISS, BM25, LangSmith, Docker",
  },
  {
    id: 2,
    title: "PetHub — Full-Stack Pet Adoption Platform",
    date: "Oct 2025",
    github: "https://github.com/Pratyaksha37/pethub",
    demo: "https://pethub-89rl.vercel.app/",
    description:
      "Pet discovery, adoption applications, real-time application tracking. JWT auth + Role-Based Access Control across three user roles. Centralized admin dashboard, cutting request processing time by ~40%.",
    tech: "Next.js, React, Prisma ORM, PostgreSQL, Tailwind CSS",
  },
  {
    id: 3,
    title: "SkillBridge — Peer Skill Exchange Platform",
    date: "",
    github: "https://github.com/Pratyaksha37/SkillBridge",
    demo: "https://skill-bridge-capstone.vercel.app/",
    description:
      "Bidirectional smart matching algorithm calculating match percentages between users. Collaboration hub with instant Google Meet link generation and a peer rating/reputation system. Built with Repository, Singleton, Adapter, and Observer patterns; follows SOLID principles throughout.",
    tech: "React, TypeScript, Tailwind CSS, Node.js, Express, Prisma, PostgreSQL (Neon.tech), JWT",
  },
  {
    id: 4,
    title: "Agentic Property Advisor — AI-Powered Real Estate Assistant",
    date: "",
    github: "https://github.com/Pratyaksha37/GenAI_Capstone",
    demo: "https://london-property-prediction.streamlit.app/",
    description:
      "Hybrid agentic system combining ML price prediction with RAG-based market analysis, orchestrated via LangGraph as a DAG. Random Forest Regressor trained on 400k+ London property listings (R² 0.9418, MAE 0.10). LLM synthesis via Llama 3 70B on Groq LPU for structured investment advisory reports.",
    tech: "Python, Streamlit, LangGraph, Groq/Llama 3, scikit-learn, RAG",
  },
  {
    id: 5,
    title: "ResuMatch — Resume–Job Description Compatibility Analyzer",
    date: "",
    github: "https://github.com/Pratyaksha37/ResumeShortlister",
    demo: "https://pratyaksha37.github.io/ResumeShortlister/",
    description:
      "Scores resume–JD compatibility by extracting skills, keywords, and experience signals into actionable hiring insights. Full pipeline: resume parsing, regex-based keyword extraction, scoring/matching algorithms, REST APIs, React frontend. AI chatbot for resume improvement recommendations and real-time query resolution.",
    tech: "React, REST APIs, Regex/NLP, AI chatbot integration",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "Java", "C/C++", "SQL", "HTML", "CSS"],
  frameworks: [
    "React", "Next.js", "FastAPI", "Node.js", "Express.js",
    "Prisma ORM", "Tailwind CSS", "Chart.js", "NumPy", "Pandas",
  ],
  aiMl: [
    "RAG", "LLM Engineering", "Generative AI", "Machine Learning",
    "Hugging Face", "LangSmith", "LangGraph", "FAISS", "Sentence Transformers",
  ],
  coreCs: ["Data Structures & Algorithms", "OOP", "REST API Development", "System Design"],
  cloudDevOps: ["AWS", "Docker", "Git", "GitHub"],
  tools: ["Tableau", "Figma"],
};

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institution: "Newton School of Technology, Rishihood University",
    location: "Sonipat, India",
    period: "Aug 2024 – May 2028",
    score: "CGPA: 8.6/10.0",
  },
  {
    degree: "Class XII (Intermediate)",
    institution: "St. Francis School",
    location: "Varanasi, India",
    period: "2023",
    score: "84.0%",
  },
];

export const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "June 2026",
    description:
      "Gained foundational knowledge of AWS cloud services, global infrastructure, security, pricing, and cloud computing concepts.",
    link: "https://drive.google.com/file/d/1wYUbuwwfyx1a7vDdoYhIIn4wlckuHNPP/view",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/Pratyaksha37/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pratyaksha-shastri/" },
  { name: "LeetCode", url: "https://leetcode.com/u/pratyaksha_003/" },
  { name: "CodeChef", url: "https://www.codechef.com/users/pratyaksha_037" },
  { name: "Codeforces", url: "https://codeforces.com/profile/Pratyaksha_037" },
];

export const contact = {
  email: "pratyakshashastri123@gmail.com",
  phone: "+91 9838743731",
  linkedin: "https://www.linkedin.com/in/pratyaksha-shastri/",
};

export const helpLines = [
  "Available commands:",
  "",
  "  about           Show information about me",
  "  projects        Display my projects",
  "  projects <n>    Show details for project #n",
  "  skills          List my technical skills",
  "  experience      Show my work experience",
  "  education       View my education background",
  "  contact         Display contact information",
  "  certifications  View my certifications",
  "  social          Show social profiles (GitHub, LeetCode, etc.)",
  "  welcome         Re-run the welcome message",
  "  theme <name>    Switch terminal theme (matrix, amber, white, blue, green)",
  "  ascii           Display custom ASCII art",
  "  resume          Download my resume",
  "  help            Show this help message",
  "  clear           Clear the terminal",
  "  sudo <cmd>      Try it for a surprise :)",
  "",
  "Navigation:",
  "  Tab             Autocomplete commands",
  "  ↑/↓             Navigate command history",
];

export const resumeUrl = "/resume.pdf";

export const asciiArt = [
  "  ██████╗  ██████╗  ██████╗ ███╗   ███╗",
  "  ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║",
  "  ██║  ██║██║   ██║██║   ██║██╔████╔██║",
  "  ██║  ██║██║   ██║██║   ██║██║╚██╔╝██║",
  "  ██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║",
  "  ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝",
  "",
  "  Type 'help' for available commands.",
];

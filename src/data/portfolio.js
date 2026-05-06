// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: "Nadya Theresia Tangkere",
  firstName: "Nadya",
  title: "Data Analyst",
  tagline: "Business Analytics • Risk Intelligence • Data-Driven Decisions",
  taglineSub:
    "Transforming operational and financial data into measurable insight through scalable analysis, KPI monitoring, and strategic reporting..",
  location: "Manado, North Sulawesi, Indonesia",
  email: "nadyatangkere@email.com",
  linkedin: "https://www.linkedin.com/in/nadyatangkere/",
  github: "https://github.com/nadyatangkere",
  resumeUrl: "#",
};

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a data analyst with a strong interest in applying quantitative methods to real business problems. My work sits at the intersection of technical analysis and strategic thinking — I don't just build dashboards, I ask what decision the dashboard should enable.",
    "My project experience spans the mining sector, retail performance monitoring, and financial risk assessment. Each has sharpened my ability to move between raw data exploration and executive-level insight communication.",
    "I'm drawn to roles where data isn't decorative — where a well-framed metric or a clear regression can actually change how a team operates. Whether that's a Data Analyst, Management Trainee, or Business Analyst role, I bring structured thinking and a bias toward action.",
  ],
  highlights: [
    "End-to-end analysis: EDA → insight → recommendation",
    "Business-first framing of technical findings",
    "Multi-domain: mining, retail, risk",
    "Comfortable with ambiguous, open-ended problems",
  ],
};

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "mining-analytics",
    featured: true,
    title: "Mining Operations Efficiency Analysis",
    subtitle: "Operational Analytics · Downtime Optimization",
    problem:
      "Mining operational data was fragmented across multiple workflows, limiting visibility into equipment downtime, production bottlenecks, and the operational factors contributing to production loss.",
    insight:
      "Integrated operational logs, maintenance records, and sensor indicators revealed that a small group of equipment contributed disproportionately to downtime. Cycle time analysis also exposed critical bottlenecks linked to elevated vibration and temperature patterns before breakdown events.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
    outcomes: [
      "Developed end-to-end analytics workflow from data generation to dashboard reporting",
      "Built operational KPI dashboard for monitoring downtime, lost production, and maintenance trends",
      "Identified high-impact bottlenecks and early failure indicators to support targeted maintenance prioritization",
    ],
    github: "https://github.com/nadyatangkere/mining_analytics",
    color: "#1a3a6c",
  },
  {
    id: "retail-dashboard",
    featured: false,
    title: "Retail Sales Performance Dashboard",
    subtitle: "Sales Analytics · Business Performance Monitoring",
    problem:
      "A retail store lacked a centralized reporting system to monitor sales performance, product profitability, and monthly target achievement, causing business decisions to rely heavily on manual tracking and assumptions.",
    insight:
      "Sales analysis across 3,335 transaction records showed that high-volume products did not always generate strong margins, while several product categories consistently delivered higher profitability despite lower sales volume.",
    tools: ["Excel Advanced", "Power Query", "Pivot Tables", "VBA"],
    outcomes: [
      "Built dynamic Excel dashboard with automated KPI tracking and drill-down analysis",
      "Automated monthly sales, profit, and target monitoring using advanced Excel formulas",
      "Delivered SKU-level and category-level profitability insights to support inventory and sales strategy",
    ],
    github: "https://github.com/nadyatangkere/dashboard_toko_kelontong.git",
    color: "#2a1a5e",
  },
  {
    id: "risk-analyst",
    featured: false,
    title: "Lending Portfolio Risk Analysis",
    subtitle: "Credit Risk Analytics",
    problem:
      "A large-scale lending portfolio faced rising charge-off exposure and weak recovery performance, while existing credit policies and collection strategies lacked data-driven risk evaluation.",
 insight:
      "Analysis of 2.26 million loan records revealed consistently high loss given default across all credit grades, ineffective risk-based pricing, and major recovery gaps caused by delayed collection intervention.",
    tools: ["Python", "SQL", "Scikit-learn", "Statsmodels", "Excel"],
    outcomes: [
      "Analyzed 2.26M loan records using PostgreSQL, Python, and Power BI",
      "Built expected loss and portfolio risk analysis framework using PD × LGD × EAD methodology",
      "Produced strategic recommendations for credit scoring, recovery optimization, and risk-based pricing improvement",
    ],
    github: "https://github.com/nadyatangkere/lending-risk-analyst-portfolio.git",
    color: "#0d2a1a",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillGroups = [
  {
    category: "Data & Technical",
    icon: "BarChart2",
    skills: [
      { name: "Python",    level: 85 },
      { name: "SQL",       level: 88 },
      { name: "Power BI",  level: 82 },
      { name: "Excel Advanced", level: 90 },
      { name: "Pandas / NumPy", level: 80 },
      { name: "Matplotlib / Seaborn", level: 75 },
    ],
  },
  {
    category: "Analytical Methods",
    icon: "BrainCircuit",
    skills: [
      { name: "Exploratory Data Analysis", level: 90 },
      { name: "Statistical Modeling",      level: 78 },
      { name: "Data Visualization",        level: 88 },
      { name: "Forecasting & Regression",  level: 75 },
      { name: "Risk Quantification",       level: 72 },
    ],
  },
  {
    category: "Business & Communication",
    icon: "Briefcase",
    skills: [
      { name: "Business Problem Framing",    level: 88 },
      { name: "Executive Reporting",         level: 85 },
      { name: "KPI Design",                  level: 82 },
      { name: "Stakeholder Communication",   level: 80 },
      { name: "Process Documentation",       level: 78 },
    ],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    institution: "Universitas Sam Ratulangi",
    degree: "Bachelor of Informatics Engineering",
    period: "2022 – 2026",
    location: "Manado, Indonesia",
    highlights: [
      "Relevant coursework: Data Mining, Big Data, Machine Learning, Probabilities & Statistics",
      "Final project: Implementasi Xception-Vision Transformer pada Citra MRI  Otak untuk Mendeteksi Alzheimer",
      "GPA: 3.83 / 4.00",
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experience = [
  {
    company: "PT.Aistech Global Solution / Makassar",
    role: "Quality Assurance Intern / 2 Concurrent Projects",
    period: "October 2024 – December 2024",
    type: "Internship",
    impact: [
      "Designed 100+ structured test cases based on system requirements to ensure comprehensive functional coverage",
      "Performed manual testing across positive and negative scenarios to validate business logic and boundary conditions.",
      "Delivered weekly progress presentations to IT Manager and stakeholders, highlighting development status, risks, and mitigation plans.",
    ],
  },
  {
    company: "Asah Bootcamp by Dicoding x Accenture",
    role: "Machine Learning Cohort",
    period: "2025",
    type: "Bootcamp",
    impact: [
      "Selected through a competitive admission process and successfully completed a 6-month intensive Machine Learning track under a performance-gated system.",
      "Delivered 4 independent AI projects (Machine Learning, Computer Vision, NLP, and ML System Design)",
      "Contributed as the Machine Learning role in a team capstone project focused on developing a predictive lead scoring model to prioritize high-potential banking prospects"
    ],
  },
];

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

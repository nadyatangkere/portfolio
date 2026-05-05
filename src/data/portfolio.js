// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personal = {
  name: "Nadya Theresia Tangkere",
  firstName: "Nadya",
  title: "Data Analyst",
  tagline: "Turning messy data into decisions that move the needle.",
  taglineSub:
    "I bridge analytical rigor with business context — from mining operations to retail KPIs.",
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
    title: "Mining Operations Analytics",
    subtitle: "Operational Efficiency · Production Forecasting",
    problem:
      "A mining company's production data was siloed across departments, making it impossible to correlate equipment downtime with output losses or identify which extraction zones had the best yield-to-cost ratio.",
    insight:
      "By integrating sensor logs with production records, I found that 23% of downtime was concentrated in two equipment types during a predictable maintenance window — a scheduling shift reduced unplanned stoppages by an estimated 18%.",
    tools: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
    outcomes: [
      "Identified top-3 cost drivers in production pipeline",
      "Built real-time KPI dashboard for ops managers",
      "Modeled production forecasts with ~91% accuracy (MAE)",
    ],
    github: "https://github.com/nadyatangkere/mining_analytics",
    color: "#1a3a6c",
  },
  {
    id: "retail-dashboard",
    featured: false,
    title: "Retail Performance Dashboard",
    subtitle: "Sales Analytics · Inventory Optimization",
    problem:
      "A retail business had 18 months of transaction data but no consolidated view of which product categories, store locations, or time windows drove the most margin — decisions were being made on intuition.",
    insight:
      "SKU-level analysis revealed that 12% of products generated 68% of gross margin. Seasonal reordering patterns were misaligned with demand peaks by 2–3 weeks, creating both stockouts and overstock simultaneously.",
    tools: ["Excel Advanced", "Power Query", "Pivot Tables", "VBA"],
    outcomes: [
      "Built dynamic multi-sheet dashboard with drill-down capability",
      "Surfaced margin leakage worth ~15% of quarterly revenue",
      "Automated weekly sales report (saved ~4 hrs/week)",
    ],
    github: "https://github.com/nadyatangkere/dashboard_toko_kelontong.git",
    color: "#2a1a5e",
  },
  {
    id: "risk-analyst",
    featured: false,
    title: "Financial Risk Assessment",
    subtitle: "Credit Risk · Quantitative Analysis",
    problem:
      "A portfolio of small business loan applications lacked a consistent scoring framework — risk decisions were inconsistent across analysts, and there was no data-backed threshold for rejection vs. approval.",
    insight:
      "Logistic regression on historical loan performance showed three variables (debt-service coverage, sector volatility, collateral ratio) explained 79% of default variance. Implementing a tiered scoring model reduced expected portfolio default rate.",
    tools: ["Python", "SQL", "Scikit-learn", "Statsmodels", "Excel"],
    outcomes: [
      "Built binary classification model (AUC 0.84)",
      "Defined 3-tier risk band framework for underwriting",
      "Documented methodology in exec-ready report format",
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
      "Relevant coursework: Statistics, Operations Research, Business Analytics",
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
      "Analyzed [X] datasets covering [domain], producing actionable recommendations for [team/decision-maker]",
      "Built automated reporting workflow reducing manual effort by [X]%",
      "Presented findings to [stakeholders], influencing [specific business decision]",
    ],
  },
  {
    company: "Asah Bootcamp by Dicoding x Accenture",
    role: "Machine Learning Cohort",
    period: "2025",
    type: "Bootcamp",
    impact: [
      "Led quantitative component of [project name]",
      "Produced deliverables used by [X] stakeholders / judges / clients",
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

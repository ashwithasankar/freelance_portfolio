export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  overview: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  accentColor: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "fullstop-footwear",
    number: "01",
    title: "Fullstop Footwear",
    tagline: "High-Performance Modern Footwear E-Commerce Platform",
    category: "E-Commerce & Interactive Commerce",
    description: "An intuitive online shopping portal built for a modern footwear brand, featuring fluid product exploration, custom size/color selectors, frictionless cart management, and seamless mobile responsiveness.",
    overview: "Engineered to deliver sub-second page transitions, dynamic cart state management with persistent storage, and an editorial product gallery designed to maximize conversion rates.",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Cart Latency", value: "< 50ms" },
      { label: "Responsive", value: "Mobile First" }
    ],
    liveUrl: "https://fullstopfootwear.vercel.app/",
    githubUrl: "https://github.com/ashwithasankar/fullstopfootwear",
    image: "/projects/fullstop-footwear.png",
    accentColor: "#B7F36B",
    features: [
      "Dynamic product filtering by silhouette, size, and material",
      "Persistent cart drawer with instant tax and shipping calculations",
      "Interactive product showcases with tactile preview controls",
      "Optimized checkout gateway readiness with order confirmation flow"
    ]
  },
  {
    id: "spendwise",
    number: "02",
    title: "SpendWise",
    tagline: "Intelligent Personal Finance & Budget Tracking SaaS",
    category: "Financial SaaS & Data Visualization",
    description: "A comprehensive expense tracking and budgeting platform providing visual analytics, categorization engines, recurring subscription audits, and monthly savings projection models.",
    overview: "Built to replace cluttered spreadsheets with an intuitive dark-mode dashboard. Features interactive breakdown charts, goal pacing meters, and data exports.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    metrics: [
      { label: "Dashboard", value: "Real-time" },
      { label: "DB Storage", value: "MongoDB" },
      { label: "Security", value: "JWT Auth" }
    ],
    liveUrl: "https://expense-tracker-gfdv.vercel.app/",
    githubUrl: "https://github.com/ashwithasankar/Expense-Tracker",
    image: "/projects/spendwise.png",
    accentColor: "#93E94A",
    features: [
      "Categorized cashflow breakdown with visual percentage distributions",
      "Monthly budget envelope simulator with threshold alerts",
      "Expense history filtering by merchant, category, and date ranges",
      "Exportable financial summaries in CSV and JSON formats"
    ]
  },
  {
    id: "aura-bridal",
    number: "03",
    title: "Aura Bridal",
    tagline: "Luxury Bridal Couture & Atelier Appointment Showcase",
    category: "Editorial Luxury Brand Experience",
    description: "An editorial digital salon for a luxury bridal atelier featuring couture lookbooks, fabric detail visualizers, appointment booking, and a bespoke moodboard curation system.",
    overview: "Focuses on cinematic typography, warm natural lighting tones, subtle transition curves, and bespoke bridal consultation request workflows.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "JavaScript"],
    metrics: [
      { label: "Lookbook", value: "Editorial" },
      { label: "Booking UX", value: "Guided Flow" },
      { label: "Design", value: "Bespoke" }
    ],
    liveUrl: "https://aura-bridal-iota.vercel.app/",
    githubUrl: "https://github.com/ashwithasankar/Aura-bridal",
    image: "/projects/aura-bridal.png",
    accentColor: "#E2F7A5",
    features: [
      "High-resolution couture gown galleries with editorial lookbooks",
      "Integrated VIP bridal suite appointment booking interface",
      "Fabric swatch inspector with macro weave detail perspectives",
      "Curated client testimonial showcase and bespoke FAQ accordion"
    ]
  },
  {
    id: "devmentor-ai",
    number: "04",
    title: "DevMentor AI",
    tagline: "Personalized Code Review & Engineering Growth Platform",
    category: "Developer Tooling & EdTech",
    description: "An interactive developer assistance platform designed to analyze code snippets, provide line-by-line architectural critique, suggest time-complexity enhancements, and curate custom learning roadmaps.",
    overview: "Combines an accessible IDE-like interface with structured rubric evaluations to help aspiring software engineers elevate their algorithmic and system design fluency.",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "PrismJS"],
    metrics: [
      { label: "Languages", value: "JS / TS / Python" },
      { label: "Feedback", value: "Instant" },
      { label: "Review Depth", value: "Multi-factor" }
    ],
    liveUrl: "https://devmentor-ai-eta.vercel.app/",
    githubUrl: "https://github.com/ashwithasankar/devmentor-ai",
    image: "/projects/devmentor-ai.png",
    accentColor: "#84E23F",
    features: [
      "Syntax-highlighted code editor with multi-language parsing",
      "Algorithmic complexity meter (Big-O time & space complexity)",
      "Automated refactoring suggestions with diff comparison view",
      "Guided milestone tracking for full-stack engineering competencies"
    ]
  },
  {
    id: "urbannest-builders",
    number: "05",
    title: "UrbanNest Builders",
    tagline: "Architectural Property Development & Real Estate Portal",
    category: "Architectural Showcase & PropTech",
    description: "A premier web presence for an architectural residential development firm in Chennai, presenting master plans, interactive floorplans, construction milestones, and virtual unit walk-throughs.",
    overview: "Engineered with architectural precision, clean grid alignments, specification sheets, and responsive inquiry mechanisms for prospective homeowners and corporate partners.",
    tech: ["React.js", "CSS Grid", "Tailwind CSS", "Node.js"],
    metrics: [
      { label: "Properties", value: "Interactive" },
      { label: "Floorplans", value: "Dynamic SVG" },
      { label: "Inquiry Rate", value: "Optimized" }
    ],
    liveUrl: "https://construction-demo-theta.vercel.app/",
    githubUrl: "https://github.com/ashwithasankar/construction-demo",
    image: "/projects/urbannest-builders.jpg",
    accentColor: "#B7F36B",
    features: [
      "Masterplan layout with interactive clickable zoning subdivisions",
      "Dynamic architectural floorplan viewer with square-footage calculators",
      "Live construction milestone tracker with photo chronicles",
      "Dedicated investor prospectus download and consultation scheduler"
    ]
  }
];

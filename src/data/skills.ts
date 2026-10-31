export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, high-performance user interfaces and SPAs.",
    skills: [
      { name: "React.js", level: "Primary", description: "Component architecture, hooks, state management, and modern SPA lifecycle." },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Asynchronous programming, closures, DOM manipulation, and modern syntax." },
      { name: "HTML5", level: "Semantic", description: "Accessible markup, SEO optimization, and WAI-ARIA standards." },
      { name: "CSS3 / Modern CSS", level: "Advanced", description: "Flexbox, CSS Grid, custom properties, animations, and responsive design." },
      { name: "Bootstrap", level: "Proficient", description: "Rapid responsive grid scaffolding, utility systems, and UI components." }
    ]
  },
  {
    category: "Backend Engineering",
    description: "Developing robust server runtimes, RESTful endpoints, and backend services.",
    skills: [
      { name: "Node.js", level: "Core", description: "Event-driven runtime, non-blocking I/O, server architecture, and npm ecosystem." },
      { name: "Express.js", level: "Core", description: "RESTful API routing, middleware chains, authentication, and error handling." }
    ]
  },
  {
    category: "Database Systems",
    description: "Designing structured and document schemas, managing persistent data.",
    skills: [
      { name: "MongoDB", level: "Primary NoSQL", description: "Document modeling with Mongoose, aggregation pipelines, and CRUD operations." },
      { name: "SQL", level: "Relational", description: "Relational schemas, queries, joins, foreign keys, and transaction integrity." }
    ]
  },
  {
    category: "Tools, QA & CI/CD",
    description: "Ensuring code reliability, automated test coverage, and continuous delivery.",
    skills: [
      { name: "Playwright", level: "Testing", description: "End-to-end browser automation, regression testing, and UI assertion suites." },
      { name: "GitHub Actions", level: "CI/CD", description: "Automated test runs, build triggers, and continuous integration workflows." },
      { name: "Git", level: "Version Control", description: "Branching strategies, merge conflict resolution, commit hygiene, and rebasing." },
      { name: "GitHub", level: "Collaboration", description: "Pull requests, code reviews, issue tracking, and repository management." }
    ]
  }
];

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  period: string;
  type: string;
  location: string;
  projectFocus: string;
  contributions: string[];
}

export const professionalExperience: ExperienceItem[] = [
  {
    role: "Full Stack Development Intern",
    organization: "Sharp Abacus LEARNING SCHOOL Private Limited",
    duration: "Three-month internship",
    period: "3 Months",
    type: "Internship",
    location: "India",
    projectFocus: "Sharp Bakers Website & Digital Infrastructure",
    contributions: [
      "Worked on the production Sharp Bakers commercial web application, implementing responsive user-facing features and backend enhancements.",
      "Identified, isolated, and resolved software bugs across the application stack to ensure seamless user ordering flows.",
      "Contributed to comprehensive automated end-to-end testing suites using Playwright to prevent regression across key checkout and browsing workflows.",
      "Assisted in configuring and maintaining GitHub Actions continuous integration (CI) workflows for automated build checks and test runs."
    ]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  graduationYear: string;
  status: string;
  description: string;
}

export const educationJourney: EducationItem[] = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Vivekanandha College of Engineering for Women",
    graduationYear: "Graduated in 2026",
    status: "Completed",
    description: "Comprehensive engineering foundation focusing on electronic systems, computational logic, microprocessors, signal processing, and software engineering methodologies."
  }
];

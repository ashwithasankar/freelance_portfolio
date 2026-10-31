export interface SocialLink {
  label: string;
  url: string;
  iconName: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const siteConfig = {
  brand: "ASHWITHA.",
  name: "Ashwitha",
  role: "MERN Stack Developer | Freelance Web Developer",
  shortBio: "Specializing in crafting high-impact digital products, architectural web applications, and resilient full-stack systems with the MERN stack.",
  hero: {
    headline: "Ideas deserve more than ordinary websites.",
    supportingText: "I build thoughtful digital experiences for ambitious businesses.",
    cta: "ENTER MY WORLD",
  },
  contact: {
    email: "ashwiashwitha197@gmail.com",
    availability: "Available for select freelance contracts & full-stack roles",
    location: "Tamil Nadu, India",
    responseTime: "Within 24 business hours",
    headline: "Have an idea? Let's bring it to life.",
    subheadline: "Whether you need a complete ground-up web application, a high-converting business presence, or a technical consultation, let's discuss your roadmap."
  },
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/ashwithasankar",
      iconName: "Github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ashwitha-sankar-1762a3294/",
      iconName: "Linkedin",
    },
    {
      label: "Email",
      url: "mailto:ashwiashwitha197@gmail.com",
      iconName: "Mail",
    },
  ],
  links: {
    github: "https://github.com/ashwithasankar",
    linkedin: "https://www.linkedin.com/in/ashwitha-sankar-1762a3294/",
    email: "mailto:ashwiashwitha197@gmail.com",
  },
  navItems: [
    { id: "intro", label: "Intro", href: "#intro" },
    { id: "about", label: "About", href: "#about" },
    { id: "work", label: "Work", href: "#work" },
    { id: "skills", label: "Craft & Journey", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
  services: [
    {
      number: "01",
      title: "Full-Stack Web Applications",
      description: "Robust MERN stack architectures with React frontend, Node/Express REST APIs, and structured MongoDB/SQL databases tailored for performance.",
    },
    {
      number: "02",
      title: "Cinematic & High-Conversion Frontends",
      description: "Editorial, responsive layouts with bespoke motion, responsive typography, and WebGL accents that stand out from conventional templates.",
    },
    {
      number: "03",
      title: "Automated QA & CI/CD Pipelines",
      description: "End-to-end regression testing with Playwright and automated GitHub Actions workflows to ensure zero-defect deployments.",
    },
  ]
};

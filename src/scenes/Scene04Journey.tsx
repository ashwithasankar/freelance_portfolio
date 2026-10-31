import { Briefcase, GraduationCap, CheckCircle2, Terminal, Code2, Wrench, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories, professionalExperience, educationJourney } from '../data/skills';

interface Scene04JourneyProps {
  isDark: boolean;
}

export function Scene04Journey({ isDark }: Scene04JourneyProps) {
  const categoryIcons = [
    <Code2 key="code" className="w-4 h-4 text-[var(--accent-lime)]" />,
    <Terminal key="terminal" className="w-4 h-4 text-[var(--accent-lime)]" />,
    <Database key="db" className="w-4 h-4 text-[var(--accent-lime)]" />,
    <Wrench key="wrench" className="w-4 h-4 text-[var(--accent-lime)]" />,
  ];

  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase">
                SCENE 04 &mdash; CRAFT & JOURNEY
              </span>
              <div className="h-[1px] w-12 bg-[var(--border-subtle)]" />
              <span className="text-xs font-mono text-[var(--text-faint)] tracking-widest">
                TECHNICAL SPECS & TIMELINE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Skills & Experience
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-md font-light leading-relaxed">
            A comprehensive overview of core technologies, hands-on industrial internship experience, and academic engineering foundation.
          </p>
        </motion.div>

        {/* 1. Technical Skills Matrix */}
        <div className="mb-20">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-faint)] mb-6">
            TECHNICAL REPERTOIRE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-prominent)] transition-colors duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-lg bg-[var(--accent-lime-dim)] group-hover:scale-105 transition-transform">
                      {categoryIcons[idx]}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--accent-lime)] tracking-wider uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1 mb-5 font-light">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:border-[var(--accent-lime-dim)] transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--accent-lime)]">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] mt-1 font-light leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Professional Experience & Education Dual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-[var(--border-subtle)]">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-[var(--accent-lime)]" />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lime)]">
                PROFESSIONAL EXPERIENCE
              </h3>
            </div>

            <div className="space-y-6">
              {professionalExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-[var(--border-prominent)] bg-[var(--bg-surface)] relative overflow-hidden shadow-lg transition-transform hover:scale-[1.005] duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[var(--accent-lime)] text-[#111713] font-bold mb-2">
                        {exp.type}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-[var(--accent-lime)] mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="font-mono text-xs text-[var(--text-muted)] sm:text-right">
                      <span className="block font-semibold text-[var(--text-primary)]">{exp.duration}</span>
                      <span className="block text-[var(--text-faint)]">{exp.location}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-faint)] block mb-1">
                      Project Scope: {exp.projectFocus}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {exp.contributions.map((item, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech verification tags */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-2 text-[10px] font-mono text-[var(--text-faint)]">
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)]">Full Stack React/Node</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)]">Playwright QA</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)]">GitHub Actions CI/CD</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--bg-surface-elevated)]">Bug Remediation</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-[var(--accent-lime)]" />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lime)]">
                ACADEMIC FOUNDATION
              </h3>
            </div>

            <div className="space-y-6">
              {educationJourney.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.005] duration-300"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[var(--accent-lime-dim)] text-[var(--accent-lime)] font-bold mb-3 border border-[var(--border-subtle)]">
                      {edu.graduationYear}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-[var(--accent-lime)] mt-1">
                      {edu.institution}
                    </p>

                    <p className="mt-5 text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                    <span className="text-[11px] font-mono text-[var(--text-faint)] block mb-2 uppercase">
                      Curricular Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Data Structures', 'Microprocessors', 'Digital Communication', 'Software Engineering', 'System Logic'].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

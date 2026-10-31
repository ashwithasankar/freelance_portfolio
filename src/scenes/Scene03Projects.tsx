import { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects, Project } from '../data/projects';

interface Scene03ProjectsProps {
  isDark: boolean;
}

export function Scene03Projects({ isDark }: Scene03ProjectsProps) {
  // First project, Fullstop Footwear, selected by default
  const [selectedId, setSelectedId] = useState<string>(projects[0].id);

  const currentProject = projects.find((p) => p.id === selectedId) || projects[0];

  return (
    <section
      id="work"
      className="relative py-20 md:py-32 px-6 md:px-12 border-b border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background Soft Ambience */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(183,243,107,0.2) 0%, rgba(29,40,33,0.8) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(46,107,16,0.15) 0%, rgba(220,235,215,0.6) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase">
                SCENE 03 &mdash; SELECTED WORK
              </span>
              <div className="h-[1px] w-10 bg-[var(--border-subtle)]" />
              <span className="text-xs font-mono text-[var(--text-faint)] tracking-widest uppercase">
                INDEX [01 &ndash; 05]
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Curated Web Architectures
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-md font-light leading-relaxed">
            Real deployed applications built with modern frontend paradigms, robust MERN architectures, and responsive digital poise.
          </p>
        </div>

        {/* Project Selector Pills / Tabs */}
        <div
          className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth"
          role="tablist"
          aria-label="Project selection"
        >
          {projects.map((project) => {
            const isSelected = project.id === selectedId;
            return (
              <button
                key={project.id}
                role="tab"
                id={`tab-${project.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${project.id}`}
                onClick={() => setSelectedId(project.id)}
                className={`relative px-5 py-3 rounded-xl font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2.5 border shrink-0 ${
                  isSelected
                    ? 'bg-[var(--accent-lime)] text-[#111713] font-bold border-[var(--accent-lime)] shadow-[0_0_25px_rgba(183,243,107,0.25)] scale-[1.02]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--border-prominent)]'
                }`}
              >
                <span className="opacity-70">{project.number}.</span>
                <span>{project.title}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#111713]" />}
              </button>
            );
          })}
        </div>

        {/* Main Project Presentation Showcase */}
        <div
          role="tabpanel"
          id={`panel-${currentProject.id}`}
          aria-labelledby={`tab-${currentProject.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left: Real Project Screenshot Preview in Browser Window Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[var(--border-prominent)] bg-[var(--bg-surface)] shadow-2xl flex flex-col group">
              {/* Browser Mock Window Bar */}
              <div className="px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-faint)] truncate max-w-[200px] sm:max-w-xs">
                    {currentProject.liveUrl}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--accent-lime)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] animate-ping" />
                  <span>LIVE PRODUCTION</span>
                </div>
              </div>

              {/* Dynamic Screenshot Preview with AnimatePresence */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[var(--bg-surface-subtle)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={currentProject.image}
                      alt={`${currentProject.title} screenshot`}
                      className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="eager"
                    />

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(17, 23, 19, 0.8) 0%, transparent 40%)',
                      }}
                    />

                    {/* Quick Direct Link Overlay on Screenshot Click */}
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#111713]/40 backdrop-blur-[2px]"
                      aria-label={`Open live demo of ${currentProject.title}`}
                    >
                      <div className="px-5 py-2.5 rounded-full bg-[var(--accent-lime)] text-[#111713] font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                        <span>Launch Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Window Footer Meta */}
              <div className="px-6 py-3.5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] z-20">
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
                  <span>{currentProject.category}</span>
                </div>
                <div className="text-[11px] text-[var(--text-faint)]">
                  PROJECT {currentProject.number} / 05
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Editorial Specifications & Real Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Index & Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-3xl font-bold text-[var(--accent-lime)]">
                    {currentProject.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]">
                    {currentProject.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                  {currentProject.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-mono text-[var(--accent-lime)] mt-1.5 font-medium">
                  {currentProject.tagline}
                </p>

                {/* Project Description */}
                <p className="mt-5 text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Key Technical Features */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-faint)] block mb-2">
                    Key Technical Features
                  </span>
                  {currentProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                      <Check className="w-3.5 h-3.5 text-[var(--accent-lime)] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 mt-6 p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                  {currentProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="block text-[10px] font-mono uppercase text-[var(--text-faint)]">
                        {m.label}
                      </span>
                      <span className="block text-xs font-semibold text-[var(--text-primary)] mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-faint)] block mb-2">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons: Live Demo & GitHub Repository */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center gap-3">
              {/* 1. Live Demo Button */}
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold bg-[var(--accent-lime)] text-[#111713] hover:shadow-[0_0_25px_rgba(183,243,107,0.35)] hover:opacity-95 transition-all cursor-pointer"
                aria-label={`Open live demo of ${currentProject.title} in a new tab`}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* 2. GitHub Repository Button */}
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] transition-colors cursor-pointer"
                aria-label={`Open GitHub repository of ${currentProject.title} in a new tab`}
              >
                <Github className="w-4 h-4 text-[var(--accent-lime)]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

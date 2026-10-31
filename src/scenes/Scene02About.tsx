import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

interface Scene02AboutProps {
  isDark: boolean;
}

export function Scene02About({ isDark }: Scene02AboutProps) {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleContinueJourney = () => {
    const el = document.getElementById('work');
    if (el) {
      const navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToScene = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-12 border-b border-[var(--border-subtle)] overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background Soft Atmospheric Movement */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.28, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[520px] h-[520px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(183,243,107,0.22) 0%, rgba(29,40,33,0.85) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(46,107,16,0.18) 0%, rgba(220,235,215,0.7) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Top Tag: SCENE 02 / ABOUT */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-10 md:mb-14"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase">
            SCENE 02
          </span>
          <span className="text-xs font-mono text-[var(--text-faint)]">/</span>
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">
            ABOUT
          </span>
        </motion.div>

        {/* Main Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Staggered Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]/80 backdrop-blur-md mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)]" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
                THE PERSON BEHIND THE EXPERIENCES
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.02]">
              ASHWITHA
            </h2>

            {/* Role Subtitle */}
            <p className="font-serif text-lg sm:text-2xl md:text-3xl text-[var(--text-primary)] font-normal mt-3 text-opacity-90">
              MERN Stack Developer &amp; Freelance Web Developer
            </p>

            {/* Primary Paragraph */}
            <p className="mt-6 text-sm sm:text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed max-w-xl">
              I turn ideas into purposeful digital experiences. I build modern, responsive websites for businesses that want to create a stronger, unmistakably refined digital presence.
            </p>

            {/* Secondary Italicized Paragraph */}
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[var(--text-faint)] italic font-light max-w-lg leading-relaxed">
              Crafting digital environments at the intersection of design, development and real world impact.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                type="button"
                onClick={handleContinueJourney}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-semibold border border-[var(--border-prominent)] bg-[var(--bg-surface)] hover:bg-[var(--accent-lime)] hover:text-[#111713] hover:border-[var(--accent-lime)] transition-all duration-300 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] active:scale-95"
                aria-label="Continue the journey to Scene 03 Selected Work"
              >
                <span>CONTINUE THE JOURNEY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent-lime)] group-hover:text-[#111713]" />
              </button>

              <button
                type="button"
                onClick={handleScrollToContact}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--accent-lime)] transition-colors py-3 px-2 cursor-pointer focus-visible:outline-none active:scale-95"
                aria-label="Initiate inquiry - jump to contact section"
              >
                INITIATE INQUIRY
              </button>
            </div>
          </motion.div>

          {/* Right Column: Actual Portrait with Cinematic Orbital Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] flex items-center justify-center">
              {/* Subtle Concentric Orbital Background Rings & Nodes */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <svg
                  viewBox="0 0 500 500"
                  className="w-[125%] h-[125%] max-w-none opacity-60 animate-spin-veryslow"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Orbit Arc */}
                  <circle
                    cx="250"
                    cy="250"
                    r="210"
                    stroke={isDark ? '#2E4334' : '#C7D9C4'}
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    opacity="0.6"
                  />
                  {/* Middle Orbit Arc */}
                  <circle
                    cx="250"
                    cy="250"
                    r="165"
                    stroke={isDark ? '#B7F36B' : '#3E8018'}
                    strokeWidth="0.8"
                    opacity="0.35"
                  />
                  {/* Inner Orbit Arc */}
                  <circle
                    cx="250"
                    cy="250"
                    r="115"
                    stroke={isDark ? '#2E4334' : '#C7D9C4'}
                    strokeWidth="0.8"
                    strokeDasharray="2 6"
                    opacity="0.5"
                  />

                  {/* Orbital Nodes */}
                  <circle cx="85" cy="250" r="3" fill={isDark ? '#B7F36B' : '#3E8018'} opacity="0.8" />
                  <circle cx="415" cy="250" r="2.5" fill={isDark ? '#B7F36B' : '#3E8018'} opacity="0.7" />
                  <circle cx="330" cy="110" r="2.5" fill={isDark ? '#B7F36B' : '#3E8018'} opacity="0.7" />
                  <circle cx="160" cy="380" r="2.5" fill={isDark ? '#B7F36B' : '#3E8018'} opacity="0.6" />
                </svg>

                {/* Soft Atmospheric Radial Green Glow directly behind Ashwitha's portrait */}
                <div
                  className="absolute w-72 h-72 rounded-full blur-3xl opacity-50 pointer-events-none"
                  style={{
                    background: isDark
                      ? 'radial-gradient(circle, rgba(183,243,107,0.25) 0%, rgba(29,40,33,0.85) 65%, transparent 100%)'
                      : 'radial-gradient(circle, rgba(62,128,24,0.18) 0%, rgba(215,232,210,0.8) 65%, transparent 100%)',
                  }}
                />
              </div>

              {/* Real Photograph with seamless bottom dissolution */}
              <div className="relative z-10 w-full overflow-hidden">
                <img
                  src="/ashwitha-portrait.png"
                  alt="Ashwitha - MERN Stack Developer & Freelance Web Developer"
                  className="w-full h-auto object-contain select-none drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                  style={{
                    maxHeight: '560px',
                    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scene Breadcrumb Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-[var(--text-faint)]"
        >
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => handleScrollToScene('intro')}
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              SCENE 01: INTRODUCTION
            </button>
            <span>&rarr;</span>
            <span className="text-[var(--accent-lime)] font-bold">
              SCENE 02: ABOUT
            </span>
            <span>&rarr;</span>
            <button
              onClick={() => handleScrollToScene('work')}
              className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              SCENE 03: WORK
            </button>
          </div>

          <div className="flex items-center gap-8 text-[11px]">
            <span>EST. 2026</span>
            <span>&copy; ASHWITHA. ALL RIGHTS RESERVED.</span>
          </div>
        </motion.div>

        {/* Preserved Services Showcase Section (#services anchor for Navbar) */}
        <div id="services" className="mt-24 pt-16 border-t border-[var(--border-subtle)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="font-mono text-xs text-[var(--accent-lime)] uppercase tracking-widest">
                WHAT I DELIVER
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-2">
                Specialized Engineering Services
              </h3>
            </div>
            <p className="text-sm text-[var(--text-muted)] max-w-md font-light leading-relaxed">
              Tailored development for businesses requiring distinction, security, and measurable performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.services.map((svc, idx) => (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-prominent)] transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-[var(--accent-lime)] group-hover:translate-x-1 inline-block transition-transform">
                    {svc.number}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[var(--text-primary)] mt-4">
                    {svc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mt-3">
                    {svc.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-faint)]">
                  <span>PRODUCTION READY</span>
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-lime)] opacity-60" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

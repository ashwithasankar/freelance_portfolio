import { ArrowDown, Compass, Sparkles, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { HeroEnvironment } from '../three/HeroEnvironment';
import { MobileFallback } from '../three/MobileFallback';

interface Scene01IntroProps {
  isDark: boolean;
  reducedMotion: boolean;
  onReplayIntro?: () => void;
}

export function Scene01Intro({ isDark, reducedMotion, onReplayIntro }: Scene01IntroProps) {
  const handleEnterWorld = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navOffset = 76;
      const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden border-b border-[var(--border-subtle)]"
    >
      {/* 3D WebGL Architectural Environment */}
      {reducedMotion ? (
        <MobileFallback isDark={isDark} />
      ) : (
        <HeroEnvironment isDark={isDark} reducedMotion={reducedMotion} />
      )}

      {/* Atmospheric Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(17, 23, 19, 0.65) 100%)'
            : 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(247, 249, 245, 0.6) 100%)',
        }}
      />

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono tracking-wider text-[var(--text-muted)] pointer-events-none"
      >
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
          <span className="uppercase text-[var(--text-primary)]">
            AVAILABLE FOR NEW COMMISSIONS
          </span>
          <span className="text-[var(--text-faint)]">/ 2026</span>
        </div>

        <div className="flex items-center gap-4 text-[var(--text-faint)] pointer-events-auto">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 text-[var(--text-muted)] hover:text-[var(--accent-lime)] hover:border-[var(--accent-lime)] transition-colors cursor-pointer active:scale-95"
              title="Replay cinematic intro animation"
            >
              <Play className="w-3 h-3 text-[var(--accent-lime)]" />
              <span>REPLAY INTRO</span>
            </button>
          )}

          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
              <span>SCENE 01 &mdash; 3D ARCHITECTURAL WORLD</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Centerpiece with Staggered Entrance */}
      <div className="relative z-20 max-w-5xl mx-auto w-full my-auto text-center flex flex-col items-center pointer-events-none">
        {/* Editorial Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--glass-bg)] backdrop-blur-md mb-6 pointer-events-auto shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lime)]">
            {siteConfig.brand} &middot; Portfolio
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] max-w-4xl pointer-events-auto"
        >
          Ideas deserve more than{' '}
          <span className="italic font-normal underline decoration-[var(--accent-lime)] decoration-wavy decoration-1 underline-offset-8">
            ordinary
          </span>{' '}
          websites.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-[var(--text-muted)] font-light max-w-2xl leading-relaxed pointer-events-auto"
        >
          {siteConfig.hero.supportingText}
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
        >
          <button
            onClick={handleEnterWorld}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.25em] font-semibold bg-[var(--accent-lime)] text-[#111713] hover:shadow-[0_0_35px_rgba(183,243,107,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)]"
            aria-label="Enter my world - scroll to about section"
          >
            <span>{siteConfig.hero.cta}</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>

        {/* 3D Interaction Pointer Prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 text-[11px] font-mono tracking-widest text-[var(--text-faint)] uppercase pointer-events-auto"
        >
          WebGL &middot; Move cursor or drag canvas to orbit 3D structures
        </motion.p>
      </div>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-20 max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-faint)] pointer-events-none"
      >
        <div className="flex items-center gap-3 font-mono pointer-events-auto">
          <span className="text-[var(--accent-lime)] font-bold">01/05</span>
          <span>CINEMATIC INTRO</span>
        </div>

        <button
          onClick={handleEnterWorld}
          className="flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors cursor-pointer group font-mono text-xs pointer-events-auto"
          aria-label="Scroll to About section"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <div className="hidden sm:block font-mono text-right pointer-events-auto">
          FULL STACK ENGINEERING &middot; FREELANCE WEB ARCHITECTURE
        </div>
      </motion.div>
    </section>
  );
}

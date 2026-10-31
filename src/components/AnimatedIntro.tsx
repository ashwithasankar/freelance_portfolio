import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface AnimatedIntroProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export function AnimatedIntro({ onComplete, reducedMotion = false }: AnimatedIntroProps) {
  const [phase, setPhase] = useState<'light' | 'brand' | 'headline' | 'ready'>('light');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    // Sequence timeline:
    // 0ms: Light streak starts
    // 900ms: Brand name reveal
    // 2100ms: Headline reveal
    // 3200ms: "ENTER MY WORLD" button prominent & ready
    const t1 = setTimeout(() => setPhase('brand'), 900);
    const t2 = setTimeout(() => setPhase('headline'), 2100);
    const t3 = setTimeout(() => setPhase('ready'), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reducedMotion, onComplete]);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(10px)',
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111713] text-[#F3F5F1] overflow-hidden select-none px-6"
        >
          {/* Subtle Forest-Green Atmospheric Gradient Depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(29, 40, 33, 0.95) 0%, #111713 75%)',
            }}
          />

          {/* 1. Anamorphic Light Beam sweeping across the screen */}
          <motion.div
            initial={{ x: '-120%', opacity: 0 }}
            animate={{
              x: ['-120%', '120%'],
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: 2.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="absolute top-1/2 -translate-y-1/2 w-[80vw] h-[2px] pointer-events-none z-10"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(183, 243, 107, 0.2) 20%, #B7F36B 50%, rgba(183, 243, 107, 0.2) 80%, transparent 100%)',
              boxShadow: '0 0 45px 8px rgba(183, 243, 107, 0.55)',
            }}
          />

          {/* Secondary Vertical Optical Flare Shimmer */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0, 0.45, 0],
              scaleY: [0, 1.4, 0],
            }}
            transition={{
              duration: 1.6,
              delay: 0.7,
              ease: 'easeOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-96 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, transparent, rgba(183, 243, 107, 0.6), transparent)',
              boxShadow: '0 0 30px rgba(183, 243, 107, 0.4)',
            }}
          />

          {/* Top Skip Button */}
          <button
            type="button"
            onClick={handleEnter}
            className="absolute top-6 right-6 z-30 font-mono text-[11px] tracking-widest uppercase text-[#A8B5AA] hover:text-[#B7F36B] transition-colors py-2 px-3.5 border border-[#A8B5AA]/20 hover:border-[#B7F36B]/50 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F36B]"
            aria-label="Skip cinematic introduction"
          >
            SKIP INTRO [ESC]
          </button>

          {/* Central Cinematic Content */}
          <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{
                opacity: phase !== 'light' ? 1 : 0,
                y: phase !== 'light' ? 0 : 14,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(183,243,107,0.25)] bg-[#1D2821]/60 backdrop-blur-md mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B7F36B]" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#B7F36B]">
                Interactive Portfolio
              </span>
            </motion.div>

            {/* 3. Brand Name Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, letterSpacing: '0.3em' }}
              animate={{
                opacity: phase !== 'light' ? 1 : 0,
                scale: phase !== 'light' ? 1 : 0.94,
                letterSpacing: phase !== 'light' ? '0.02em' : '0.3em',
              }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#F3F5F1]">
                ASHWITHA<span className="text-[#B7F36B]">.</span>
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-[#A8B5AA] uppercase mt-2">
                MERN Stack Developer &middot; Freelance Web Developer
              </p>
            </motion.div>

            {/* Accent Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: phase === 'headline' || phase === 'ready' ? 1 : 0,
                opacity: phase === 'headline' || phase === 'ready' ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-[1px] w-24 bg-[#B7F36B]/50 my-6"
            />

            {/* 4. Headline Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: phase === 'headline' || phase === 'ready' ? 1 : 0,
                y: phase === 'headline' || phase === 'ready' ? 0 : 20,
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <h2 className="font-serif text-2xl sm:text-4xl text-[#F3F5F1] font-light leading-snug">
                &ldquo;Ideas deserve more than{' '}
                <span className="italic text-[#B7F36B] font-normal">ordinary</span>{' '}
                websites.&rdquo;
              </h2>
              <p className="text-xs sm:text-base text-[#A8B5AA] font-light max-w-lg mx-auto">
                Thoughtful digital experiences for ambitious businesses.
              </p>
            </motion.div>

            {/* 6. Prominent ENTER MY WORLD Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{
                opacity: phase === 'ready' ? 1 : 0,
                scale: phase === 'ready' ? 1 : 0.9,
                y: phase === 'ready' ? 0 : 15,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10"
            >
              <button
                type="button"
                onClick={handleEnter}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.25em] font-bold bg-[#B7F36B] text-[#111713] hover:shadow-[0_0_35px_rgba(183,243,107,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3F5F1]"
              >
                <span>ENTER MY WORLD</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Coordinate Watermark */}
          <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-[#A8B5AA]/40 uppercase hidden sm:block">
            11.1085&deg; N, 77.3411&deg; E &middot; ASHWITHA DIGITAL REALM
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-widest text-[#A8B5AA]/40 uppercase hidden sm:block">
            EST. 2026 &middot; CINEMATIC WEB EXPERIENCES
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

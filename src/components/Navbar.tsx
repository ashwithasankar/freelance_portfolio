import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onReplayIntro?: () => void;
}

export function Navbar({ activeSection, isDark, onToggleTheme, onReplayIntro }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Craft / Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-backdrop)] backdrop-blur-md border-b border-[var(--border-subtle)] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollToSection('intro')}
          className="text-left group cursor-pointer focus-visible:outline-none"
          aria-label="Ashwitha portfolio home"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:opacity-90 transition-opacity">
            ASHWITHA
            <span className="text-[var(--accent-lime)]">.</span>
          </span>
          <span className="block text-[10px] font-mono tracking-widest text-[var(--text-faint)] uppercase -mt-0.5">
            MERN Developer
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-lime)] group ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent-lime)] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[var(--accent-lime)] opacity-0 group-hover:opacity-40 transition-opacity rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Social Profile Icons (GitHub & LinkedIn) */}
          <div className="hidden lg:flex items-center gap-1 border-r border-[var(--border-subtle)] pr-2.5 mr-1">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashwitha's GitHub Profile"
              title="GitHub Profile"
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--accent-lime)] hover:bg-[var(--bg-surface-subtle)] transition-all duration-200 active:scale-95"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashwitha's LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--accent-lime)] hover:bg-[var(--bg-surface-subtle)] transition-all duration-200 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-[var(--border-prominent)] bg-[var(--accent-lime-dim)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime)] hover:text-[#111713] transition-all duration-200 cursor-pointer focus-visible:outline-none active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] active:scale-95 transition-transform"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[65px] bg-[var(--bg-primary)]/98 backdrop-blur-xl z-50 md:hidden flex flex-col justify-between p-8 border-t border-[var(--border-subtle)] overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pt-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lime)]">
                Navigation
              </span>
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.05, duration: 0.25 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left text-2xl font-serif tracking-tight transition-colors py-1 flex items-center justify-between ${
                      isActive ? 'text-[var(--accent-lime)] font-bold' : 'text-[var(--text-primary)]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-[var(--accent-lime)] text-[#111713]">
                        ACTIVE
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-4">
              {/* Mobile Social Profile Links */}
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-mono text-[var(--text-faint)]">PROFILES</span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ashwitha's GitHub Profile"
                    className="p-2.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ashwitha's LinkedIn Profile"
                    className="p-2.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] hover:text-[var(--accent-lime)] transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-[var(--accent-lime)]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full py-2.5 text-center text-xs font-mono uppercase tracking-widest rounded-full border border-[var(--border-prominent)] text-[var(--accent-lime)] hover:bg-[var(--accent-lime)] hover:text-[#111713] transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Replay Cinematic Intro</span>
                </button>
              )}

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3.5 text-center text-sm font-semibold rounded-full bg-[var(--accent-lime)] text-[#111713] hover:opacity-95 transition-opacity"
              >
                Get In Touch
              </button>
              <p className="text-xs text-[var(--text-faint)] text-center font-mono">
                {siteConfig.contact.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

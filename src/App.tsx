import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { SceneIndicator } from './components/SceneIndicator';
import { AnimatedIntro } from './components/AnimatedIntro';
import { Scene01Intro } from './scenes/Scene01Intro';
import { Scene02About } from './scenes/Scene02About';
import { Scene03Projects } from './scenes/Scene03Projects';
import { Scene04Journey } from './scenes/Scene04Journey';
import { Scene05Contact } from './scenes/Scene05Contact';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const reducedMotion = useReducedMotion();
  const [introFinished, setIntroFinished] = useState(false);

  const sectionIds = ['intro', 'about', 'services', 'work', 'skills', 'contact'];
  const activeSection = useActiveSection(sectionIds, 120);

  // Keyboard shortcut: Escape to skip intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !introFinished) {
        setIntroFinished(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [introFinished]);

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIntroFinished(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 relative">
      {/* Cinematic Opening Intro Sequence */}
      {!introFinished && (
        <AnimatedIntro
          onComplete={() => setIntroFinished(true)}
          reducedMotion={reducedMotion}
        />
      )}

      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Fixed Navigation Header */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onReplayIntro={handleReplayIntro}
      />

      {/* Scene Indicator (Right Floating Desktop Widget) */}
      <SceneIndicator activeSection={activeSection} />

      {/* Five Continuous Cinematic Scenes */}
      <main id="main-content">
        {/* Scene 01: Cinematic 3D Architectural Introduction */}
        <Scene01Intro
          isDark={isDark}
          reducedMotion={reducedMotion}
          onReplayIntro={handleReplayIntro}
        />

        {/* Scene 02: About Ashwitha & Services */}
        <Scene02About isDark={isDark} />

        {/* Scene 03: Selected Work */}
        <Scene03Projects isDark={isDark} />

        {/* Scene 04: Skills & Professional Journey */}
        <Scene04Journey isDark={isDark} />

        {/* Scene 05: Contact (Final Scene) */}
        <Scene05Contact isDark={isDark} />
      </main>
    </div>
  );
}

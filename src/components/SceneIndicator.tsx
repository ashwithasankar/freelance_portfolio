interface SceneIndicatorProps {
  activeSection: string;
}

const scenes = [
  { id: 'intro', num: '01', name: 'Intro' },
  { id: 'about', num: '02', name: 'About' },
  { id: 'work', num: '03', name: 'Work' },
  { id: 'skills', num: '04', name: 'Craft' },
  { id: 'contact', num: '05', name: 'Contact' },
];

export function SceneIndicator({ activeSection }: SceneIndicatorProps) {
  const currentScene = scenes.find((s) => s.id === activeSection) || scenes[0];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pointer-events-auto"
      aria-label="Scene navigation"
    >
      <div className="flex flex-col items-center gap-3 bg-[var(--nav-backdrop)] backdrop-blur-md px-2.5 py-4 rounded-full border border-[var(--border-subtle)] shadow-lg">
        {scenes.map((scene) => {
          const isActive = scene.id === activeSection;
          return (
            <button
              key={scene.id}
              onClick={() => handleScrollTo(scene.id)}
              className="group relative flex items-center justify-center p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] rounded-full"
              aria-label={`Jump to Scene ${scene.num}: ${scene.name}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-6 bg-[var(--accent-lime)]'
                    : 'w-2 h-2 bg-[var(--text-faint)] group-hover:bg-[var(--text-primary)] group-hover:scale-125'
                }`}
              />
              <span className="sr-only">{scene.name}</span>

              {/* Hover Tooltip */}
              <span className="absolute right-8 px-2.5 py-1 rounded text-[11px] font-mono tracking-wider uppercase whitespace-nowrap bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                {scene.num} · {scene.name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="text-[10px] font-mono tracking-widest text-[var(--text-faint)] rotate-90 origin-center translate-y-6">
        SCENE {currentScene.num}
      </div>
    </aside>
  );
}

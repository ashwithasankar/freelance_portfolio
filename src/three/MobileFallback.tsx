interface MobileFallbackProps {
  isDark?: boolean;
}

export function MobileFallback({ isDark = true }: MobileFallbackProps) {
  const limeColor = isDark ? '#B7F36B' : '#3E8018';
  const ringColor = isDark ? '#1D2821' : '#E2EAE0';

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative w-[500px] h-[500px] max-w-full aspect-square flex items-center justify-center opacity-70">
        {/* Outer Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed transition-transform duration-1000"
          style={{ borderColor: ringColor, transform: 'scale(0.95)' }}
        />
        {/* Middle Ring */}
        <div
          className="absolute inset-8 rounded-full border opacity-50"
          style={{ borderColor: limeColor }}
        />
        {/* Inner Ring with Accent */}
        <div
          className="absolute inset-20 rounded-full border border-dotted opacity-75"
          style={{ borderColor: ringColor }}
        />
        {/* Center Glow */}
        <div
          className="w-32 h-32 rounded-full blur-2xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(183,243,107,0.18) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(62,128,24,0.12) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}

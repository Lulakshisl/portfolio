import { useEffect, useState } from 'react';
import LushiLogo from './LushiLogo';

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const nameLetters = ['L', 'U', 'S', 'H', 'I'];

  // Staggered letter reveal
  
  useEffect(() => {
    if (letterIndex < nameLetters.length) {
      const timer = setTimeout(() => {
        setLetterIndex((prev) => prev + 1);
      }, 150); // each letter appears every 150ms
      return () => clearTimeout(timer);
    }
  }, [letterIndex]);

  // Progress counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onDone, 500);
          }, 400);
          return 100;
        }
        return p + 1.2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onDone]);

  // Determine how many dots are filled (5 dots = 100%)
  const filledDots = Math.min(Math.floor(progress / 20), 5);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0b0b14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.7s ease',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Logo – gentle rotation */}
      <div
        style={{
          marginBottom: 36,
          animation: 'logo-spin 12s linear infinite',
        }}
      >
        <LushiLogo size={72} />
      </div>

      {/* Name – each letter appears staggered */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 6,
          color: '#eae8f2',
          marginBottom: 4,
        }}
      >
        {nameLetters.map((letter, i) => (
          <span
            key={i}
            style={{
              opacity: i < letterIndex ? 1 : 0,
              transform: i < letterIndex ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transitionDelay: `${i * 0.05}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Subtitle – fades in after all letters are shown */}
      <div
        style={{
          fontSize: 10,
          letterSpacing: 6,
          color: 'rgba(167, 139, 250, 0.4)',
          marginBottom: 44,
          opacity: letterIndex === nameLetters.length ? 1 : 0,
          transform: letterIndex === nameLetters.length ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          transitionDelay: '0.2s',
        }}
      >
        PORTFOLIO
      </div>

      {/* Dot progress indicator – 5 dots, fill from left to right */}
      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 14,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i < filledDots ? '#7c3aed' : 'rgba(255,255,255,0.06)',
              transition: 'background 0.2s ease',
            }}
          />
        ))}
      </div>

      {/* Percentage – optional but clean */}
      <div
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: 'rgba(167, 139, 250, 0.4)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: 1,
        }}
      >
        {Math.round(progress)}%
      </div>

      <style>{`
        @keyframes logo-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
import { useEffect, useState } from 'react'
import LushiLogo from './LushiLogo'

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut,  setFadeOut]  = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onDone, 600)
          }, 400)
          return 100
        }
        return p + 1.5
      })
    }, 25)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#07070f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
    }}>

      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width:  `${2 + (i % 3)}px`,
          height: `${10 + (i % 5) * 8}px`,
          background: i % 2 === 0
            ? 'rgba(139,92,246,0.55)'
            : 'rgba(167,139,250,0.4)',
          borderRadius: '99px',
          left: `${5 + i * 6.5}%`,
          top:  `${15 + (i % 5) * 14}%`,
          animation: `particle-float ${2.5 + (i % 4) * 0.5}s ease-in-out ${i * 0.2}s infinite alternate`,
          transform: `rotate(${-40 + i * 12}deg)`,
        }}/>
      ))}

      {/* Big background glow */}
      <div style={{
        position: 'absolute',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)',
        filter: 'blur(50px)',
        animation: 'glow-pulse 2.5s ease-in-out infinite',
        pointerEvents: 'none',
      }}/>

      {/* Logo wrapper with spin + glow */}
      <div
        className="logo-spin"
        style={{
          position: 'relative', zIndex: 2,
          marginBottom: '32px',
          filter: 'drop-shadow(0 0 24px rgba(139,92,246,0.9)) drop-shadow(0 0 48px rgba(139,92,246,0.5))',
          animation: 'logo-breathe 2.5s ease-in-out infinite',
        }}
      >
        <LushiLogo size={110}/>
      </div>

      {/* Name */}
      <div style={{
        letterSpacing: '10px', fontSize: '20px', fontWeight: '900',
        color: 'white', marginBottom: '6px',
        position: 'relative', zIndex: 2,
        textShadow: '0 0 20px rgba(139,92,246,0.6)',
        animation: 'fade-in-up 0.8s ease both',
      }}>
        LUSHI
      </div>

      {/* Subtitle */}
      <div style={{
        letterSpacing: '4px', fontSize: '11px',
        color: 'rgba(167,139,250,0.65)',
        marginBottom: '44px',
        position: 'relative', zIndex: 2,
        animation: 'fade-in-up 0.8s ease 0.15s both',
      }}>
        
      </div>

      {/* Loading text */}
      <div style={{
        fontSize: '11px', color: 'rgba(148,163,184,0.55)',
        letterSpacing: '2px', marginBottom: '14px',
        position: 'relative', zIndex: 2,
        animation: 'fade-in-up 0.8s ease 0.3s both',
      }}>
        Loading the experience...
      </div>

      {/* Progress bar */}
      <div style={{
        width: '220px', height: '2px',
        background: 'rgba(139,92,246,0.15)',
        borderRadius: '99px', overflow: 'hidden',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg,#8b5cf6,#a78bfa,#c084fc)',
          borderRadius: '99px',
          boxShadow: '0 0 10px rgba(139,92,246,0.9)',
          transition: 'width 0.025s linear',
        }}/>
      </div>

      <style>{`
        @keyframes particle-float {
          from { opacity:0.2; transform:translateY(0px) rotate(-40deg) scale(0.8); }
          to   { opacity:0.8; transform:translateY(-24px) rotate(15deg) scale(1.1); }
        }
        @keyframes glow-pulse {
          0%,100% { transform:scale(1);   opacity:0.7; }
          50%      { transform:scale(1.15); opacity:1;   }
        }
        @keyframes logo-breathe {
          0%,100% {
            filter: drop-shadow(0 0 20px rgba(139,92,246,0.8)) drop-shadow(0 0 40px rgba(139,92,246,0.4));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(139,92,246,1)) drop-shadow(0 0 80px rgba(139,92,246,0.7));
            transform: scale(1.06);
          }
        }
        @keyframes fade-in-up {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0);    }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen

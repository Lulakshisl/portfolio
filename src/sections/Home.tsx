import { useState, useEffect, useContext, useRef } from 'react'
import { ThemeContext } from '../App'

const roles = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Mobile Developer']

const Home = () => {
  const { dark } = useContext(ThemeContext)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = roles[idx]
    if (typing) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 90)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 45)
        return () => clearTimeout(t)
      } else {
        setIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [text, typing, idx])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 100 }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      r:     Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.006 + 0.002,
      dir:   Math.random() > 0.5 ? 1 : -1,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.speed * s.dir
        if (s.alpha >= 0.65 || s.alpha <= 0.05) s.dir *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = dark
          ? `rgba(167,139,250,${s.alpha * 0.6})`
          : `rgba(124,58,237,${s.alpha * 0.35})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [dark])

  const bg            = dark ? '#080810'                : '#f0eeff'
  const heading       = dark ? 'white'                  : '#1e1b4b'
  const muted         = dark ? '#94a3b8'                : '#6b5b95'
  const faint         = dark ? '#64748b'                : '#7c6fa5'
  const outlineBorder = dark ? 'rgba(139,92,246,0.4)'   : 'rgba(124,58,237,0.4)'
  const outlineText   = dark ? '#a78bfa'                : '#7c3aed'
  const outlineBg     = dark ? 'rgba(139,92,246,0.05)'  : 'rgba(124,58,237,0.06)'
  const socialBorder  = dark ? 'rgba(71,85,105,0.3)'    : 'rgba(124,58,237,0.2)'
  const cardBorder    = dark ? 'rgba(139,92,246,0.35)'  : 'rgba(124,58,237,0.3)'
  const ringBg        = dark ? '#080810'                : '#f0eeff'

  return (
    <div
      className="home-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5% 0 8%',
        background: bg,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stars */}
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}/>

      {/* Glow orbs */}
      <div style={{ position:'absolute', top:'-150px', left:'-80px', width:'520px', height:'520px', borderRadius:'50%', background: dark ? 'radial-gradient(circle,rgba(139,92,246,0.08),transparent 65%)' : 'radial-gradient(circle,rgba(139,92,246,0.12),transparent 65%)', pointerEvents:'none', zIndex:0 }}/>
      <div style={{ position:'absolute', bottom:'-100px', right:'10%', width:'380px', height:'380px', borderRadius:'50%', background: dark ? 'radial-gradient(circle,rgba(99,102,241,0.07),transparent 65%)' : 'radial-gradient(circle,rgba(99,102,241,0.09),transparent 65%)', pointerEvents:'none', zIndex:0 }}/>

      {/* Left content */}
      <div style={{ flex:1, maxWidth:'580px', position:'relative', zIndex:1 }}>

        {/* Badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background: dark ? 'rgba(139,92,246,0.1)' : 'rgba(124,58,237,0.08)', border:`1px solid ${dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'}`, borderRadius:'50px', padding:'6px 16px', marginBottom:'28px' }}>
          <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#8b5cf6', display:'inline-block', animation:'badge-pulse 2s ease-in-out infinite' }}/>
          <span style={{ color:outlineText, fontSize:'12px', fontWeight:'600', letterSpacing:'2px', textTransform:'uppercase' }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize:'clamp(44px,5.5vw,72px)', fontWeight:'900', lineHeight:'1.05', marginBottom:'16px', color:heading, letterSpacing:'-2px' }}>
          Hi, I'm<br/>
          <span style={{ background:'linear-gradient(135deg,#8b5cf6,#6366f1,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Lulakshi
          </span>
        </h1>

        {/* Typing */}
        <div style={{ height:'36px', marginBottom:'24px', display:'flex', alignItems:'center', gap:'4px' }}>
          <span style={{ color:muted, fontSize:'20px', fontWeight:'500' }}>I build as a </span>
          <span style={{ color:outlineText, fontSize:'20px', fontWeight:'700' }}>{text}</span>
          <span style={{ color:'#8b5cf6', fontSize:'20px' }}>|</span>
        </div>

        {/* Description */}
        <p style={{ color:faint, fontSize:'16px', lineHeight:'1.8', marginBottom:'40px', maxWidth:'460px' }}>
          Passionate Software Engineering student from Sri Lanka, building modern web apps, mobile experiences, and innovative digital solutions.
        </p>

        {/* Buttons */}
        <div
          className="home-buttons"
          style={{ display:'flex', gap:'16px', marginBottom:'48px', flexWrap:'wrap' }}
        >
          <div
            onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({ behavior:'smooth' }) }}
            className="btn-primary"
            style={{ background:'linear-gradient(135deg,#8b5cf6,#6366f1)', color:'white', padding:'14px 32px', borderRadius:'50px', fontWeight:'800', fontSize:'15px', boxShadow:'0 8px 30px rgba(139,92,246,0.35)', cursor:'pointer', userSelect:'none' as const, transition:'all 0.2s' }}
          >
            Let's Work Together →
          </div>
          <div
            onClick={() => { const link = document.createElement('a'); link.href = "/lulakshi's cv .pdf"; link.download = 'Lulakshi_CV.pdf'; link.click() }}
            className="btn-secondary"
            style={{ border:`2px solid ${outlineBorder}`, color:outlineText, padding:'14px 32px', borderRadius:'50px', fontWeight:'700', fontSize:'15px', background:outlineBg, cursor:'pointer', userSelect:'none' as const, transition:'all 0.2s' }}
          >
            Download CV
          </div>
        </div>

        {/* Social */}
        <div style={{ display:'flex', gap:'12px', alignItems:'center' }}>
          <span style={{ color:faint, fontSize:'12px', letterSpacing:'2px', textTransform:'uppercase' }}>Find me on</span>
          <div style={{ width:'30px', height:'1px', background: dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)' }}/>
          {[
            { label:'GitHub',   href:'https://github.com/Lulakshisl', icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
            { label:'LinkedIn', href:'https://www.linkedin.com/in/lulakshi-madubashini-3177aa2a4/', icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { label:'YouTube',  href:'https://www.youtube.com/@LulakshiMadubashini', icon:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.12C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.386.521A2.999 2.999 0 0 0 .502 6.186 31.06 31.06 0 0 0 0 12a31.06 31.06 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.112 2.12c1.881.521 9.386.521 9.386.521s7.505 0 9.386-.521a2.999 2.999 0 0 0 2.112-2.12A31.06 31.06 0 0 0 24 12a31.06 31.06 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          ].map(s => (
            <div key={s.label} onClick={() => window.open(s.href,'_blank')} className="social-btn" style={{ color: dark ? '#cbd5e1' : '#5b21b6', width:'40px', height:'40px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', border:`1px solid ${socialBorder}`, background: dark ? 'rgba(139,92,246,0.05)' : 'rgba(124,58,237,0.04)', transition:'all 0.2s' }}>
              {s.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Right — photo */}
      <div
        className="home-photo-wrapper"
        style={{ position:'relative', flexShrink:0, zIndex:1, marginRight:'-2%' }}
      >
        <div style={{ position:'absolute', inset:'-3px', borderRadius:'50%', background:ringBg }}/>
        <div
          className="float-photo"
          style={{ position:'relative', width:'400px', height:'400px', borderRadius:'50%', overflow:'hidden', border:`3px solid ${cardBorder}`, boxShadow: dark ? '0 0 60px rgba(139,92,246,0.25)' : '0 0 60px rgba(139,92,246,0.2)' }}
        >
          <img src="/hero.png" alt="Lulakshi" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        </div>
      </div>

      <style>{`
        @keyframes floaty {
          0%,100% { transform:translateY(0px); }
          50%      { transform:translateY(-14px); }
        }
        @keyframes badge-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }
        .float-photo { animation:floaty 4s ease-in-out infinite; }
        .btn-primary:hover  { transform:translateY(-2px); box-shadow:0 14px 40px rgba(139,92,246,0.55) !important; }
        .btn-secondary:hover { background:rgba(139,92,246,0.12) !important; transform:translateY(-2px); }
        .social-btn:hover   { color:#a78bfa !important; border-color:rgba(139,92,246,0.4) !important; background:rgba(139,92,246,0.1) !important; transform:translateY(-3px); }

        @media (max-width: 768px) {
          .home-wrapper {
            flex-direction: column !important;
            padding: 100px 6% 60px !important;
            gap: 40px !important;
            align-items: center !important;
          }
          .home-photo-wrapper {
            width: 240px !important;
            height: 240px !important;
            margin-right: 0 !important;
          }
          .home-photo-wrapper .float-photo {
            width: 240px !important;
            height: 240px !important;
          }
          .home-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          .home-buttons > div {
            text-align: center !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
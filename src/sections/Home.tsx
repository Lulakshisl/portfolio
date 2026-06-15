import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const roles = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Mobile Developer']

const Home = () => {
  const { dark } = useContext(ThemeContext)
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
        setIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [text, typing, idx])

  const bg = dark
    ? 'linear-gradient(135deg,#080810 0%,#0e0e20 60%,#080810 100%)'
    : 'linear-gradient(135deg,#f8f7ff 0%,#ede9fe 60%,#f8f7ff 100%)'
  const heading = dark ? 'white' : '#1e1b4b'
  const muted = dark ? '#94a3b8' : '#6b5b95'
  const faint = dark ? '#64748b' : '#7c6fa5'
  const orb1 = dark ? 'rgba(139,92,246,0.08)' : 'rgba(139,92,246,0.12)'
  const ringBg = dark ? '#080810' : '#f8f7ff'
  const outlineBorder = dark ? 'rgba(139,92,246,0.4)' : 'rgba(124,58,237,0.4)'
  const outlineText = dark ? '#a78bfa' : '#7c3aed'
  const outlineBg = dark ? 'rgba(139,92,246,0.05)' : 'rgba(124,58,237,0.06)'
  const socialBorder = dark ? 'rgba(71,85,105,0.3)' : 'rgba(124,58,237,0.2)'
  const cardBg = dark ? 'rgba(14,14,32,0.9)' : 'rgba(255,255,255,0.9)'
  const cardBorder = dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 6%',background:bg,position:'relative',overflow:'hidden'}}>

      <div style={{position:'absolute',width:'500px',height:'500px',borderRadius:'50%',background:`radial-gradient(circle,${orb1},transparent)`,top:'-100px',left:'-100px',pointerEvents:'none'}}/>

      <div style={{maxWidth:'560px',position:'relative',zIndex:1}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:dark?'rgba(139,92,246,0.1)':'rgba(124,58,237,0.08)',border:`1px solid ${dark?'rgba(139,92,246,0.3)':'rgba(124,58,237,0.25)'}`,borderRadius:'50px',padding:'6px 16px',marginBottom:'28px'}}>
          <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#8b5cf6',display:'inline-block'}}/>
          <span style={{color:outlineText,fontSize:'12px',fontWeight:'600',letterSpacing:'2px',textTransform:'uppercase'}}>Available for opportunities</span>
        </div>

        <h1 style={{fontSize:'68px',fontWeight:'900',lineHeight:'1.05',marginBottom:'16px',color:heading,letterSpacing:'-2px'}}>
          Hi, I'm<br/>
          <span style={{background:'linear-gradient(135deg,#8b5cf6,#6366f1,#a78bfa)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
            Lulakshi
          </span>
        </h1>

        <div style={{height:'36px',marginBottom:'24px',display:'flex',alignItems:'center',gap:'4px'}}>
          <span style={{color:muted,fontSize:'20px',fontWeight:'500'}}>I build as a </span>
          <span style={{color:outlineText,fontSize:'20px',fontWeight:'700'}}>{text}</span>
          <span style={{color:'#8b5cf6',fontSize:'20px'}}>|</span>
        </div>

        <p style={{color:faint,fontSize:'16px',lineHeight:'1.8',marginBottom:'40px',maxWidth:'460px'}}>
          Passionate Software Engineering student from Sri Lanka, building modern web apps, mobile experiences, and innovative digital solutions.
        </p>

        <div style={{display:'flex',gap:'16px',marginBottom:'48px'}}>
          <a href="#contact" style={{background:'linear-gradient(135deg,#8b5cf6,#6366f1)',color:'white',padding:'15px 36px',borderRadius:'12px',fontWeight:'800',textDecoration:'none',fontSize:'15px',boxShadow:'0 8px 30px rgba(139,92,246,0.35)'}}>
            Let's Work Together →
          </a>
          <a href="/lulakshi's cv .pdf" download style={{border:`2px solid ${outlineBorder}`,color:outlineText,padding:'15px 36px',borderRadius:'12px',fontWeight:'700',textDecoration:'none',fontSize:'15px',background:outlineBg}}>
            Download CV
          </a>
        </div>

        <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <span style={{color:faint,fontSize:'12px',letterSpacing:'2px',textTransform:'uppercase'}}>Find me on</span>
          <div style={{width:'30px',height:'1px',background:dark?'rgba(139,92,246,0.3)':'rgba(124,58,237,0.25)'}}/>
          {[
            {label:'GitHub',href:'https://github.com/Lulakshisl',icon:(
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            )},
            {label:'LinkedIn',href:'https://www.linkedin.com/in/lulakshi-madubashini-3177aa2a4/',icon:(
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            )},
            {label:'YouTube',href:'https://www.youtube.com/@LulakshiMadubashini',icon:(
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.12C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.386.521A2.999 2.999 0 0 0 .502 6.186 31.06 31.06 0 0 0 0 12a31.06 31.06 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.112 2.12c1.881.521 9.386.521 9.386.521s7.505 0 9.386-.521a2.999 2.999 0 0 0 2.112-2.12A31.06 31.06 0 0 0 24 12a31.06 31.06 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            )},
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              color:dark?'#cbd5e1':'#5b21b6',width:'40px',height:'40px',borderRadius:'10px',
              display:'flex',alignItems:'center',justifyContent:'center',
              textDecoration:'none',border:`1px solid ${socialBorder}`,
              background:dark?'rgba(139,92,246,0.05)':'rgba(124,58,237,0.04)'
            }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div style={{position:'relative',flexShrink:0,zIndex:1}}>
        <div style={{position:'absolute',inset:'-2px',borderRadius:'50%',background:ringBg}}/>
        <div className="float-photo" style={{position:'relative',width:'360px',height:'360px',borderRadius:'50%',overflow:'hidden',border:`3px solid ${cardBorder}`,boxShadow:dark?'0 0 80px rgba(139,92,246,0.2)':'0 0 80px rgba(139,92,246,0.15)'}}>
          <img src="/hero.png" alt="Lulakshi" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div style={{position:'absolute',bottom:'30px',left:'-70px',background:cardBg,border:`1px solid ${cardBorder}`,borderRadius:'12px',padding:'12px 18px',backdropFilter:'blur(10px)'}}>
          <div style={{color:'#8b5cf6',fontSize:'22px',fontWeight:'900'}}>10+</div>
          <div style={{color:muted,fontSize:'11px',fontWeight:'600'}}>Projects Done</div>
        </div>
        <div style={{position:'absolute',top:'40px',right:'-60px',background:cardBg,border:`1px solid ${cardBorder}`,borderRadius:'12px',padding:'12px 18px',backdropFilter:'blur(10px)'}}>
          <div style={{color:'#6366f1',fontSize:'22px',fontWeight:'900'}}>5+</div>
          <div style={{color:muted,fontSize:'11px',fontWeight:'600'}}>Technologies</div>
        </div>
      </div>

      <style>{`
        @keyframes floaty { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-15px)} }
        .float-photo { animation: floaty 4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

export default Home

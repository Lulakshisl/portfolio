import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'
import LushiLogo from './LushiLogo'

const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('Home')
  const { dark, toggle }        = useContext(ThemeContext)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].toLowerCase())
        if (el && el.offsetTop <= scrollY) {
          setActive(items[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item: string) => {
    setActive(item)
    const el = document.getElementById(item.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const textColor   = dark ? '#94a3b8' : '#6b5b95'
  const activeColor = dark ? '#ffffff'  : '#1e1b4b'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '10px 4%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled
          ? (dark ? 'rgba(7,7,15,0.95)' : 'rgba(248,247,255,0.95)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? `1px solid ${dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.1)'}`
          : 'none',
        transition: 'all 0.4s',
      }}>

        {/* ── Logo ── */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', cursor:'pointer' }}
          onClick={() => handleNavClick('Home')}>
          <div style={{
            filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.6))',
            transition: 'filter 0.3s ease',
          }}
          className="nav-logo"
          >
            <LushiLogo size={36}/>
          </div>
          <div style={{ display:'flex', flexDirection:'column', lineHeight:1.15 }}>
            <span style={{
              fontWeight: 900, fontSize: '16px', letterSpacing: '2px',
              color: dark ? 'white' : '#1e1b4b',
            }}>
              LUSHI
            </span>
          </div>
        </div>

        {/* ── Nav items ── */}
        <div style={{ display:'flex', gap:'28px', alignItems:'center' }}>
          {items.map(item => {
            const isActive = active === item
            return (
              <div
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-item"
                style={{
                  color: isActive ? activeColor : textColor,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '14px',
                  position: 'relative',
                  paddingBottom: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  userSelect: 'none' as const,
                }}
              >
                {item}
                <span style={{
                  position: 'absolute',
                  bottom: 0, left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'block',
                  width: isActive ? '60%' : '0%',
                  height: '2px',
                  borderRadius: '99px',
                  background: 'linear-gradient(90deg,#8b5cf6,#a78bfa)',
                  boxShadow: isActive ? '0 0 8px rgba(139,92,246,0.8)' : 'none',
                  transition: 'width 0.3s cubic-bezier(.4,0,.2,1)',
                }}/>
              </div>
            )
          })}
        </div>

        {/* ── Right side ── */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>

          {/* CV pill button */}
          <div
            onClick={() => {
              const link = document.createElement('a')
              link.href = "/lulakshi's cv .pdf"
              link.download = 'Lulakshi_CV.pdf'
              link.click()
            }}
            className="cv-btn"
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              background: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
              color: 'white', padding: '8px 18px',
              borderRadius: '50px', cursor: 'pointer',
              fontSize: '13px', fontWeight: '700',
              boxShadow: '0 4px 14px rgba(139,92,246,0.4)',
              transition: 'all 0.2s ease',
              userSelect: 'none' as const,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            CV
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: '38px', height: '38px', borderRadius: '50%',
              border: `1px solid ${dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'}`,
              background: dark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1"  x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1"  y1="12" x2="3"  y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
                <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <style>{`
        .nav-item:hover { color: ${dark ? '#ffffff' : '#1e1b4b'} !important; }
        .nav-item:hover span { width: 40% !important; }
        .cv-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(139,92,246,0.55) !important;
        }
        .nav-logo:hover {
          filter: drop-shadow(0 0 14px rgba(139,92,246,0.9)) !important;
        }
      `}</style>
    </>
  )
}

export default Navbar
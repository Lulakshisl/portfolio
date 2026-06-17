import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const items = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const { dark, toggle } = useContext(ThemeContext)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const textColor = dark ? '#94a3b8' : '#6b5b95'
  const activeColor = dark ? '#a78bfa' : '#7c3aed'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '18px 6%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? (dark ? 'rgba(7,7,15,0.95)' : 'rgba(248,247,255,0.95)') : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${dark ? 'rgba(139,92,246,0.15)' : 'rgba(124,58,237,0.1)'}` : 'none',
      transition: 'all 0.4s'
    }}>
      <div style={{ fontWeight: 900, fontSize: '22px' }}>
        <span style={{ color: dark ? 'white' : '#1e1b4b' }}>LUSHI</span>
        <span style={{ color: '#8b5cf6' }}>.</span>
        <span style={{ color: '#a78bfa' }}>DEV</span>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {items.map(item => (
          <a key={item} href={'#' + item.toLowerCase()} onClick={() => setActive(item)}
            style={{
              color: active === item ? activeColor : textColor,
              textDecoration: 'none', fontWeight: 600, fontSize: '14px',
              borderBottom: active === item ? '2px solid #8b5cf6' : '2px solid transparent',
              paddingBottom: '2px', transition: 'all 0.2s'
            }}>
            {item}
          </a>
        ))}

        <button onClick={toggle} aria-label="Toggle theme" style={{
          width: '42px', height: '42px', borderRadius: '50%',
          border: `1px solid ${dark ? 'rgba(139,92,246,0.3)' : 'rgba(124,58,237,0.25)'}`,
          background: dark ? 'rgba(139,92,246,0.08)' : 'rgba(124,58,237,0.06)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="1">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
